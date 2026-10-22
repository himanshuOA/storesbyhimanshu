import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base '/' so nested routes like /services load assets correctly
export default defineConfig({ plugins: [react()], base: '/' })
