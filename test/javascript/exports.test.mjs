import { test } from "node:test"
import assert from "node:assert/strict"
import {
  cssVariables, tailwindConfig, svgMarkup, shareUrl,
  scss, less, json, jsArray, embedHtml, aseFile
} from "../../app/javascript/lib/exports.js"

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

test("SCSS and LESS preserve keys, color order and numbered fallbacks", () => {
  assert.equal(scss(hexes), "$color-1: #aBc123;\n$color-2: #FFFFFF;\n$color-3: #aBc123;")
  assert.equal(less(hexes), "@color-1: #aBc123;\n@color-2: #FFFFFF;\n@color-3: #aBc123;")

  const names = Object.freeze(["brand", ""])
  assert.equal(scss(hexes, names), "$brand: #aBc123;\n$color-2: #FFFFFF;\n$color-3: #aBc123;")
  assert.equal(less(hexes, names), "@brand: #aBc123;\n@color-2: #FFFFFF;\n@color-3: #aBc123;")
})

test("SCSS and LESS kebab-case names and dedupe colliding keys", () => {
  const names = Object.freeze(["Tuft Blue", "Tuft Blue", "Hot Pink"])
  assert.equal(scss(hexes, names), "$tuft-blue: #aBc123;\n$tuft-blue-2: #FFFFFF;\n$hot-pink: #aBc123;")
  assert.equal(less(hexes, names), "@tuft-blue: #aBc123;\n@tuft-blue-2: #FFFFFF;\n@hot-pink: #aBc123;")
})

test("export keys replace invalid characters and avoid leading digits", () => {
  const names = Object.freeze(["2 Tone!", "Already-kebab", "  "])
  assert.equal(scss(hexes, names), "$color-2-tone: #aBc123;\n$already-kebab: #FFFFFF;\n$color-3: #aBc123;")
  assert.deepEqual(JSON.parse(json(hexes, names)), {
    "color-2-tone": "#aBc123",
    "already-kebab": "#FFFFFF",
    "color-3": "#aBc123"
  })
})

test("CSS and Tailwind use the same sanitised keys as SCSS, LESS and JSON", () => {
  const names = Object.freeze(["Tuft Blue", "Tuft Blue", "Hot Pink"])
  assert.equal(cssVariables(hexes, names), ":root {\n  --tuft-blue: #aBc123;\n  --tuft-blue-2: #FFFFFF;\n  --hot-pink: #aBc123;\n}")
  assert.equal(tailwindConfig(hexes, names), "{\n  colors: {\n    'tuft-blue': '#aBc123',\n    'tuft-blue-2': '#FFFFFF',\n    'hot-pink': '#aBc123',\n  }\n}")
})

test("JSON maps names to hex values in palette order", () => {
  assert.equal(json(hexes), '{\n  "color-1": "#aBc123",\n  "color-2": "#FFFFFF",\n  "color-3": "#aBc123"\n}')
  assert.deepEqual(JSON.parse(json(hexes, ["brand", ""])), {
    brand: "#aBc123",
    "color-2": "#FFFFFF",
    "color-3": "#aBc123"
  })
  assert.deepEqual(JSON.parse(json(hexes, ["Tuft Blue", "Tuft Blue", "Hot Pink"])), {
    "tuft-blue": "#aBc123",
    "tuft-blue-2": "#FFFFFF",
    "hot-pink": "#aBc123"
  })
  assert.equal(json([]), "{}")
})

test("jsArray is a valid JavaScript array of hex values", () => {
  assert.equal(jsArray(hexes), '["#aBc123","#FFFFFF","#aBc123"]')
  assert.deepEqual(JSON.parse(jsArray(hexes)), hexes)
  assert.equal(jsArray([]), "[]")
})

test("embedHtml renders escaped labels and one swatch per color", () => {
  assert.equal(
    embedHtml(hexes, ['<script>"', ""]),
    '<div style="display: flex; height: 120px; border-radius: 8px; overflow: hidden;">' +
      '<div title="&lt;script&gt;&quot;" style="flex: 1; background-color: #aBc123;"></div>' +
      '<div title="#FFFFFF" style="flex: 1; background-color: #FFFFFF;"></div>' +
      '<div title="#aBc123" style="flex: 1; background-color: #aBc123;"></div>' +
    '</div>'
  )
  assert.equal(embedHtml([]), '<div style="display: flex; height: 120px; border-radius: 8px; overflow: hidden;"></div>')
})

