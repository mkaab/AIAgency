import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  server: {
    // Disable HMR to avoid eval usage under strict CSP environments
    hmr: false,
  },
})
