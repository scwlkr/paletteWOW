import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["display", "form", "input", "text"]
    static values = { id: String }

    edit(event) {
        if (event) event.preventDefault()

        this.displayTarget.classList.add("hidden")
        this.formTarget.classList.remove("hidden")
        this.inputTarget.focus()
        // Move cursor to end of input
        const val = this.inputTarget.value
        this.inputTarget.value = ''
        this.inputTarget.value = val
    }

    save(event) {
        if (event) event.preventDefault()

        const newName = this.inputTarget.value.trim()

        if (newName === "") {
            this.cancel()
            return
        }

        this.textTarget.textContent = newName
        this.updateLocalStorage(this.idValue, newName)

        this.formTarget.classList.add("hidden")
        this.displayTarget.classList.remove("hidden")
    }

    cancel() {
        this.inputTarget.value = this.textTarget.textContent
        this.formTarget.classList.add("hidden")
        this.displayTarget.classList.remove("hidden")
    }

    updateLocalStorage(id, newName) {
        try {
            const stored = localStorage.getItem('saved_palettes')
            if (!stored) return

            const palettes = JSON.parse(stored)
            const index = palettes.findIndex(p => p.id === id)

            if (index !== -1) {
                palettes[index].name = newName
                localStorage.setItem('saved_palettes', JSON.stringify(palettes))
            }
        } catch (e) {
            console.error("Error updating palette name in localStorage", e)
        }
    }
}
