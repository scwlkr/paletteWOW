import { Controller } from "@hotwired/stimulus"
import { contrastRatio, normalizeHex, wcagLevels } from "lib/color"

export default class extends Controller {
  static targets = ["text", "bg", "textPicker", "bgPicker", "preview", "ratio", "badge"]

  connect() {
    const params = new URL(window.location.href).searchParams
    this.colors = {
      text: normalizeHex(params.get("text")) || "#000000",
      bg: normalizeHex(params.get("bg")) || "#ffffff"
    }
    this.syncInputs()
    this.render()
  }

  update(event) {
    const input = event.currentTarget
    const color = normalizeHex(input.value)
    input.setCustomValidity(color ? "" : "Enter a 3- or 6-digit hex color.")
    input.setAttribute("aria-invalid", String(!color))
    if (!color) return

    const key = input.dataset.color
    this.colors[key] = color
    this[`${key}PickerTarget`].value = color
    this.render()
  }

  pick(event) {
    const key = event.currentTarget.dataset.color
    this.colors[key] = event.currentTarget.value
    this.syncInputs()
    this.render()
  }

  swap() {
    this.colors = { text: this.colors.bg, bg: this.colors.text }
    this.syncInputs()
    this.render()
  }

  syncInputs() {
    for (const key of ["text", "bg"]) {
      const input = this[`${key}Target`]
      input.value = this.colors[key]
      input.setCustomValidity("")
      input.setAttribute("aria-invalid", "false")
      this[`${key}PickerTarget`].value = this.colors[key]
    }
  }

  render() {
    const { text, bg } = this.colors
    this.previewTarget.style.color = text
    this.previewTarget.style.backgroundColor = bg

    const ratio = contrastRatio(text, bg)
    this.ratioTarget.textContent = `${ratio.toFixed(2)}:1`
    const levels = wcagLevels(ratio)
    for (const badge of this.badgeTargets) {
      const passes = levels[badge.dataset.level]
      badge.textContent = passes ? "Pass" : "Fail"
      badge.classList.toggle("bg-neutral-900", passes)
      badge.classList.toggle("text-white", passes)
      badge.classList.toggle("bg-neutral-100", !passes)
      badge.classList.toggle("text-neutral-600", !passes)
    }

    const url = new URL(window.location.href)
    url.searchParams.set("text", text.slice(1))
    url.searchParams.set("bg", bg.slice(1))
    window.history.replaceState(window.history.state, "", url)
  }
}
