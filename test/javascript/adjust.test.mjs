import { test } from "node:test"
import assert from "node:assert/strict"
import { adjust } from "../../app/javascript/lib/color.js"

test("neutral adjustments preserve exact RGB values without a lossy HSL round trip", () => {
  for (const hex of ["#123456", "#c0ffee", "#000001", "#ffffff", "#000000"]) {
    assert.equal(adjust(hex), hex)
    assert.equal(adjust(hex, { hue: 0, saturation: 0, brightness: 0, temperature: 0 }), hex)
  }
  assert.equal(adjust(" ABC "), "#aabbcc")
})

test("hue wraps and saturation/brightness clamp at their endpoints", () => {
  const cases = [
    ["#ff0000", { hue: 120 }, "#00ff00"],
    ["#ff0000", { hue: -120 }, "#0000ff"],
    ["#ff0000", { hue: 480 }, "#00ff00"],
    ["#ff0000", { saturation: -100 }, "#808080"],
    ["#ff0000", { saturation: 100 }, "#ff0000"],
    ["#ff0000", { brightness: 100 }, "#ffffff"],
    ["#ff0000", { brightness: -100 }, "#000000"],
    ["#ff0000", { hue: 120, saturation: -50, brightness: 25 }, "#9fdf9f"]
  ]
  for (const [hex, options, expected] of cases) assert.equal(adjust(hex, options), expected)
})

test("temperature warms or cools RGB without corrupting neutral channels or exceeding the gamut", () => {
  assert.equal(adjust("#808080", { temperature: 100 }), "#c08040")
  assert.equal(adjust("#808080", { temperature: -100 }), "#4080c0")
  assert.equal(adjust("#ff0000", { temperature: 200 }), "#ff0000")
  assert.equal(adjust("#0000ff", { temperature: -200 }), "#0000ff")
  assert.equal(adjust("#123456", { temperature: 50 }), "#323436")
})

test("adjust rejects invalid colors and non-finite settings", () => {
  for (const hex of [null, "", "red", "#12345", "#gggggg"]) assert.equal(adjust(hex), null)
  for (const name of ["hue", "saturation", "brightness", "temperature"]) {
    for (const value of [NaN, Infinity, "10"]) assert.equal(adjust("#123456", { [name]: value }), null)
  }
})
