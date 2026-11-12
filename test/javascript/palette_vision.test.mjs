import { test } from "node:test"
import assert from "node:assert/strict"
import { register } from "node:module"

register("./support/palette_loader.mjs", import.meta.url)
const { default: PaletteController } = await import("../../app/javascript/controllers/palette_controller.js")

function swatch(hex) {
  const label = { textContent: hex }
  const input = { value: hex }
  const name = { textContent: "Original name" }
  return {
    style: {}, dataset: { locked: "true" },
    querySelector(selector) {
      if (selector === 'input[type="color"]') return input
      if (selector === '[data-palette-target="colorName"]') return name
      return label
    }
  }
}

test("preview switching preserves original hex, picker, locks, names, exports and history", () => {
  const controller = Object.create(PaletteController.prototype)
  const column = swatch("#ff0000")
  controller.columnTargets = [column]
  controller.visionSelectTargets = [{ value: "normal" }, { value: "normal" }]
  controller.history = [[{ hex: "#ff0000", locked: true }]]
  controller.pointer = 0
  const originalHistory = structuredClone(controller.history)
  for (const type of ["protanopia", "protanomaly", "deuteranopia", "deuteranomaly", "tritanopia", "tritanomaly", "achromatopsia", "achromatomaly", "normal"]) {
    controller.changeVision({ target: { value: type } })
    controller.visionValueChanged()
    assert.deepEqual(controller.visionSelectTargets.map(s => s.value), [type, type])
    assert.deepEqual(controller.getExportHexes(), ["#ff0000"])
    assert.equal(column.querySelector('input[type="color"]').value, "#ff0000")
    assert.equal(column.querySelector('[data-palette-target="colorName"]').textContent, "Original name")
    assert.equal(column.dataset.locked, "true")
    assert.deepEqual(controller.history, originalHistory)
    assert.equal(controller.pointer, 0)
    if (type !== "normal") assert.notEqual(column.style.backgroundColor, "#ff0000")
  }
  assert.equal(column.style.backgroundColor, "#ff0000")
  controller.visionValue = "achromatopsia"
  controller.setHexInColumn(column, "#00ff00")
  assert.equal(column.style.backgroundColor, "#dcdcdc")
  assert.equal(column.style.color, "#000000")
  assert.deepEqual(controller.getExportHexes(), ["#00ff00"])
  assert.equal(column.querySelector('input[type="color"]').value, "#00ff00")
})

test("space on a vision selector uses the native control without generating colors", () => {
  const controller = Object.create(PaletteController.prototype)
  controller.generate = () => assert.fail("must not generate while operating a selector")
  controller.handleKeydown({ code: "Space", target: { closest: () => ({ tagName: "SELECT" }) }, preventDefault: () => assert.fail("must preserve native keyboard behavior") })
})

test("swatch labels choose readable black or white even around middle gray", () => {
  const controller = Object.create(PaletteController.prototype)
  controller.visionValue = "normal"
  for (const [hex, expected] of [["#777777", "#000000"], ["#ff0000", "#000000"], ["#0000ff", "#FFFFFF"], ["#ffffff", "#000000"]]) {
    const column = swatch(hex)
    controller.paintColumn(column, hex)
    assert.equal(column.style.color, expected, hex)
    assert.equal(column.style.backgroundColor, hex)
  }
})
