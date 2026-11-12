import { test } from "node:test"
import assert from "node:assert/strict"
import { register } from "node:module"
import { setTimeout } from "node:timers/promises"

register("./support/palette_loader.mjs", import.meta.url)
const { default: PaletteController } = await import("../../app/javascript/controllers/palette_controller.js")

function swatch(hex, locked = false) {
  const label = { textContent: hex }
  const input = { value: hex }
  const name = { textContent: "" }
  const lock = { ariaPressed: String(locked) }
  // DOMStringMap stores dataset assignments as strings, including during undo.
  const dataset = new Proxy({ locked: String(locked) }, {
    set(target, key, value) { target[key] = String(value); return true }
  })
  return {
    style: {}, dataset,
    querySelector(selector) {
      if (selector === '[data-action="click->palette#toggleLock"]') return lock
      if (selector === 'input[type="color"]') return input
      if (selector === '[data-palette-target="colorName"]') return name
      if (selector.includes('hexCode')) return label
      return null
    }
  }
}

function palette() {
  const controller = Object.create(PaletteController.prototype)
  controller.columnTargets = [swatch("#FF0000"), swatch("#123456", true), swatch("#0000FF")]
  controller.visionValue = "normal"
  controller.adjustSliderTargets = ["hue", "saturation", "brightness", "temperature"].map(adjustment => ({ dataset: { adjustment }, value: 0 }))
  controller.adjustValueTargets = controller.adjustSliderTargets.map(slider => ({ dataset: slider.dataset, textContent: "" }))
  controller.adjustDialogTarget = {
    open: false,
    showModal() { this.open = true },
    close() { this.open = false }
  }
  controller.hasAdjustDialogTarget = true
  controller.history = []
  controller.pointer = -1
  // Save-button UI is unrelated to the public, account-free generator.
  controller.updateSaveButtonState = () => {}
  for (const column of controller.columnTargets) {
    const hex = controller.getHexFromColumn(column)
    controller.setHexInColumn(column, hex)
    controller.setColorNameInColumn(column, hex)
  }
  controller.saveCurrentStateToSnapshot()
  return controller
}

function slide(controller, name, value) {
  controller.adjustSliderTargets.find(slider => slider.dataset.adjustment === name).value = value
  controller.previewAdjust()
}

test("live adjustments use the original palette, preserve locked swatches, and update pickers and exports", () => {
  const controller = palette()
  const locked = { ...controller.columnTargets[1].dataset }
  const lockedStyle = structuredClone(controller.columnTargets[1].style)
  controller.openAdjust()
  slide(controller, "hue", 120)
  assert.deepEqual(controller.getExportHexes(), ["#00FF00", "#123456", "#FF0000"])
  assert.equal(controller.columnTargets[0].querySelector('input[type="color"]').value, "#00FF00")
  assert.equal(controller.columnTargets[0].querySelector('[data-palette-target="colorName"]').textContent, "Green")
  slide(controller, "hue", -120)
  assert.deepEqual(controller.getExportHexes(), ["#0000FF", "#123456", "#00FF00"])
  slide(controller, "hue", 0)
  assert.deepEqual(controller.getExportHexes(), ["#FF0000", "#123456", "#0000FF"])
  slide(controller, "brightness", 100)
  assert.deepEqual(controller.getExportHexes(), ["#FFFFFF", "#123456", "#FFFFFF"])
  assert.deepEqual(controller.columnTargets[1].dataset, locked)
  assert.deepEqual(controller.columnTargets[1].style, lockedStyle)
  assert.equal(controller.history.length, 1)
  assert.equal(controller.pointer, 0)
})

test("Apply saves one undo step and redo restores the applied palette and lock state", async () => {
  const controller = palette()
  controller.openAdjust()
  slide(controller, "hue", 60)
  slide(controller, "hue", 120)
  controller.applyAdjust()
  // The native close event after Apply must not roll back the committed preview.
  controller.cancelAdjust({ type: "close" })
  assert.equal(controller.adjustDialogTarget.open, false)
  assert.equal(controller.history.length, 2)
  assert.deepEqual(controller.getExportHexes(), ["#00FF00", "#123456", "#FF0000"])
  controller.undo()
  await setTimeout(5)
  assert.deepEqual(controller.getExportHexes(), ["#FF0000", "#123456", "#0000FF"])
  assert.equal(controller.columnTargets[1].dataset.locked, "true")
  controller.redo()
  await setTimeout(5)
  assert.deepEqual(controller.getExportHexes(), ["#00FF00", "#123456", "#FF0000"])
})

test("Cancel and Escape restore the original colors and keep existing redo history", async () => {
  const controller = palette()
  controller.openAdjust()
  slide(controller, "temperature", 100)
  controller.applyAdjust()
  controller.undo()
  await setTimeout(5)
  const history = structuredClone(controller.history)
  for (const type of ["click", "cancel", "close"]) {
    controller.openAdjust()
    assert.ok(controller.adjustSliderTargets.every(slider => slider.value === 0))
    slide(controller, "saturation", -100)
    let prevented = false
    controller.cancelAdjust({ type, preventDefault() { prevented = true } })
    assert.equal(prevented, type === "cancel")
    assert.deepEqual(controller.getExportHexes(), ["#FF0000", "#123456", "#0000FF"])
    assert.deepEqual(controller.history, history)
    assert.equal(controller.pointer, 0)
  }
  controller.redo()
  await setTimeout(5)
  assert.deepEqual(controller.getExportHexes(), ["#FF0000", "#123456", "#4000BF"])
})

test("no-op Apply, zeroed sliders and all-locked palettes do not add undo steps", () => {
  const controller = palette()
  controller.openAdjust()
  controller.applyAdjust()
  controller.openAdjust()
  slide(controller, "hue", 120)
  slide(controller, "hue", 0)
  controller.applyAdjust()
  controller.columnTargets.forEach(column => { column.dataset.locked = "true" })
  controller.openAdjust()
  slide(controller, "hue", 120)
  controller.applyAdjust()
  assert.deepEqual(controller.getExportHexes(), ["#FF0000", "#123456", "#0000FF"])
  assert.equal(controller.history.length, 1)
})

test("palette keyboard shortcuts leave an open adjustment dialog alone", () => {
  const controller = palette()
  controller.openAdjust()
  controller.undo = controller.redo = controller.generate = () => assert.fail("must not change the palette behind the dialog")
  for (const event of [{ code: "Space" }, { key: "z", ctrlKey: true }, { key: "y", ctrlKey: true }]) {
    controller.handleKeydown({ ...event, preventDefault() { assert.fail("must keep native dialog controls") } })
  }
})
