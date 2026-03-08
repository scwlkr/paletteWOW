import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"
import chroma from "chroma-js"
import ntc from "ntc"

export default class extends Controller {
  static targets = [
    "container", "column", "hexCode", "colorName", "unlockedIcon", "lockedIcon",
    "shadesModal", "shadesContainer", "methodSelect",
    "exportModal", "exportBackdrop", "exportContent",
    "exportColumnsContainer", "exportTitle"
  ]
  static values = {
    method: { type: String, default: 'auto' },
    initialColors: { type: Array, default: [] },
    logoUrl: { type: String, default: '' }
  }

  connect() {
    this.history = []
    this.pointer = -1

    if (this.hasContainerTarget) {
      this.initSortable()
    }

    if (this.initialColorsValue && this.initialColorsValue.length > 0) {
      this.loadInitialColors()
    } else {
      this.generate()
    }
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

        const isLight = this.isLightColor(hex)
        const computedTextColor = isLight ? '#000000' : '#FFFFFF'

        column.style.backgroundColor = hex
        this.setHexInColumn(column, hex)
        this.setColorNameInColumn(column, hex)
        column.style.color = computedTextColor

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

    if (event.code === "Space") {
      event.preventDefault()
      this.generate()
    }
  }

  changeMethod(event) {
    this.methodValue = event.target.value
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
    let baseHex = hasLocked ? this.getHexFromColumn(lockedColumns[0]) : this.generateRandomHex()

    let newColors = []
    if (this.methodValue === 'auto') {
      for (let i = 0; i < unlockedColumns.length; i++) {
        newColors.push(this.generateRandomHex())
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

        const isLight = this.isLightColor(hex)

        column.style.backgroundColor = hex
        this.setHexInColumn(column, hex)
        this.setColorNameInColumn(column, hex)

        const computedTextColor = isLight ? '#000000' : '#FFFFFF'
        column.style.color = computedTextColor
      }

      paletteCols.push({
        hex: hex,
        locked: isLocked,
        textColor: column.style.color
      })
    })

    this.saveSnapshot(paletteCols)
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

        column.style.backgroundColor = colState.hex
        this.setHexInColumn(column, colState.hex)
        this.setColorNameInColumn(column, colState.hex)
        column.style.color = colState.textColor

        column.dataset.locked = colState.locked

