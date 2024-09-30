import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react(),
      tsconfigPaths(),
      legacy({
         modernPolyfills: true,
         renderLegacyChunks: true
      })
   ]
});
