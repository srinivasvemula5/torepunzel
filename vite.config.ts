import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use env variable if set, otherwise default to "/"
  base: process.env.VITE_BASE_PATH || "/",
});
