import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

function resolve(relativePath: string) {
  return path.resolve(__dirname, relativePath)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
})
