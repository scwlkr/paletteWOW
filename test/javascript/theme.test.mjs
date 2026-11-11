import { test } from "node:test"
import assert from "node:assert"
import {
  THEME_STORAGE_KEY,
  nextTheme,
  prefersDark,
  resolveTheme,
  saveTheme,
  storedTheme,
  toggleTheme
} from "../../app/javascript/lib/theme.js"

test("resolveTheme follows the stored choice when present", () => {
  assert.equal(resolveTheme("dark", false), "dark")
  assert.equal(resolveTheme("light", true), "light")
})

test("resolveTheme falls back to the device setting when nothing is stored", () => {
  assert.equal(resolveTheme(null, true), "dark")
  assert.equal(resolveTheme(null, false), "light")
  assert.equal(resolveTheme(undefined, true), "dark")
})

test("resolveTheme ignores unknown stored values", () => {
  assert.equal(resolveTheme("blue", true), "dark")
  assert.equal(resolveTheme("blue", false), "light")
})

test("prefersDark reports whether the resolved theme is dark", () => {
  assert.equal(prefersDark("dark", false), true)
  assert.equal(prefersDark("light", true), false)
  assert.equal(prefersDark(null, true), true)
  assert.equal(prefersDark(null, false), false)
})

test("nextTheme flips the theme", () => {
  assert.equal(nextTheme(true), "light")
  assert.equal(nextTheme(false), "dark")
})

test("storedTheme reads only known values", () => {
  const original = globalThis.window
  const store = new Map()
  globalThis.window = {
    localStorage: {
      getItem: (key) => (store.has(key) ? store.get(key) : null),
      setItem: (key, value) => store.set(key, value)
    }
  }

  try {
    assert.equal(storedTheme(), null)
    saveTheme("dark")
    assert.equal(storedTheme(), "dark")
    assert.equal(store.get(THEME_STORAGE_KEY), "dark")
    saveTheme("light")
    assert.equal(storedTheme(), "light")
    store.set(THEME_STORAGE_KEY, "blue")
    assert.equal(storedTheme(), null)
  } finally {
    globalThis.window = original
  }
})

test("storedTheme tolerates unavailable storage", () => {
  const original = globalThis.window
  globalThis.window = {
    localStorage: {
      getItem: () => { throw new Error("blocked") },
      setItem: () => { throw new Error("blocked") }
    }
  }

  try {
    assert.equal(storedTheme(), null)
    assert.doesNotThrow(() => saveTheme("dark"))
    assert.doesNotThrow(() => toggleTheme(true))
  } finally {
    globalThis.window = original
  }
})

test("toggleTheme stores and returns the opposite theme", () => {
  const original = globalThis.window
  const store = new Map()
  globalThis.window = {
    localStorage: {
      getItem: (key) => (store.has(key) ? store.get(key) : null),
      setItem: (key, value) => store.set(key, value)
    }
  }

  try {
    assert.equal(toggleTheme(false), "dark")
    assert.equal(store.get(THEME_STORAGE_KEY), "dark")
    assert.equal(toggleTheme(true), "light")
    assert.equal(store.get(THEME_STORAGE_KEY), "light")
  } finally {
    globalThis.window = original
  }
})
