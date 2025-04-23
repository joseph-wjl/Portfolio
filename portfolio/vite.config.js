import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@react-three/fiber", "@react-three/drei"],
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
  },
  server: {
    fs: {
      strict: false, // Allow access to all files in the project
    },
  },
});