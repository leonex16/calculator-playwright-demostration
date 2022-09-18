import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://leonex16.github.io/calculator-playwright-demostration/',
  plugins: [preact()]
})
