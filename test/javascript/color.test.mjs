import { test } from "node:test"
import assert from "node:assert"
import {
  contrastMatrix, contrastRatio, hexToRgb, hslToRgb, isLightColor, normalizeHex, randomHex,
  relativeLuminance, rgbToCmyk, rgbToHex, rgbToHsb, rgbToHsl, rgbToLab, wcagLevels
} from "../../app/javascript/lib/color.js"

test("contrastMatrix includes every ordered pair and self-pair for two to ten colours", () => {
  const palette = ["#000000", "#ffffff", "#ff0000", "#00ff00", "#0000ff", "#777777", "#123456", "#abcdef", "#ffff00", "#00ffff"]
  for (let size = 2; size <= 10; size++) {
    const matrix = contrastMatrix(palette.slice(0, size))
    assert.equal(matrix.length, size)
    matrix.forEach((row, i) => {
      assert.equal(row.length, size)
      row.forEach((cell, j) => {
        assert.equal(cell.text, palette[i])
        assert.equal(cell.background, palette[j])
        assert.ok(cell.ratio >= 1 && cell.ratio <= 21)
      })
      assert.equal(row[i].ratio, 1)
      assert.deepEqual(row[i].levels, { aa: false, aaLarge: false, aaa: false, aaaLarge: false })
    })
    assert.equal(matrix[0][1].ratio, 21)
    assert.equal(matrix[1][0].ratio, 21)
    assert.deepEqual(matrix[0][1].levels, { aa: true, aaLarge: true, aaa: true, aaaLarge: true })
  }
})

test("contrastMatrix distinguishes AA, large text only and failing combinations", () => {
  const matrix = contrastMatrix(["#fff", "#000", "#767676", "#777", "#aaa", "#fff"])
  assert.equal(matrix[0][2].ratio, 4.54)
  assert.deepEqual(matrix[0][2].levels, { aa: true, aaLarge: true, aaa: false, aaaLarge: true })
  assert.equal(matrix[0][3].ratio, 4.48)
  assert.deepEqual(matrix[0][3].levels, { aa: false, aaLarge: true, aaa: false, aaaLarge: false })
  assert.equal(matrix[0][4].ratio, 2.32)
  assert.deepEqual(matrix[0][4].levels, { aa: false, aaLarge: false, aaa: false, aaaLarge: false })
  assert.equal(matrix[0][5].ratio, 1)
  assert.equal(matrix[5][0].ratio, 1)
})

test("normalizeHex expands and lowercases three-digit hex codes", () => {
  assert.equal(normalizeHex("abc"), "#aabbcc")
  assert.equal(normalizeHex("#abc"), "#aabbcc")
  assert.equal(normalizeHex("#ABC"), "#aabbcc")
})

test("normalizeHex lowercases six-digit hex codes", () => {
  assert.equal(normalizeHex("aabbcc"), "#aabbcc")
  assert.equal(normalizeHex("#AABBCC"), "#aabbcc")
  assert.equal(normalizeHex("#aAbBcC"), "#aabbcc")
})

test("normalizeHex rejects invalid input", () => {
  const invalidValues = ["", "#", "ab", "abcd", "#12345", "#1234567", "gggggg", "#ggg", "red", null, undefined, 123]

  invalidValues.forEach((value) => {
    assert.equal(normalizeHex(value), null)
  })
})

test("isLightColor identifies light and dark colors", () => {
  assert.equal(isLightColor("#FFFFFF"), true)
  assert.equal(isLightColor("#000000"), false)
  assert.equal(isLightColor("#FFF"), true)
  assert.equal(isLightColor("#000"), false)
  assert.equal(isLightColor("#FFFF00"), true)
  assert.equal(isLightColor("#0000FF"), false)
})

test("isLightColor treats invalid input as not light", () => {
  assert.equal(isLightColor("not-a-color"), false)
  assert.equal(isLightColor(""), false)
})

