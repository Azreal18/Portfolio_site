import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',  // Use relative paths for deployment
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
    }
})
