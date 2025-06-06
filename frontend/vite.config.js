// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,    // ✅ Your custom port
    open: true,    // ✅ Automatically open browser
    host: true     // ✅ Allows LAN access (e.g., via 192.168.x.x)
  }
});
