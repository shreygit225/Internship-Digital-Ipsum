import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: { watch: { awaitWriteFinish: true } },
  plugins: [react()],
  outDir: 'build'  // Ensure this matches your gh-pages configuration

});
