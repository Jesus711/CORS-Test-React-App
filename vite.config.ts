import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CORS-Test-React-App",
  server: {
    proxy:
      {
        "/api" : {
          target: "https://example.com",
          changeOrigin: true,
        }
      }
  }
})
