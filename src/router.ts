import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
const routes = [{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('../packages/Button/docs/README.md')
}]

const routerConfig = {
    history: createWebHashHistory(),
    routes
}

const router = createRouter(routerConfig as RouterOptions)

export default router