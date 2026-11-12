import { simulate } from "lib/vision"
import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"
import chroma from "chroma-js"
import ntc from "ntc"
import { adjust, contrastRatio, wcagLevels, isLightColor, randomHex, normalizeHex, parsePalette, hexToRgb, rgbToHsl, rgbToHsb, rgbToCmyk, rgbToLab } from "lib/color"
import {
  cssVariables, tailwindConfig, svgMarkup, shareUrl,
  scss, less, json, jsArray, embedHtml, aseFile
} from "lib/exports"

export default class extends Controller {
  static targets = [
    "container", "column", "hexCode", "colorName", "unlockedIcon", "lockedIcon",
    "shadesModal", "shadesContainer", "methodSelect", "status",
    "exportModal", "exportBackdrop", "exportContent",
    "exportTitle", "exportNames", "exportFormat",
    "colorInfoDialog", "colorInfoValue", "colorInfoStatus", "colorInfoPreview",
    "contrastDialog", "contrastTable", "visionSelect",
    "adjustDialog", "adjustSlider", "adjustValue",
    "importDialog", "importText", "importStatus"
  ]
  static values = {
    method: { type: String, default: 'auto' },
    vision: { type: String, default: 'normal' },
    initialColors: { type: Array, default: [] },
    savedPatterns: { type: Array, default: [] }
  }

  connect() {
    this.history = []
    this.pointer = -1

    // Preserve a screen-height generator while allowing the footer below it.
    const navigation = document.querySelector("body > nav")
    if (navigation) {
      const fitNavigation = () => { this.element.style.setProperty("--navigation-height", `${navigation.getBoundingClientRect().height}px`) }
      fitNavigation()
      this.navigationObserver = new ResizeObserver(fitNavigation)
      this.navigationObserver.observe(navigation)
    }

    if (this.hasContainerTarget) {
      this.initSortable()
    }

    if (this.initialColorsValue && this.initialColorsValue.length > 0) {
      this.loadInitialColors()
    } else {
      this.generate()
    }
    this.updateSaveButtonState()
  }

  disconnect() {
    this.navigationObserver?.disconnect()
  }

  loadInitialColors() {
    const paletteCols = []

    // Clear existing columns except 2 templates if needed
    while (this.columnTargets.length < this.initialColorsValue.length) {
      const template = document.getElementById('column-template')
      this.containerTarget.appendChild(template.content.cloneNode(true))
    }
    while (this.columnTargets.length > this.initialColorsValue.length) {
      this.columnTargets[this.columnTargets.length - 1].remove()
    }

    setTimeout(() => {
      this.initialColorsValue.forEach((hex, index) => {
        const column = this.columnTargets[index]
        if (!column) return

        const computedTextColor = isLightColor(hex) ? '#000000' : '#FFFFFF'

        this.setHexInColumn(column, hex)
        this.setColorNameInColumn(column, hex)

        paletteCols.push({
          hex: hex,
          locked: false,
          textColor: computedTextColor
        })
      })
      this.saveSnapshot(paletteCols)
    }, 10)
  }

  initSortable() {
    Sortable.create(this.containerTarget, {
      animation: 150,
      handle: '.js-drag-handle',
      onEnd: () => {
        this.saveCurrentStateToSnapshot()
      }
    })
  }

  handleKeydown(event) {
    if (this.hasExportModalTarget && this.exportModalTarget.open) return
    if (this.hasShadesModalTarget && this.shadesModalTargets.some(dialog => dialog.open)) return
    if (this.hasImportDialogTarget && this.importDialogTarget.open) return
    if (this.hasColorInfoDialogTarget && this.colorInfoDialogTarget.open) return
    if (this.hasContrastDialogTarget && this.contrastDialogTarget.open) return
    if (this.hasAdjustDialogTarget && this.adjustDialogTarget.open) return

    if ((event.metaKey || event.ctrlKey) && !event.shiftKey && event.key === 'z') {
      event.preventDefault()
      this.undo()
      return
    }

    if (((event.metaKey || event.ctrlKey) && event.shiftKey && event.key === 'z') ||
      ((event.metaKey || event.ctrlKey) && event.key === 'y')) {
      event.preventDefault()
      this.redo()
      return
    }

    if (event.target?.closest("input, select, textarea, button, a, [contenteditable]")) return

    if (event.code === "Space") {
      event.preventDefault()
      this.generate()
    }
  }

  trapDialogFocus(event) {
    if (event.key !== "Tab") return
    const controls = [...event.currentTarget.querySelectorAll('button, input, select, textarea, a[href], [tabindex="0"]')]
      .filter(control => !control.disabled && control.checkVisibility())
    const edge = event.shiftKey ? controls[0] : controls.at(-1)
    if (document.activeElement === edge) {
      event.preventDefault()
      const next = event.shiftKey ? controls.at(-1) : controls[0]
      next?.focus()
    }
  }

