import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: __dirname,
  base: "/calmo-ui/",
  plugins: [react()],
  resolve: {
    alias: {
      "@sh981013s/calmo-ui": path.resolve(__dirname, "../packages/calmo-ui/src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/demo"),
    emptyOutDir: true,
  },
});