test("randomHex returns an uppercase six-digit hex color", () => {
  for (let i = 0; i < 100; i++) {
    assert.match(randomHex(), /^#[0-9A-F]{6}$/)
  }
})

test("hexToRgb converts three- and six-digit hex codes to rgb channels", () => {
  assert.deepEqual(hexToRgb("#FF0000"), { r: 255, g: 0, b: 0 })
  assert.deepEqual(hexToRgb("#aBc123"), { r: 171, g: 193, b: 35 })
  assert.deepEqual(hexToRgb("abc"), { r: 170, g: 187, b: 204 })
  assert.deepEqual(hexToRgb("#000000"), { r: 0, g: 0, b: 0 })
})

test("hexToRgb rejects invalid input", () => {
  assert.equal(hexToRgb("red"), null)
  assert.equal(hexToRgb("#12345"), null)
  assert.equal(hexToRgb(null), null)
})

test("rgbToHex clamps, rounds and formats channels as lowercase hex", () => {
  assert.equal(rgbToHex(255, 0, 0), "#ff0000")
  assert.equal(rgbToHex(171, 193, 35), "#abc123")
  assert.equal(rgbToHex(300, -5, 12.4), "#ff000c")
  assert.equal(rgbToHex(0, 0, 0), "#000000")
})

test("rgbToHex and hexToRgb round-trip every channel", () => {
  for (let i = 0; i < 50; i++) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    assert.deepEqual(hexToRgb(rgbToHex(r, g, b)), { r, g, b })
  }
})

test("rgbToHsl converts primary and mid colors", () => {
  assert.deepEqual(rgbToHsl(255, 0, 0), { h: 0, s: 100, l: 50 })
  assert.deepEqual(rgbToHsl(0, 255, 0), { h: 120, s: 100, l: 50 })
  assert.deepEqual(rgbToHsl(0, 0, 255), { h: 240, s: 100, l: 50 })
  assert.deepEqual(rgbToHsl(255, 255, 255), { h: 0, s: 0, l: 100 })
  assert.deepEqual(rgbToHsl(0, 0, 0), { h: 0, s: 0, l: 0 })
  assert.deepEqual(rgbToHsl(128, 128, 128), { h: 0, s: 0, l: 50.2 })
})

test("rgbToHsl handles blue-dominant hues without negative wrap", () => {
  assert.deepEqual(rgbToHsl(51, 102, 204), { h: 220, s: 60, l: 50 })
  assert.deepEqual(rgbToHsl(255, 255, 0), { h: 60, s: 100, l: 50 })
  assert.deepEqual(rgbToHsl(255, 0, 255), { h: 300, s: 100, l: 50 })
  assert.deepEqual(rgbToHsl(0, 255, 255), { h: 180, s: 100, l: 50 })
})

test("hslToRgb converts hues, saturations and lightnesses to rgb", () => {
  assert.deepEqual(hslToRgb(0, 100, 50), { r: 255, g: 0, b: 0 })
  assert.deepEqual(hslToRgb(120, 100, 50), { r: 0, g: 255, b: 0 })
  assert.deepEqual(hslToRgb(240, 100, 50), { r: 0, g: 0, b: 255 })
  assert.deepEqual(hslToRgb(0, 0, 100), { r: 255, g: 255, b: 255 })
  assert.deepEqual(hslToRgb(0, 0, 0), { r: 0, g: 0, b: 0 })
  assert.deepEqual(hslToRgb(42, 100, 50), { r: 255, g: 179, b: 0 })
  assert.deepEqual(hslToRgb(220, 60, 50), { r: 51, g: 102, b: 204 })
})

test("hslToRgb wraps out-of-range hues", () => {
  assert.deepEqual(hslToRgb(480, 100, 50), { r: 0, g: 255, b: 0 })
  assert.deepEqual(hslToRgb(-120, 100, 50), { r: 0, g: 0, b: 255 })
})

test("rgbToHsl and hslToRgb round-trip within two channel steps", () => {
  for (let i = 0; i < 50; i++) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const { h, s, l } = rgbToHsl(r, g, b)
    const back = hslToRgb(h, s, l)
    assert.ok(Math.abs(back.r - r) <= 2)
    assert.ok(Math.abs(back.g - g) <= 2)
    assert.ok(Math.abs(back.b - b) <= 2)
  }
})

test("rgbToHsb reports hue, saturation and brightness", () => {
  assert.deepEqual(rgbToHsb(255, 0, 0), { h: 0, s: 100, b: 100 })
  assert.deepEqual(rgbToHsb(255, 255, 255), { h: 0, s: 0, b: 100 })
  assert.deepEqual(rgbToHsb(0, 0, 0), { h: 0, s: 0, b: 0 })
  assert.deepEqual(rgbToHsb(0, 255, 255), { h: 180, s: 100, b: 100 })
  assert.deepEqual(rgbToHsb(51, 102, 204), { h: 220, s: 75, b: 80 })
  assert.deepEqual(rgbToHsb(128, 64, 32), { h: 20, s: 75, b: 50.2 })
})

