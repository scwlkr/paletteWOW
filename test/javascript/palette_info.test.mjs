import { registerHooks } from "node:module"
import assert from "node:assert/strict"
import { test } from "node:test"

// Use the vendored dependencies; only the Stimulus base is replaced for these controller unit tests.
const root = new URL("../../", import.meta.url)
const hooks = registerHooks({ resolve(specifier, context, nextResolve) {
  const paths = {
    "lib/color": "app/javascript/lib/color.js",
    "lib/exports": "app/javascript/lib/exports.js",
    "ntc": "vendor/javascript/ntc.js",
    "chroma-js": "vendor/javascript/chroma-js.js",
    "sortablejs": "vendor/javascript/sortablejs.js"
  }
  if (specifier === "@hotwired/stimulus") return { url: "data:text/javascript,export class Controller {}", shortCircuit: true }
  return nextResolve(paths[specifier] ? new URL(paths[specifier], root).href : specifier, context)
}})
const { default: PaletteController } = await import(new URL("app/javascript/controllers/palette_controller.js", root))
hooks.deregister()

function infoController() {
  const controller = new PaletteController()
  controller.infoValueTargets = ["HEX", "RGB", "HSL", "HSB", "CMYK", "LAB", "Name"].map(format => ({dataset: {format}, textContent: ""}))
  controller.infoModalTarget = {open: false, showModal() {this.open = true}, close() {this.open = false}}
  controller.hasInfoModalTarget = true
  return controller
}

test("color info refreshes for each swatch and guards modal interactions", () => {
  const controller = infoController()
  for (const [hex, name, rgb] of [["#ff0000", "Red", "rgb(255, 0, 0)"], ["#000000", "Black", "rgb(0, 0, 0)"], ["#ffffff", "White", "rgb(255, 255, 255)"]]) {
    const column = {querySelector() {return {textContent: hex}}}
    controller.openInfoModal({currentTarget: {closest() {return column}}})
    assert.equal(controller.infoModalTarget.open, true)
    assert.equal(controller.infoValueTargets[0].textContent, hex.toUpperCase())
    assert.equal(controller.infoValueTargets[1].textContent, rgb)
    assert.equal(controller.infoValueTargets[6].textContent, name)
    controller.handleKeydown({code: "Space", preventDefault() {throw Error("must not intercept modal keys")}})
    controller.closeInfoBackdrop({target: {}})
    assert.equal(controller.infoModalTarget.open, true)
    controller.closeInfoBackdrop({target: controller.infoModalTarget})
    assert.equal(controller.infoModalTarget.open, false)
  }
})

test("every color info row copies its displayed value", async (t) => {
  const controller = infoController()
  const column = {querySelector() {return {textContent: "#336699"}}}
  controller.openInfoModal({currentTarget: {closest() {return column}}})
  const alertDescriptor = Object.getOwnPropertyDescriptor(globalThis, "alert")
  const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, "navigator")
  t.after(() => {
    if (navigatorDescriptor) Object.defineProperty(globalThis, "navigator", navigatorDescriptor)
    else delete globalThis.navigator
    if (alertDescriptor) Object.defineProperty(globalThis, "alert", alertDescriptor)
    else delete globalThis.alert
  })
  const copied = []
  Object.defineProperty(globalThis, "navigator", {value: {clipboard: {writeText(value) {copied.push(value); return Promise.resolve()}}}, configurable: true})
  globalThis.alert = () => {}
  for (const value of controller.infoValueTargets) {
    controller.copyColorInfo({currentTarget: {blur() {}, closest() {return {querySelector() {return value}}}}})
  }
  await Promise.resolve()
  assert.deepEqual(copied, controller.infoValueTargets.map(value => value.textContent))
})
