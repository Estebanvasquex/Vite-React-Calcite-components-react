import { fileURLToPath, URL } from "node:url";
import { defineConfig, normalizePath } from "vite";
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from "vite-plugin-static-copy";
import resolvePkg from "resolve-pkg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(
            resolvePkg("@esri/calcite-components/dist/calcite/assets/")
          ),
          dest: "./",
        },
      ],
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
