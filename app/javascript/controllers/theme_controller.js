import { Controller } from "@hotwired/stimulus"
import { prefersDark, storedTheme, toggleTheme } from "lib/theme"

export default class extends Controller {
  connect() {
    this.apply(prefersDark(storedTheme(), this.systemPrefersDark()))
  }

  toggle(event) {
    if (event) event.currentTarget.blur()

    const isDark = document.documentElement.classList.contains("dark")
    this.apply(toggleTheme(isDark) === "dark")
  }

  apply(dark) {
    document.documentElement.classList.toggle("dark", dark)
  }

  systemPrefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }
}
