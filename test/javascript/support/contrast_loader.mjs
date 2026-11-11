// Supply Stimulus's base class only; the controller's logic runs unchanged.
// DOM targets and browser history are supplied by the controller tests.
export async function resolve(specifier, context, nextResolve) {
  if (specifier === "@hotwired/stimulus") {
    return { url: "data:text/javascript,export class Controller {}", shortCircuit: true }
  }
  if (specifier === "lib/color") {
    return { url: new URL("../../../app/javascript/lib/color.js", import.meta.url).href, shortCircuit: true }
  }
  return nextResolve(specifier, context)
}
