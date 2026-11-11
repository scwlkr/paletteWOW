import { test } from "node:test"
import assert from "node:assert/strict"
import { register } from "node:module"

register("./support/palette_loader.mjs", import.meta.url)
const { default: PaletteController } = await import("../../app/javascript/controllers/palette_controller.js")

function controllerFor(colors) {
  const controller = Object.create(PaletteController.prototype)
  controller.columnTargets = colors.map(textContent => ({
    querySelector: () => ({ textContent })
  }))
  controller.contrastTableTarget = { innerHTML: "" }
  controller.hasContrastModalTarget = true
  controller.contrastModalTarget = {
    open: false,
    showModal() { this.open = true },
    close() { this.open = false }
  }
  return controller
}

test("contrast dialog renders every ordered pair for palettes of 2 to 10 colours", () => {
  const palette = ["000000", "ffffff", "ff0000", "00ff00", "0000ff", "ffff00", "00ffff", "ff00ff", "777777", "000000"]
  for (let count = 2; count <= 10; count++) {
    const controller = controllerFor(palette.slice(0, count))
    controller.openContrastModal()
    const html = controller.contrastTableTarget.innerHTML
    assert.equal(controller.contrastModalTarget.open, true)
    assert.equal((html.match(/<td\b/g) || []).length, count * count)
    assert.equal((html.match(/scope="row"/g) || []).length, count)
    assert.equal((html.match(/scope="col"/g) || []).length, count + 1)
    assert.equal((html.match(/21\.00:1/g) || []).length, count === 10 ? 4 : 2)
    const cells = html.match(/<td\b[^>]*>[\s\S]*?<\/td>/g)
    for (let row = 0; row < count; row++) {
      for (let column = 0; column < count; column++) {
        assert.ok(cells[row * count + column].includes(`color: #${palette[row]}; background-color: #${palette[column]}`))
      }
    }
  }
})

test("contrast dialog displays normal-text WCAG levels without rounding a failure into a pass", () => {
  const controller = controllerFor(["fff", "000", "767676", "478080", "59595a"])
  controller.openContrastModal()
  // Read the white-text row's cells in background order.
  const cells = controller.contrastTableTarget.innerHTML.match(/<td\b[^>]*>[\s\S]*?<\/td>/g).slice(0, 5)
  for (const [index, ratio, level] of [
    [0, "1.00", "× Fail"], [1, "21.00", "✓ AAA"], [2, "4.54", "✓ AA"],
    [3, "4.50", "× Fail"], [4, "7.00", "✓ AA"]
  ]) {
    assert.ok(cells[index].includes(`${ratio}:1`))
    assert.ok(cells[index].includes(level))
  }
})

test("reopening contrast uses the current palette after colours are changed, reordered or removed", () => {
  const controller = controllerFor(["000", "fff", "ff0000"])
  controller.openContrastModal()
  controller.closeContrastModal()
  assert.equal(controller.contrastModalTarget.open, false)
  controller.columnTargets = controllerFor(["fff", "767676"]).columnTargets
  controller.openContrastModal()
  const html = controller.contrastTableTarget.innerHTML
  assert.equal((html.match(/<td\b/g) || []).length, 4)
  assert.match(html, /color: #ffffff; background-color: #767676/)
  assert.doesNotMatch(html, /#000000|#ff0000/)
})

test("generator shortcuts leave the palette unchanged while contrast is open", () => {
  const controller = controllerFor(["000", "fff"])
  const calls = []
  controller.generate = () => calls.push("generate")
  controller.undo = () => calls.push("undo")
  controller.redo = () => calls.push("redo")
  controller.openContrastModal()
  const shortcuts = [{ code: "Space" }, { ctrlKey: true, key: "z" }, { metaKey: true, shiftKey: true, key: "z" }]
  for (const shortcut of shortcuts) {
    controller.handleKeydown({ ...shortcut, preventDefault: () => calls.push("preventDefault") })
  }
  assert.deepEqual(calls, [])
  controller.closeContrastModal()
  controller.handleKeydown({ code: "Space", preventDefault() {} })
  assert.deepEqual(calls, ["generate"])
})