  reorderColor(event) {
    const direction = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[event.key]
    if (!direction) return
    event.preventDefault()
    const column = event.currentTarget.closest('[data-palette-target="column"]')
    const sibling = direction < 0 ? column.previousElementSibling : column.nextElementSibling
    if (!sibling) return
    if (direction < 0) sibling.before(column)
    else sibling.after(column)
    event.currentTarget.focus()
    this.saveCurrentStateToSnapshot()
    this.statusTarget.textContent = `${column.ariaLabel} moved to position ${[...this.containerTarget.children].indexOf(column) + 1}.`
  }

  changeMethod(event) {
    this.methodValue = event.target.value
  }

  openImport() {
    this.importTextTarget.value = ""
    this.clearImportError()
    this.importDialogTarget.showModal()
    this.importTextTarget.focus()
  }

  closeImport() {
    this.importDialogTarget.close()
  }

  clearImportError() {
    this.importTextTarget.removeAttribute("aria-invalid")
    this.importStatusTarget.textContent = ""
  }

  importPalette(event) {
    event.preventDefault()
    const colors = parsePalette(this.importTextTarget.value)
    if (colors.length < 2) {
      this.importTextTarget.setAttribute("aria-invalid", "true")
      this.importStatusTarget.textContent = "Enter at least two hex colors."
      this.importTextTarget.focus()
      return
    }
    window.location.assign(shareUrl(window.location.origin, colors))
  }

  methodValueChanged() {
    if (this.hasMethodSelectTarget) {
      this.methodSelectTargets.forEach(select => {
        select.value = this.methodValue
      })
    }
  }

  generate() {
    const paletteCols = []
    const unlockedColumns = []
    const lockedColumns = []

    this.columnTargets.forEach((column) => {
      if (column.dataset.locked === 'true') {
        lockedColumns.push(column)
      } else {
        unlockedColumns.push(column)
      }
    })

    if (unlockedColumns.length === 0) {
      this.saveCurrentStateToSnapshot()
      return
    }

    const hasLocked = lockedColumns.length > 0
    let baseHex = hasLocked ? this.getHexFromColumn(lockedColumns[0]) : randomHex()

    let newColors = []
    if (this.methodValue === 'auto') {
      for (let i = 0; i < unlockedColumns.length; i++) {
        newColors.push(randomHex())
      }
    } else {
      newColors = this.generateColorsForMethod(baseHex, unlockedColumns.length, this.methodValue, !hasLocked)
      if (!hasLocked && unlockedColumns.length > 0) {
        newColors[0] = baseHex
      }
    }

    let nextColorIndex = 0

    this.columnTargets.forEach((column) => {
      const isLocked = column.dataset.locked === 'true'
      let hex = this.getHexFromColumn(column)

      if (!isLocked) {
        hex = newColors[nextColorIndex].toUpperCase()
        nextColorIndex++

        this.setHexInColumn(column, hex)
        this.setColorNameInColumn(column, hex)
      }

      paletteCols.push({
        hex: hex,
        locked: isLocked,
        textColor: column.style.color
      })
    })

    this.saveSnapshot(paletteCols)
    this.updateSaveButtonState()
  }

  saveCurrentStateToSnapshot() {
    const paletteCols = this.columnTargets.map((column) => {
      return {
        hex: this.getHexFromColumn(column),
        locked: column.dataset.locked === 'true',
        textColor: column.style.color
      }
    })
    this.saveSnapshot(paletteCols)
    this.updateSaveButtonState()
  }

  saveSnapshot(paletteCols) {
    if (this.pointer < this.history.length - 1) {
      this.history = this.history.slice(0, this.pointer + 1)
    }

    this.history.push(paletteCols)
    this.pointer++
  }

  undo() {
    if (this.pointer > 0) {
      this.pointer--
      this.applySnapshot(this.history[this.pointer])
    }
  }

  redo() {
    if (this.pointer < this.history.length - 1) {
      this.pointer++
      this.applySnapshot(this.history[this.pointer])
    }
  }