test("aseFile writes the ASE header and one RGB color block per swatch", () => {
  const names = ["Brand", "White", "Accent"]
  const bytes = aseFile(hexes, names)

  assert.ok(bytes instanceof Uint8Array)
  assert.equal(ascii(bytes, 0, 4), "ASEF")
  assert.equal(uint16(bytes, 4), 1)
  assert.equal(uint16(bytes, 6), 0)
  assert.equal(uint32(bytes, 8), 3)

  let offset = 12
  names.forEach((name, i) => {
    assert.equal(uint16(bytes, offset), 1)
    const length = uint32(bytes, offset + 2)
    const blockStart = offset + 6
    const blockEnd = blockStart + length

    assert.equal(uint16(bytes, blockStart), name.length + 1)
    assert.equal(utf16be(bytes, blockStart + 2, name.length), name)
    assert.equal(uint16(bytes, blockStart + 2 + name.length * 2), 0)
    assert.equal(ascii(bytes, blockStart + 4 + name.length * 2, 4), "RGB ")

    const colorOffset = blockStart + 8 + name.length * 2
    const expected = ["#aBc123", "#FFFFFF", "#aBc123"][i]
    assert.ok(Math.abs(float32(bytes, colorOffset) - parseInt(expected.slice(1, 3), 16) / 255) < 0.000001)
    assert.ok(Math.abs(float32(bytes, colorOffset + 4) - parseInt(expected.slice(3, 5), 16) / 255) < 0.000001)
    assert.ok(Math.abs(float32(bytes, colorOffset + 8) - parseInt(expected.slice(5, 7), 16) / 255) < 0.000001)
    assert.equal(uint16(bytes, colorOffset + 12), 2)

    assert.equal(blockEnd, colorOffset + 14)
    offset = blockEnd
  })

  assert.equal(offset, bytes.length)
})

test("aseFile uses numbered fallback names and accepts hashes or bare hex values", () => {
  const bytes = aseFile(["aBc123", "#FFF"])
  assert.equal(uint32(bytes, 8), 2)

  const firstNameLength = uint16(bytes, 18)
  assert.equal(firstNameLength, "Color 1".length + 1)
  assert.equal(utf16be(bytes, 20, "Color 1".length), "Color 1")

  const firstBlockLength = uint32(bytes, 14)
  const secondBlock = 18 + firstBlockLength
  const secondNameLength = uint16(bytes, secondBlock + 6)
  assert.equal(secondNameLength, "Color 2".length + 1)
  assert.equal(utf16be(bytes, secondBlock + 8, "Color 2".length), "Color 2")

  const colorOffset = secondBlock + 12 + secondNameLength * 2
  assert.equal(float32(bytes, colorOffset), 1)
  assert.equal(float32(bytes, colorOffset + 4), 1)
  assert.equal(float32(bytes, colorOffset + 8), 1)
})

test("aseFile writes an empty ASE file when there are no colors", () => {
  const bytes = aseFile([])
  assert.equal(bytes.length, 12)
  assert.equal(ascii(bytes, 0, 4), "ASEF")
  assert.equal(uint16(bytes, 4), 1)
  assert.equal(uint16(bytes, 6), 0)
  assert.equal(uint32(bytes, 8), 0)
})

function ascii(bytes, offset, length) {
  return String.fromCharCode(...bytes.slice(offset, offset + length))
}

function uint16(bytes, offset) {
  return (bytes[offset] << 8) | bytes[offset + 1]
}

function uint32(bytes, offset) {
  return ((bytes[offset] << 24) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3]) >>> 0
}

function float32(bytes, offset) {
  return new DataView(bytes.buffer, bytes.byteOffset + offset, 4).getFloat32(0, false)
}

function utf16be(bytes, offset, length) {
  let value = ""
  for (let i = 0; i < length; i++) {
    value += String.fromCharCode(uint16(bytes, offset + i * 2))
  }
  return value
}
