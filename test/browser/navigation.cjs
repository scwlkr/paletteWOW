// Run with playwright-core on NODE_PATH and BASE_URL pointing at the app.
const { chromium } = require("playwright-core")
const assert = require("node:assert/strict")
const { mkdir } = require("node:fs/promises")

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  const base = process.env.BASE_URL || "http://127.0.0.1:3000"
  const errors = []
  const context = await browser.newContext()
  const page = await context.newPage()
  page.on("pageerror", error => errors.push(error.message))
  const summary = page.locator("summary")
  const menu = page.getByRole("navigation", { name: "Tools", exact: true })
  const footer = page.getByRole("navigation", { name: "Footer", exact: true })
  const colors = () => page.locator('[data-palette-target="column"] input[type="color"]').evaluateAll(inputs => inputs.map(input => input.value))
  const routes = ["/", "/image", "/contrast", "/gradient", "/gradient-palette", "/visualize/6195ed-f4a261-e9c46a-2a9d8f-264653", "/colors", "/tailwind"]
  try {
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 844 })
      for (const dark of [false, true]) {
        await page.emulateMedia({ colorScheme: dark ? "dark" : "light" })
        await page.goto(base + "/ff0000-654321")
        await page.waitForFunction(() => document.querySelector('[data-palette-target="column"] input').value === "#ff0000")
        const initial = await colors()
        // A disclosure's Space must open it, never generate a new palette.
        await summary.focus()
        await page.keyboard.press("Space")
        await menu.waitFor({ state: "visible" })
        assert.deepEqual(await colors(), initial)
        await page.keyboard.press("Tab")
        assert.equal(await menu.getByRole("link", { name: "Generator", exact: true }).evaluate(el => el === document.activeElement), true)
        await page.keyboard.press("Escape")
        await menu.waitFor({ state: "hidden" })
        assert.equal(await summary.evaluate(el => el === document.activeElement), true)
        await page.keyboard.press("Enter")
        await menu.waitFor({ state: "visible" })
        assert.equal(await menu.evaluate(el => {
          const box = el.getBoundingClientRect()
          return box.left >= 0 && box.right <= innerWidth && box.bottom <= innerHeight
        }), true, `Menu bounds at ${width}px`)
        // Verify the dropdown is above the generator, including its controls.
        assert.equal(await menu.getByRole("link", { name: "Contrast", exact: true }).evaluate(el => {
          const box = el.getBoundingClientRect()
          return el.contains(document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2))
        }), true)
        if (process.env.SCREENSHOTS && [1440, 390].includes(width)) {
          await mkdir(process.env.SCREENSHOTS, { recursive: true })
          await page.screenshot({ path: `${process.env.SCREENSHOTS}/tools-${width}-${dark ? "dark" : "light"}.png` })
        }
        // Tab out closes the disclosure; outside clicks close it too.
        await menu.getByRole("link").last().focus()
        await page.keyboard.press("Tab")
        await menu.waitFor({ state: "hidden" })
        await summary.click()
        await page.getByRole("link", { name: "paletteWOW Home", exact: true }).focus()
        await menu.waitFor({ state: "hidden" })
        await summary.click()
        await page.locator("main").click({ position: { x: 2, y: 2 } })
        await menu.waitFor({ state: "hidden" })
        assert.deepEqual(await colors(), initial)
        // Footer must be physically reachable, rather than covered by a fixed builder.
        await footer.scrollIntoViewIfNeeded()
        const privacy = footer.getByRole("link", { name: "Privacy Policy", exact: true })
        await privacy.click()
        await page.waitForURL(base + "/privacy")
        await page.goBack()
        await menu.waitFor({ state: "hidden" })
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
      }
    }
    // Every header and footer destination works through Turbo, including back/cache.
    for (const source of [menu, footer]) {
      for (const path of routes) {
        await page.goto(base + "/privacy")
        if (source === menu) await summary.click()
        const link = source.locator(`a[href="${path}"]`)
        await link.click()
        await page.waitForURL(base + path)
        await menu.waitFor({ state: "hidden" })
        await page.goBack()
        await menu.waitFor({ state: "hidden" })
      }
    }
    const staticContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 844 } })
    const staticPage = await staticContext.newPage()
    await staticPage.goto(base + "/privacy")
    await staticPage.locator("summary").focus()
    await staticPage.keyboard.press("Space")
    await staticPage.getByRole("navigation", { name: "Tools", exact: true }).getByRole("link", { name: "Contrast", exact: true }).click()
    await staticPage.waitForURL(base + "/contrast")
    await staticPage.getByRole("navigation", { name: "Footer", exact: true }).getByRole("link", { name: "Visualizer", exact: true }).click()
    await staticPage.waitForURL(base + routes[5])
    await staticContext.close()
    assert.deepEqual(errors, [])
    console.log("Navigation browser checks passed: all links, keyboard, palette shortcut isolation, dismissal, Turbo/back, reachable footer, four widths, both themes and JavaScript disabled.")
  } finally { await context.close(); await browser.close() }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
