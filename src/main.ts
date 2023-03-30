import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Preview from './components/Preview.vue'

import Wings from '../packages'

const app = createApp(App)
app.component('Preview', Preview)

app.use(Wings).use(Router).mount('#app')
