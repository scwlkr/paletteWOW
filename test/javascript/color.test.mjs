import { test } from "node:test"
import assert from "node:assert"
import { isLightColor, normalizeHex, randomHex } from "../../app/javascript/lib/color.js"

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
