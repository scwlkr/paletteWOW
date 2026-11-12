// Run with playwright-core on NODE_PATH and BASE_URL pointing at the app.
const { chromium } = require("playwright-core")
const assert = require("node:assert/strict")
const { mkdir } = require("node:fs/promises")

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  const base = process.env.BASE_URL || "http://127.0.0.1:3000"
  const errors = []
  const page = await browser.newPage()
  page.on("pageerror", error => errors.push(error.message))
  const palette = "/ff0000-ffffff-000000-123456-abcdef-ff0000-ffffff-000000-123456-abcdef"
  const columns = page.locator('[data-palette-target="column"]')
  const routes = ["/", palette, "/palettes", "/contrast", "/image", "/gradient", "/gradient-palette", "/color/6195ed", "/colors", "/tailwind", "/visualize/ff0000-ffffff", "/privacy"]
  try {
    for (const width of [375, 1440]) {
      await page.setViewportSize({ width, height: 667 })
      for (const dark of [false, true]) {
        await page.emulateMedia({ colorScheme: dark ? "dark" : "light" })
        for (const path of routes) {
          await page.goto(base + path)
          await page.locator("main").waitFor()
          await page.waitForTimeout(250)
          if (path === palette) await page.waitForFunction(() => document.querySelectorAll('[data-palette-target="column"]').length === 10)
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${path} overflows at ${width}`)
          // Inspect the browser accessibility tree: every visible button has a name.
          const tree = await page.locator("body").ariaSnapshot()
          assert.doesNotMatch(tree, /^\s*- (button|combobox)(?:\s+\[.*\])?:?$/m, `Unnamed control: ${path}`)
          if (path === palette && width === 375) {
            assert.ok(await columns.evaluateAll(nodes => nodes.every(node => node.getBoundingClientRect().height >= 112)), "Ten phone swatches must not compress or clip their controls")
            await columns.last().getByRole("button", { name: "Toggle Lock" }).click()
            assert.equal(await columns.last().getByRole("button", { name: "Toggle Lock" }).getAttribute("aria-pressed"), "true")
          }
          if (process.env.SCREENSHOTS && width === 375 && !dark && [palette, "/contrast", "/gradient", "/colors"].includes(path)) {
            await mkdir(process.env.SCREENSHOTS, { recursive: true })
            const name = path === palette ? "generator" : path.slice(1)
            if (path === palette) await page.locator('[data-palette-target="container"]').evaluate(el => { el.scrollTop = 0 })
            await page.screenshot({ path: `${process.env.SCREENSHOTS}/accessibility-${name}-375.png`, fullPage: true })
          }
        }
      }
    }
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto(base + "/ff0000-123456-abcdef")
    await page.waitForFunction(() => document.querySelector('[data-palette-target="colorName"]').textContent === "Red")
    const editor = columns.first().getByRole("button", { name: "Edit #FF0000 Red" })
    // Native buttons activate through both keys. Observe the real input click without
    // opening the operating system color picker in a headless browser.
    await columns.first().locator('input[type="color"]').evaluate(input => {
      input.addEventListener("click", event => { event.preventDefault(); input.dataset.activations = String(Number(input.dataset.activations || 0) + 1) })
    })
    await editor.focus()
    await page.keyboard.press("Enter")
    await page.keyboard.press("Space")
    assert.equal(await columns.first().locator('input[type="color"]').getAttribute("data-activations"), "2")
    const lock = columns.first().getByRole("button", { name: "Toggle Lock" })
    await lock.focus()
    await page.keyboard.press("Space")
    assert.equal(await lock.evaluate(el => el === document.activeElement), true)
    assert.equal(await lock.getAttribute("aria-pressed"), "true")
    const mover = columns.first().getByRole("button", { name: /Reorder color/ })
    await mover.focus()
    await page.keyboard.press("ArrowRight")
    assert.equal(await columns.nth(1).getByRole("button", { name: /Reorder color/ }).evaluate(el => el === document.activeElement), true)
    assert.equal(await columns.nth(1).getAttribute("aria-label"), "#FF0000 Red")
    await page.keyboard.press("Control+z")
    await page.waitForFunction(() => document.querySelector('[data-palette-target="column"]').getAttribute("aria-label") === "#FF0000 Red")
    // Added columns and history must receive names and state too.
    await columns.first().getByRole("button", { name: "Add Color", exact: true }).filter({ visible: true }).click()
    await page.waitForFunction(() => document.querySelectorAll('[data-palette-target="column"]').length === 4)
    assert.match(await columns.nth(1).getAttribute("aria-label"), /^#[A-F0-9]{6} .+/)
    await columns.nth(1).getByRole("button", { name: "Remove Color", exact: true }).filter({ visible: true }).click()
    assert.equal(await columns.nth(1).getByRole("button", { name: "Remove Color", exact: true }).filter({ visible: true }).evaluate(el => el === document.activeElement), true)

    // Dragging still works after giving the drag handle button semantics.
    const source = columns.first().getByRole("button", { name: /Reorder color/ }).filter({ visible: true })
    await source.hover()
    const start = await source.boundingBox()
    const destination = await columns.nth(1).boundingBox()
    await page.mouse.move(start.x + start.width / 2, start.y + start.height / 2)
    await page.mouse.down()
    await page.mouse.move(destination.x + destination.width * 0.8, start.y + start.height / 2, { steps: 20 })
    await page.mouse.up()
    await page.waitForFunction(() => document.querySelectorAll('[data-palette-target="column"]')[1].getAttribute("aria-label") === "#FF0000 Red")
    await page.keyboard.press("Control+z")
    await page.waitForFunction(() => document.querySelector('[data-palette-target="column"]').getAttribute("aria-label") === "#FF0000 Red")

    // Each modal keeps keyboard focus inside, ignores palette shortcuts, closes on
    // Escape, and returns focus to its opener. Run both desktop and phone layouts.
    for (const width of [1440, 375]) {
      await page.setViewportSize({ width, height: 667 })
      if (width === 375) {
        const phoneMover = columns.first().getByRole("button", { name: /Reorder color/ }).filter({ visible: true })
        await phoneMover.focus()
        await page.keyboard.press("ArrowDown")
        assert.equal(await columns.nth(1).getAttribute("aria-label"), "#FF0000 Red")
        await page.keyboard.press("Control+z")
        await page.waitForFunction(() => document.querySelector('[data-palette-target="column"]').getAttribute("aria-label") === "#FF0000 Red")
      }
      const cases = [
        ["Color info", "colorInfoDialog"], ["Contrast", "contrastDialog"],
        ["Adjust", "adjustDialog"], ["Import", "importDialog"],
        ["Export Palette", "exportModal"], ...(width === 1440 ? [["View Shades", "shadesModal"]] : [])
      ]
      for (const [name, target] of cases) {
        const opener = page.getByRole("button", { name, exact: true }).filter({ visible: true }).first()
        await opener.focus()
        await page.keyboard.press("Enter")
        const dialog = page.locator(`dialog[data-palette-target="${target}"][open]`)
        await dialog.waitFor()
        const original = await columns.locator('input[type="color"]').evaluateAll(nodes => nodes.map(node => node.value))
        for (let i = 0; i < 35; i++) {
          await page.keyboard.press(i < 20 ? "Tab" : "Shift+Tab")
          assert.equal(await dialog.evaluate(el => el.contains(document.activeElement)), true, `${name} lost focus at ${width}`)
        }
        await page.keyboard.press("Control+z")
        assert.deepEqual(await columns.locator('input[type="color"]').evaluateAll(nodes => nodes.map(node => node.value)), original)
        assert.equal(await dialog.evaluate(el => el.scrollWidth <= el.clientWidth), true, `${name} overflows at ${width}`)
        if (target === "shadesModal") {
          await page.setViewportSize({ width: 375, height: 667 })
          await page.waitForFunction(() => {
            const box = document.querySelector('dialog[data-palette-target="shadesModal"][open]').getBoundingClientRect()
            return box.left >= 0 && box.right <= innerWidth && box.top >= 0 && box.bottom <= innerHeight
          })
          await page.setViewportSize({ width, height: 667 })
        }
        await page.keyboard.press("Escape")
        await dialog.waitFor({ state: "hidden" })
        assert.equal(await opener.evaluate(el => el === document.activeElement), true, `${name} did not restore focus`)
      }
    }
    await page.goto(base + "/privacy")
    await page.keyboard.press("Tab")
    await page.getByRole("link", { name: "Skip to content" }).focus()
    await page.keyboard.press("Enter")
    await page.waitForFunction(() => document.activeElement === document.querySelector("main"))
    assert.deepEqual(errors, [])
    console.log("Accessibility browser checks passed: every page at 375/1440 in both themes; named controls; ten-color phone scrolling; keyboard editing, locking, reordering and history; all dialog focus traps, Escape and focus return; skip link.")
  } finally { await browser.close() }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
