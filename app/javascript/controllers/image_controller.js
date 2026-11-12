import { Controller } from "@hotwired/stimulus"
import { extractPalette } from "lib/extract"
import { isLightColor } from "lib/color"

export default class extends Controller {
  static targets = ["file", "count", "preview", "results", "swatches", "generator", "status", "dropzone"]

  connect() {
    this.request = (this.request || 0) + 1
    this.pixels = null
    this.releaseImage()
    this.resultsTarget.hidden = true
    this.generatorTarget.removeAttribute("href")
    this.statusTarget.textContent = ""
  }

  disconnect() {
    this.request++
    this.pixels = null
    this.releaseImage()
  }

  pick() {
    const file = this.fileTarget.files[0]
    this.fileTarget.value = ""
    if (file) this.load(file)
  }

  drag(event) {
    event.preventDefault()
    this.dropzoneTarget.dataset.dragging = "true"
  }

  leave() {
    delete this.dropzoneTarget.dataset.dragging
  }

  drop(event) {
    event.preventDefault()
    this.leave()
    const files = [...event.dataTransfer.files]
    const file = files.find(item => item.type.startsWith("image/")) || files[0]
    if (file) this.load(file)
  }

  paste(event) {
    const item = [...(event.clipboardData?.items || [])].find(item => item.kind === "file" && item.type.startsWith("image/"))
    const file = item?.getAsFile()
    if (file) {
      event.preventDefault()
      this.load(file)
    }
  }

  releaseImage() {
    if (this.imageUrl) URL.revokeObjectURL(this.imageUrl)
    this.imageUrl = null
    this.previewTarget.removeAttribute("src")
    this.previewTarget.hidden = true
  }

  async load(file) {
    const request = ++this.request
    this.pixels = null
    this.releaseImage()
    this.resultsTarget.hidden = true
    this.generatorTarget.removeAttribute("href")
    this.statusTarget.textContent = ""
    if (!/^image\/(png|jpeg|webp|gif|avif|bmp)$/i.test(file.type)) {
      this.statusTarget.textContent = "Choose a PNG, JPEG, WebP, GIF, AVIF or BMP image."
      return
    }
    if (file.size > 20 * 1024 * 1024) {
      this.statusTarget.textContent = "Choose an image smaller than 20 MB."
      return
    }
    this.statusTarget.textContent = "Reading image…"
    const url = URL.createObjectURL(file)
    this.imageUrl = url
    try {
      const image = new Image()
      await new Promise((resolve, reject) => {
        image.onload = resolve
        image.onerror = reject
        image.src = url
      })
      if (request !== this.request) return
      // Bound the extraction work even for a full-resolution phone photograph.
      const scale = Math.min(1, 256 / Math.max(image.naturalWidth, image.naturalHeight))
      const canvas = document.createElement("canvas")
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale))
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale))
      const context = canvas.getContext("2d", { willReadFrequently: true })
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      const { data } = context.getImageData(0, 0, canvas.width, canvas.height)
      this.pixels = []
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] >= 128) this.pixels.push([data[i], data[i + 1], data[i + 2]])
      }
      if (!this.pixels.length) throw new Error("Transparent image")
      this.previewTarget.src = url
      this.previewTarget.hidden = false
      this.update()
    } catch {
      if (request !== this.request) return
      this.pixels = null
      this.releaseImage()
      this.statusTarget.textContent = "This image could not be read. Choose another image with visible colors."
    } finally {
      // A newer selection owns its own URL; never revoke that image here.
      if (request !== this.request) URL.revokeObjectURL(url)
    }
  }

  update() {
    if (!this.pixels) return
    const colors = extractPalette(this.pixels, this.countTarget.value)
    // A single-color photo still needs two swatches for a valid generator URL.
    if (colors.length === 1) colors.push(colors[0])
    this.swatchesTarget.replaceChildren(...colors.map(hex => {
      const swatch = document.createElement("li")
      swatch.className = "flex-1 min-w-0 min-h-28 flex items-end justify-center p-2"
      swatch.style.backgroundColor = hex
      swatch.style.color = isLightColor(hex) ? "#000000" : "#ffffff"
      const label = document.createElement("span")
      label.className = "font-mono text-xs font-bold uppercase [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]"
      label.textContent = hex
      swatch.append(label)
      return swatch
    }))
    this.generatorTarget.href = "/" + colors.map(hex => hex.slice(1)).join("-")
    this.resultsTarget.hidden = false
    this.statusTarget.textContent = `${colors.length} colors ready.`
  }
}
