export function defaultGradient() {
  return { type: "linear", angle: 90, stops: [{ color: "#ff6b6b", position: 0 }, { color: "#6c5ce7", position: 100 }] }
}

// Accept only bounded, explicit values from a shared URL; never interpolate raw input into CSS.
export function parseGradient(query) {
  const params = new URLSearchParams(query)
  const fallback = defaultGradient()
  const type = params.get("type") || fallback.type
  const angleText = params.get("angle") ?? String(fallback.angle)
  const tokens = (params.get("stops") || "").split(",")
  if (!["linear", "radial"].includes(type) || !/^\d{1,3}(\.\d{1,2})?$/.test(angleText) || Number(angleText) > 360) return fallback
  if (tokens.length < 2 || tokens.length > 10) return fallback
  const stops = tokens.map(token => {
    const match = /^([a-f\d]{6}):(\d{1,3}(?:\.\d{1,2})?)$/i.exec(token)
    return match && Number(match[2]) <= 100 ? { color: `#${match[1].toLowerCase()}`, position: Number(match[2]) } : null
  })
  if (stops.some(stop => !stop)) return fallback
  return { type, angle: Number(angleText), stops }
}

export function gradientQuery(state) {
  return new URLSearchParams({ type: state.type, angle: String(state.angle), stops: state.stops.map(stop => `${stop.color.slice(1)}:${stop.position}`).join(",") }).toString()
}

export function sortedStops(state) {
  return [...state.stops].sort((a, b) => a.position - b.position)
}

export function gradientCSS(state) {
  const stops = sortedStops(state).map(stop => `${stop.color} ${stop.position}%`).join(", ")
  return state.type === "radial" ? `radial-gradient(circle farthest-corner at center, ${stops})` : `linear-gradient(${state.angle}deg, ${stops})`
}

// CSS's gradient line spans the projection of all four corners, including diagonals.
export function gradientGeometry(state, width, height) {
  if (state.type === "radial") return { radius: Math.hypot(width / 2, height / 2) }
  const radians = state.angle * Math.PI / 180
  const x = Math.sin(radians)
  const y = -Math.cos(radians)
  const length = Math.abs(width * x) + Math.abs(height * y)
  return { x0: width / 2 - x * length / 2, y0: height / 2 - y * length / 2, x1: width / 2 + x * length / 2, y1: height / 2 + y * length / 2 }
}
