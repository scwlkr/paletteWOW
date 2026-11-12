// Run with playwright-core on NODE_PATH and BASE_URL pointing at the app.
const { chromium } = require("playwright-core")
const assert = require("node:assert/strict")
const { mkdir } = require("node:fs/promises")

const palette = ["152238", "f5efe1", "e76f51", "2a9d8f", "e9c46a", "582f0e", "cdb4db", "a2d2ff", "606c38", "ffafcc"]
const rgb = hex => `rgb(${hex.match(/../g).map(part => parseInt(part, 16)).join(", ")})`
const fills = page => page.locator('svg[role="img"]').evaluateAll(designs => designs.map(svg =>
  [...svg.querySelectorAll("[fill], [stroke]")].map(shape => [getComputedStyle(shape).fill, getComputedStyle(shape).stroke])))

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  try {
    const base = process.env.BASE_URL || "http://127.0.0.1:3000"
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    const page = await context.newPage()
    const errors = []
    page.on("pageerror", error => errors.push(error.message))
    for (let count = 2; count <= 10; count++) {
      const colors = palette.slice(0, count)
      await page.goto(`${base}/visualize/${colors.join("-")}`)
      await page.getByRole("heading", { name: "Palette visualizer" }).waitFor()
      assert.equal(await page.getByRole("img").count(), 4)
      assert.equal(await page.getByRole("list", { name: "Palette colors" }).locator("li").count(), count)
      const before = await fills(page)
      const allowed = new Set(["none", ...colors.map(rgb)])
      for (const design of before) assert.ok(design.flat().every(color => allowed.has(color)))
      await page.getByRole("button", { name: "Shuffle roles" }).focus()
      await page.keyboard.press("Enter")
      await page.getByRole("status").filter({ hasText: "Color roles shuffled." }).waitFor()
      const after = await fills(page)
      for (let index = 0; index < 4; index++) {
        assert.notDeepEqual(after[index], before[index])
        assert.ok(after[index].flat().every(color => allowed.has(color)))
      }
      assert.equal(await page.getByRole("link", { name: "Generator", exact: true }).getAttribute("href"), `/${colors.join("-")}`)
    }
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 })
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
      assert.equal(await page.getByRole("img").evaluateAll(elements => elements.every(element => {
        const rect = element.getBoundingClientRect()
        return rect.width > 0 && rect.left >= 0 && rect.right <= innerWidth
      })), true)
      if (process.env.SCREENSHOTS && [1440, 390].includes(width)) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/visualizer-${width}.png`, fullPage: true })
      }
      await page.getByRole("link", { name: "Generator", exact: true }).click()
      await page.waitForURL(`${base}/${palette.join("-")}`)
      await page.waitForFunction(() => document.querySelectorAll('[data-palette-target="column"]').length === 10)
      await page.waitForFunction(() => document.querySelectorAll('[data-palette-target="hexCode"] span.inline-block')[9]?.textContent.toLowerCase().includes("ffafcc"))
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
      const button = page.getByRole("button", { name: "Visualize", exact: true }).filter({ visible: true })
      await button.focus()
      await page.keyboard.press("Enter")
      await page.waitForURL(`${base}/visualize/${palette.join("-")}`)
    }

    // The toolbar must read edits, rather than an old URL or simulated colors.
    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.goto(`${base}/${palette.slice(0, 3).join("-")}`)
    await page.waitForFunction(() => document.querySelector('[data-palette-target="hexCode"] span').textContent.toLowerCase().includes("152238"))
    const picker = page.locator('[data-palette-target="column"] input[type="color"]').first()
    await picker.evaluate(input => { input.value = "#123abc"; input.dispatchEvent(new Event("input", { bubbles: true })); input.dispatchEvent(new Event("change", { bubbles: true })) })
    await page.getByLabel("Color vision").filter({ visible: true }).selectOption("protanopia")
    await page.getByRole("button", { name: "Visualize", exact: true }).filter({ visible: true }).click()
    await page.waitForURL(`${base}/visualize/123abc-${palette[1]}-${palette[2]}`)
    await page.getByRole("link", { name: "Generator", exact: true }).click()
    await page.waitForURL(`${base}/123abc-${palette[1]}-${palette[2]}`)
    await page.getByRole("button", { name: "Visualize", exact: true }).filter({ visible: true }).click()
    await page.waitForURL(`${base}/visualize/123abc-${palette[1]}-${palette[2]}`)

    await page.goto(`${base}/visualize/777777-777777`)
    await page.getByRole("button", { name: "Shuffle roles" }).click()
    assert.ok((await fills(page)).flat(2).every(color => [rgb("777777"), "none"].includes(color)))
    assert.deepEqual(errors, [])
    await context.close()
    const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
    try {
      const staticPage = await noJs.newPage()
      await staticPage.goto(`${base}/visualize/${palette.join("-")}`)
      assert.ok((await fills(staticPage)).flat(2).every(color => ["none", ...palette.map(rgb)].includes(color)))
      await staticPage.getByRole("link", { name: "Generator", exact: true }).click()
      await staticPage.waitForURL(`${base}/${palette.join("-")}`)
    } finally {
      await noJs.close()
    }
    console.log("Visualizer browser checks passed: four recolored designs, 2–10 colors, shuffle, edited palette handoff, Turbo return, repeated colors, keyboard, desktop/phone layouts and static previews without JavaScript.")
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