  applySnapshot(paletteCols) {
    // Sync DOM column count
    while (this.columnTargets.length < paletteCols.length) {
      const template = document.getElementById('column-template')
      this.containerTarget.appendChild(template.content.cloneNode(true))
    }
    while (this.columnTargets.length > paletteCols.length) {
      this.columnTargets[this.columnTargets.length - 1].remove()
    }

    // Delay slightly to ensure Stimulus updates columnTargets
    setTimeout(() => {
      paletteCols.forEach((colState, index) => {
        const column = this.columnTargets[index]
        if (!column) return

        this.setHexInColumn(column, colState.hex)
        this.setColorNameInColumn(column, colState.hex)

        column.dataset.locked = colState.locked
        column.querySelector('[data-action="click->palette#toggleLock"]').ariaPressed = String(colState.locked)

        const unlocked = column.querySelector('[data-palette-target="unlockedIcon"]')
        const locked = column.querySelector('[data-palette-target="lockedIcon"]')
        if (unlocked && locked) {
          unlocked.classList.toggle('hidden', colState.locked)
          locked.classList.toggle('hidden', !colState.locked)
        }
      })
      this.updateSaveButtonState()
    }, 0)
  }

  addColumn(event) {
    if (this.columnTargets.length >= 10) {
      alert("Maximum of 10 colors allowed.")
      return
    }

    const template = document.getElementById('column-template')
    const clone = template.content.cloneNode(true)

    const currentColumn = event.currentTarget.closest('[data-palette-target="column"]')
    currentColumn.after(clone)

    const newColumn = currentColumn.nextElementSibling
    const newHex = randomHex()
    this.setHexInColumn(newColumn, newHex)
    this.setColorNameInColumn(newColumn, newHex)

    newColumn.querySelector('[data-palette-target="hexCode"]').focus()
    setTimeout(() => this.saveCurrentStateToSnapshot(), 10)
  }

  removeColumn(event) {
    if (this.columnTargets.length <= 2) {
      alert("Minimum of 2 colors required.")
      return
    }

    const column = event.currentTarget.closest('[data-palette-target="column"]')
    const next = column.nextElementSibling || column.previousElementSibling
    const action = event.currentTarget.dataset.action
    column.remove()
    const nextButton = [...next.querySelectorAll("button")].find(button => button.dataset.action === action && button.checkVisibility())
    nextButton?.focus()

    setTimeout(() => this.saveCurrentStateToSnapshot(), 10)
  }

  openColorPicker(event) {
    const column = event.currentTarget.closest('[data-palette-target="column"]')
    if (!column) return

    const colorInput = column.querySelector('input[type="color"]')
    if (colorInput) {
      colorInput.click()
    }
  }

  updateColorFromPicker(event) {
    const input = event.target
    const hex = input.value.toUpperCase()
    const column = input.closest('[data-palette-target="column"]')
    this.setHexInColumn(column, hex)
    this.setColorNameInColumn(column, hex)
  }

  saveColorFromPicker(event) {
    this.saveCurrentStateToSnapshot()
  }

  toggleLock(event) {
    const column = event.currentTarget.closest('[data-palette-target="column"]')

    const currentlyLocked = column.dataset.locked === 'true'
    column.dataset.locked = !currentlyLocked
    event.currentTarget.ariaPressed = String(!currentlyLocked)

    const unlocked = column.querySelector('[data-palette-target="unlockedIcon"]')
    const locked = column.querySelector('[data-palette-target="lockedIcon"]')
    if (unlocked && locked) {
      unlocked.classList.toggle('hidden', !currentlyLocked)
      locked.classList.toggle('hidden', currentlyLocked)
    }

    this.saveCurrentStateToSnapshot()
  }

  copyHex(event) {
    const column = event.currentTarget.closest('[data-palette-target="column"]')
    if (!column) return

    const hexContainer = column.querySelector('[data-palette-target="hexCode"]')
    if (!hexContainer) return

    const hex = this.getHexFromColumn(column)

    navigator.clipboard.writeText(hex).then(() => {
      hexContainer.classList.add('copied')
      setTimeout(() => {
        hexContainer.classList.remove('copied')
      }, 1500)
    })
  }

  openColorInfo(event) {
    const column = event.currentTarget.closest('[data-palette-target="column"]')
    const hex = normalizeHex(this.getHexFromColumn(column))
    const { r, g, b } = hexToRgb(hex)
    const hsl = rgbToHsl(r, g, b)
    const hsb = rgbToHsb(r, g, b)
    const cmyk = rgbToCmyk(r, g, b)
    const lab = rgbToLab(r, g, b)
    const values = {
      HEX: hex.toUpperCase(),
      RGB: `rgb(${r}, ${g}, ${b})`,
      HSL: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      HSB: `${hsb.h}°, ${hsb.s}%, ${hsb.b}%`,
      CMYK: `${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`,
      LAB: `${lab.l}, ${lab.a}, ${lab.b}`,
      Name: ntc.name(hex)[1]
    }

    this.colorInfoValueTargets.forEach(row => {
      row.textContent = values[row.dataset.format]
    })
    this.colorInfoPreviewTarget.style.backgroundColor = hex
    this.colorInfoStatusTarget.textContent = ""
    this.colorInfoDialogTarget.showModal()
  }

