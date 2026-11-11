import { Controller } from "@hotwired/stimulus"
import { normalizeHex } from "lib/color"
import { parseGradient, gradientQuery, gradientCSS, gradientGeometry, sortedStops } from "lib/gradient"

export default class extends Controller {
  static targets = ["type", "angle", "angleGroup", "preview", "css", "stops", "template", "add", "status"]

  connect() {
    this.state = parseGradient(window.location.search)
    this.render()
  }

  render() {
    this.typeTarget.value = this.state.type
    this.angleTarget.value = this.state.angle
    this.stopsTarget.replaceChildren(...this.state.stops.map((stop, index) => {
      const row = this.templateTarget.content.firstElementChild.cloneNode(true)
      row.dataset.index = index
      row.querySelector("legend").textContent = `Stop ${index + 1}`
      for (const field of row.querySelectorAll("input")) {
        const key = field.dataset.field
        field.value = key === "position" ? stop.position : stop.color
        const id = `gradient-${key}-${index}`
        field.id = id
        row.querySelector(`[data-label="${key}"]`).htmlFor = id
      }
      const remove = row.querySelector("button")
      remove.disabled = this.state.stops.length === 2
      remove.setAttribute("aria-label", `Remove stop ${index + 1}`)
      return row
    }))
    this.addTarget.disabled = this.state.stops.length === 10
    this.update()
  }

  settings() {
    this.state.type = this.typeTarget.value
    if (this.angleTarget.validity.valid && this.angleTarget.value !== "") this.state.angle = Number(this.angleTarget.value)
    this.update()
  }

  edit({ target }) {
    const row = target.closest("[data-index]")
    if (!row || !target.dataset.field) return
    const stop = this.state.stops[Number(row.dataset.index)]
    const key = target.dataset.field
    target.setCustomValidity("")
    const valid = key === "position" ? target.value !== "" && target.validity.valid : !!normalizeHex(target.value)
    target.setAttribute("aria-invalid", String(!valid))
    target.setCustomValidity(valid ? "" : key === "position" ? "Enter a position from 0 to 100." : "Enter a 3- or 6-digit hex color.")
    if (!valid) {
      this.statusTarget.textContent = target.validationMessage
      return
    }
    if (key === "position") stop.position = Number(target.value)
    else {
      stop.color = normalizeHex(target.value)
      row.querySelector('[data-field="picker"]').value = stop.color
      if (key === "picker") row.querySelector('[data-field="color"]').value = stop.color
    }
    this.update()
  }

  add() {
    if (this.state.stops.length >= 10) return
    const stops = sortedStops(this.state)
    let position = 50
    let gap = -1
    for (let index = 1; index < stops.length; index++) {
      const size = stops[index].position - stops[index - 1].position
      if (size > gap) {
        gap = size
        position = Math.round((stops[index].position + stops[index - 1].position) * 50) / 100
      }
    }
    this.state.stops.push({ color: "#ffffff", position })
    this.render()
    this.stopsTarget.lastElementChild.querySelector('[data-field="color"]').focus()
  }

  remove({ target }) {
    if (!target.closest("button[data-remove]") || this.state.stops.length <= 2) return
    const index = Number(target.closest("[data-index]").dataset.index)
    this.state.stops.splice(index, 1)
    this.render()
    this.stopsTarget.children[Math.min(index, this.state.stops.length - 1)].querySelector('[data-field="color"]').focus()
  }

  update() {
    this.angleGroupTarget.hidden = this.state.type === "radial"
    const css = gradientCSS(this.state)
    this.previewTarget.style.backgroundImage = css
    this.cssTarget.value = `background: ${css};`
    this.statusTarget.textContent = ""
    const url = new URL(window.location.href)
    url.search = gradientQuery(this.state)
    window.history.replaceState(window.history.state, "", url)
  }

  async copy() {
    try {
      await navigator.clipboard.writeText(this.cssTarget.value)
      this.statusTarget.textContent = "CSS copied."
    } catch {
      this.cssTarget.focus()
      this.cssTarget.select()
      this.statusTarget.textContent = "Select and copy the CSS below."
    }
  }

  async download() {
    const canvas = document.createElement("canvas")
    canvas.width = 1600
    canvas.height = 1000
    const ctx = canvas.getContext("2d")
    const geometry = gradientGeometry(this.state, canvas.width, canvas.height)
    const gradient = this.state.type === "radial"
      ? ctx.createRadialGradient(800, 500, 0, 800, 500, geometry.radius)
      : ctx.createLinearGradient(geometry.x0, geometry.y0, geometry.x1, geometry.y1)
    sortedStops(this.state).forEach(stop => gradient.addColorStop(stop.position / 100, stop.color))
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"))
    if (!blob) {
      this.statusTarget.textContent = "PNG could not be created. Try again."
      return
    }
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "palettewow-gradient.png"
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    this.statusTarget.textContent = "PNG downloaded."
  }
}
