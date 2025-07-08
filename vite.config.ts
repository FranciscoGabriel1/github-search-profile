import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@config":     fileURLToPath(new URL("./src/config", import.meta.url)),
      "@pages":      fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@utils":      fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@context":    fileURLToPath(new URL("./src/context", import.meta.url)),
      "@modules":    fileURLToPath(new URL("./src/modules", import.meta.url))
    }
  }
});
