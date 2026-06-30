import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths, preserving the previous CRA `homepage: "."` behavior.
  base: "./",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
  },
})
