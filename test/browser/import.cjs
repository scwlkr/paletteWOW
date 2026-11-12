// Run with playwright-core on NODE_PATH and BASE_URL pointing at the app.
const { chromium } = require("playwright-core")
const assert = require("node:assert/strict")
const { mkdir } = require("node:fs/promises")

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  try {
    const base = process.env.BASE_URL || "http://127.0.0.1:3000"
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
    const errors = []
    page.on("pageerror", error => errors.push(error.message))
    const dialog = page.getByRole("dialog", { name: "Import palette", exact: true })
    const field = page.getByRole("textbox", { name: "Colors", exact: true })
    const colors = () => page.locator('[data-palette-target="column"] input[type="color"]').evaluateAll(inputs => inputs.map(input => input.value))
    const open = async () => {
      await page.locator('button[data-action="click->palette#openImport"]:visible').click()
      await dialog.waitFor({ state: "visible" })
      assert.equal(await field.evaluate(element => element === document.activeElement), true)
    }
    const loaded = async expected => {
      await page.waitForFunction(expected => {
        const inputs = [...document.querySelectorAll('[data-palette-target="column"] input[type="color"]')]
        return inputs.length === expected.length && inputs.every((input, i) => input.value === expected[i])
      }, expected)
    }

    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 })
      await page.goto(base + "/ff0000-654321")
      await loaded(["#ff0000", "#654321"])
      // Give generator Undo a real previous state before testing textarea Undo.
      await page.locator('[data-palette-target="column"] input[type="color"]').nth(1).evaluate(input => {
        input.value = "#123456"
        input.dispatchEvent(new Event("input", { bubbles: true }))
        input.dispatchEvent(new Event("change", { bubbles: true }))
      })
      await loaded(["#ff0000", "#123456"])
      await open()
      // Invalid imports stay in the dialog and leave the existing palette intact.
      for (const invalid of ["", "#fff", "#12345678 #ggg"]) {
        await field.fill(invalid)
        await dialog.getByRole("button", { name: "Import", exact: true }).click()
        assert.equal(await dialog.locator('[role="status"]').textContent(), "Enter at least two hex colors.")
        assert.equal(await field.getAttribute("aria-invalid"), "true")
        assert.deepEqual(await colors(), ["#ff0000", "#123456"])
      }
      await field.fill("#abc #000")
      assert.equal(await field.getAttribute("aria-invalid"), null)
      // Native textarea undo and spaces cannot trigger generator shortcuts.
      await page.keyboard.press("End")
      await page.keyboard.type(" ")
      await page.keyboard.press("Control+z")
      assert.deepEqual(await colors(), ["#ff0000", "#123456"])
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false)
      assert.equal(await dialog.evaluate(element => {
        const rect = element.getBoundingClientRect()
        return rect.left >= 0 && rect.right <= window.innerWidth
      }), true)
      if (process.env.SCREENSHOTS && [1440, 390].includes(width)) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/import-${width}.png`, fullPage: true })
      }
      await page.keyboard.press("Escape")
      await dialog.waitFor({ state: "hidden" })
      assert.equal(await page.evaluate(() => document.activeElement.matches('[data-action="click->palette#openImport"]')), true)
      await open()
      assert.equal(await field.inputValue(), "")
      assert.equal(await dialog.locator('[role="status"]').textContent(), "")
      await dialog.getByRole("button", { name: "Cancel", exact: true }).click()
      await dialog.waitFor({ state: "hidden" })
      assert.deepEqual(await colors(), ["#ff0000", "#123456"])

      for (const input of [
        "ABC, #123456, fff",
        ":root { --brand: #abc; --accent: #123456; --paper: #fff; }",
        '["#ABC", "123456", "#fff"]',
        "https://coolors.co/palette/abc-123456-fff?ref=deadbe#face00",
        "https://palettewow.xyz/aabbcc-123456-ffffff"
      ]) {
        await open()
        await field.fill(input)
        // Keyboard submission exercises focus and native form handling.
        await dialog.getByRole("button", { name: "Import", exact: true }).focus()
        await page.keyboard.press("Enter")
        await page.waitForURL(base + "/aabbcc-123456-ffffff")
        await loaded(["#aabbcc", "#123456", "#ffffff"])
        await dialog.waitFor({ state: "hidden" })
      }
      await open()
      await field.fill(Array(11).fill("#abc").join(" "))
      await dialog.getByRole("button", { name: "Import", exact: true }).click()
      await page.waitForURL(base + "/" + Array(10).fill("aabbcc").join("-"))
      await loaded(Array(10).fill("#aabbcc"))
      await page.reload()
      await loaded(Array(10).fill("#aabbcc"))
      await page.goBack()
      await loaded(["#aabbcc", "#123456", "#ffffff"])
      await open()
      await page.keyboard.press("Escape")
    }
    assert.deepEqual(errors, [])
    console.log("Import browser checks passed: all formats, invalid inputs, cancel/Escape, focus, keyboard isolation, ten-color limit, reload/back and desktop/phone layout.")
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
