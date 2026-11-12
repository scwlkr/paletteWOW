// Run with playwright-core, pngjs and pdfjs-dist on NODE_PATH.
const { chromium } = require("playwright-core")
const { PNG } = require("pngjs")
const assert = require("node:assert/strict")
const { readFile, mkdir } = require("node:fs/promises")
const { pathToFileURL } = require("node:url")

const palette = ["ff0000", "000000", "ffffff"]
const expected = {
  HEX: ["#FF0000", "#000000", "#FFFFFF"],
  RGB: ["RGB 255, 0, 0", "RGB 0, 0, 0", "RGB 255, 255, 255"],
  HSL: ["HSL 0°, 100%, 50%", "HSL 0°, 0%, 0%", "HSL 0°, 0%, 100%"],
  CMYK: ["CMYK 0%, 100%, 100%, 0%", "CMYK 0%, 0%, 0%, 100%", "CMYK 0%, 0%, 0%, 0%"]
}

async function bytes(download) {
  assert.equal(await download.failure(), null)
  return readFile(await download.path())
}

function rgbPixels(png) {
  const pixels = Buffer.alloc(png.width * png.height * 3)
  for (let i = 0, j = 0; i < png.data.length; i += 4) {
    pixels[j++] = png.data[i]; pixels[j++] = png.data[i + 1]; pixels[j++] = png.data[i + 2]
    assert.equal(png.data[i + 3], 255)
  }
  return pixels
}

