import { defineConfig } from 'vite'
import baseConfig from './base.config'
import { resolve } from 'path'

export default defineConfig({
    ...baseConfig,
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, '../packages/index.ts'),
            name: 'Wings',
            fileName: (hash) => `wings.${hash}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: 'vue'
            }
        }
    },
    plugins: [
        ...baseConfig.plugins
    ]
})