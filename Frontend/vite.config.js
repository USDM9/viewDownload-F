import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src', 'index.html')
    },
    outDir: path.resolve(__dirname, 'dist')
  },
  publicDir: 'public',
  base: './'
})
