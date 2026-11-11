import { test } from "node:test"
import assert from "node:assert/strict"
import { registerHooks } from "node:module"

// Exercise the controller's UI behavior without a browser dependency. Only
// Stimulus's base class and the DOM properties it reads/writes are stand-ins.
const controllerUrl = new URL("../../app/javascript/controllers/contrast_controller.js", import.meta.url).href
const hooks = registerHooks({
  resolve(specifier, context, nextResolve) {
    if (context.parentURL === controllerUrl) {
      if (specifier === "@hotwired/stimulus") {
        return { url: "data:text/javascript,export class Controller {}", shortCircuit: true }
      }
      if (specifier === "lib/color") {
        return { url: new URL("../../app/javascript/lib/color.js", import.meta.url).href, shortCircuit: true }
      }
    }
    return nextResolve(specifier, context)
  }
})
const { default: ContrastController } = await import(controllerUrl)
hooks.deregister()

function setup(t, query = "") {
  const previousWindow = globalThis.window
  const location = { href: `https://palettewow.example/contrast${query}` }
  const state = { turbo: { restorationIdentifier: "existing-state" } }
  globalThis.window = {
    location,
    history: {
      state,
      replaceState(nextState, _title, url) {
        this.state = nextState
        location.href = url.href
      }
    }
  }
  t.after(() => { globalThis.window = previousWindow })

  const controller = new ContrastController()
  for (const key of ["text", "bg"]) {
    controller[`${key}Target`] = {
      value: "",
      dataset: { color: key },
      attributes: {},
      setAttribute(name, value) { this.attributes[name] = value },
      setCustomValidity(message) { this.validationMessage = message }
    }
    controller[`${key}PickerTarget`] = { value: "", dataset: { color: key } }
  }
  controller.previewTarget = { style: {} }
  controller.ratioTarget = { textContent: "" }
  controller.badgeTargets = ["aa", "aaa", "aaLarge", "aaaLarge"].map((level) => ({
    dataset: { level },
    textContent: "",
    classList: { toggle() {} }
  }))
  controller.connect()
  return {
    controller,
    location,
    state,
    badges: () => controller.badgeTargets.map((badge) => badge.textContent),
    params: () => new URL(location.href).searchParams
  }
}

test("default contrast is black on white with a shareable URL and four passes", (t) => {
  const { controller, params, badges, state } = setup(t)
  assert.equal(controller.textTarget.value, "#000000")
  assert.equal(controller.bgTarget.value, "#ffffff")
  assert.equal(controller.textPickerTarget.value, "#000000")
  assert.equal(controller.bgPickerTarget.value, "#ffffff")
  assert.deepEqual(controller.previewTarget.style, { color: "#000000", backgroundColor: "#ffffff" })
  assert.equal(controller.ratioTarget.textContent, "21.00:1")
  assert.deepEqual(badges(), ["Pass", "Pass", "Pass", "Pass"])
  assert.equal(params().get("text"), "000000")
  assert.equal(params().get("bg"), "ffffff")
  assert.equal(window.history.state, state, "preserves Turbo's history state")
})

test("URL colors normalize hashes, shorthand and case while preserving other URL data", (t) => {
  const { controller, location, params, badges } = setup(t, "?text=%23FfF&bg=777&source=shared#preview")
  assert.equal(controller.textTarget.value, "#ffffff")
  assert.equal(controller.bgTarget.value, "#777777")
  assert.equal(controller.ratioTarget.textContent, "4.48:1")
  assert.deepEqual(badges(), ["Fail", "Fail", "Pass", "Fail"])
  assert.equal(params().get("text"), "ffffff")
  assert.equal(params().get("bg"), "777777")
  assert.equal(params().get("source"), "shared")
  assert.equal(new URL(location.href).hash, "#preview")
})

test("invalid or missing URL colors fall back independently", (t) => {
  const { controller, params } = setup(t, "?text=not-a-color&bg=abc")
  assert.equal(controller.textTarget.value, "#000000")
  assert.equal(controller.bgTarget.value, "#aabbcc")
  assert.equal(params().get("text"), "000000")
  assert.equal(params().get("bg"), "aabbcc")
})

