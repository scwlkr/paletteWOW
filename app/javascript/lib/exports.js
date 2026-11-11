// Names are optional export keys; unnamed colors keep their numbered keys.
export function cssVariables(hexes, names = []) {
  let css = ':root {\n'
  hexes.forEach((hex, i) => {
    css += `  --${names[i] || `color-${i + 1}`}: ${hex};\n`
  })
  return css + '}'
}

export function tailwindConfig(hexes, names = []) {
  let config = '{\n  colors: {\n'
  hexes.forEach((hex, i) => {
    config += `    '${names[i] || `color-${i + 1}`}': '${hex}',\n`
  })
  return config + '  }\n}'
}

export function svgMarkup(hexes) {
  const width = hexes.length * 100
  let rects = ''
  hexes.forEach((hex, i) => {
    rects += `<rect x="${i * 100}" y="0" width="100" height="500" fill="${hex}"/>\n`
  })
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="500" viewBox="0 0 ${width} 500">\n${rects}</svg>`
}

export function shareUrl(origin, hexes) {
  return `${origin}/${hexes.map(hex => hex.replace('#', '')).join('-')}`
}

export function scss(hexes, names = []) {
  return hexes.map((hex, i) => `$${names[i] || `color-${i + 1}`}: ${hex};`).join('\n')
}

export function less(hexes, names = []) {
  return hexes.map((hex, i) => `@${names[i] || `color-${i + 1}`}: ${hex};`).join('\n')
}

export function json(hexes, names = []) {
  const palette = {}
  hexes.forEach((hex, i) => {
    palette[names[i] || `color-${i + 1}`] = hex
  })
  return JSON.stringify(palette, null, 2)
}

export function jsArray(hexes) {
  return JSON.stringify(hexes)
}

export function embedHtml(hexes, names = []) {
  const swatches = hexes.map((hex, i) => {
    const label = names[i] || hex
    return `<div title="${escapeHtml(label)}" style="flex: 1; background-color: ${hex};"></div>`
  }).join('')
  return `<div style="display: flex; height: 120px; border-radius: 8px; overflow: hidden;">${swatches}</div>`
}

export function aseFile(hexes, names = []) {
  const bytes = []
  pushAscii(bytes, 'ASEF')
  pushUint16(bytes, 1)
  pushUint16(bytes, 0)
  pushUint32(bytes, hexes.length)

  hexes.forEach((hex, i) => {
    const name = names[i] || `Color ${i + 1}`
    const [r, g, b] = rgbComponents(hex)

    const block = []
    pushUint16(block, name.length + 1)
    for (let j = 0; j < name.length; j++) {
      pushUint16(block, name.charCodeAt(j))
    }
    pushUint16(block, 0)
    pushAscii(block, 'RGB ')
    pushFloat32(block, r)
    pushFloat32(block, g)
    pushFloat32(block, b)
    pushUint16(block, 2)

    pushUint16(bytes, 1)
    pushUint32(bytes, block.length)
    bytes.push(...block)
  })

  return new Uint8Array(bytes)
}

function rgbComponents(hex) {
  let value = String(hex).trim().replace(/^#/, '')
  if (value.length === 3) {
    value = value.split('').map(char => char + char).join('')
  }
  const number = parseInt(value, 16)
  if (!Number.isFinite(number) || value.length !== 6) return [0, 0, 0]

  return [
    ((number >> 16) & 0xff) / 255,
    ((number >> 8) & 0xff) / 255,
    (number & 0xff) / 255
  ]
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function pushAscii(bytes, value) {
  for (let i = 0; i < value.length; i++) {
    bytes.push(value.charCodeAt(i))
  }
}

function pushUint16(bytes, value) {
  bytes.push((value >> 8) & 0xff, value & 0xff)
}

function pushUint32(bytes, value) {
  bytes.push(
    (value >>> 24) & 0xff,
    (value >>> 16) & 0xff,
    (value >>> 8) & 0xff,
    value & 0xff
  )
}

function pushFloat32(bytes, value) {
  const buffer = new ArrayBuffer(4)
  new DataView(buffer).setFloat32(0, value, false)
  bytes.push(...new Uint8Array(buffer))
}
