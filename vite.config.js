import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// Import plugins rather than require
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer' 

export default defineConfig({
  plugins: [reactRefresh()],

  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,  
      ],
    },
  },
})