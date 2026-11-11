// Resolve the palette controller's browser import map for Node's test runner.
const root = new URL("../../../", import.meta.url)
const imports = {
  "@hotwired/stimulus": "data:text/javascript,export class Controller {}",
  "sortablejs": new URL("vendor/javascript/sortablejs.js", root).href,
  "chroma-js": new URL("vendor/javascript/chroma-js.js", root).href,
  "ntc": new URL("vendor/javascript/ntc.js", root).href,
  "lib/vision": new URL("app/javascript/lib/vision.js", root).href,
  "lib/color": new URL("app/javascript/lib/color.js", root).href,
  "lib/exports": new URL("app/javascript/lib/exports.js", root).href
}

export function resolve(specifier, context, nextResolve) {
  if (context.parentURL === new URL("app/javascript/controllers/palette_controller.js", root).href && imports[specifier]) {
    return { url: imports[specifier], format: "module", shortCircuit: true }
  }
  return nextResolve(specifier, context)
}