  closeColorInfoOnBackdrop(event) {
    if (event.target === this.colorInfoDialogTarget) this.colorInfoDialogTarget.close()
  }

  async copyColorInfo(event) {
    const row = event.currentTarget.closest('div').querySelector('[data-palette-target="colorInfoValue"]')
    try {
      await navigator.clipboard.writeText(row.textContent)
      this.colorInfoStatusTarget.textContent = `${row.dataset.format} copied!`
    } catch {
      this.colorInfoStatusTarget.textContent = "Copy failed. Select the value to copy it."
    }
  }

  save(event) {
    if (event) event.currentTarget.blur()

    const hexCodes = this.columnTargets.map(col => this.getHexFromColumn(col))
    const btn = event.currentTarget
    const span = btn.querySelector('span')
    const originalText = span ? span.innerText : null
    const svg = btn.querySelector('svg')

    fetch('/palettes', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        palette: {
          name: `Palette #${Math.floor(Math.random() * 9000) + 1000}`,
          hex_codes: hexCodes
        }
      })
    })
      .then(response => {
        if (response.ok) {
          const currentPattern = hexCodes.map(h => h.replace('#', '').toUpperCase()).join('-')
          const patterns = this.savedPatternsValue
          if (!patterns.includes(currentPattern)) {
            this.savedPatternsValue = [...patterns, currentPattern]
          }
          this.updateSaveButtonState()

          const toast = document.createElement('div')
          toast.className = 'fixed top-0 left-0 right-0 z-[100] bg-black text-white px-4 py-3 text-center text-sm font-medium transition-transform duration-300 -translate-y-full'
          toast.innerText = 'Your palette is now saved in your dashboard'
          document.body.appendChild(toast)

          // Clear any existing reset timeout since it was manually changed
          if (this.resetSaveButtonTimeout) {
            clearTimeout(this.resetSaveButtonTimeout)
          }

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              toast.classList.remove('-translate-y-full')
              toast.classList.add('translate-y-0')
            })
          })

          setTimeout(() => {
            toast.classList.remove('translate-y-0')
            toast.classList.add('-translate-y-full')
            setTimeout(() => toast.remove(), 300)
          }, 3000)
        } else if (response.status === 401) {
          alert("Please sign in to save palettes.")
        } else {
          alert("Failed to save palette.")
        }
      })
      .catch(err => {
        console.error("Error saving palette", err)
        alert("Network error: Failed to save palette.")
      })
  }

  updateSaveButtonState() {
    const currentPattern = this.columnTargets.map(col => this.getHexFromColumn(col).replace('#', '').toUpperCase()).join('-')
    const isSaved = this.savedPatternsValue.includes(currentPattern)

    const saveBtns = document.querySelectorAll('[data-action="click->palette#save"]')
    saveBtns.forEach(btn => {
      const span = btn.querySelector('span')
      const svg = btn.querySelector('svg')

      if (isSaved) {
        if (span) span.innerText = "Saved!"
        if (svg) {
          svg.classList.replace('text-neutral-300', 'text-red-500')
          svg.classList.replace('text-white', 'text-red-500')
        }
      } else {
        if (span) span.innerText = "Save"
        if (svg && svg.classList.contains('text-red-500')) {
          svg.classList.remove('text-red-500', 'text-red-100')
          if (btn.classList.contains('group') && btn.innerText.includes('Save')) {
            svg.classList.add('text-neutral-300')
          } else {
            svg.classList.add('text-white')
          }
        }
      }
    })
  }

  viewShades(event) {
    const column = event.currentTarget.closest('[data-palette-target="column"]')
    const hex = this.getHexFromColumn(column)

    // Generate 25 shades using chroma from white -> base -> black
    const scale = chroma.scale(['#ffffff', hex, '#000000']).domain([0, 0.5, 1]).mode('lrgb').colors(25)

    const shadesContainer = column.querySelector('[data-palette-target="shadesContainer"]')
    shadesContainer.innerHTML = ''

    scale.forEach(shadeHex => {
      const isLight = contrastRatio(shadeHex, '#000000') >= contrastRatio(shadeHex, '#ffffff')
      const textColor = isLight ? '#000000' : '#ffffff'

      const btn = document.createElement('button')
      btn.className = 'flex-1 min-h-6 w-full flex items-center justify-center transition-transform hover:z-10 group/shade border-none m-0 p-0 shadow-none'
      btn.style.backgroundColor = shadeHex
      btn.style.color = textColor
      btn.dataset.action = 'click->palette#selectShade'
      btn.dataset.hex = shadeHex.toUpperCase()
      btn.ariaLabel = `Select ${shadeHex.toUpperCase()}`

      btn.innerHTML = `<span class="opacity-0 group-hover/shade:opacity-100 group-focus-visible/shade:opacity-100 font-mono text-xs font-semibold tracking-wider pointer-events-none">${shadeHex.toUpperCase()}</span>`

      shadesContainer.appendChild(btn)
    })

    const modal = column.querySelector('[data-palette-target="shadesModal"]')
    modal.showModal()
    this.fitShades()
  }

  fitShades() {
    this.shadesModalTargets.filter(dialog => dialog.open).forEach(dialog => {
      const bounds = dialog.closest('[data-palette-target="column"]').getBoundingClientRect()
      const width = Math.min(bounds.width, window.innerWidth)
      const height = Math.min(bounds.height, window.innerHeight)
      Object.assign(dialog.style, {
        left: `${Math.max(0, Math.min(bounds.left, window.innerWidth - width))}px`,
        top: `${Math.max(0, Math.min(bounds.top, window.innerHeight - height))}px`,
        width: `${width}px`, height: `${height}px`
      })
    })
  }

  closeShades(event) {
    event.currentTarget.closest('[data-palette-target="shadesModal"]').close()
  }

  selectShade(event) {
    const shadeBtn = event.currentTarget
    const hex = shadeBtn.dataset.hex

    const column = shadeBtn.closest('[data-palette-target="column"]')
    this.setHexInColumn(column, hex)
    this.setColorNameInColumn(column, hex)

    this.saveCurrentStateToSnapshot()
    this.closeShades({ currentTarget: shadeBtn })
  }

  openAdjust() {
    if (this.adjustDialogTarget.open) return
    this.adjustOriginal = this.columnTargets.map(column => ({
      column,
      hex: this.getHexFromColumn(column),
      locked: column.dataset.locked === 'true'
    }))
    this.adjustSliderTargets.forEach(slider => { slider.value = 0 })
    this.updateAdjustValues()
    this.adjustDialogTarget.showModal()
  }

  updateAdjustValues() {
    const values = Object.fromEntries(this.adjustSliderTargets.map(slider => [slider.dataset.adjustment, Number(slider.value)]))
    this.adjustValueTargets.forEach(output => {
      const value = values[output.dataset.adjustment]
      const unit = output.dataset.adjustment === 'hue' ? '°' : ''
      output.textContent = `${value > 0 ? '+' : ''}${value}${unit}`
    })
    return values
  }

  previewAdjust() {
    if (!this.adjustOriginal) return
    const values = this.updateAdjustValues()
    this.adjustOriginal.forEach(({ column, hex, locked }) => {
      if (locked) return
      // Always start from the original so dragging back to zero restores it exactly.
      const adjusted = adjust(hex, values).toUpperCase()
      this.setHexInColumn(column, adjusted)
      this.setColorNameInColumn(column, adjusted)
    })
  }

  applyAdjust() {
    if (!this.adjustOriginal) return
    const changed = this.adjustOriginal.some(({ column, hex }) =>
      normalizeHex(this.getHexFromColumn(column)) !== normalizeHex(hex))
    if (changed) this.saveCurrentStateToSnapshot()
    this.adjustOriginal = null
    this.adjustDialogTarget.close()
  }

  cancelAdjust(event) {
    if (event?.type === 'cancel') event.preventDefault()
    this.adjustOriginal?.forEach(({ column, hex, locked }) => {
      if (locked) return
      this.setHexInColumn(column, hex)
      this.setColorNameInColumn(column, hex)
    })
    this.adjustOriginal = null
    if (this.adjustDialogTarget.open) this.adjustDialogTarget.close()
  }

  visualize() {
    window.location.assign(`/visualize/${this.getExportHexes().map(hex => normalizeHex(hex).slice(1)).join("-")}`)
  }

  openContrast() {
    const colors = this.getExportHexes().map(normalizeHex)
    const headers = colors.map(color => `
      <th scope="col" class="p-3 font-mono text-xs whitespace-nowrap">
        <span aria-hidden="true" class="inline-block w-3 h-3 rounded-full border border-neutral-200 mr-1" style="background-color: ${color}"></span>${color.toUpperCase()}
      </th>`).join('')
    const rows = colors.map(text => `<tr>
      <th scope="row" class="sticky left-0 bg-white dark:bg-neutral-900 p-3 font-mono text-xs whitespace-nowrap border-t border-neutral-200 dark:border-neutral-700">
        <span aria-hidden="true" class="inline-block w-3 h-3 rounded-full border border-neutral-200 mr-1" style="background-color: ${text}"></span>${text.toUpperCase()}
      </th>
      ${colors.map(background => {
        const ratio = contrastRatio(text, background)
        const levels = wcagLevels(ratio)
        const level = levels.aaa ? '✓ AAA' : levels.aa ? '✓ AA' : '× Fail'
        return `<td class="p-3 text-center border-t border-neutral-200 dark:border-neutral-700 min-w-28">
          <div aria-hidden="true" class="rounded-lg p-3 text-xl font-bold mb-2" style="color: ${text}; background-color: ${background}">Aa</div>
          <div class="font-mono text-sm">${ratio.toFixed(2)}:1</div>
          <div class="text-xs font-bold mt-1 whitespace-nowrap">${level}</div>
        </td>`
      }).join('')}
    </tr>`).join('')
    this.contrastTableTarget.innerHTML = `
      <caption class="sr-only">WCAG levels for normal text. Rows are text colors; columns are backgrounds.</caption>
      <thead><tr><th class="sticky left-0 bg-white dark:bg-neutral-900 p-3 text-xs whitespace-nowrap">Text ↓ / Background →</th>${headers}</tr></thead>
      <tbody>${rows}</tbody>`
    this.contrastDialogTarget.showModal()
  }

  // --- Export UI ---

  openExportModal(event) {
    this.exportTrigger = event?.currentTarget
    if (event) event.currentTarget.blur()
    const modal = this.exportModalTarget
    const backdrop = this.exportBackdropTarget
    const content = this.exportContentTarget

    modal.classList.remove('hidden')
    modal.showModal()

    // Force a reflow
    void modal.offsetWidth

    backdrop.classList.remove('opacity-0')
    backdrop.classList.add('opacity-100')

    content.classList.remove('opacity-0', 'scale-95')
    content.classList.add('opacity-100', 'scale-100')
    this.exportTitleTarget.focus()
  }

  closeExportModal(event) {
    event?.preventDefault()
    if (event) event.currentTarget.blur()
    const modal = this.exportModalTarget
    const backdrop = this.exportBackdropTarget
    const content = this.exportContentTarget

    backdrop.classList.remove('opacity-100')
    backdrop.classList.add('opacity-0')

    content.classList.remove('opacity-100', 'scale-100')
    content.classList.add('opacity-0', 'scale-95')

    setTimeout(() => {
      modal.close()
      modal.classList.add('hidden')
      this.exportTrigger?.focus()
    }, 300)
  }

  // --- Export Generators ---

  getExportHexes() {
    return this.columnTargets.map(col => this.getHexFromColumn(col))
  }

  getExportNames() {
    return this.columnTargets.map(col => {
      const nameNode = col.querySelector('[data-palette-target="colorName"]')
      return nameNode ? nameNode.textContent.trim() : ''
    })
  }

  async generateCanvas() {
    // Use scale multiplier for higher resolution/sharpness
    const scale = 2
    const canvas = document.createElement('canvas')
    canvas.width = 1200 * scale
    canvas.height = 800 * scale
    const ctx = canvas.getContext('2d')

    // Scale all native drawing operations up by multiplier
    ctx.scale(scale, scale)

    // Fill white background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, 1200, 800)

    // Draw header border
    ctx.fillStyle = '#f5f5f5'
    ctx.fillRect(0, 94, 1200, 2)

    // Draw header text (Logo)
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.font = 'bold 36px sans-serif'
    
    // 1. Draw "palette" in black
    ctx.fillStyle = '#000000'
    ctx.fillText('palette', 48, 48)
    
    // 2. Measure "palette" width to position "WOW"
    const paletteWidth = ctx.measureText('palette').width
    
    // 3. Draw "WOW" with gradient
    const wowText = 'WOW'
    const wowWidth = ctx.measureText(wowText).width
    const gradient = ctx.createLinearGradient(48 + paletteWidth, 0, 48 + paletteWidth + wowWidth, 0)
    gradient.addColorStop(0, '#4F46E5')
    gradient.addColorStop(1, '#EC4899')
    ctx.fillStyle = gradient
    ctx.font = '900 36px sans-serif' // Make WOW extra bold
    ctx.fillText(wowText, 48 + paletteWidth, 48)

    // Draw PALETTE WOW title on the right
    ctx.fillStyle = '#a3a3a3'
    ctx.font = 'bold 20px sans-serif'
    ctx.textAlign = 'right'
    const title = this.exportTitleTarget.value.trim()
    let titleSize = 20
    while (ctx.measureText(title).width > 760 && titleSize > 10) {
      ctx.font = `bold ${--titleSize}px sans-serif`
    }
    ctx.fillText(title, 1152, 48, 760)

    // Draw columns
    const hexes = this.getExportHexes()
    const colWidth = 1200 / hexes.length
    const names = this.getExportNames()
    const formats = new Set(this.exportFormatTargets.filter(input => input.checked).map(input => input.value))

    hexes.forEach((hex, i) => {
      // Column background
      ctx.fillStyle = hex
      ctx.fillRect(i * colWidth, 96, colWidth, 704)

      const lines = []
      if (this.exportNamesTarget.checked && names[i]) lines.push(names[i])
      const { r, g, b } = hexToRgb(hex)
      if (formats.has("HEX")) lines.push(hex.toUpperCase())
      if (formats.has("RGB")) lines.push(`RGB ${r}, ${g}, ${b}`)
      if (formats.has("HSL")) {
        const { h, s, l } = rgbToHsl(r, g, b)
        lines.push(`HSL ${h}°, ${s}%, ${l}%`)
      }
      if (formats.has("CMYK")) {
        const { c, m, y, k } = rgbToCmyk(r, g, b)
        lines.push(`CMYK ${c}%, ${m}%, ${y}%, ${k}%`)
      }
      ctx.fillStyle = isLightColor(hex) ? '#000000' : '#ffffff'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      lines.forEach((line, index) => {
        let size = 24
        ctx.font = `bold ${size}px sans-serif`
        while (ctx.measureText(line).width > colWidth - 20 && size > 9) {
          ctx.font = `bold ${--size}px sans-serif`
        }
        ctx.fillText(line, i * colWidth + colWidth / 2, 752 - (lines.length - 1 - index) * 30, colWidth - 20)
      })
    })

    return canvas
  }

  async exportImage(event) {
    event.currentTarget.blur()
    try {
      const canvas = await this.generateCanvas()
      const image = canvas.toDataURL("image/png")
      const link = document.createElement('a')
      link.href = image
      link.download = `paletteWOW-${Date.now()}.png`
      link.click()
    } catch (err) {
      console.error("Export PNG failed:", err)
      alert("Failed to export PNG.")
    } finally {
      this.closeExportModal()
    }
  }

  async exportPdf(event) {
    event.currentTarget.blur()
    try {
      const canvas = await this.generateCanvas()
      const image = canvas.toDataURL("image/png")

      // A4 Landscape is roughly 297x210mm
      const { jsPDF } = window.jspdf
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [300, 200]
      })

      pdf.addImage(image, 'PNG', 0, 0, 300, 200)
      pdf.save(`paletteWOW-${Date.now()}.pdf`)
    } catch (err) {
      console.error("Export PDF failed:", err)
      alert("Failed to export PDF.")
    } finally {
      this.closeExportModal()
    }
  }

  copyUrl(event) {
    event.currentTarget.blur()
    const url = shareUrl(window.location.origin, this.getExportHexes())

    navigator.clipboard.writeText(url).then(() => {
      alert("URL copied to clipboard!")
    })
  }

  copySvg(event) {
    event.currentTarget.blur()
    const svg = svgMarkup(this.getExportHexes())

    navigator.clipboard.writeText(svg).then(() => {
      alert("SVG copied to clipboard!")
    })
  }

  copyCss(event) {
    event.currentTarget.blur()
    const css = cssVariables(this.getExportHexes())

    navigator.clipboard.writeText(css).then(() => {
      alert("CSS copied to clipboard!")
    })
  }

  copyTailwind(event) {
    event.currentTarget.blur()
    const tw = tailwindConfig(this.getExportHexes())

    navigator.clipboard.writeText(tw).then(() => {
      alert("Tailwind config copied to clipboard!")
    })
  }

  exportAse(event) {
    event.currentTarget.blur()
    try {
      const bytes = aseFile(this.getExportHexes(), this.getExportNames())
      const blob = new Blob([bytes], { type: 'application/octet-stream' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `paletteWOW-${Date.now()}.ase`
      link.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error("Export ASE failed:", err)
      alert("Failed to export ASE.")
    } finally {
      this.closeExportModal()
    }
  }

  copyScss(event) {
    this.copyExport(event, scss(this.getExportHexes(), this.getExportNames()), "SCSS copied to clipboard!")
  }

  copyLess(event) {
    this.copyExport(event, less(this.getExportHexes(), this.getExportNames()), "LESS copied to clipboard!")
  }

  copyJson(event) {
    this.copyExport(event, json(this.getExportHexes(), this.getExportNames()), "JSON copied to clipboard!")
  }

  copyJsArray(event) {
    this.copyExport(event, jsArray(this.getExportHexes()), "JavaScript array copied to clipboard!")
  }

  copyEmbedHtml(event) {
    this.copyExport(event, embedHtml(this.getExportHexes(), this.getExportNames()), "Embed code copied to clipboard!")
  }

  copyExport(event, text, message) {
    event.currentTarget.blur()
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(message)
      })
      .catch(err => {
        console.error("Copy failed:", err)
        alert("Failed to copy to clipboard.")
      })
  }

  // --- Utility functions ---

  generateColorsForMethod(baseHex, requiredCount, method, includeBaseAsFirst) {
    const baseColor = chroma(baseHex)
    let baseH = baseColor.get('hsl.h')
    let baseS = baseColor.get('hsl.s')
    let baseL = baseColor.get('hsl.l')

    if (isNaN(baseH)) baseH = Math.random() * 360
    if (isNaN(baseS)) baseS = Math.random()

    let hues = [baseH]
    switch (method) {
      case 'monochromatic':
        hues = [baseH]
        break
      case 'analogous':
        hues = [baseH, (baseH + 30) % 360, (baseH + 60) % 360, (baseH - 30 + 360) % 360, (baseH - 60 + 360) % 360]
        break
      case 'complementary':
        hues = [baseH, (baseH + 180) % 360]
        break
      case 'split_complementary':
        hues = [baseH, (baseH + 150) % 360, (baseH + 210) % 360]
        break
      case 'triadic':
        hues = [baseH, (baseH + 120) % 360, (baseH + 240) % 360]
        break
      case 'tetradic':
      case 'square':
        hues = [baseH, (baseH + 90) % 360, (baseH + 180) % 360, (baseH + 270) % 360]
        break
      default:
        hues = [baseH]
    }

    const newColors = []
    let hueIndex = includeBaseAsFirst ? 0 : (hues.length > 1 ? 1 : 0)

    for (let i = 0; i < requiredCount; i++) {
      const currentHue = hues[hueIndex % hues.length]

      let s = baseS
      let l = baseL

      if (method === 'monochromatic') {
        s = Math.min(1, Math.max(0, baseS + (Math.random() * 0.6 - 0.3)))
        l = Math.min(0.9, Math.max(0.1, Math.random() * 0.8 + 0.1))
      } else {
        s = Math.min(1, Math.max(0, baseS + (Math.random() * 0.3 - 0.15)))
        l = Math.min(0.85, Math.max(0.15, baseL + (Math.random() * 0.4 - 0.2)))
      }

      newColors.push(chroma.hsl(currentHue, s, l).hex())
      hueIndex++
    }

    return newColors
  }

  getHexFromColumn(column) {
    const span = column.querySelector('[data-palette-target="hexCode"] span.inline-block')
    if (span) return span.textContent.trim()
    const hexNode = column.querySelector('[data-palette-target="hexCode"]')
    return hexNode ? hexNode.textContent.trim().split(' ')[0] : '#FFFFFF'
  }

  changeVision(event) {
    this.visionValue = event.target.value
  }

  visionValueChanged() {
    this.visionSelectTargets.forEach(select => { select.value = this.visionValue })
    this.columnTargets.forEach(column => this.paintColumn(column, this.getHexFromColumn(column)))
  }

  paintColumn(column, hex) {
    const displayed = simulate(hex, this.visionValue)
    column.style.backgroundColor = displayed
    column.style.color = contrastRatio(displayed, '#000000') >= contrastRatio(displayed, '#ffffff') ? '#000000' : '#FFFFFF'
  }

  setHexInColumn(column, hex) {
    this.paintColumn(column, hex)
    const span = column.querySelector('[data-palette-target="hexCode"] span.inline-block')
    if (span) {
      span.textContent = hex
    } else {
      const hexNode = column.querySelector('[data-palette-target="hexCode"]')
      if (hexNode) hexNode.textContent = hex
    }
    const colorInput = column.querySelector('input[type="color"]')
    if (colorInput) {
      // Input type="color" requires exactly 7 chars: #RRGGBB
      let formattedHex = hex
      if (!formattedHex.startsWith('#')) formattedHex = '#' + formattedHex
      if (formattedHex.length === 4) {
        formattedHex = '#' + formattedHex[1] + formattedHex[1] + formattedHex[2] + formattedHex[2] + formattedHex[3] + formattedHex[3]
      }
      colorInput.value = formattedHex
    }
  }

  setColorNameInColumn(column, hex) {
    const nameNode = column.querySelector('[data-palette-target="colorName"]')
    if (nameNode) {
      const match = ntc.name(hex)
      nameNode.textContent = match ? match[1] : ''
      nameNode.href = `/color/${normalizeHex(hex).slice(1)}`
      const label = `${normalizeHex(hex).toUpperCase()} ${nameNode.textContent}`
      column.ariaLabel = label
      column.querySelector('[data-palette-target="hexCode"]').ariaLabel = `Edit ${label}`
      column.querySelector('input[type="color"]').ariaLabel = `Color picker ${label}`
    }
  }
}
