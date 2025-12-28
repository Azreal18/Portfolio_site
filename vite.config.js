import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Portfolio_site/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
    }
})
