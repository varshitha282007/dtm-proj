import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'import.meta.env.VITE_USE_MOCK_API': JSON.stringify('false'),
      'import.meta.env.VITE_API_BASE_URL': JSON.stringify('/api/v1'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: true as const,
      // HMR is disabled in AI Studio container to prevent WebSocket closed without opened errors
      hmr: false,
      ws: false as const,
      watch: null,
    },
  };
});
