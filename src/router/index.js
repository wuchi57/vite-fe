import { createRouter, createWebHistory } from 'vue-router'

import constantRouters from './constant.js'

const routes = [...constantRouters]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth',
        }
    },
})

export default router
