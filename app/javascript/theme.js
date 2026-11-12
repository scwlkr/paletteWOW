// A blocking head script resolves the theme before the page can paint.
(() => {
  const key = "palettewow-theme"
  const root = document.documentElement
  const system = window.matchMedia("(prefers-color-scheme: dark)")
  const read = () => {
    try { return window.localStorage.getItem(key) } catch { return null }
  }
  const choice = value => value === "dark" || value === "light" ? value : null
  let preference = choice(read())

  function apply() {
    const dark = preference ? preference === "dark" : system.matches
    root.classList.toggle("dark", dark)
    root.style.colorScheme = dark ? "dark" : "light"
    document.querySelectorAll("[data-theme-toggle]").forEach(button => {
      button.hidden = false
      button.setAttribute("aria-checked", String(dark))
    })
  }

  apply()
  system.addEventListener("change", apply)
  // Delegation survives Turbo replacing the body; this head script runs once.
  document.addEventListener("click", event => {
    if (!event.target.closest("[data-theme-toggle]")) return
    preference = root.classList.contains("dark") ? "light" : "dark"
    try { window.localStorage.setItem(key, preference) } catch { /* Keep the choice for this visit. */ }
    apply()
  })
  window.addEventListener("storage", event => {
    if (event.key !== key && event.key !== null) return
    preference = choice(read())
    apply()
  })
  window.addEventListener("pageshow", apply)
  document.addEventListener("turbo:load", apply)
  document.addEventListener("DOMContentLoaded", apply)
})()
