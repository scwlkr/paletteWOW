import { test } from "node:test"
import assert from "node:assert/strict"
import { extractPalette } from "../../app/javascript/lib/extract.js"

test("extraction preserves distinct solid colors and orders them by pixel population", () => {
  const pixels = [[0, 0, 255], [255, 0, 0], [255, 0, 0], [0, 255, 0], [255, 0, 0]]
  assert.deepEqual(extractPalette(pixels, 3), ["#ff0000", "#0000ff", "#00ff00"])
})

test("a reduced palette represents each cluster with its weighted mean", () => {
  const pixels = [[240, 0, 0], [240, 0, 0], [255, 0, 0], [0, 0, 240], [0, 0, 255], [0, 0, 255]]
  assert.deepEqual(extractPalette(pixels, 2), ["#0000fa", "#f50000"])
})

test("empty, invalid and solid-color images do not invent colors or return invalid hex", () => {
  assert.deepEqual(extractPalette([], 5), [])
  assert.deepEqual(extractPalette([[NaN, 0, 0], [-1, 0, 0], [256, 0, 0], null, [1, 2]], 5), [])
  assert.deepEqual(extractPalette([[12, 34, 56], [12, 34, 56]], 10), ["#0c2238"])
})

test("requested palette sizes stay between two and ten, with deterministic output", () => {
  const pixels = Array.from({ length: 20 }, (_, i) => [i * 12, i * 12, i * 12])
  for (const [count, expected] of [[1, 2], [2, 2], [5, 5], [10, 10], [99, 10]]) {
    const palette = extractPalette(pixels, count)
    assert.equal(palette.length, expected)
    assert.deepEqual(palette, extractPalette(pixels.toReversed(), count))
    assert.ok(palette.every(hex => /^#[0-9a-f]{6}$/.test(hex)))
  }
})
