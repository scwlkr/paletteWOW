import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"
import chroma from "chroma-js"

export default class extends Controller {
  static targets = ["container", "column", "hexCode", "unlockedIcon", "lockedIcon", "shadesModal", "shadesContainer"]

  connect() {
    this.history = []
    this.pointer = -1

    if (this.hasContainerTarget) {
      this.initSortable()
    }

    this.generate()
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

  generate() {
    const paletteCols = []

    this.columnTargets.forEach((column) => {
      const isLocked = column.dataset.locked === 'true'
      let hex = this.getHexFromColumn(column)
      const textColor = column.style.color

      if (!isLocked) {
        hex = this.generateRandomHex()
        const isLight = this.isLightColor(hex)

        column.style.backgroundColor = hex
        this.setHexInColumn(column, hex)

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

  save() {
    const hexCodes = this.columnTargets.map(col => this.getHexFromColumn(col))
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

    fetch('/palettes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ hex_codes: hexCodes })
    })
      .then(response => {
        if (response.ok) {
          window.location.href = '/dashboard'
        } else {
          alert("Failed to save palette. Please try again.")
        }
      })
      .catch(error => {
        console.error('Error saving palette:', error)
        alert("An error occurred while saving.")
      })
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

    this.saveCurrentStateToSnapshot()
    this.closeShades({ currentTarget: shadeBtn })
  }

  // --- Utility functions ---

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
