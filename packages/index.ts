import { App, Plugin } from 'vue'

import { ButtonPlugin } from './Button'

const WingsPlugin: Plugin = {
    install(app: App, ...options) {
        ButtonPlugin.install?.(app)
    },
}

export default WingsPlugin

export * from './Button'