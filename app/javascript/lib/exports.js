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
