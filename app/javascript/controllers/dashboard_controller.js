import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["container", "emptyState", "fileInput", "paletteCard"]

    deletePalette(event) {
        if (!confirm("Are you sure you want to delete this palette?")) return

        const id = event.currentTarget.dataset.id
        const card = event.currentTarget.closest('[data-dashboard-target="paletteCard"]')

        fetch(`/palettes/${id}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                card.remove()
                if (this.paletteCardTargets.length === 0) {
                    if (this.hasContainerTarget) this.containerTarget.innerHTML = ''
                    if (this.hasEmptyStateTarget) this.emptyStateTarget.classList.remove('hidden')
                }
            } else {
                alert("Failed to delete palette.")
            }
        }).catch(error => {
            console.error("Error deleting palette:", error)
            alert("An error occurred.")
        })
    }

    exportLibrary(event) {
        alert("Export functionality is currently being migrated to the server. Check back later!")
    }

    triggerImport() {
        alert("Import functionality is currently being migrated to the server. Check back later!")
    }

    importLibrary(event) {
        // Disabled during migration
    }
}
