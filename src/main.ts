import App from './App.vue'
import mitt from 'mitt'
import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.provide('event', mitt())

app.mount('#app')
