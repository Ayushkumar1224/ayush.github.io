import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // for user page https://Ayushkumar1224.github.io/
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ = src
    },
  },
});
