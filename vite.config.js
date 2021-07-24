import vue from '@vitejs/plugin-vue'
import { defineConfig } from "vite"
import path from "path"

const resolve = (dir) => path.join(__dirname, dir)

export default defineConfig({
    resolve: {
        alias: {
          "@": resolve("src"),
          comps: resolve("src/components"),
          apis: resolve("src/apis"),
          views: resolve("src/views"),
          utils: resolve("src/utils"),
          routes: resolve("src/routes"),
          styles: resolve("src/styles")
        }
      },
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    }
})