test("hex edits update preview, picker, ratio, ratings and URL live", (t) => {
  const { controller, params, badges } = setup(t)
  controller.textTarget.value = "777"
  controller.update({ currentTarget: controller.textTarget })
  assert.equal(controller.textTarget.value, "777", "does not interrupt typing by expanding shorthand")
  assert.equal(controller.textPickerTarget.value, "#777777")
  assert.equal(controller.previewTarget.style.color, "#777777")
  assert.equal(controller.ratioTarget.textContent, "4.48:1")
  assert.deepEqual(badges(), ["Fail", "Fail", "Pass", "Fail"])
  assert.equal(params().get("text"), "777777")

  controller.bgTarget.value = "#777777"
  controller.update({ currentTarget: controller.bgTarget })
  assert.equal(controller.bgPickerTarget.value, "#777777")
  assert.equal(controller.previewTarget.style.backgroundColor, "#777777")
  assert.equal(controller.ratioTarget.textContent, "1.00:1")
  assert.deepEqual(badges(), ["Fail", "Fail", "Fail", "Fail"])
  assert.equal(params().get("bg"), "777777")
})

test("incomplete hex edits retain the last valid result and recover on valid input", (t) => {
  const { controller, location } = setup(t)
  const url = location.href
  for (const value of ["", "#", "12", "gggggg", "<script>"]) {
    controller.textTarget.value = value
    controller.update({ currentTarget: controller.textTarget })
    assert.equal(controller.textTarget.attributes["aria-invalid"], "true")
    assert.ok(controller.textTarget.validationMessage)
    assert.equal(controller.previewTarget.style.color, "#000000")
    assert.equal(controller.textPickerTarget.value, "#000000")
    assert.equal(controller.ratioTarget.textContent, "21.00:1")
    assert.equal(location.href, url)
  }
  controller.textTarget.value = "123456"
  controller.update({ currentTarget: controller.textTarget })
  assert.equal(controller.textTarget.attributes["aria-invalid"], "false")
  assert.equal(controller.textTarget.validationMessage, "")
  assert.equal(controller.previewTarget.style.color, "#123456")
})

test("both native pickers update hex fields and results", (t) => {
  const { controller, params, badges } = setup(t)
  controller.textPickerTarget.value = "#ffffff"
  controller.pick({ currentTarget: controller.textPickerTarget })
  assert.equal(controller.textTarget.value, "#ffffff")
  assert.equal(controller.ratioTarget.textContent, "1.00:1")
  assert.deepEqual(badges(), ["Fail", "Fail", "Fail", "Fail"])

  controller.bgPickerTarget.value = "#000000"
  controller.pick({ currentTarget: controller.bgPickerTarget })
  assert.equal(controller.bgTarget.value, "#000000")
  assert.deepEqual(controller.previewTarget.style, { color: "#ffffff", backgroundColor: "#000000" })
  assert.equal(controller.ratioTarget.textContent, "21.00:1")
  assert.equal(params().get("text"), "ffffff")
  assert.equal(params().get("bg"), "000000")
})

test("swap updates all controls and URL, preserving the ratio across reconnect", (t) => {
  const { controller, params } = setup(t, "?text=123456&bg=abcdef")
  const ratio = controller.ratioTarget.textContent
  controller.swap()
  assert.equal(controller.textTarget.value, "#abcdef")
  assert.equal(controller.bgTarget.value, "#123456")
  assert.equal(controller.textPickerTarget.value, "#abcdef")
  assert.equal(controller.bgPickerTarget.value, "#123456")
  assert.deepEqual(controller.previewTarget.style, { color: "#abcdef", backgroundColor: "#123456" })
  assert.equal(controller.ratioTarget.textContent, ratio)
  assert.equal(params().get("text"), "abcdef")
  assert.equal(params().get("bg"), "123456")
  controller.connect()
  assert.equal(controller.textTarget.value, "#abcdef")
  assert.equal(controller.bgTarget.value, "#123456")
  assert.equal(controller.ratioTarget.textContent, ratio)
})