        const unlocked = column.querySelector('[data-palette-target="unlockedIcon"]')
        const locked = column.querySelector('[data-palette-target="lockedIcon"]')
        if (unlocked && locked) {
          unlocked.classList.toggle('hidden', colState.locked)
          locked.classList.toggle('hidden', !colState.locked)
        }
      })
    }, 0)
  }

  addColumn(event) {
    if (this.columnTargets.length >= 10) {
      alert("Maximum of 10 colors allowed.")
      return
    }

    event.currentTarget.blur()
    const template = document.getElementById('column-template')
    const clone = template.content.cloneNode(true)

    const currentColumn = event.currentTarget.closest('[data-palette-target="column"]')
    currentColumn.after(clone)

    const newColumn = currentColumn.nextElementSibling
    const newHex = this.generateRandomHex()
    const isLight = this.isLightColor(newHex)

    newColumn.style.backgroundColor = newHex
    newColumn.style.color = isLight ? '#000000' : '#FFFFFF'
    this.setHexInColumn(newColumn, newHex)
    this.setColorNameInColumn(newColumn, newHex)

    setTimeout(() => this.saveCurrentStateToSnapshot(), 10)
  }

  removeColumn(event) {
    if (this.columnTargets.length <= 2) {
      alert("Minimum of 2 colors required.")
      return
    }

    event.currentTarget.blur()
    const column = event.currentTarget.closest('[data-palette-target="column"]')
    column.remove()

    setTimeout(() => this.saveCurrentStateToSnapshot(), 10)
  }

  toggleLock(event) {
    event.currentTarget.blur()
    const column = event.currentTarget.closest('[data-palette-target="column"]')

    const currentlyLocked = column.dataset.locked === 'true'
    column.dataset.locked = !currentlyLocked

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

  save(event) {
    if (event) event.currentTarget.blur()

    const hexCodes = this.columnTargets.map(col => this.getHexFromColumn(col))

    // Get existing palettes or initialize empty array
    let savedPalettes = []
    try {
      const stored = localStorage.getItem('saved_palettes')
      if (stored) {
        savedPalettes = JSON.parse(stored)
      }
    } catch (e) {
      console.error("Error reading localStorage", e)
    }

    // Create new palette object
    const newPalette = {
      id: Date.now().toString(),
      name: `Palette #${Math.floor(Math.random() * 9000) + 1000}`,
      colors: hexCodes,
      created_at: new Date().toISOString()
    }

    // Prepend to array (newest first)
    savedPalettes.unshift(newPalette)

    // Save back to localStorage
    try {
      localStorage.setItem('saved_palettes', JSON.stringify(savedPalettes))

      // Provide visual feedback
      const btn = event.currentTarget
      const originalText = btn.querySelector('span').innerText
      const svg = btn.querySelector('svg')

      btn.querySelector('span').innerText = "Saved!"
      svg.classList.replace('text-red-100', 'text-red-500')

      setTimeout(() => {
        btn.querySelector('span').innerText = originalText
        svg.classList.replace('text-red-500', 'text-red-100')
      }, 2000)

      // Show global toast notification
      const toast = document.createElement('div')
      toast.className = 'fixed top-0 left-0 right-0 z-[100] bg-black text-white px-4 py-3 text-center text-sm font-medium transition-transform duration-300 -translate-y-full'
      toast.innerText = 'Your palette is now saved in your dashboard'
      document.body.appendChild(toast)

      // Trigger slide down animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          toast.classList.remove('-translate-y-full')
          toast.classList.add('translate-y-0')
        })
      })

      // Slide up and remove after 3 seconds
      setTimeout(() => {
        toast.classList.remove('translate-y-0')
        toast.classList.add('-translate-y-full')
        setTimeout(() => toast.remove(), 300)
      }, 3000)
    } catch (e) {
      console.error("Error saving to localStorage", e)
      alert("Failed to save palette to local storage. Your browser may be blocking it or storage is full.")
    }
  }

  viewShades(event) {
    event.currentTarget.blur()
    const column = event.currentTarget.closest('[data-palette-target="column"]')
    const hex = this.getHexFromColumn(column)

    // Generate 25 shades using chroma from white -> base -> black
    const scale = chroma.scale(['#ffffff', hex, '#000000']).domain([0, 0.5, 1]).mode('lrgb').colors(25)

    const shadesContainer = column.querySelector('[data-palette-target="shadesContainer"]')
    shadesContainer.innerHTML = ''

    scale.forEach(shadeHex => {
      const isLight = this.isLightColor(shadeHex)
      const textColor = isLight ? '#000000' : '#ffffff'

      const btn = document.createElement('button')
      btn.className = 'flex-1 min-h-[40px] md:min-h-0 w-full flex items-center justify-center transition-transform hover:z-10 group/shade border-none m-0 p-0 shadow-none'
      btn.style.backgroundColor = shadeHex
      btn.style.color = textColor
      btn.dataset.action = 'click->palette#selectShade'
      btn.dataset.hex = shadeHex.toUpperCase()

      btn.innerHTML = `<span class="opacity-0 group-hover/shade:opacity-100 font-mono text-xs font-semibold tracking-wider pointer-events-none">${shadeHex.toUpperCase()}</span>`

      shadesContainer.appendChild(btn)
    })

    const modal = column.querySelector('[data-palette-target="shadesModal"]')
    modal.classList.remove('hidden')

    setTimeout(() => {
      modal.classList.remove('opacity-0')
    }, 10)
  }

  closeShades(event) {
    if (event) event.currentTarget.blur()
    const modal = event.currentTarget.closest('[data-palette-target="shadesModal"]')
    modal.classList.add('opacity-0')
    setTimeout(() => {
      modal.classList.add('hidden')
    }, 300)
  }

  selectShade(event) {
    const shadeBtn = event.currentTarget
    const hex = shadeBtn.dataset.hex

    const column = shadeBtn.closest('[data-palette-target="column"]')
    const isLight = this.isLightColor(hex)

    column.style.backgroundColor = hex
    column.style.color = isLight ? '#000000' : '#FFFFFF'
    this.setHexInColumn(column, hex)
    this.setColorNameInColumn(column, hex)

    this.saveCurrentStateToSnapshot()
    this.closeShades({ currentTarget: shadeBtn })
  }

  // --- Export UI ---

  openExportModal(event) {
    if (event) event.currentTarget.blur()
    const modal = this.exportModalTarget
    const backdrop = this.exportBackdropTarget
    const content = this.exportContentTarget

    modal.classList.remove('hidden')

    // Force a reflow
    void modal.offsetWidth

    backdrop.classList.remove('opacity-0')
    backdrop.classList.add('opacity-100')

    content.classList.remove('opacity-0', 'scale-95')
    content.classList.add('opacity-100', 'scale-100')
  }

  closeExportModal(event) {
    if (event) event.currentTarget.blur()
    const modal = this.exportModalTarget
    const backdrop = this.exportBackdropTarget
    const content = this.exportContentTarget

    backdrop.classList.remove('opacity-100')
    backdrop.classList.add('opacity-0')

    content.classList.remove('opacity-100', 'scale-100')
    content.classList.add('opacity-0', 'scale-95')

    setTimeout(() => {
      modal.classList.add('hidden')
    }, 300)
  }

  // --- Export Generators ---

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

    // Draw header text
    ctx.fillStyle = '#000000'
    ctx.font = '900 36px sans-serif'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    // 48 (padding) + 48 (logo) + 12 (gap) = 108
    ctx.fillText('paletteWOW', 108, 48)

    ctx.fillStyle = '#a3a3a3'
    ctx.font = 'bold 20px sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText('PALETTE WOW', 1152, 48)

    // Load and draw logo if URL is present
    if (this.logoUrlValue) {
      try {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        await new Promise((resolve, reject) => {
          img.onload = resolve
          img.onerror = reject
          img.src = this.logoUrlValue
        })
        ctx.drawImage(img, 48, 24, 48, 48)
      } catch (e) {
        console.warn('Failed to load logo for export', e)
      }
    }

    // Draw columns
    const hexes = this.columnTargets.map(col => this.getHexFromColumn(col))
    const colWidth = 1200 / hexes.length

    hexes.forEach((hex, i) => {
      // Column background
      ctx.fillStyle = hex
      ctx.fillRect(i * colWidth, 96, colWidth, 704)

      // Hex text
      ctx.fillStyle = this.isLightColor(hex) ? '#000000' : '#ffffff'
      ctx.font = 'bold 24px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.fillText(hex.toUpperCase(), i * colWidth + (colWidth / 2), 752)
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
    const hexes = this.columnTargets.map(col => this.getHexFromColumn(col).replace('#', ''))
    const url = `${window.location.origin}/${hexes.join('-')}`

    navigator.clipboard.writeText(url).then(() => {
      alert("URL copied to clipboard!")
    })
  }

  copySvg(event) {
    event.currentTarget.blur()
    const hexes = this.columnTargets.map(col => this.getHexFromColumn(col))
    const width = hexes.length * 100

    let rects = ''
    hexes.forEach((hex, i) => {
      rects += `<rect x="${i * 100}" y="0" width="100" height="500" fill="${hex}"/>\n`
    })

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="500" viewBox="0 0 ${width} 500">\n${rects}</svg>`

    navigator.clipboard.writeText(svg).then(() => {
      alert("SVG copied to clipboard!")
    })
  }

  copyCss(event) {
    event.currentTarget.blur()
    const hexes = this.columnTargets.map(col => this.getHexFromColumn(col))

    let css = ':root {\n'
    hexes.forEach((hex, i) => {
      css += `  --color-${i + 1}: ${hex};\n`
    })
    css += '}'

    navigator.clipboard.writeText(css).then(() => {
      alert("CSS copied to clipboard!")
    })
  }

  copyTailwind(event) {
    event.currentTarget.blur()
    const hexes = this.columnTargets.map(col => this.getHexFromColumn(col))

    let tw = '{\n  colors: {\n'
    hexes.forEach((hex, i) => {
      tw += `    'color-${i + 1}': '${hex}',\n`
    })
    tw += '  }\n}'

    navigator.clipboard.writeText(tw).then(() => {
      alert("Tailwind config copied to clipboard!")
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

  setHexInColumn(column, hex) {
    const span = column.querySelector('[data-palette-target="hexCode"] span.inline-block')
    if (span) {
      span.textContent = hex
    } else {
      const hexNode = column.querySelector('[data-palette-target="hexCode"]')
      if (hexNode) hexNode.textContent = hex
    }
  }

  setColorNameInColumn(column, hex) {
    const nameNode = column.querySelector('[data-palette-target="colorName"]')
    if (nameNode) {
      const match = ntc.name(hex)
      nameNode.textContent = match ? match[1] : ''
    }
  }

  generateRandomHex() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  isLightColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
    return hsp > 127.5
  }
}
