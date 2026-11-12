import { test } from "node:test"
import assert from "node:assert/strict"
import { parsePalette } from "../../app/javascript/lib/color.js"

test("palette imports accept lists, CSS, JSON and shared URLs in order", () => {
  const expected = ["#aabbcc", "#123456", "#ffffff"]
  for (const input of [
    "ABC, 123456, fff",
    "#ABC\n#123456 #fff",
    "ABC, #123456, fff",
    "abc;123456|fff",
    "abc-123456-fff",
    ':root { --brand: #ABC; --accent: #123456; --paper: #fff; }',
    '["#ABC", "123456", "#fff"]',
    "https://coolors.co/abc-123456-fff",
    "https://coolors.co/palette/abc-123456-fff?ref=deadbe#face00",
    "https://palettewow.xyz/aabbcc-123456-ffffff/",
    "palettewow.xyz/abc-123456-fff",
    "www.coolors.co/abc-123456-fff"
  ]) assert.deepEqual(parsePalette(input), expected, input)
})

test("palette imports ignore invalid values without extracting parts of identifiers or alpha colors", () => {
  for (const input of [null, undefined, 42, {}, "", "   ", "red blue", "#12 #12345 #1234567 #12345678 #ggg", "foo#abc #abcdefg ##abc", '["#fff",', "https://palettewow.xyz/image?colors=ff0000-ffffff", "https://coolors.co/not-a-palette", "https://%invalid/fff-000"]) {
    assert.deepEqual(parsePalette(input), [], String(input))
  }
  assert.deepEqual(parsePalette('[null, 123456, "bad value", "#fff", "#000"]'), ["#ffffff", "#000000"])
  assert.deepEqual(parsePalette(".beaded { --bad: #12345678; color: #fff; background: #000; }"), ["#ffffff", "#000000"])
})

test("palette imports preserve repeated colors and cap the result at ten", () => {
  assert.deepEqual(parsePalette("#fff #000 #fff"), ["#ffffff", "#000000", "#ffffff"])
  const input = ["000000", "111111", "222222", "333333", "444444", "555555", "666666", "777777", "888888", "999999", "aaaaaa"]
  assert.deepEqual(parsePalette(JSON.stringify(input)), ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999"])
})
