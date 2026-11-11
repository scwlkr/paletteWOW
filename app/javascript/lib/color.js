export function normalizeHex(text) {
  if (typeof text !== "string") return null

  let value = text.trim()
  if (value.startsWith("#")) value = value.slice(1)
  if (!/^[0-9a-fA-F]+$/.test(value)) return null

  if (value.length === 3) {
    value = value.split("").map((char) => char + char).join("")
  } else if (value.length !== 6) {
    return null
  }

  return `#${value.toLowerCase()}`
}

export function isLightColor(hex) {
  const normalized = normalizeHex(hex)
  if (!normalized) return false

  const r = parseInt(normalized.slice(1, 3), 16)
  const g = parseInt(normalized.slice(3, 5), 16)
  const b = parseInt(normalized.slice(5, 7), 16)
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
  return hsp > 127.5
}

export function randomHex() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
