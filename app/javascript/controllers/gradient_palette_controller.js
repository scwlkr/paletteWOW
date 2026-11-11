import { Controller } from "@hotwired/stimulus"
import chroma from "chroma-js"
import { normalizeHex, contrastRatio } from "lib/color"

export default class extends Controller {
  static targets = ["hex", "picker", "count", "swatches", "generator", "status"]

  connect() {
    this.update()
  }

  pick({ target }) {
    this.hexTargets.find(input => input.dataset.endpoint === target.dataset.endpoint).value = target.value
    this.update()
  }

  update() {
    const endpoints = this.hexTargets.map(input => {
      const color = normalizeHex(input.value)
      input.setAttribute("aria-invalid", String(!color))
      input.setCustomValidity(color ? "" : "Enter a 3- or 6-digit hex color.")
      return color
    })
    if (endpoints.some(color => !color)) {
      this.generatorTarget.removeAttribute("href")
      this.generatorTarget.setAttribute("aria-disabled", "true")
      this.statusTarget.textContent = "Enter a 3- or 6-digit hex color."
      return
    }

    this.pickerTargets.forEach((picker, index) => { picker.value = endpoints[index] })
    const count = Number(this.countTarget.value)
    const colors = chroma.scale(endpoints).mode("lab").colors(count)
    // Keep the chosen endpoints exact, independent of LAB conversion rounding.
    colors[0] = endpoints[0]
    colors[colors.length - 1] = endpoints[1]
    this.swatchesTarget.replaceChildren(...colors.map(color => {
      const swatch = document.createElement("li")
      swatch.className = "flex-1 min-w-0 flex items-end justify-center h-36 sm:h-64 p-3"
      swatch.style.backgroundColor = color
      swatch.style.color = contrastRatio(color, "#000000") >= contrastRatio(color, "#ffffff") ? "#000000" : "#ffffff"
      const label = document.createElement("span")
      label.className = "font-mono text-xs font-bold"
      label.textContent = color.toUpperCase()
      swatch.append(label)
      return swatch
    }))
    this.generatorTarget.href = `/${colors.map(color => color.slice(1)).join("-")}`
    this.generatorTarget.removeAttribute("aria-disabled")
    this.statusTarget.textContent = ""
  }
}
