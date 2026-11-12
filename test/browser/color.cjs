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
    await page.goto(base + "/ff0000-123456")
    const names = page.locator('[data-palette-target="column"] a[data-palette-target="colorName"]')
    await page.waitForFunction(() => document.querySelector('[data-palette-target="colorName"]').textContent === "Red")
    assert.equal(await names.first().getAttribute("href"), "/color/ff0000")
    assert.equal(await names.nth(1).getAttribute("href"), "/color/123456")
    await names.first().focus()
    await page.keyboard.press("Enter")
    await page.waitForURL(base + "/color/ff0000")
    assert.equal(await page.locator("h1").textContent(), "#FF0000")
    assert.equal(await page.title(), "#FF0000 · Red · paletteWOW")

    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 })
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false)
      for (const link of await page.locator("article a").all()) {
        assert.equal(await link.evaluate(element => {
          const bounds = element.getBoundingClientRect()
          return bounds.width > 0 && bounds.left >= 0 && bounds.right <= window.innerWidth
        }), true)
      }
      if (process.env.SCREENSHOTS && width !== 320) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/color-${width}.png`, fullPage: true })
      }
    }

    // Every harmony hands its displayed colors to the existing generator.
    const harmonies = await page.locator('section[aria-labelledby="harmonies-title"] a').evaluateAll(links => links.map(link => ({
      href: link.getAttribute("href"), colors: [...link.querySelectorAll("li")].map(item => item.textContent.trim().toLowerCase())
    })))
    for (const { href, colors } of harmonies) {
      await page.goto(base + href)
      await page.waitForFunction(expected => {
        const inputs = [...document.querySelectorAll('[data-palette-target="column"] input[type="color"]')]
        return inputs.length === expected.length && inputs.every((input, i) => input.value === expected[i])
      }, colors)
    }

    // Editing, history and new-column creation must update the link's destination.
    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.goto(base + "/ff0000-123456")
    await page.waitForFunction(() => document.querySelector('[data-palette-target="column"] input[type="color"]')?.value === "#ff0000")
    await page.locator('[data-palette-target="column"] input[type="color"]').first().evaluate(input => {
      input.value = "#ffffff"
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
    })
    assert.equal(await names.first().getAttribute("href"), "/color/ffffff")
    assert.equal(await names.first().textContent(), "White")
    await page.getByRole("button", { name: "Undo", exact: true }).first().click()
    await page.waitForFunction(() => document.querySelector('[data-palette-target="colorName"]').getAttribute("href") === "/color/ff0000")
    assert.equal(await names.first().getAttribute("href"), "/color/ff0000")
    await page.getByRole("button", { name: "Redo", exact: true }).first().click()
    await page.waitForFunction(() => document.querySelector('[data-palette-target="colorName"]').getAttribute("href") === "/color/ffffff")
    assert.equal(await names.first().getAttribute("href"), "/color/ffffff")
    await page.locator('[data-palette-target="column"]').first().hover()
    await page.getByRole("button", { name: "Add Color", exact: true }).first().click()
    assert.equal(await names.count(), 3)
    const colors = await page.locator('[data-palette-target="column"] input[type="color"]').evaluateAll(inputs => inputs.map(input => input.value))
    assert.deepEqual(await names.evaluateAll(links => links.map(link => link.getAttribute("href"))), colors.map(hex => "/color/" + hex.slice(1)))
    await names.nth(1).focus()
    await page.keyboard.press("Enter")
    await page.waitForURL(base + "/color/" + colors[1].slice(1))
    await page.goBack()
    await page.waitForFunction(() => document.querySelectorAll('[data-palette-target="column"] a[href^="/color/"]').length >= 2)
    assert.deepEqual(errors, [])

    // The complete color page, including navigable harmonies and tints, works without JS.
    const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
    try {
      const staticPage = await noJs.newPage()
      await staticPage.goto(base + "/color/6195ed")
      assert.equal(await staticPage.locator("header p").textContent(), "Cornflower Blue")
      assert.equal(await staticPage.locator("dd").count(), 6)
      await staticPage.locator('section[aria-label="Tints"] a').last().click()
      await staticPage.waitForURL(base + "/color/ffffff")
      assert.equal(await staticPage.locator("h1").textContent(), "#FFFFFF")
      assert.equal((await staticPage.goto(base + "/color/not-a-color")).status(), 404)
    } finally {
      await noJs.close()
    }
    console.log("Color page browser checks passed: swatch links, keyboard navigation, every harmony, editing/history/new columns, Turbo return, desktop/phone layout and JavaScript-disabled navigation.")
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
