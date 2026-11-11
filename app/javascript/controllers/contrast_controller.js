import { Controller } from "@hotwired/stimulus"
import { contrastRatio, normalizeHex, wcagLevels } from "lib/color"

export default class extends Controller {
  static targets = ["textHex", "bgHex", "textPicker", "bgPicker", "preview", "ratio", "badge"]

  connect() {
    this.loadFromUrl()
  }

  loadFromUrl() {
    const params = new URL(window.location.href).searchParams
    this.colors = {
      text: normalizeHex(params.get("text")) || "#000000",
      bg: normalizeHex(params.get("bg")) || "#ffffff"
    }
    this.syncInputs()
    this.render()
  }

  hexInput({ currentTarget: input }) {
    const color = normalizeHex(input.value)
    this.validate(input, color)
    if (!color) return

    const role = input.dataset.color
    this.colors[role] = color
    this[`${role}PickerTarget`].value = color
    this.render()
  }

  hexChange(event) {
    this.hexInput(event)
    const input = event.currentTarget
    const color = normalizeHex(input.value)
    if (color) input.value = color
    else input.reportValidity()
  }

  pick({ currentTarget: input }) {
    this.colors[input.dataset.color] = input.value
    this.syncInputs()
    this.render()
  }

  swap() {
    this.colors = { text: this.colors.bg, bg: this.colors.text }
    this.syncInputs()
    this.render()
  }

  syncInputs() {
    for (const role of ["text", "bg"]) {
      const input = this[`${role}HexTarget`]
      input.value = this.colors[role]
      this.validate(input, true)
      this[`${role}PickerTarget`].value = this.colors[role]
    }
  }

  validate(input, valid) {
    input.setCustomValidity(valid ? "" : "Enter a 3- or 6-digit hex colour.")
    input.setAttribute("aria-invalid", valid ? "false" : "true")
  }

  render() {
    const ratio = contrastRatio(this.colors.text, this.colors.bg)
    const levels = wcagLevels(ratio)
    this.previewTarget.style.color = this.colors.text
    this.previewTarget.style.backgroundColor = this.colors.bg
    this.ratioTarget.textContent = `${ratio.toFixed(2)}:1`

    for (const badge of this.badgeTargets) {
      const pass = levels[badge.dataset.level]
      badge.textContent = `${badge.dataset.label} ${pass ? "Pass" : "Fail"}`
      badge.classList.toggle("bg-green-100", pass)
      badge.classList.toggle("text-green-800", pass)
      badge.classList.toggle("bg-red-100", !pass)
      badge.classList.toggle("text-red-800", !pass)
      badge.classList.remove("bg-neutral-100", "text-neutral-600")
    }

    const url = new URL(window.location.href)
    url.searchParams.set("text", this.colors.text.slice(1))
    url.searchParams.set("bg", this.colors.bg.slice(1))
    window.history.replaceState(window.history.state, "", url)
  }
}
