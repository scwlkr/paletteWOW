// Run with playwright-core on NODE_PATH and BASE_URL pointing at the app.
const { chromium } = require("playwright-core")
const assert = require("node:assert/strict")
const { mkdir, readFile } = require("node:fs/promises")

function styleColors(elements) {
  const canvas = document.createElement("canvas")
  canvas.width = canvas.height = 1
  const ctx = canvas.getContext("2d", { willReadFrequently: true })
  const rgb = color => {
    ctx.clearRect(0, 0, 1, 1)
    ctx.fillStyle = color
    ctx.fillRect(0, 0, 1, 1)
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
    return `rgb(${r}, ${g}, ${b})`
  }
  return elements.map(element => {
    const style = getComputedStyle(element)
    return { background: rgb(style.backgroundColor), text: rgb(style.color) }
  })
}

function contrast(text, background) {
  const luminance = color => {
    const [r, g, b] = color.match(/\d+/g).map(Number).map(value => {
      const channel = value / 255
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  const a = luminance(text), b = luminance(background)
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
}

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  const base = process.env.BASE_URL || "http://127.0.0.1:3000"
  const key = "palettewow-theme"
  const errors = []
  const context = await browser.newContext({ colorScheme: "dark", viewport: { width: 1440, height: 1000 } })
  context.on("page", page => page.on("pageerror", error => errors.push(error.message)))
  const page = await context.newPage()
  const toggle = page.getByRole("switch", { name: "Dark mode", exact: true })
  const theme = async (target, dark) => {
    await target.waitForFunction(dark => document.documentElement.classList.contains("dark") === dark, dark)
    assert.equal(await target.locator('[data-theme-toggle]').getAttribute("aria-checked"), String(dark))
    assert.equal(await target.evaluate(() => getComputedStyle(document.documentElement).colorScheme), dark ? "dark" : "light")
  }
  const colors = () => page.locator('[data-palette-target="column"]').evaluateAll(columns => columns.map(column => ({ background: column.style.backgroundColor, text: column.style.color, hex: column.querySelector('input[type="color"]').value })))
  try {
    await page.goto(base + "/ff0000-000000-ffffff")
    await toggle.waitFor()
    await theme(page, true)
    await page.waitForFunction(() => document.querySelector('[data-palette-target="column"] input').value === "#ff0000")
    const initial = await colors()
    // Device changes apply until an explicit choice, which survives reload and Turbo.
    await page.emulateMedia({ colorScheme: "light" }); await theme(page, false)
    await page.emulateMedia({ colorScheme: "dark" }); await theme(page, true)
    await toggle.focus(); await page.keyboard.press("Space"); await theme(page, false)
    assert.equal(await toggle.evaluate(button => button === document.activeElement), true)
    assert.equal(await page.evaluate(key => localStorage.getItem(key), key), "light")
    assert.deepEqual(await colors(), initial, "Changing the theme preserves every swatch and its text")
    await page.reload(); await theme(page, false)
    await page.getByRole("link", { name: "Colors", exact: true }).click()
    await page.waitForURL(base + "/colors"); await theme(page, false)
    await page.goBack(); await theme(page, false)
    await page.emulateMedia({ colorScheme: "light" }); await toggle.click(); await theme(page, true)
    await page.emulateMedia({ colorScheme: "dark" }); await page.emulateMedia({ colorScheme: "light" }); await theme(page, true)

    // Changing UI appearance must never recolor an exported palette.
    const png = async () => {
      await page.getByRole("button", { name: "Export Palette", exact: true }).filter({ visible: true }).click()
      const dialog = page.getByRole("dialog", { name: "Export Palette", exact: true })
      await dialog.waitFor()
      const [download] = await Promise.all([page.waitForEvent("download"), dialog.getByRole("button", { name: "Image (PNG)", exact: true }).click()])
      assert.equal(await download.failure(), null)
      const bytes = await readFile(await download.path())
      await dialog.waitFor({ state: "hidden" })
      return bytes
    }
    const darkPNG = await png()
    await toggle.click(); await theme(page, false)
    assert.deepEqual(await png(), darkPNG, "Dark and light mode export exactly the same PNG")
    await toggle.click(); await theme(page, true)

    const other = await context.newPage()
    await other.goto(base + "/privacy"); await theme(other, true)
    await toggle.click(); await theme(other, false)
    await page.evaluate(key => localStorage.removeItem(key), key); await theme(other, true)
    await other.close()

    // The head script must resolve a saved override before body parsing, even
    // when the system asks for the opposite theme and module loading is delayed.
    for (const dark of [true, false]) {
      const firstPaint = await browser.newContext({ colorScheme: dark ? "light" : "dark" })
      await firstPaint.addInitScript(({ key, dark }) => {
        localStorage.setItem(key, dark ? "dark" : "light")
        new MutationObserver((_, observer) => {
          if (!document.body) return
          window.themeAtBody = document.documentElement.classList.contains("dark")
          observer.disconnect()
        }).observe(document, { childList: true, subtree: true })
      }, { key, dark })
      const first = await firstPaint.newPage()
      await first.route(/\/assets\/application-.*\.js/, async route => {
        await new Promise(resolve => setTimeout(resolve, 250))
        await route.continue()
      })
      await first.goto(base + "/privacy")
      assert.equal(await first.evaluate(() => window.themeAtBody), dark, "Saved theme applies before the body exists")
      await theme(first, dark)
      await firstPaint.close()
    }

    // Storage refusal must still allow a usable toggle and device default.
    const blocked = await browser.newContext({ colorScheme: "dark" })
    await blocked.addInitScript(() => {
      Object.defineProperty(window, "localStorage", { get() { throw new DOMException("Blocked", "SecurityError") } })
    })
    const privatePage = await blocked.newPage()
    privatePage.on("pageerror", error => errors.push(error.message))
    await privatePage.goto(base + "/privacy"); await theme(privatePage, true)
    await privatePage.getByRole("switch", { name: "Dark mode" }).click(); await theme(privatePage, false)
    await privatePage.getByRole("link", { name: "Colors", exact: true }).click()
    await privatePage.waitForURL(base + "/colors"); await theme(privatePage, false)
    await blocked.close()

    const routes = ["/ff0000-000000-ffffff", "/contrast", "/image", "/gradient", "/gradient-palette", "/color/6195ed", "/colors", "/tailwind", "/visualize/ff0000-000000-ffffff", "/privacy"]
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 })
      for (const path of routes) {
        await page.goto(base + path)
        for (const dark of [false, true]) {
          if ((await toggle.getAttribute("aria-checked")) !== String(dark)) await toggle.click()
          await theme(page, dark)
          const [shell] = await page.locator("body").evaluateAll(styleColors)
          assert.deepEqual(shell, { background: dark ? "rgb(23, 23, 23)" : "rgb(255, 255, 255)", text: dark ? "rgb(245, 245, 245)" : "rgb(23, 23, 23)" }, `${path} at ${width}px`)
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${path} overflows at ${width}px`)
          // Native form fields must use a matching background and readable text.
          const fields = await page.locator('input:not([type="color"]):not([type="checkbox"]):not([type="range"]):not([type="file"]):visible, textarea:visible, select:visible').evaluateAll(styleColors)
          for (const field of fields) assert.ok(contrast(field.text, field.background) >= 4.5, `${path} field contrast ${JSON.stringify(field)}`)
          if (path === "/image") {
            const zone = page.locator('[data-image-target="dropzone"]')
            const border = () => zone.evaluate(element => getComputedStyle(element).borderTopColor)
            const before = await border()
            await zone.dispatchEvent("dragover")
            assert.notEqual(await border(), before, "Image drop highlight is visible in both themes")
            await zone.dispatchEvent("dragleave")
            assert.equal(await border(), before)
          }
          const action = { "/contrast": "Swap colors", "/gradient": "Copy CSS", "/visualize/ff0000-000000-ffffff": "Shuffle roles" }[path]
          if (action) {
            const button = page.getByRole("button", { name: action, exact: true })
            await button.hover()
            const [style] = await button.evaluateAll(styleColors)
            assert.ok(contrast(style.text, style.background) >= 4.5, `${path} hovered action contrast`)
            await page.mouse.move(0, 0)
          }
          if (process.env.SCREENSHOTS && [1440, 390].includes(width) && ["/ff0000-000000-ffffff", "/gradient", "/color/6195ed"].includes(path)) {
            await mkdir(process.env.SCREENSHOTS, { recursive: true })
            await page.screenshot({ path: `${process.env.SCREENSHOTS}/theme-${path.split("/")[1]}-${dark ? "dark" : "light"}-${width}.png`, fullPage: true })
          }
        }
      }
      await page.goto(base + "/ff0000-000000-ffffff")
      await theme(page, true)
      const original = await colors()
      for (const [action, name] of [["openColorInfo", "Color info"], ["openContrast", "Normal text contrast"], ["openAdjust", "Adjust palette"], ["openImport", "Import palette"], ["openExportModal", "Export Palette"]]) {
        await page.locator(`[data-action="click->palette#${action}"]:visible`).first().click()
        const dialog = page.getByRole("dialog", { name, exact: true })
        await dialog.waitFor()
        const surface = action === "openExportModal" ? dialog.locator('[data-palette-target="exportContent"]') : dialog
        assert.equal((await surface.evaluateAll(styleColors))[0].background, "rgb(23, 23, 23)", name)
        if (action === "openContrast") {
          assert.equal((await dialog.locator('th[scope="row"]').first().evaluateAll(styleColors))[0].background, "rgb(23, 23, 23)")
        }
        await page.keyboard.press("Escape"); await dialog.waitFor({ state: "hidden" })
      }
      assert.deepEqual(await colors(), original)
    }
    assert.deepEqual(errors, [])
    console.log("Theme browser checks passed: system/override, reload, Turbo/back, tabs, blocked storage, pre-paint theme, all pages/dialogs at four widths, unchanged swatches.")
  } finally { await context.close(); await browser.close() }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
