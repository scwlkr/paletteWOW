import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["column", "hexCode", "unlockedIcon", "lockedIcon"]

  connect() {
    this.history = []
    this.pointer = -1
    this.generate()
  }

  handleKeydown(event) {
    // Cmd+Z or Ctrl+Z for Undo
    if ((event.metaKey || event.ctrlKey) && !event.shiftKey && event.key === 'z') {
      event.preventDefault()
      this.undo()
      return
    }

    // Cmd+Shift+Z, or Ctrl+Y for Redo
    if (((event.metaKey || event.ctrlKey) && event.shiftKey && event.key === 'z') ||
      ((event.metaKey || event.ctrlKey) && event.key === 'y')) {
      event.preventDefault()
      this.redo()
      return
    }

    if (event.code === "Space") {
      event.preventDefault() // Prevent scrolling down
      this.generate()
    }
  }

  generate() {
    const paletteCols = []

    this.columnTargets.forEach((column, index) => {
      const isLocked = column.dataset.locked === 'true'
      let hex = this.hexCodeTargets[index].textContent.trim()
      const textColor = column.style.color

      if (!isLocked) {
        hex = this.generateRandomHex()
        const isLight = this.isLightColor(hex)

        // Update column background
        column.style.backgroundColor = hex

        // Update hex text
        this.hexCodeTargets[index].textContent = hex

        // Adjust text color based on background brightness
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

  saveSnapshot(paletteCols) {
    // If we've gone back in time, cut off the future
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
    this.columnTargets.forEach((column, index) => {
      const colState = paletteCols[index]

      column.style.backgroundColor = colState.hex
      this.hexCodeTargets[index].textContent = colState.hex
      column.style.color = colState.textColor

      column.dataset.locked = colState.locked

      this.unlockedIconTargets[index].classList.toggle('hidden', colState.locked)
      this.lockedIconTargets[index].classList.toggle('hidden', !colState.locked)
    })
  }

  toggleLock(event) {
    event.currentTarget.blur() // Remove focus so spacebar doesn't re-trigger button click

    // Find the closest column
    const column = event.currentTarget.closest('[data-palette-target="column"]')
    const index = this.columnTargets.indexOf(column)

    const currentlyLocked = column.dataset.locked === 'true'
    column.dataset.locked = !currentlyLocked

    // Toggle icons
    this.unlockedIconTargets[index].classList.toggle('hidden', !currentlyLocked)
    this.lockedIconTargets[index].classList.toggle('hidden', currentlyLocked)
  }

  copyHex(event) {
    const hex = event.currentTarget.textContent
    navigator.clipboard.writeText(hex).then(() => {
      // Optional: show a quick "Copied!" tooltip
      const originalText = event.currentTarget.textContent
      event.currentTarget.textContent = "COPIED!"
      setTimeout(() => {
        event.currentTarget.textContent = originalText
      }, 1000)
    })
  }

  save() {
    const hexCodes = this.hexCodeTargets.map(target => target.textContent.trim())

    // Get CSRF token
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
          window.location.href = '/dashboard' // Redirect to dashboard on success
        } else {
          alert("Failed to save palette. Please try again.")
        }
      })
      .catch(error => {
        console.error('Error saving palette:', error)
        alert("An error occurred while saving.")
      })
  }

  // --- Utility functions ---

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
    // HSP equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
    return hsp > 127.5
  }
}
