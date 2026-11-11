// Weighted median cut. Pixels are RGB triples; results are unique hex colors,
// ordered by how many pixels they represent (up to count, clamped to 2–10).
export function extractPalette(pixels, count = 5) {
  count = Math.max(2, Math.min(10, Math.round(Number(count) || 5)))
  const histogram = new Map()
  for (const pixel of pixels) {
    if (!pixel || pixel.length !== 3 || !pixel.every(value => Number.isFinite(value) && value >= 0 && value <= 255)) continue
    const rgb = Array.from(pixel, Math.round)
    const key = rgb.join(",")
    const entry = histogram.get(key)
    if (entry) entry.weight++
    else histogram.set(key, { rgb, weight: 1 })
  }
  if (!histogram.size) return []

  function box(points) {
    const ranges = [0, 1, 2].map(channel => {
      let min = 255, max = 0
      for (const { rgb } of points) {
        min = Math.min(min, rgb[channel])
        max = Math.max(max, rgb[channel])
      }
      return max - min
    })
    return { points, ranges, weight: points.reduce((sum, point) => sum + point.weight, 0) }
  }

  const boxes = [box([...histogram.values()])]
  while (boxes.length < count) {
    const candidates = boxes.filter(item => item.points.length > 1)
    if (!candidates.length) break
    const chosen = candidates.reduce((best, item) =>
      Math.max(...item.ranges) * item.weight > Math.max(...best.ranges) * best.weight ? item : best)
    const channel = chosen.ranges.indexOf(Math.max(...chosen.ranges))
    chosen.points.sort((a, b) => a.rgb[channel] - b.rgb[channel] || a.rgb[0] - b.rgb[0] || a.rgb[1] - b.rgb[1] || a.rgb[2] - b.rgb[2])
    let weight = 0, split = 0
    while (split < chosen.points.length - 1 && weight < chosen.weight / 2) weight += chosen.points[split++].weight
    boxes.splice(boxes.indexOf(chosen), 1, box(chosen.points.slice(0, split)), box(chosen.points.slice(split)))
  }

  const colors = boxes.sort((a, b) => b.weight - a.weight).map(item => {
    const rgb = [0, 1, 2].map(channel => Math.round(item.points.reduce((sum, point) => sum + point.rgb[channel] * point.weight, 0) / item.weight))
    return "#" + rgb.map(value => value.toString(16).padStart(2, "0")).join("")
  })
  return [...new Set(colors)]
}
