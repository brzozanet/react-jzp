import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jzp-react-module-02-render-state/",
  plugins: [react()],
});
