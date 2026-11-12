// Run with playwright-core on NODE_PATH and BASE_URL pointing at the app.
const { chromium } = require("playwright-core")
const assert = require("node:assert/strict")
const { mkdir } = require("node:fs/promises")

async function check(page, base) {
  await page.goto(base)
  await page.getByRole("link", { name: "Colors", exact: true }).click()
  await page.waitForURL(base + "/colors")
  const colors = page.getByRole("list", { name: "Named colors", exact: true }).getByRole("link")
  assert.equal(await colors.count(), 200)
  await page.getByLabel("Name or hex").fill("#6195ED")
  await page.getByLabel("Name or hex").press("Enter")
  await page.waitForURL(url => url.searchParams.get("q") === "#6195ED")
  assert.equal(await colors.first().getAttribute("href"), "/color/6495ed")
  await colors.first().focus()
  await page.keyboard.press("Enter")
  await page.waitForURL(base + "/color/6495ed")
  assert.equal(await page.locator("h1").textContent(), "#6495ED")
  await page.goBack()
  await page.waitForURL(url => url.pathname === "/colors" && url.searchParams.get("q") === "#6195ED")
  await page.getByRole("link", { name: "Next", exact: true }).click()
  await page.waitForURL(url => url.searchParams.get("page") === "2")
  assert.equal(await page.getByLabel("Name or hex").inputValue(), "#6195ED")
  assert.equal(await colors.count(), 200)
  assert.notEqual(await colors.first().getAttribute("href"), "/color/6495ed")
  await page.getByRole("link", { name: "Previous", exact: true }).click()
  await page.waitForURL(url => url.searchParams.get("page") === "1")
  assert.equal(await colors.first().getAttribute("href"), "/color/6495ed")

  await page.getByLabel("Name or hex").fill("cOrNfLoWeR")
  await page.getByRole("button", { name: "Search", exact: true }).click()
  await page.waitForURL(url => url.searchParams.get("q") === "cOrNfLoWeR")
  assert.equal(await colors.count(), 3)
  await page.getByLabel("Name or hex").fill("x".repeat(500))
  await page.getByRole("button", { name: "Search", exact: true }).click()
  await page.getByRole("status").filter({ hasText: "No colors found." }).waitFor()
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
  await page.getByRole("link", { name: "Clear", exact: true }).click()
  await page.waitForURL(base + "/colors")
  await page.waitForFunction(() => document.querySelector('input[name="q"]').value === "")
  assert.equal(await page.getByLabel("Name or hex").inputValue(), "")
  assert.equal(await colors.count(), 200)
}

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  try {
    const base = process.env.BASE_URL || "http://127.0.0.1:3000"
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    const page = await context.newPage()
    const errors = []
    page.on("pageerror", error => errors.push(error.message))
    await check(page, base)
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 })
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
      assert.equal(await page.locator("article a, article input").evaluateAll(elements => elements.every(element => {
        const rect = element.getBoundingClientRect()
        return rect.width > 0 && rect.left >= 0 && rect.right <= innerWidth
      })), true)
      if (process.env.SCREENSHOTS && [1440, 390].includes(width)) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/named-colors-${width}.png` })
      }
    }
    assert.deepEqual(errors, [])
    await context.close()
    const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
    try {
      await check(await noJs.newPage(), base)
    } finally {
      await noJs.close()
    }
    console.log("Named colors browser checks passed: name/hex search, keyboard details links, pagination, Turbo return, empty results/clear, desktop/phone layouts and JavaScript-disabled workflows.")
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
