// Machado, Oliveira & Fernandes (2009), linear RGB matrices at severity 1.0
// and 0.6 (the anomalous forms):
// https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
const matrices = {
  protanopia: [[0.152286, 1.052583, -0.204868], [0.114503, 0.786281, 0.099216], [-0.003882, -0.048116, 1.051998]],
  protanomaly: [[0.385450, 0.769005, -0.154455], [0.100526, 0.829802, 0.069673], [-0.007442, -0.022190, 1.029632]],
  deuteranopia: [[0.367322, 0.860646, -0.227968], [0.280085, 0.672501, 0.047413], [-0.011820, 0.042940, 0.968881]],
  deuteranomaly: [[0.498864, 0.674741, -0.173604], [0.205199, 0.754872, 0.039929], [-0.011131, 0.030969, 0.980162]],
  tritanopia: [[1.255528, -0.076749, -0.178779], [-0.078411, 0.930809, 0.147602], [0.004733, 0.691367, 0.303900]],
  tritanomaly: [[1.104996, -0.046633, -0.058363], [-0.032137, 0.971635, 0.060503], [0.001336, 0.317922, 0.680742]]
}

// Achromatopsia is approximated with linear Rec. 709 luminance; the milder
// achromatomaly preview blends 60% of that grayscale with the original color.
const luminance = [0.2126, 0.7152, 0.0722]

export function simulate(hex, type = "normal") {
  if (typeof hex !== "string") return null
  let value = hex.trim().replace(/^#/, "")
  if (/^[0-9a-f]{3}$/i.test(value)) value = value.split("").map(c => c + c).join("")
  if (!/^[0-9a-f]{6}$/i.test(value)) return null
  value = value.toLowerCase()
  const matrix = Object.hasOwn(matrices, type) ? matrices[type] : null
  const gray = type === "achromatopsia" || type === "achromatomaly"
  if (!matrix && !gray) return `#${value}`

  const rgb = [0, 2, 4].map(offset => {
    const channel = parseInt(value.slice(offset, offset + 2), 16) / 255
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  })
  const dot = row => row.reduce((sum, weight, i) => sum + weight * rgb[i], 0)
  const output = gray
    ? rgb.map(channel => type === "achromatopsia" ? dot(luminance) : 0.4 * channel + 0.6 * dot(luminance))
    : matrix.map(dot)
  return "#" + output.map(channel => {
    const clipped = Math.max(0, Math.min(1, channel))
    const encoded = clipped <= 0.0031308 ? 12.92 * clipped : 1.055 * clipped ** (1 / 2.4) - 0.055
    return Math.round(encoded * 255).toString(16).padStart(2, "0")
  }).join("")
}
