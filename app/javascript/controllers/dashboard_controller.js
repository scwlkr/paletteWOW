import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["container", "emptyState", "fileInput"]

    connect() {
        this.renderPalettes()
    }

    getSavedPalettes() {
        try {
            const stored = localStorage.getItem('saved_palettes')
            let palettes = stored ? JSON.parse(stored) : []

            // Auto inject mocks for local dev if empty
            if (palettes.length === 0 && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
                palettes = this.getMockPalettes()
                this.savePalettes(palettes)
            }

            return palettes
        } catch (e) {
            console.error("Error reading from localStorage", e)
            return []
        }
    }

    getMockPalettes() {
        const ms = 86400000;
        const now = Date.now();
        return [
            { id: "m1", name: "Midnight City", colors: ["#141E30", "#243B55", "#4A6FA5", "#166D3B", "#000000"], created_at: new Date(now - ms * 1).toISOString() },
            { id: "m2", name: "Cyber Sunset", colors: ["#FF007F", "#FF7700", "#FFCC00", "#00FFCC", "#111111"], created_at: new Date(now - ms * 2).toISOString() },
            { id: "m3", name: "Desert Sand", colors: ["#D4A373", "#CCD5AE", "#E9EDC9", "#FEFAE0", "#FAEDCD"], created_at: new Date(now - ms * 3).toISOString() },
            { id: "m4", name: "Ocean Depth", colors: ["#03071E", "#370617", "#6A040F", "#9D0208", "#D00000"], created_at: new Date(now - ms * 4).toISOString() },
            { id: "m5", name: "Lavender Dream", colors: ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"], created_at: new Date(now - ms * 5).toISOString() },
            { id: "m6", name: "Forest Canopy", colors: ["#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2"], created_at: new Date(now - ms * 6).toISOString() },
            { id: "m7", name: "Neon Nights", colors: ["#00F5FF", "#00BFFF", "#0000FF", "#8A2BE2", "#FF00FF"], created_at: new Date(now - ms * 7).toISOString() },
            { id: "m8", name: "Autumn Leaves", colors: ["#821301", "#A12513", "#C03F21", "#DF5F31", "#FFA260"], created_at: new Date(now - ms * 8).toISOString() },
            { id: "m9", name: "Monochrome Dark", colors: ["#212529", "#343A40", "#495057", "#6C757D", "#ADB5BD"], created_at: new Date(now - ms * 9).toISOString() },
            { id: "m10", name: "Vaporwave", colors: ["#FF71CE", "#01CDFE", "#05FFA1", "#B967FF", "#FFFB96"], created_at: new Date(now - ms * 10).toISOString() },
            { id: "m11", name: "Coffee Shop", colors: ["#3E2723", "#4E342E", "#5D4037", "#6D4C41", "#795548"], created_at: new Date(now - ms * 11).toISOString() },
            { id: "m12", name: "Minty Fresh", colors: ["#004B23", "#006400", "#007200", "#008000", "#38B000"], created_at: new Date(now - ms * 12).toISOString() }
        ]
    }

    savePalettes(palettes) {
        try {
            localStorage.setItem('saved_palettes', JSON.stringify(palettes))
        } catch (e) {
            console.error("Error saving to localStorage", e)
            alert("Failed to save changes to local storage.")
        }
    }

    renderPalettes() {
        const palettes = this.getSavedPalettes()

        if (palettes.length === 0) {
            this.containerTarget.innerHTML = ''
            this.emptyStateTarget.classList.remove('hidden')
            return
        }

        this.emptyStateTarget.classList.add('hidden')
        this.containerTarget.innerHTML = palettes.map(palette => this.paletteTemplate(palette)).join('')
    }

    paletteTemplate(palette) {
        const date = new Date(palette.created_at).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })

        const colorBars = palette.colors.map(hex =>
            `<div class="flex-1 h-full" style="background-color: ${hex};"></div>`
        ).join('')

        return `
      <div class="border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition" data-id="${palette.id}">
        <a href="/${palette.colors.join('-').replace(/#/g, '')}" class="flex h-32 w-full cursor-pointer hover:opacity-95 transition-opacity">
          ${colorBars}
        </a>
        
        <div class="p-4 flex justify-between items-center bg-white gap-4">
          <div class="flex-1 min-w-0" data-controller="inline-edit" data-inline-edit-id-value="${palette.id}">
            <div class="flex items-center gap-2 group cursor-pointer" data-action="click->inline-edit#edit" data-inline-edit-target="display">
              <h3 class="font-bold text-lg truncate" data-inline-edit-target="text">${palette.name}</h3>
              <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
            </div>
            
            <form data-inline-edit-target="form" data-action="submit->inline-edit#save focusout->inline-edit#save" class="hidden flex items-center gap-2">
              <input type="text" data-inline-edit-target="input" value="${palette.name}" class="w-full text-lg font-bold border-b border-black outline-none px-0 py-0 m-0 bg-transparent focus:ring-0">
            </form>
            
            <p class="text-xs text-neutral-500 mt-1">${date}</p>
          </div>
          
          <button data-action="click->dashboard#deletePalette" data-id="${palette.id}" class="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition cursor-pointer shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
    `
    }

    deletePalette(event) {
        if (!confirm("Are you sure you want to delete this palette?")) return

        const id = event.currentTarget.dataset.id
        let palettes = this.getSavedPalettes()

        palettes = palettes.filter(p => p.id !== id)
        this.savePalettes(palettes)

        this.renderPalettes()
    }

    exportLibrary(event) {
        if (event) event.currentTarget.blur()

        const palettes = this.getSavedPalettes()
        if (palettes.length === 0) {
            alert("You don't have any saved palettes to export yet.")
            return
        }

        const dataStr = JSON.stringify(palettes, null, 2)
        const blob = new Blob([dataStr], { type: "application/json" })
        const url = URL.createObjectURL(blob)

        const a = document.createElement('a')
        a.href = url
        a.download = `paletteWOW-backup-${new Date().toISOString().split('T')[0]}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    triggerImport() {
        this.fileInputTarget.click()
    }

    importLibrary(event) {
        const file = event.target.files[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result)

                if (!Array.isArray(importedData)) {
                    throw new Error("Invalid format")
                }

                // Extremely basic validation
                if (importedData.length > 0 && (!importedData[0].id || !importedData[0].colors)) {
                    throw new Error("Invalid palette schema")
                }

                const currentPalettes = this.getSavedPalettes()

                // Merge strategy: Create a Map by ID to deduplicate, keeping newer versions if IDs clash
                const mergedMap = new Map()
                currentPalettes.forEach(p => mergedMap.set(p.id, p))
                importedData.forEach(p => mergedMap.set(p.id, p)) // Imports overwrite existing matching IDs

                const newPalettes = Array.from(mergedMap.values())

                // Sort by created_at descending just to be safe
                newPalettes.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

                this.savePalettes(newPalettes)
                this.renderPalettes()

                // Reset file input so same file can be selected again if needed
                event.target.value = ''

                alert(`Successfully imported ${importedData.length} palettes!`)
            } catch (err) {
                console.error("Import failed:", err)
                alert("Failed to import. The file might be corrupted or in the wrong format.")
                event.target.value = ''
            }
        }

        reader.readAsText(file)
    }
}
