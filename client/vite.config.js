import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

export default defineConfig({
  server:{
    proxy:{
      '/api' : 'http://localhost:4000'
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
});
