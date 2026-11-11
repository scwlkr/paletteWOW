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
  controller.hasContrastDialogTarget = true
  controller.contrastDialogTarget = {
    open: false,
    showModal() { this.open = true }
  }
  return controller
}

test("contrast renders every text/background pair for palettes of 2 to 10 colors, including duplicates", () => {
  const palette = ["000000", "ffffff", "ff0000", "00ff00", "0000ff", "ffff00", "00ffff", "ff00ff", "777777", "000000"]
  for (let count = 2; count <= 10; count++) {
    const controller = controllerFor(palette.slice(0, count))
    controller.openContrast()
    assert.equal(controller.contrastDialogTarget.open, true)
    const html = controller.contrastTableTarget.innerHTML
    const cells = html.match(/<td\b[^>]*>[\s\S]*?<\/td>/g)
    assert.equal(cells.length, count * count)
    assert.equal((html.match(/scope="row"/g) || []).length, count)
    assert.equal((html.match(/scope="col"/g) || []).length, count)
    for (let row = 0; row < count; row++) {
      for (let column = 0; column < count; column++) {
        const cell = cells[row * count + column]
        assert.ok(cell.includes(`color: #${palette[row]}; background-color: #${palette[column]}`))
        if (row === column) assert.match(cell, /1\.00:1[\s\S]*× Fail/)
      }
    }
    assert.match(cells[1], /21\.00:1[\s\S]*✓ AAA/)
  }
})

test("contrast displays normal-text WCAG results without rounding failures into passes", () => {
  const controller = controllerFor(["fff", "000", "767676", "478080", "59595a", "777"])
  controller.openContrast()
  const cells = controller.contrastTableTarget.innerHTML.match(/<td\b[^>]*>[\s\S]*?<\/td>/g)
  for (const [index, ratio, level] of [
    [0, "1.00", "× Fail"], [1, "21.00", "✓ AAA"], [2, "4.54", "✓ AA"],
    [3, "4.50", "× Fail"], [4, "7.00", "✓ AA"], [5, "4.48", "× Fail"]
  ]) {
    assert.ok(cells[index].includes(`${ratio}:1`))
    assert.ok(cells[index].includes(level))
  }
})

test("reopening contrast uses the current palette after editing, reordering and removing colors", () => {
  const controller = controllerFor(["000", "fff", "ff0000"])
  controller.openContrast()
  controller.contrastDialogTarget.open = false
  controller.columnTargets = controllerFor(["fff", "767676"]).columnTargets
  controller.openContrast()
  const html = controller.contrastTableTarget.innerHTML
  assert.equal((html.match(/<td\b/g) || []).length, 4)
  assert.match(html, /color: #ffffff; background-color: #767676/)
  assert.doesNotMatch(html, /#000000|#ff0000/)
})

test("generator shortcuts cannot change the palette while contrast is open", () => {
  const controller = controllerFor(["000", "fff"])
  const calls = []
  controller.generate = () => calls.push("generate")
  controller.undo = () => calls.push("undo")
  controller.redo = () => calls.push("redo")
  controller.openContrast()
  for (const shortcut of [{ code: "Space" }, { ctrlKey: true, key: "z" }, { metaKey: true, shiftKey: true, key: "z" }]) {
    controller.handleKeydown({ ...shortcut, preventDefault: () => calls.push("preventDefault") })
  }
  assert.deepEqual(calls, [])
  controller.contrastDialogTarget.open = false
  controller.handleKeydown({ code: "Space", preventDefault() {} })
  assert.deepEqual(calls, ["generate"])
})
