import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["status"]

  async copy({ currentTarget }) {
    const { hex, name } = currentTarget.dataset
    try {
      await navigator.clipboard.writeText(hex)
      this.statusTarget.textContent = `${name}: copied ${hex}.`
    } catch {
      this.statusTarget.textContent = `Could not copy. Select the hex value: ${hex}.`
    }
  }
}
