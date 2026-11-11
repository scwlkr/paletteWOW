import { test } from "node:test"
import assert from "node:assert/strict"
import { simulate } from "../../app/javascript/lib/vision.js"

// Reference: published Machado matrices applied to linear red [1, 0, 0],
// clipped to the sRGB gamut, then encoded to 8-bit sRGB.
const redFixtures = {
  protanopia: "#6d5f00", protanomaly: "#a75900",
  deuteranopia: "#a39000", deuteranomaly: "#bb7d00",
  tritanopia: "#ff000f", tritanomaly: "#ff0004",
  achromatopsia: "#7f7f7f", achromatomaly: "#c06464"
}

test("vision previews match linear RGB references for all full and mild forms", () => {
  for (const [type, expected] of Object.entries(redFixtures)) {
    assert.equal(simulate("#ff0000", type), expected, type)
  }
})

test("cone deficiency matrices match independent mixed-color references", () => {
  const fixtures = {
    protanopia: "#50699b", protanomaly: "#49679a",
    deuteranopia: "#425f98", deuteranomaly: "#406198",
    tritanopia: "#007278", tritanomaly: "#1c6b8b"
  }
  for (const [type, expected] of Object.entries(fixtures)) assert.equal(simulate("#336699", type), expected, type)
})

test("all vision previews preserve neutral colors and produce valid gamut-clipped hex", () => {
  for (const type of Object.keys(redFixtures)) {
    for (const hex of ["#000000", "#808080", "#ffffff"]) assert.equal(simulate(hex, type), hex)
    for (const hex of ["#00ff00", "#0000ff", "#336699"]) assert.match(simulate(hex, type), /^#[0-9a-f]{6}$/)
  }
  assert.equal(simulate("#00ff00", "achromatopsia"), "#dcdcdc")
  assert.equal(simulate("#0000ff", "achromatopsia"), "#4c4c4c")
})

test("normal and unknown modes preserve normalized colors; invalid inputs are rejected", () => {
  assert.equal(simulate(" #AbC "), "#aabbcc")
  assert.equal(simulate("ABCDEF", "normal"), "#abcdef")
  for (const type of ["unknown", "constructor", "__proto__"]) assert.equal(simulate("abc", type), "#aabbcc")
  for (const hex of [null, undefined, 123, "", "#12345", "#gg0000", "#12345678"]) assert.equal(simulate(hex, "protanopia"), null)
})
