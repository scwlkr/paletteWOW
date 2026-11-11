import test from "node:test"
import assert from "node:assert/strict"
import { defaultGradient, parseGradient, gradientQuery, gradientCSS, gradientGeometry } from "../../app/javascript/lib/gradient.js"

test("shared gradients restore type, fractional angle, stop order, duplicate positions and colors", () => {
  const state = { type: "radial", angle: 123.45, stops: [{ color: "#ffffff", position: 90 }, { color: "#000000", position: 10.25 }, { color: "#ff0000", position: 10.25 }] }
  assert.deepEqual(parseGradient(gradientQuery(state)), state)
  assert.equal(gradientCSS(state), "radial-gradient(circle farthest-corner at center, #000000 10.25%, #ff0000 10.25%, #ffffff 90%)")
  assert.equal(gradientCSS({ ...state, type: "linear" }), "linear-gradient(123.45deg, #000000 10.25%, #ff0000 10.25%, #ffffff 90%)")
})

test("malformed and oversized URL state falls back to a usable two-stop gradient", () => {
  for (const query of ["", "type=conic&stops=000000:0,ffffff:100", "angle=361&stops=000000:0,ffffff:100", "angle=-1&stops=000000:0,ffffff:100", "stops=000000:0", "stops=000000:0,ffffff:101", "stops=red:0,ffffff:100", "stops=000000:0,ffffff:NaN", "stops=" + Array(11).fill("000000:50").join(","), "stops=000000:0,url(https://example.com):100", "angle[bad]=90&stops[bad]=000000"]) {
    assert.deepEqual(parseGradient(query), defaultGradient(), query)
  }
  const state = parseGradient("angle=360&stops=ABCDEF:0,FFFFFF:100")
  assert.equal(state.angle, 360)
  assert.equal(state.stops[0].color, "#abcdef")
})

test("PNG geometry follows CSS angle direction and covers rectangular corners", () => {
  const state = defaultGradient()
  function near(actual, expected) { assert.ok(Math.abs(actual - expected) < 0.00001, `${actual} ≈ ${expected}`) }
  for (const [angle, expected] of [[0, [800, 1000, 800, 0]], [90, [0, 500, 1600, 500]], [180, [800, 0, 800, 1000]], [270, [1600, 500, 0, 500]], [45, [150, 1150, 1450, -150]]]) {
    const geometry = gradientGeometry({ ...state, angle }, 1600, 1000)
    ;[geometry.x0, geometry.y0, geometry.x1, geometry.y1].forEach((value, i) => near(value, expected[i]))
  }
  near(gradientGeometry({ ...state, type: "radial" }, 1600, 1000).radius, Math.sqrt(890000))
})
