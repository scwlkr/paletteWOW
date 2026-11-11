import { Controller } from "@hotwired/stimulus"
import { normalizeHex, contrastRatio, wcagLevels } from "lib/color"

export default class extends Controller {
  static targets = ["hex", "picker", "error", "preview", "ratio", "badge"]

  connect() {
    // Turbo can restore cached form fields; the shared URL remains authoritative.
    const params = new URL(window.location.href).searchParams
    this.hexTargets.forEach((input) => {
      const fallback = input.dataset.color === "text" ? "#000000" : "#ffffff"
      input.value = normalizeHex(params.get(input.dataset.color)) || fallback
    })
    this.update()
  }

  update() {
    const colors = {}
    this.hexTargets.forEach((input) => {
      const key = input.dataset.color
      colors[key] = normalizeHex(input.value)
      input.setAttribute("aria-invalid", String(!colors[key]))
      this.errorTargets.find((error) => error.dataset.color === key).hidden = !!colors[key]
      if (colors[key]) {
        this.pickerTargets.find((picker) => picker.dataset.color === key).value = colors[key]
      }
    })
    if (!colors.text || !colors.bg) {
      this.ratioTarget.textContent = "—"
      this.badgeTargets.forEach((badge) => this.renderBadge(badge, null))
      return false
    }

    this.previewTarget.style.color = colors.text
    this.previewTarget.style.backgroundColor = colors.bg
    const ratio = contrastRatio(colors.text, colors.bg)
    const levels = wcagLevels(ratio)
    this.ratioTarget.textContent = `${ratio.toFixed(2)}:1`
    this.badgeTargets.forEach((badge) => this.renderBadge(badge, levels[badge.dataset.level]))

    const url = new URL(window.location.href)
    url.search = ""
    url.searchParams.set("text", colors.text.slice(1))
    url.searchParams.set("bg", colors.bg.slice(1))
    window.history.replaceState(window.history.state, "", url)
    return true
  }

  normalize({ target }) {
    const color = normalizeHex(target.value)
    if (color) target.value = color
    this.update()
  }

  pick({ target }) {
    this.hexTargets.find((input) => input.dataset.color === target.dataset.color).value = target.value
    this.update()
  }

  swap() {
    if (!this.update()) return
    const [text, background] = this.hexTargets
    const previousText = normalizeHex(text.value)
    text.value = normalizeHex(background.value)
    background.value = previousText
    this.update()
  }

  renderBadge(badge, passes) {
    badge.textContent = passes === null ? "—" : (passes ? "Pass" : "Fail")
    badge.classList.toggle("bg-green-100", passes === true)
    badge.classList.toggle("text-green-800", passes === true)
    badge.classList.toggle("bg-red-100", passes === false)
    badge.classList.toggle("text-red-800", passes === false)
  }
}
