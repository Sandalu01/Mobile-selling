import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

    server: {
      port: 1332// Change 3000 to your desired port number
    }
  
  

  
})
