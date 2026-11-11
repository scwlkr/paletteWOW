import { test } from "node:test"
import assert from "node:assert/strict"
import { register } from "node:module"

register("./support/contrast_loader.mjs", import.meta.url)
const { default: ContrastController } = await import("../../app/javascript/controllers/contrast_controller.js")

function input(role) {
  return {
    dataset: { color: role },
    value: "",
    attributes: {},
    setAttribute(name, value) { this.attributes[name] = value },
    setCustomValidity(message) { this.validationMessage = message },
    reportValidity() { this.validityReported = true }
  }
}

function checker(t, path = "/contrast") {
  const historyState = { turbo: { restorationIdentifier: "existing-state" } }
  const browser = {
    location: { href: `https://palettewow.example${path}` },
    history: {
      state: historyState,
      replaceState(state, title, url) {
        assert.equal(state, historyState, "preserves Turbo's history state")
        browser.location.href = String(url)
      }
    }
  }
  const previousWindow = globalThis.window
  globalThis.window = browser
  t.after(() => { globalThis.window = previousWindow })

  const controller = new ContrastController()
  for (const role of ["text", "bg"]) {
    controller[`${role}HexTarget`] = input(role)
    controller[`${role}PickerTarget`] = input(role)
  }
  controller.previewTarget = { style: {} }
  controller.ratioTarget = {}
  controller.badgeTargets = ["aa", "aaa", "aaLarge", "aaaLarge"].map(level => ({
    dataset: { level, label: level.startsWith("aaa") ? "AAA" : "AA" },
    classList: {
      toggle() {},
      remove() {}
    }
  }))
  controller.connect()
  return { controller, browser }
}

function results(controller) {
  return controller.badgeTargets.map(badge => badge.textContent)
}

test("contrast starts with black on white, all WCAG levels pass and a shareable URL", t => {
  const { controller, browser } = checker(t)
  assert.equal(controller.textHexTarget.value, "#000000")
  assert.equal(controller.bgPickerTarget.value, "#ffffff")
  assert.equal(controller.ratioTarget.textContent, "21.00:1")
  assert.deepEqual(controller.previewTarget.style, { color: "#000000", backgroundColor: "#ffffff" })
  assert.deepEqual(results(controller), ["AA Pass", "AAA Pass", "AA Pass", "AAA Pass"])
  assert.equal(new URL(browser.location.href).search, "?text=000000&bg=ffffff")
})

test("shared URL colours normalize hashes, short hex and case without losing other URL parts", t => {
  const { controller, browser } = checker(t, "/contrast?text=%23777&bg=FFF&source=shared#preview")
  assert.equal(controller.textHexTarget.value, "#777777")
  assert.equal(controller.textPickerTarget.value, "#777777")
  assert.equal(controller.bgHexTarget.value, "#ffffff")
  assert.equal(controller.ratioTarget.textContent, "4.48:1")
  assert.deepEqual(results(controller), ["AA Fail", "AAA Fail", "AA Pass", "AAA Fail"])
  const url = new URL(browser.location.href)
  assert.equal(url.searchParams.get("text"), "777777")
  assert.equal(url.searchParams.get("source"), "shared")
  assert.equal(url.hash, "#preview")
})

test("invalid or missing URL colours fall back independently", t => {
  const { controller } = checker(t, "/contrast?text=oops&bg=123456")
  assert.equal(controller.textHexTarget.value, "#000000")
  assert.equal(controller.bgHexTarget.value, "#123456")
})

test("WCAG badges use the exact ratio even when its display rounds up to a threshold", t => {
  const { controller } = checker(t, "/contrast?text=008580&bg=ffffff")
  assert.equal(controller.ratioTarget.textContent, "4.50:1")
  assert.deepEqual(results(controller), ["AA Fail", "AAA Fail", "AA Pass", "AAA Fail"])
})

test("typing updates preview, picker, ratio, WCAG levels and URL; change normalizes the field", t => {
  const { controller, browser } = checker(t)
  const field = controller.textHexTarget
  field.value = " #777 "
  controller.hexInput({ currentTarget: field })
  assert.equal(field.value, " #777 ", "typing does not replace a partially edited field")
  assert.equal(field.attributes["aria-invalid"], "false")
  assert.equal(controller.textPickerTarget.value, "#777777")
  assert.equal(controller.previewTarget.style.color, "#777777")
  assert.equal(controller.ratioTarget.textContent, "4.48:1")
  assert.deepEqual(results(controller), ["AA Fail", "AAA Fail", "AA Pass", "AAA Fail"])
  assert.equal(new URL(browser.location.href).searchParams.get("text"), "777777")
  controller.hexChange({ currentTarget: field })
  assert.equal(field.value, "#777777")
})

test("invalid hex keeps the last valid result and URL, then recovers on valid input", t => {
  const { controller, browser } = checker(t)
  const url = browser.location.href
  const field = controller.bgHexTarget
  field.value = "#12"
  controller.hexChange({ currentTarget: field })
  assert.equal(field.attributes["aria-invalid"], "true")
  assert.ok(field.validationMessage)
  assert.equal(field.validityReported, true)
  assert.equal(controller.previewTarget.style.backgroundColor, "#ffffff")
  assert.equal(controller.ratioTarget.textContent, "21.00:1")
  assert.equal(browser.location.href, url)
  field.value = "000000"
  controller.hexInput({ currentTarget: field })
  assert.equal(field.validationMessage, "")
  assert.equal(field.attributes["aria-invalid"], "false")
  assert.equal(controller.ratioTarget.textContent, "1.00:1")
  assert.deepEqual(results(controller), ["AA Fail", "AAA Fail", "AA Fail", "AAA Fail"])
})

test("native picker and swap synchronize both controls, the preview and the shared URL", t => {
  const { controller, browser } = checker(t)
  controller.textPickerTarget.value = "#ff0000"
  controller.pick({ currentTarget: controller.textPickerTarget })
  assert.equal(controller.textHexTarget.value, "#ff0000")
  assert.equal(controller.ratioTarget.textContent, "4.00:1")
  controller.swap()
  assert.equal(controller.textHexTarget.value, "#ffffff")
  assert.equal(controller.textPickerTarget.value, "#ffffff")
  assert.equal(controller.bgHexTarget.value, "#ff0000")
  assert.equal(controller.bgPickerTarget.value, "#ff0000")
  assert.deepEqual(controller.previewTarget.style, { color: "#ffffff", backgroundColor: "#ff0000" })
  assert.equal(controller.ratioTarget.textContent, "4.00:1")
  const url = new URL(browser.location.href)
  assert.equal(url.searchParams.get("text"), "ffffff")
  assert.equal(url.searchParams.get("bg"), "ff0000")
})

test("returning through browser history restores the colours from that URL", t => {
  const { controller, browser } = checker(t)
  browser.location.href = "https://palettewow.example/contrast?text=ffffff&bg=ffffff"
  controller.loadFromUrl()
  assert.equal(controller.textHexTarget.value, "#ffffff")
  assert.equal(controller.textPickerTarget.value, "#ffffff")
  assert.equal(controller.ratioTarget.textContent, "1.00:1")
})
