import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/script.ts'),
      name: 'Area11y',
      formats: ['iife'],
      fileName: () => 'area11y-core.iife.js'
    },
    sourcemap: true,
    cssCodeSplit: false
  }
})
