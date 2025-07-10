import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindss()],
  server: {
    hmr: false, // Desactiva Hot Module Replacement
    watch: {
      usePolling: false, // Desactiva el polling de archivos
    }
  }
})
