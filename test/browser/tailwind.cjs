// Run with playwright-core on NODE_PATH and BASE_URL pointing at the app.
const { chromium } = require("playwright-core")
const assert = require("node:assert/strict")
const { mkdir } = require("node:fs/promises")

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  try {
    const base = process.env.BASE_URL || "http://127.0.0.1:3000"
    const context = await browser.newContext({ permissions: ["clipboard-read", "clipboard-write"], viewport: { width: 1440, height: 1000 } })
    const page = await context.newPage()
    const errors = []
    page.on("pageerror", error => errors.push(error.message))
    await page.goto(base)
    await page.locator("summary").click()
    await page.getByRole("navigation", { name: "Tools", exact: true }).getByRole("link", { name: "Tailwind", exact: true }).click()
    await page.waitForURL(base + "/tailwind")
    const swatches = page.locator("article button[data-hex]")
    assert.equal(await swatches.count(), 288)

    // Copy the value, and follow its separate details link with the keyboard.
    const red = page.getByRole("button", { name: "Copy red-500 #fb2c36", exact: true })
    await red.focus()
    await page.keyboard.press("Enter")
    await page.getByRole("status").filter({ hasText: "red-500: copied #fb2c36." }).waitFor()
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), "#fb2c36")
    await page.keyboard.press("Tab")
    assert.equal(await page.locator(":focus").getAttribute("href"), "/color/fb2c36")
    await page.keyboard.press("Enter")
    await page.waitForURL(base + "/color/fb2c36")
    assert.equal(await page.locator("h1").textContent(), "#FB2C36")
    await page.goBack()
    await page.waitForURL(base + "/tailwind")
    for (const [name, hex] of [["slate-50", "#f8fafc"], ["Black", "#000000"], ["White", "#ffffff"]]) {
      await page.getByRole("button", { name: `Copy ${name} ${hex}`, exact: true }).click()
      await page.getByRole("status").filter({ hasText: `${name}: copied ${hex}.` }).waitFor()
      assert.equal(await page.evaluate(() => navigator.clipboard.readText()), hex)
    }

    // Clipboard refusal must be reported honestly; retry succeeds when restored.
    await page.evaluate(() => {
      window.originalWriteText = navigator.clipboard.writeText.bind(navigator.clipboard)
      navigator.clipboard.writeText = () => Promise.reject(new Error("Clipboard denied"))
    })
    await red.click()
    await page.getByRole("status").filter({ hasText: "Could not copy. Select the hex value: #fb2c36." }).waitFor()
    await page.evaluate(() => { navigator.clipboard.writeText = window.originalWriteText })
    await red.click()
    await page.getByRole("status").filter({ hasText: "red-500: copied #fb2c36." }).waitFor()

    // All controls remain visible and fit on phones; no horizontal scrolling.
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 })
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false)
      assert.equal(await page.locator("article button, article a").evaluateAll(elements => elements.every(element => {
        const rect = element.getBoundingClientRect()
        return rect.width > 0 && rect.left >= 0 && rect.right <= innerWidth
      })), true)
      if (process.env.SCREENSHOTS && [1440, 390].includes(width)) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.evaluate(() => scrollTo(0, 0))
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/tailwind-${width}.png` })
      }
    }

    const expected = await page.locator('section[aria-labelledby="slate-title"] button').evaluateAll(buttons => buttons.slice(1).map(button => button.dataset.hex))
    await page.getByRole("link", { name: "Open slate 100–950 in generator", exact: true }).click()
    await page.waitForFunction(colors => {
      const inputs = [...document.querySelectorAll('[data-palette-target="column"] input[type="color"]')]
      return inputs.length === colors.length && inputs.every((input, i) => input.value === colors[i])
    }, expected)
    await page.goBack()
    await page.waitForURL(base + "/tailwind")
    await red.click()
    await page.getByRole("status").filter({ hasText: "red-500: copied #fb2c36." }).waitFor()
    assert.deepEqual(errors, [])
    await context.close()

    const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
    try {
      const staticPage = await noJs.newPage()
      await staticPage.goto(base + "/tailwind")
      assert.equal(await staticPage.locator("article button[data-hex]").count(), 288)
      await staticPage.getByRole("link", { name: "red-500 color details #fb2c36", exact: true }).click()
      await staticPage.waitForURL(base + "/color/fb2c36")
      assert.equal(await staticPage.locator("h1").textContent(), "#FB2C36")
    } finally {
      await noJs.close()
    }
    console.log("Tailwind browser checks passed: copying, keyboard details links, denied clipboard/retry, generator handoff, Turbo return, desktop/phone layouts and JavaScript-disabled navigation.")
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
