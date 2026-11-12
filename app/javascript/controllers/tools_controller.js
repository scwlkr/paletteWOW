import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  keydown(event) {
    // Keep disclosure keys away from the generator's window shortcuts.
    event.stopPropagation()
    if (event.key === "Escape" && this.element.open) {
      event.preventDefault()
      this.reset()
      this.element.querySelector("summary").focus()
    }
  }

  closeOutside(event) {
    if (!this.element.contains(event.target)) this.reset()
  }

  focusout(event) {
    if (event.relatedTarget && !this.element.contains(event.relatedTarget)) this.reset()
  }

  reset() {
    this.element.open = false
  }
}
