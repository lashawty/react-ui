import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// @ts-ignore
import * as path from 'node:path';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react({
    plugins: [[
      '@swc/plugin-styled-components', {
        'displayName': true,
        'ssr': false
      }
    ]]
  }),],
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, './src'),
    }
  },
})
