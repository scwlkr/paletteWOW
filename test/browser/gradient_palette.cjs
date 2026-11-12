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
    await page.goto(base + "/")
    await page.locator("summary").click()
    await page.getByRole("navigation", { name: "Tools", exact: true }).getByRole("link", { name: "Gradient palette", exact: true }).click()
    const swatches = page.locator('[data-gradient-palette-target="swatches"] li')
    const start = page.getByRole("textbox", { name: "Start", exact: true })
    const end = page.getByRole("textbox", { name: "End", exact: true })
    const count = page.getByLabel("Colors", { exact: true })
    const generator = page.getByRole("link", { name: "Open in generator", exact: true })
    await page.waitForFunction(() => document.querySelectorAll('[data-gradient-palette-target="swatches"] li').length === 5)
    await start.fill("#000")
    await end.fill("FFF")
    await count.selectOption("3")
    // The known LAB lightness midpoint differs from RGB's #808080.
    assert.deepEqual(await swatches.allTextContents(), ["#000000", "#777777", "#FFFFFF"])
    assert.equal(await generator.getAttribute("href"), "/000000-777777-ffffff")
    // Reversed endpoints preserve direction; identical endpoints stay identical.
    await start.fill("fff")
    await end.fill("000")
    assert.deepEqual(await swatches.allTextContents(), ["#FFFFFF", "#777777", "#000000"])
    await start.fill("123456")
    await end.fill("#123456")
    await count.selectOption("10")
    assert.deepEqual(await swatches.allTextContents(), Array(10).fill("#123456"))
    // Every supported size keeps both exact endpoints, including saturated colors.
    await start.fill("#FF0000")
    await end.fill("#0000FF")
    for (let size = 3; size <= 10; size++) {
      await count.selectOption(String(size))
      assert.equal(await swatches.count(), size)
      assert.equal(await swatches.first().textContent(), "#FF0000")
      assert.equal(await swatches.last().textContent(), "#0000FF")
    }
    // Invalid input never produces a broken or stale generator handoff.
    const validColors = await swatches.allTextContents()
    for (const value of ["", "#12", "red", "#1234567", "<script>"]) {
      await start.fill(value)
      assert.equal(await start.getAttribute("aria-invalid"), "true")
      assert.equal(await generator.getAttribute("href"), null)
      assert.equal(await generator.getAttribute("aria-disabled"), "true")
      assert.deepEqual(await swatches.allTextContents(), validColors)
      assert.match(await page.getByRole("status").textContent(), /hex color/)
    }
    const picker = page.getByLabel("Start color picker", { exact: true })
    await picker.evaluate(input => { input.value = "#00ff00"; input.dispatchEvent(new Event("input", { bubbles: true })) })
    assert.equal(await start.inputValue(), "#00ff00")
    assert.equal(await start.getAttribute("aria-invalid"), "false")
    assert.equal(await swatches.first().textContent(), "#00FF00")
    assert.equal(await generator.getAttribute("aria-disabled"), null)
    assert.equal(await page.getByRole("status").textContent(), "")
    await end.fill("#aBc")
    assert.equal(await page.getByLabel("End color picker").inputValue(), "#aabbcc")
    assert.equal(await swatches.last().textContent(), "#AABBCC")
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 })
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false)
      for (const swatch of await swatches.all()) {
        assert.equal(await swatch.evaluate(element => {
          const label = element.firstElementChild.getBoundingClientRect()
          const bounds = element.getBoundingClientRect()
          return label.left >= bounds.left && label.right <= bounds.right
        }), true)
      }
      if (process.env.SCREENSHOTS && width !== 320) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/gradient-palette-${width}.png`, fullPage: true })
      }
    }
    const palette = (await swatches.allTextContents()).map(color => color.slice(1).toLowerCase())
    await generator.focus()
    await page.keyboard.press("Enter")
    await page.waitForURL(base + "/" + palette.join("-"))
    await page.waitForFunction(() => document.querySelectorAll('[data-palette-target="column"]').length === 10)
    const hexes = await page.locator('[data-palette-target="column"] [data-palette-target="hexCode"] > span:first-child').allTextContents()
    assert.deepEqual(hexes.map(value => value.trim().replace(/^#/, "").toLowerCase()), palette)
    await page.goBack()
    await page.waitForFunction(() => document.querySelectorAll('[data-gradient-palette-target="swatches"] li').length === 10)
    assert.deepEqual(await swatches.allTextContents(), palette.map(hex => "#" + hex.toUpperCase()))
    await count.selectOption("3")
    assert.equal(await swatches.count(), 3)
    assert.deepEqual(errors, [])
    console.log("Gradient palette browser checks passed: LAB midpoint, exact endpoints, all counts, invalid inputs, pickers, generator handoff, desktop/phone layout and Turbo return.")
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
