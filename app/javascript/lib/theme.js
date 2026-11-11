export const THEME_STORAGE_KEY = "palettewow-theme"

export function resolveTheme(stored, systemPrefersDark) {
  if (stored === "dark") return "dark"
  if (stored === "light") return "light"
  return systemPrefersDark ? "dark" : "light"
}

export function prefersDark(stored, systemPrefersDark) {
  return resolveTheme(stored, systemPrefersDark) === "dark"
}

export function nextTheme(isDark) {
  return isDark ? "light" : "dark"
}

export function storedTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return stored === "dark" || stored === "light" ? stored : null
  } catch {
    return null
  }
}

export function saveTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage may be unavailable (private mode); the device setting still applies.
  }
}

export function toggleTheme(isDark) {
  const theme = nextTheme(isDark)
  saveTheme(theme)
  return theme
}
