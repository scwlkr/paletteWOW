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

        fetch(`/palettes/${this.idValue}`, {
            method: 'PATCH',
            headers: {
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ palette: { name: newName } })
        }).then(response => {
            if (!response.ok) {
                alert("Failed to update name.")
                this.cancel()
            }
        }).catch(err => {
            console.error("Error:", err)
            this.cancel()
        })

        this.formTarget.classList.add("hidden")
        this.displayTarget.classList.remove("hidden")
    }

    cancel() {
        this.inputTarget.value = this.textTarget.textContent
        this.formTarget.classList.add("hidden")
        this.displayTarget.classList.remove("hidden")
    }
}
