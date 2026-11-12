// Run with Playwright on NODE_PATH and BASE_URL pointing at the app.
const { chromium } = require("playwright-core")
const assert = require("node:assert/strict")
const { mkdir, readFile } = require("node:fs/promises")

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE || undefined })
  try {
    const base = process.env.BASE_URL || "http://127.0.0.1:3000"
    const context = await browser.newContext({ viewport: { width: 1440, height: 1200 }, permissions: ["clipboard-read", "clipboard-write"] })
    const page = await context.newPage()
    const errors = []
    page.on("pageerror", error => errors.push(error.message))
    async function open(path = "/gradient") {
      await page.goto(base + path)
      await page.waitForFunction(() => document.querySelector("#gradient-css")?.value.startsWith("background:"))
    }
    const stops = page.locator('[data-gradient-target="stops"] fieldset')
    const css = page.locator("#gradient-css")
    const type = page.locator("#gradient-type")
    const angle = page.locator("#gradient-angle")
    const add = page.getByRole("button", { name: "Add stop", exact: true })
    const status = page.getByRole("status")
    await open()
    assert.equal(await stops.count(), 2)
    assert.equal(await stops.first().getByRole("button").isDisabled(), true)
    // Clicking a field must never remove its stop (delegated row actions).
    await page.locator("#gradient-color-0").click()
    assert.equal(await stops.count(), 2)
    await page.locator("#gradient-color-0").fill("#000")
    await page.locator("#gradient-color-1").fill("ffffff")
    await add.click()
    assert.equal(await stops.count(), 3)
    await page.locator("#gradient-color-2").fill("#ff0000")
    await page.locator("#gradient-position-2").fill("25")
    assert.equal(await css.inputValue(), "background: linear-gradient(90deg, #000000 0%, #ff0000 25%, #ffffff 100%);")
    const goodURL = page.url()
    const goodCSS = await css.inputValue()
    await page.locator("#gradient-color-2").fill("nope")
    assert.equal(await page.locator("#gradient-color-2").getAttribute("aria-invalid"), "true")
    assert.equal(await css.inputValue(), goodCSS)
    assert.equal(page.url(), goodURL)
    await page.locator("#gradient-color-2").fill("ff0000")
    assert.equal(await page.locator("#gradient-color-2").getAttribute("aria-invalid"), "false")
    await page.locator("#gradient-position-2").fill("101")
    assert.equal(await page.locator("#gradient-position-2").getAttribute("aria-invalid"), "true")
    assert.equal(page.url(), goodURL)
    await page.locator("#gradient-position-2").fill("75.25")
    await angle.fill("45.5")
    assert.match(await css.inputValue(), /45.5deg.*#ff0000 75.25%/)
    await type.selectOption("radial")
    assert.equal(await angle.isVisible(), false)
    const shared = page.url()
    const sharedCSS = await css.inputValue()
    await open(shared.slice(base.length))
    assert.equal(await css.inputValue(), sharedCSS)
    assert.equal(await stops.count(), 3)
    assert.equal(await page.locator("#gradient-position-2").inputValue(), "75.25")
    await page.getByRole("button", { name: "Copy CSS", exact: true }).click()
    await page.waitForFunction(() => document.querySelector('[data-gradient-target="status"]').textContent === "CSS copied.")
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), sharedCSS)
    assert.equal(await page.evaluate(() => CSS.supports("background", document.querySelector("#gradient-css").value.replace(/^background: |;$/g, ""))), true)

    // Decode the real downloaded files and check independent known endpoint colors.
    async function pngPixels(path, points) {
      await open(path)
      const pending = page.waitForEvent("download")
      await page.getByRole("button", { name: "Download PNG", exact: true }).click()
      const download = await pending
      assert.equal(download.suggestedFilename(), "palettewow-gradient.png")
      const bytes = await readFile(await download.path())
      assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a")
      return page.evaluate(async ({ bytes, points }) => {
        const image = await createImageBitmap(new Blob([Uint8Array.from(bytes)], { type: "image/png" }))
        const canvas = document.createElement("canvas")
        canvas.width = image.width
        canvas.height = image.height
        const ctx = canvas.getContext("2d")
        ctx.drawImage(image, 0, 0)
        return { width: image.width, height: image.height, pixels: points.map(([x, y]) => [...ctx.getImageData(x, y, 1, 1).data]) }
      }, { bytes: [...bytes], points })
    }
    let png = await pngPixels("/gradient?type=linear&angle=90&stops=000000:0,ff0000:25,ffffff:100", [[0, 500], [399, 500], [1599, 500]])
    assert.equal(png.width, 1600)
    assert.equal(png.height, 1000)
    function near(actual, expected) { actual.forEach((value, i) => assert.ok(Math.abs(value - expected[i]) <= 2, `${actual} ≈ ${expected}`)) }
    near(png.pixels[0], [0, 0, 0, 255])
    near(png.pixels[1], [255, 0, 0, 255])
    near(png.pixels[2], [255, 255, 255, 255])
    png = await pngPixels("/gradient?type=radial&stops=ff0000:0,0000ff:100", [[800, 500], [0, 0]])
    near(png.pixels[0], [255, 0, 0, 255])
    near(png.pixels[1], [0, 0, 255, 255])
    // The preview must agree with the PNG at the same relative points.
    for (const [path, expected] of [["/gradient?type=linear&angle=45&stops=000000:0,ffffff:100", [128, 128, 128, 255]], ["/gradient?type=radial&stops=ff0000:0,0000ff:100", [255, 0, 0, 255]]]) {
      await open(path)
      const preview = page.getByRole("img", { name: "Gradient preview" })
      const image = await preview.screenshot()
      const pixel = await page.evaluate(async bytes => {
        const bitmap = await createImageBitmap(new Blob([Uint8Array.from(bytes)], { type: "image/png" }))
        const canvas = document.createElement("canvas")
        canvas.width = bitmap.width
        canvas.height = bitmap.height
        const ctx = canvas.getContext("2d")
        ctx.drawImage(bitmap, 0, 0)
        return [...ctx.getImageData(Math.floor(bitmap.width / 2), Math.floor(bitmap.height / 2), 1, 1).data]
      }, [...image])
      near(pixel, expected)
    }

    await open(shared.slice(base.length))
    while (await stops.count() < 10) await add.click()
    assert.equal(await add.isDisabled(), true)
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: width === 1440 ? 1200 : 844 })
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false)
      if (process.env.SCREENSHOTS && width !== 320) {
        await mkdir(process.env.SCREENSHOTS, { recursive: true })
        await page.screenshot({ path: `${process.env.SCREENSHOTS}/gradient-${width}.png`, fullPage: true })
      }
    }
    while (await stops.count() > 2) await stops.last().getByRole("button").click()
    assert.equal(await stops.first().getByRole("button").isDisabled(), true)
    const returnCSS = await css.inputValue()
    await page.locator("main").getByRole("link", { name: "Generator", exact: true }).click()
    await page.waitForURL(base + "/")
    await page.goBack()
    await page.waitForFunction(() => document.querySelector("#gradient-css")?.value.startsWith("background:"))
    assert.equal(await css.inputValue(), returnCSS)
    await add.click()
    assert.equal(await stops.count(), 3)
    await open("/gradient?type=evil&stops=bad")
    assert.equal(await stops.count(), 2)
    assert.match(await css.inputValue(), /linear-gradient\(90deg/)
    assert.deepEqual(errors, [])
    console.log("Gradient browser checks passed: editable stops, validation, bounds, URL restore, clipboard, PNG colors, preview, phone layout and Turbo return.")
  } finally {
    await browser.close()
  }
}

main().catch(error => { console.error(error); process.exitCode = 1 })