async function main() {
  const pdfjs = await import(pathToFileURL(require.resolve("pdfjs-dist/legacy/build/pdf.mjs")).href)
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  try {
    const base = process.env.BASE_URL || "http://127.0.0.1:3000"
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
    const errors = []
    page.on("pageerror", error => errors.push(error.message))
    // Observe real canvas calls; the native renderer still produces every pixel.
    await page.addInitScript(() => {
      window.exportText = []
      const draw = CanvasRenderingContext2D.prototype.fillText
      CanvasRenderingContext2D.prototype.fillText = function (text, x, y, maxWidth) {
        window.exportText.push({ text, x, y, width: Math.min(this.measureText(text).width, maxWidth ?? Infinity) })
        return draw.apply(this, arguments)
      }
    })
    const dialog = page.getByRole("dialog", { name: "Export Palette", exact: true })
    const title = page.getByRole("textbox", { name: "Title", exact: true })
    const open = async () => {
      await page.getByRole("button", { name: "Export Palette", exact: true }).filter({ visible: true }).click()
      await dialog.waitFor({ state: "visible" })
      await page.waitForFunction(() => getComputedStyle(document.querySelector('[data-palette-target="exportContent"]')).opacity === "1")
      assert.equal(await title.evaluate(input => input === document.activeElement), true)
    }
    const loaded = async colors => page.waitForFunction(colors => {
      const inputs = [...document.querySelectorAll('[data-palette-target="column"] input[type="color"]')]
      return inputs.length === colors.length && inputs.every((input, i) => input.value === `#${colors[i]}`)
    }, colors)
    const png = async labels => {
      await page.evaluate(() => { window.exportText = [] })
      const [download] = await Promise.all([page.waitForEvent("download"), dialog.getByRole("button", { name: "Image (PNG)", exact: true }).click()])
      assert.match(download.suggestedFilename(), /^paletteWOW-\d+\.png$/)
      const result = PNG.sync.read(await bytes(download))
      assert.equal(result.width, 2400); assert.equal(result.height, 1600)
      const drawn = await page.evaluate(() => window.exportText)
      assert.deepEqual(drawn.map(call => call.text), labels)
      for (let i = 0; i < palette.length; i++) {
        const offset = (400 * result.width + (i * 800 + 400)) * 4
        assert.equal(result.data.subarray(offset, offset + 3).toString("hex"), palette[i])
      }
      await dialog.waitFor({ state: "hidden" })
      return result
    }
    const pdfMatches = async image => {
      await open()
      const [download] = await Promise.all([page.waitForEvent("download"), dialog.getByRole("button", { name: "PDF", exact: true }).click()])
      assert.match(download.suggestedFilename(), /^paletteWOW-\d+\.pdf$/)
      const task = pdfjs.getDocument({ data: new Uint8Array(await bytes(download)), isEvalSupported: false })
      const document = await task.promise
      try {
        assert.equal(document.numPages, 1)
        const pdfPage = await document.getPage(1)
        const operations = await pdfPage.getOperatorList()
        const index = operations.fnArray.indexOf(pdfjs.OPS.paintImageXObject)
        assert.ok(index >= 0, "PDF contains the palette image")
        const id = operations.argsArray[index][0]
        const embedded = await new Promise(resolve => pdfPage.objs.get(id, resolve))
        assert.equal(embedded.width, image.width); assert.equal(embedded.height, image.height)
        assert.ok([pdfjs.ImageKind.RGB_24BPP, pdfjs.ImageKind.RGBA_32BPP].includes(embedded.kind))
        const decoded = embedded.kind === pdfjs.ImageKind.RGBA_32BPP ? rgbPixels(embedded) : Buffer.from(embedded.data)
        assert.deepEqual(decoded, rgbPixels(image), "PDF embeds every PNG pixel including chosen labels")
      } finally { await task.destroy() }
      await dialog.waitFor({ state: "hidden" })
    }

    await page.goto(`${base}/${palette.join("-")}`)
    await loaded(palette)
    await page.getByRole("button", { name: "Export Palette", exact: true }).filter({ visible: true }).click()
    assert.equal(await title.count(), 1, "Export dialog offers a title")
    await title.waitFor()
    assert.equal(await title.inputValue(), "PALETTE WOW")
    assert.equal(await dialog.getByLabel("Color names", { exact: true }).isChecked(), false)
    for (const format of Object.keys(expected)) assert.equal(await dialog.getByLabel(format, { exact: true }).isChecked(), format === "HEX")
    const original = await png(["palette", "WOW", "PALETTE WOW", ...expected.HEX])
    if (process.env.BASELINE_PNG) {
      const baseline = PNG.sync.read(await readFile(process.env.BASELINE_PNG))
      assert.deepEqual(original.data, baseline.data, "Defaults reproduce the original downloaded PNG pixel for pixel")
    }
    await pdfMatches(original)

    for (const format of Object.keys(expected)) {
      await open()
      await title.fill(`Studio ${format}`)
      for (const candidate of Object.keys(expected)) await dialog.getByLabel(candidate, { exact: true }).setChecked(candidate === format)
      await png(["palette", "WOW", `Studio ${format}`, ...expected[format]])
    }
    await open()
    await title.fill("Spring collection")
    await dialog.getByLabel("Color names", { exact: true }).check()
    for (const format of Object.keys(expected)) await dialog.getByLabel(format, { exact: true }).check()
    const names = await page.locator('[data-palette-target="container"] [data-palette-target="colorName"]').allTextContents()
    const labels = ["palette", "WOW", "Spring collection", ...palette.flatMap((_, i) => [names[i].trim(), ...Object.values(expected).map(values => values[i])])]
    const customized = await png(labels)
    await pdfMatches(customized)
    await open()
    await title.fill("")
    await dialog.getByLabel("Color names", { exact: true }).uncheck()
    for (const format of Object.keys(expected)) await dialog.getByLabel(format, { exact: true }).uncheck()
    const plain = await png(["palette", "WOW", ""])
    await pdfMatches(plain)

    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 844 })
      const colors = ["ff0000", "000000", "ffffff", "123456", "abcdef", "fedcba", "987654", "a1b2c3", "778899", "6195ed"]
      await page.goto(`${base}/${colors.join("-")}`)
      await loaded(colors)
      // Real undo history proves title editing does not undo the palette.
      await page.locator('[data-palette-target="column"] input[type="color"]').first().evaluate(input => {
        input.value = "#654321"; input.dispatchEvent(new Event("input", { bubbles: true })); input.dispatchEvent(new Event("change", { bubbles: true }))
      })
      await open()
      await title.fill("A very long palette title with spaces — 色彩 🎨 ".repeat(3).slice(0, 120))
      await page.keyboard.press("Control+z")
      await loaded(["654321", ...colors.slice(1)])
      await title.fill("A very long palette title with spaces — 色彩 🎨 ".repeat(3).slice(0, 120))
      await dialog.getByLabel("Color names", { exact: true }).check()
      for (const format of Object.keys(expected)) await dialog.getByLabel(format, { exact: true }).check()
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
      assert.equal(await title.evaluate(input => {
        const box = input.getBoundingClientRect()
        return document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2) === input
      }), true, "Navigation cannot cover the title field")
      await page.evaluate(() => { window.exportText = [] })
      const [download] = await Promise.all([page.waitForEvent("download"), dialog.getByRole("button", { name: "Image (PNG)", exact: true }).click()])
      assert.equal(PNG.sync.read(await bytes(download)).width, 2400)
      const calls = await page.evaluate(() => window.exportText)
      assert.equal(calls.length, 53)
      for (const call of calls.slice(3)) assert.ok(call.width <= 100, "Ten-color labels fit their swatch")
      await dialog.waitFor({ state: "hidden" })
      await open()
      const first = dialog.getByRole("button", { name: "Close export", exact: true })
      await first.focus(); await page.keyboard.press("Shift+Tab")
      assert.equal(await dialog.getByRole("button").last().evaluate(button => button === document.activeElement), true)
      await page.keyboard.press("Tab")
      assert.equal(await first.evaluate(button => button === document.activeElement), true)
      if (process.env.SCREENSHOTS && [1440, 390].includes(width)) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/export-${width}.png`, fullPage: true })
      }
      await page.keyboard.press("Escape")
      await dialog.waitFor({ state: "hidden" })
      assert.equal(await page.getByRole("button", { name: "Export Palette", exact: true }).filter({ visible: true }).evaluate(button => button === document.activeElement), true)
    }
    assert.deepEqual(errors, [])
    console.log("Export checks passed: default PNG, every format, names/title, blank labels, decoded PDF pixels, ten-color text fit, keyboard isolation/focus, desktop and phone.")
  } finally { await browser.close() }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
