import { App, Plugin } from 'vue'
import Button from './src/index'

export const ButtonPlugin: Plugin = {
    install(app: App, ...options) {
        app.component('w-button', Button)
    },
}

export { Button }