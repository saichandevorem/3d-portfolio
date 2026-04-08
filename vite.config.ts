import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/3d-portfolio/", // For https://saichandevorem.github.io/3d-portfolio/
});
