import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // own API
      '/api': 'http://localhost:3000',
      // 3rd party
      '/rest': {
        target: 'https://fantasy.premierleague.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rest/, '/api'),
        
      },
      '/plt': {
        target: 'https://www.chelseafc.com/en',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/plt/, '/api'),
        
      }
  }
}
})
