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

export function hexToRgb(hex) {
  const normalized = normalizeHex(hex)
  if (!normalized) return null

  return {
    r: parseInt(normalized.slice(1, 3), 16),
    g: parseInt(normalized.slice(3, 5), 16),
    b: parseInt(normalized.slice(5, 7), 16)
  }
}

export function rgbToHex(r, g, b) {
  const clamp = (value) => Math.max(0, Math.min(255, Math.round(value)))
  const channel = (value) => clamp(value).toString(16).padStart(2, "0")
  return `#${channel(r)}${channel(g)}${channel(b)}`
}

export function rgbToHsl(r, g, b) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const delta = max - min
  const lightness = (max + min) / 2

  let hue = 0
  let saturation = 0

  if (delta !== 0) {
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
    if (max === red) {
      hue = ((green - blue) / delta) % 6
    } else if (max === green) {
      hue = (blue - red) / delta + 2
    } else {
      hue = (red - green) / delta + 4
    }
    hue = Math.round(hue * 60)
    if (hue < 0) hue += 360
  }

  return { h: hue, s: round1(saturation * 100), l: round1(lightness * 100) }
}

export function hslToRgb(h, s, l) {
  let hue = ((h % 360) + 360) % 360
  const saturation = Math.max(0, Math.min(100, s)) / 100
  const lightness = Math.max(0, Math.min(100, l)) / 100

  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
  const huePrime = hue / 60
  const second = chroma * (1 - Math.abs((huePrime % 2) - 1))

  let red = 0
  let green = 0
  let blue = 0

  if (huePrime < 1) {
    red = chroma
    green = second
  } else if (huePrime < 2) {
    red = second
    green = chroma
  } else if (huePrime < 3) {
    green = chroma
    blue = second
  } else if (huePrime < 4) {
    green = second
    blue = chroma
  } else if (huePrime < 5) {
    red = second
    blue = chroma
  } else {
    red = chroma
    blue = second
  }

  const offset = lightness - chroma / 2
  return {
    r: Math.round((red + offset) * 255),
    g: Math.round((green + offset) * 255),
    b: Math.round((blue + offset) * 255)
  }
}

export function rgbToHsb(r, g, b) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const delta = max - min

  let hue = 0
  if (delta !== 0) {
    if (max === red) {
      hue = ((green - blue) / delta) % 6
    } else if (max === green) {
      hue = (blue - red) / delta + 2
    } else {
      hue = (red - green) / delta + 4
    }
    hue = Math.round(hue * 60)
    if (hue < 0) hue += 360
  }

  return {
    h: hue,
    s: round1(max === 0 ? 0 : (delta / max) * 100),
    b: round1(max * 100)
  }
}

export function rgbToCmyk(r, g, b) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  const black = 1 - Math.max(red, green, blue)

  if (black === 1) {
    return { c: 0, m: 0, y: 0, k: 100 }
  }

  return {
    c: round1(((1 - red - black) / (1 - black)) * 100),
    m: round1(((1 - green - black) / (1 - black)) * 100),
    y: round1(((1 - blue - black) / (1 - black)) * 100),
    k: round1(black * 100)
  }
}

export function rgbToLab(r, g, b) {
  const linear = [r, g, b].map((channel) => {
    const value = channel / 255
    return value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
  })

  const [lr, lg, lb] = linear
  const x = (0.4124 * lr + 0.3576 * lg + 0.1805 * lb) / 0.9505
  const y = 0.2126 * lr + 0.7152 * lg + 0.0722 * lb
  const z = (0.0193 * lr + 0.1192 * lg + 0.9505 * lb) / 1.089

  const f = (value) => (value > 0.008856 ? Math.cbrt(value) : (841 / 108) * value + 4 / 29)

  return {
    l: round2(116 * f(y) - 16),
    a: round2(500 * (f(x) - f(y))),
    b: round2(200 * (f(y) - f(z)))
  }
}

export function relativeLuminance(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return null

  const channels = [rgb.r, rgb.g, rgb.b].map((channel) => {
    const value = channel / 255
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

export function contrastRatio(hexA, hexB) {
  const luminanceA = relativeLuminance(hexA)
  const luminanceB = relativeLuminance(hexB)
  if (luminanceA === null || luminanceB === null) return null

  const lighter = Math.max(luminanceA, luminanceB)
  const darker = Math.min(luminanceA, luminanceB)
  // Keep full precision for WCAG thresholds; round only when displaying a ratio.
  return (lighter + 0.05) / (darker + 0.05)
}

export function wcagLevels(ratio) {
  if (typeof ratio !== "number" || !Number.isFinite(ratio)) {
    return { aa: false, aaLarge: false, aaa: false, aaaLarge: false }
  }

  return {
    aa: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaa: ratio >= 7,
    aaaLarge: ratio >= 4.5
  }
}

function round1(value) {
  return Math.round(value * 10) / 10
}

function round2(value) {
  return Math.round(value * 100) / 100
}
