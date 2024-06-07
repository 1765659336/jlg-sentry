import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path";
import preprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: preprocess()
  })],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
})
