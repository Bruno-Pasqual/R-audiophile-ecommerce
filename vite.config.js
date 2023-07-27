import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/R-audiophile-ecommerce',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

/* export default defineConfig({
  plugins: [react()],
  base: '/R-audiophile-ecommerce',
});
 */
