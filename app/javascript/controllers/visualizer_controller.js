import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["status"]
  static values = { colors: Array }

  connect() {
    this.roles = [...this.colorsValue]
    this.render()
  }

  shuffle() {
    const previous = [...this.roles]
    for (let index = this.roles.length - 1; index > 0; index--) {
      const other = Math.floor(Math.random() * (index + 1))
      ;[this.roles[index], this.roles[other]] = [this.roles[other], this.roles[index]]
    }
    // Avoid an unchanged preview when the palette has distinct colors.
    if (this.roles.slice(0, 5).every((color, index) => color === previous[index])) {
      const offset = previous.findIndex(color => color !== previous[0])
      if (offset > 0) this.roles = previous.slice(offset).concat(previous.slice(0, offset))
    }
    this.render()
    this.statusTarget.textContent = "Color roles shuffled."
  }

  render() {
    for (let index = 0; index < 5; index++) {
      this.element.style.setProperty(`--c${index + 1}`, this.roles[index % this.roles.length])
    }
  }
}
