import { test } from "node:test"
import assert from "node:assert/strict"
import { cssVariables, tailwindConfig, svgMarkup, shareUrl } from "../../app/javascript/lib/exports.js"

const hexes = Object.freeze(["#aBc123", "#FFFFFF", "#aBc123"])

test("cssVariables preserves numbering, color order, case and whitespace", () => {
  assert.equal(cssVariables(hexes), ":root {\n  --color-1: #aBc123;\n  --color-2: #FFFFFF;\n  --color-3: #aBc123;\n}")
})

test("tailwindConfig preserves keys, color order, case and trailing commas", () => {
  assert.equal(tailwindConfig(hexes), "{\n  colors: {\n    'color-1': '#aBc123',\n    'color-2': '#FFFFFF',\n    'color-3': '#aBc123',\n  }\n}")
})

test("CSS and Tailwind accept export names with numbered fallbacks", () => {
  const names = Object.freeze(["brand", ""])
  assert.equal(cssVariables(hexes, names), ":root {\n  --brand: #aBc123;\n  --color-2: #FFFFFF;\n  --color-3: #aBc123;\n}")
  assert.equal(tailwindConfig(hexes, names), "{\n  colors: {\n    'brand': '#aBc123',\n    'color-2': '#FFFFFF',\n    'color-3': '#aBc123',\n  }\n}")
})

test("svgMarkup preserves dimensions, positions, color order and newlines", () => {
  assert.equal(svgMarkup(hexes), '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="500" viewBox="0 0 300 500">\n<rect x="0" y="0" width="100" height="500" fill="#aBc123"/>\n<rect x="100" y="0" width="100" height="500" fill="#FFFFFF"/>\n<rect x="200" y="0" width="100" height="500" fill="#aBc123"/>\n</svg>')
})

test("shareUrl removes hashes and preserves color order, case and origin", () => {
  assert.equal(shareUrl("https://palettewow.xyz", hexes), "https://palettewow.xyz/aBc123-FFFFFF-aBc123")
  assert.equal(shareUrl("http://localhost:3000", ["123456", "#abcdef"]), "http://localhost:3000/123456-abcdef")
})

test("empty palettes retain the original export wrappers", () => {
  assert.equal(cssVariables([]), ":root {\n}")
  assert.equal(tailwindConfig([]), "{\n  colors: {\n  }\n}")
  assert.equal(svgMarkup([]), '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="500" viewBox="0 0 0 500">\n</svg>')
  assert.equal(shareUrl("https://palettewow.xyz", []), "https://palettewow.xyz/")
})
