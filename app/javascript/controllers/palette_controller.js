import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["column", "hexCode", "unlockedIcon", "lockedIcon"]

  connect() {
    this.generate()
  }

  handleKeydown(event) {
    if (event.code === "Space") {
      event.preventDefault() // Prevent scrolling down
      this.generate()
    }
  }

  generate() {
    this.columnTargets.forEach((column, index) => {
      const isLocked = column.dataset.locked === 'true'

      if (!isLocked) {
        const hex = this.generateRandomHex()
        const isLight = this.isLightColor(hex)

        // Update column background
        column.style.backgroundColor = hex

        // Update hex text
        this.hexCodeTargets[index].textContent = hex

        // Adjust text color based on background brightness
        const textColor = isLight ? '#000000' : '#FFFFFF'
        column.style.color = textColor

        // We also want to adjust the icon container border/bg slightly if needed,
        // but simple inheritance `currentColor` works for strokes.
      }
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
