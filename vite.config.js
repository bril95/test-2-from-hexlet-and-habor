import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  
  build: {
    outDir: 'dist',
    sourcemap: true,
  },

  plugins: [react()],
  
  optimizeDeps: {
    include: [],
  },
});