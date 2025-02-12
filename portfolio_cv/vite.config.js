import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Important for Netlify
  build: {
    outDir: 'dist', // Ensures correct output folder
  }
  // base: 'https://github.com/manjitsingh2022/portfolio.git', 
})
