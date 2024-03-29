import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/global.sass'
import 'normalize.css/normalize.css'

createApp(App).use(store).use(router).mount('#app')
