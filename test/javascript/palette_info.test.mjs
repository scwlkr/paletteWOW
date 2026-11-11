import { test } from "node:test"
import assert from "node:assert/strict"
import { registerHooks } from "node:module"

// Rails supplies Stimulus at runtime. Test the controller actions with real
// vendored color/name libraries and only replace the framework base class.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "@hotwired/stimulus") {
      return { url: "data:text/javascript,export class Controller {}", shortCircuit: true }
    }
    const paths = {
      sortablejs: "../../vendor/javascript/sortablejs.js",
      "chroma-js": "../../vendor/javascript/chroma-js.js",
      ntc: "../../vendor/javascript/ntc.js",
      "lib/color": "../../app/javascript/lib/color.js",
      "lib/exports": "../../app/javascript/lib/exports.js"
    }
    if (paths[specifier]) {
      return { url: new URL(paths[specifier], import.meta.url).href, shortCircuit: true }
    }
    return nextResolve(specifier, context)
  }
})

const { default: PaletteController } = await import("../../app/javascript/controllers/palette_controller.js")

function infoPanel() {
  const controller = Object.create(PaletteController.prototype)
  controller.infoValueTargets = ["Name", "HEX", "RGB", "HSL", "HSB", "CMYK", "LAB"]
    .map(format => ({ dataset: { format }, textContent: "stale" }))
  controller.infoPreviewTarget = { style: {} }
  controller.infoStatusTarget = { textContent: "stale" }
  controller.hasInfoModalTarget = true
  controller.infoModalTarget = {
    open: false,
    showModal() { this.open = true },
    close() { this.open = false }
  }
  return controller
}

function swatch(hex) {
  return {
    currentTarget: {
      closest: () => ({ querySelector: () => ({ textContent: hex.replace('#', '') }) })
    }
  }
}

function displayedValues(controller) {
  return Object.fromEntries(controller.infoValueTargets.map(node => [node.dataset.format, node.textContent]))
}

test("info panel shows the selected swatch in every format and refreshes on reopening", () => {
  const controller = infoPanel()
  controller.viewInfo(swatch("#FF0000"))
  assert.deepEqual(displayedValues(controller), {
    Name: "Red", HEX: "#FF0000", RGB: "rgb(255, 0, 0)", HSL: "hsl(0, 100%, 50%)",
    HSB: "0°, 100%, 100%", CMYK: "0%, 100%, 100%, 0%", LAB: "53.23, 80.11, 67.22"
  })
  assert.equal(controller.infoPreviewTarget.style.backgroundColor, "#FF0000")
  assert.equal(controller.infoStatusTarget.textContent, "")
  assert.equal(controller.infoModalTarget.open, true)

  controller.closeInfo()
  assert.equal(controller.infoModalTarget.open, false)
  controller.viewInfo(swatch("#000000"))
  assert.deepEqual(displayedValues(controller), {
    Name: "Black", HEX: "#000000", RGB: "rgb(0, 0, 0)", HSL: "hsl(0, 0%, 0%)",
    HSB: "0°, 0%, 0%", CMYK: "0%, 0%, 0%, 100%", LAB: "0, 0, 0"
  })
})

test("each info copy action writes its displayed value and reports clipboard failures", async (t) => {
  const controller = infoPanel()
  controller.viewInfo(swatch("#FF0000"))
  const clipboard = { writeText: t.mock.fn(async () => {}) }
  const original = Object.getOwnPropertyDescriptor(globalThis.navigator, "clipboard")
  Object.defineProperty(globalThis.navigator, "clipboard", { configurable: true, value: clipboard })
  t.after(() => {
    if (original) Object.defineProperty(globalThis.navigator, "clipboard", original)
    else delete globalThis.navigator.clipboard
  })

  for (const node of controller.infoValueTargets) {
    await controller.copyInfo({ currentTarget: { dataset: node.dataset } })
    assert.equal(clipboard.writeText.mock.calls.at(-1).arguments[0], node.textContent)
    assert.equal(controller.infoStatusTarget.textContent, `${node.dataset.format} copied!`)
  }

  clipboard.writeText = async () => { throw new Error("Clipboard unavailable") }
  await controller.copyInfo({ currentTarget: { dataset: { format: "HEX" } } })
  assert.match(controller.infoStatusTarget.textContent, /Unable to copy/)
})

test("info panel only dismisses on backdrop clicks and blocks generator shortcuts while open", () => {
  const controller = infoPanel()
  controller.viewInfo(swatch("#FFFFFF"))
  controller.closeInfoOnBackdrop({ target: controller.infoValueTargets[0] })
  assert.equal(controller.infoModalTarget.open, true)

  controller.generate = () => assert.fail("A dialog keypress must not regenerate the palette")
  controller.undo = () => assert.fail("A dialog keypress must not undo the palette")
  controller.redo = () => assert.fail("A dialog keypress must not redo the palette")
  for (const event of [{ code: "Space" }, { key: "z", ctrlKey: true }, { key: "y", ctrlKey: true }]) {
    controller.handleKeydown(event)
  }

  controller.closeInfoOnBackdrop({ target: controller.infoModalTarget })
  assert.equal(controller.infoModalTarget.open, false)
})