test("rgbToCmyk converts primaries and grays", () => {
  assert.deepEqual(rgbToCmyk(255, 255, 255), { c: 0, m: 0, y: 0, k: 0 })
  assert.deepEqual(rgbToCmyk(0, 0, 0), { c: 0, m: 0, y: 0, k: 100 })
  assert.deepEqual(rgbToCmyk(255, 0, 0), { c: 0, m: 100, y: 100, k: 0 })
  assert.deepEqual(rgbToCmyk(0, 255, 0), { c: 100, m: 0, y: 100, k: 0 })
  assert.deepEqual(rgbToCmyk(0, 0, 255), { c: 100, m: 100, y: 0, k: 0 })
  assert.deepEqual(rgbToCmyk(51, 102, 204), { c: 75, m: 50, y: 0, k: 20 })
})

test("rgbToLab matches CIE reference values for primaries and neutrals", () => {
  const reference = rgbToLab(255, 0, 0)
  assert.ok(Math.abs(reference.l - 53.24) < 0.5)
  assert.ok(Math.abs(reference.a - 80.09) < 0.5)
  assert.ok(Math.abs(reference.b - 67.2) < 0.5)

  const green = rgbToLab(0, 255, 0)
  assert.ok(Math.abs(green.l - 87.73) < 0.5)
  assert.ok(Math.abs(green.a - -86.18) < 0.5)
  assert.ok(Math.abs(green.b - 83.18) < 0.5)

  const blue = rgbToLab(0, 0, 255)
  assert.ok(Math.abs(blue.l - 32.3) < 0.5)
  assert.ok(Math.abs(blue.a - 79.2) < 0.5)
  assert.ok(Math.abs(blue.b - -107.86) < 0.5)

  assert.deepEqual(rgbToLab(255, 255, 255), { l: 100, a: 0, b: 0 })
  assert.deepEqual(rgbToLab(0, 0, 0), { l: 0, a: 0, b: 0 })
})

test("relativeLuminance follows the WCAG 2.x channel weights", () => {
  assert.equal(relativeLuminance("#ffffff"), 1)
  assert.equal(relativeLuminance("#000000"), 0)
  assert.ok(Math.abs(relativeLuminance("#ff0000") - 0.2126) < 1e-9)
  assert.ok(Math.abs(relativeLuminance("#00ff00") - 0.7152) < 1e-9)
  assert.ok(Math.abs(relativeLuminance("#0000ff") - 0.0722) < 1e-9)
  assert.ok(Math.abs(relativeLuminance("#3366cc") - 0.1457) < 0.001)
})

test("relativeLuminance rejects invalid input", () => {
  assert.equal(relativeLuminance("not-a-color"), null)
  assert.equal(relativeLuminance(""), null)
})

test("contrastRatio measures known pairs with the WCAG 2.x formula", () => {
  assert.equal(contrastRatio("#ffffff", "#000000"), 21)
  assert.equal(contrastRatio("#000000", "#ffffff"), 21)
  assert.equal(contrastRatio("#ffffff", "#ffffff"), 1)
  assert.equal(contrastRatio("#000000", "#000000"), 1)
  assert.equal(contrastRatio("#ffffff", "#767677"), 4.54)
  assert.equal(contrastRatio("#ffffff", "#3366cc"), 5.37)
})

test("contrastRatio rejects invalid input", () => {
  assert.equal(contrastRatio("red", "#000000"), null)
  assert.equal(contrastRatio("#ffffff", ""), null)
})

test("wcagLevels reports which AA and AAA thresholds a ratio passes", () => {
  assert.deepEqual(wcagLevels(21), { aa: true, aaLarge: true, aaa: true, aaaLarge: true })
  assert.deepEqual(wcagLevels(7), { aa: true, aaLarge: true, aaa: true, aaaLarge: true })
  assert.deepEqual(wcagLevels(4.5), { aa: true, aaLarge: true, aaa: false, aaaLarge: true })
  assert.deepEqual(wcagLevels(3), { aa: false, aaLarge: true, aaa: false, aaaLarge: false })
  assert.deepEqual(wcagLevels(2.9), { aa: false, aaLarge: false, aaa: false, aaaLarge: false })
  assert.deepEqual(wcagLevels(1), { aa: false, aaLarge: false, aaa: false, aaaLarge: false })
})

test("wcagLevels treats non-numeric ratios as failing every level", () => {
  assert.deepEqual(wcagLevels(null), { aa: false, aaLarge: false, aaa: false, aaaLarge: false })
  assert.deepEqual(wcagLevels(NaN), { aa: false, aaLarge: false, aaa: false, aaaLarge: false })
})
