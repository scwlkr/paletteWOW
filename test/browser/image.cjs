// Run with Playwright available on NODE_PATH and BASE_URL pointing at a test app.
// SCREENSHOTS optionally saves desktop and phone views for a pull request.
const { chromium } = require("playwright")
const assert = require("node:assert/strict")
const { mkdir } = require("node:fs/promises")

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
    const errors = []
    page.on("pageerror", error => errors.push(error.message))
    const base = process.env.BASE_URL || "http://127.0.0.1:3000"
    await page.goto(`${base}/image`)
    await page.waitForFunction(() => window.Stimulus?.getControllerForElementAndIdentifier(document.querySelector('[data-controller="image"]'), "image"))
    const fixtures = await page.evaluate(() => {
      function png(kind) {
        const canvas = document.createElement("canvas")
        canvas.width = 100
        canvas.height = 80
        const ctx = canvas.getContext("2d")
        if (kind === "solid") {
          ctx.fillStyle = "#123456"
          ctx.fillRect(0, 0, 100, 80)
        } else if (kind === "colors") {
          for (let i = 0; i < 10; i++) {
            ctx.fillStyle = `rgb(${i * 24}, ${255 - i * 24}, ${i * 12})`
            ctx.fillRect(i * 10, 0, 10, 80)
          }
        }
        return canvas.toDataURL("image/png").split(",")[1]
      }
      return { colors: png("colors"), solid: png("solid"), transparent: png("transparent") }
    })
    const status = page.locator('[data-image-target="status"]')
    const results = page.locator('[data-image-target="results"]')
    const swatches = page.locator('[data-image-target="swatches"] li')
    const generator = page.getByText("Open in generator", { exact: true })
    const picker = page.locator('input[type="file"]')
    const requests = []
    // All image operations below must remain local, including the file bytes.
    page.on("request", request => {
      if (/^https?:/.test(request.url())) requests.push({ url: request.url(), method: request.method() })
    })
    async function ready(count) {
      await page.waitForFunction(expected => document.querySelector('[data-image-target="status"]').textContent === `${expected} colors ready.`, count)
      assert.equal(await swatches.count(), count)
      assert.match(await generator.getAttribute("href"), /^\/(?:[a-f0-9]{6}-){1,9}[a-f0-9]{6}$/)
    }
    async function select(kind) {
      await picker.setInputFiles({ name: `${kind}.png`, mimeType: "image/png", buffer: Buffer.from(fixtures[kind], "base64") })
    }
    async function transfer(type, kind) {
      await page.evaluate(({ type, base64 }) => {
        const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0))
        const transfer = new DataTransfer()
        transfer.items.add(new File([bytes], "local.png", { type: "image/png" }))
        const event = type === "paste"
          ? new ClipboardEvent("paste", { bubbles: true, cancelable: true, clipboardData: transfer })
          : new DragEvent("drop", { bubbles: true, cancelable: true, dataTransfer: transfer })
        document.querySelector('[data-image-target="dropzone"]').dispatchEvent(event)
      }, { type, base64: fixtures[kind] })
    }

    await select("colors")
    await ready(5)
    for (const count of [2, 10, 5]) {
      await page.selectOption("#image-count", String(count))
      await ready(count)
    }
    await picker.setInputFiles({ name: "text.txt", mimeType: "text/plain", buffer: Buffer.from("not an image") })
    assert.match(await status.textContent(), /Choose a PNG/)
    assert.equal(await results.isVisible(), false)
    assert.equal(await generator.getAttribute("href"), null)
    for (const buffer of [Buffer.from("broken PNG"), Buffer.from(fixtures.transparent, "base64")]) {
      await picker.setInputFiles({ name: "invalid.png", mimeType: "image/png", buffer })
      await page.waitForFunction(() => document.querySelector('[data-image-target="status"]').textContent.includes("could not be read"))
      assert.equal(await results.isVisible(), false)
    }
    await picker.setInputFiles({ name: "large.png", mimeType: "image/png", buffer: Buffer.alloc(20 * 1024 * 1024 + 1) })
    assert.match(await status.textContent(), /smaller than 20 MB/)
    // A late image decode must not replace the error for a newer selection.
    await page.evaluate(base64 => {
      const input = document.querySelector('input[type="file"]')
      for (const file of [new File([Uint8Array.from(atob(base64), c => c.charCodeAt(0))], "first.png", { type: "image/png" }), new File(["text"], "last.txt", { type: "text/plain" })]) {
        const transfer = new DataTransfer()
        transfer.items.add(file)
        input.files = transfer.files
        input.dispatchEvent(new Event("change", { bubbles: true }))
      }
    }, fixtures.colors)
    await page.waitForTimeout(100)
    assert.match(await status.textContent(), /Choose a PNG/)
    assert.equal(await results.isVisible(), false)

    await transfer("drop", "solid")
    await ready(2)
    assert.equal(await generator.getAttribute("href"), "/123456-123456")
    await transfer("paste", "colors")
    await ready(5)
    const href = await generator.getAttribute("href")
    const expected = (await swatches.allTextContents()).map(text => `#${text.trim().replace("#", "").toUpperCase()}`)
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 })
      await page.selectOption("#image-count", "10")
      await ready(10)
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false)
      assert.equal(await generator.isVisible(), true)
      if (process.env.SCREENSHOTS) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/image-${width}.png`, fullPage: true })
      }
    }
    assert.deepEqual(requests, [], "image input must not make network requests")
    await page.selectOption("#image-count", "5")
    await ready(5)
    assert.equal(await generator.getAttribute("href"), href)
    await generator.click()
    await page.waitForURL(`${base}${href}`)
    await page.waitForFunction(() => document.querySelectorAll('[data-palette-target="column"]').length === 5 && window.Stimulus?.getControllerForElementAndIdentifier(document.querySelector('[data-controller="palette"]'), "palette"))
    const actual = await page.locator('[data-palette-target="column"] input[type="color"]').evaluateAll(inputs => inputs.map(input => input.value.toUpperCase()))
    assert.deepEqual(actual, expected)
    // Turbo navigation must reconnect the tool and accept another file.
    await page.goBack()
    await page.waitForSelector('input[type="file"]')
    await select("solid")
    await ready(2)
    assert.deepEqual(errors, [])
    console.log("Image browser checks passed: picker, drop, paste, 2–10 colors, local-only processing, errors, replacement, responsive layout, generator and return navigation.")
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
