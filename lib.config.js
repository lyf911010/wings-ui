import { defineConfig } from 'vite'
import baseConfig from './base.config'
import { resolve } from 'path'

const myPlugin = () => {
    const virtualModuleId = 'virtual:my-module'
    const resolvedVirtualModuleId = '\0' + virtualModuleId
    
    return {
        name: 'my-plugin', 
        load(id) {
            console.log('load', id);
            return
        },
    }
}

export default defineConfig({
    ...baseConfig,
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, './packages/index.ts'),
        },
        rollupOptions: {
            external: ['vue'],
            output: [
                {
                    //打包格式
                    format: "es",
                    //打包后文件名
                    entryFileNames: "[name].mjs",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "./dist/es",
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "./dist/lib",
                },
            ],
            plugins: [
                myPlugin()
            ]
        }
    },
    plugins: [
        ...baseConfig.plugins
    ]
})