import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.js',
      name: 'sbelteui',
      formats: ['es', 'umd'],
      fileName: (format) => `sbelteui.${format}.js`
    }
  },
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
  })]
})
