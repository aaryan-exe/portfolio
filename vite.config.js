// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This must be '/' for your custom domain
  base: '/',
  plugins: [react()],
})