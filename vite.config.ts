import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Wildcard z kropką = dowolna subdomena ngroka (ngrok zmienia ją co sesję).
  // Dotyczy tylko dev/preview — nie wpływa na produkcyjny build.
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
  preview: {
    allowedHosts: ['.ngrok-free.app'],
  },
})
