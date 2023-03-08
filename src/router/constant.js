export default [
    {
        path: '/',
        name: 'home',
        component: () => import('views/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('views/About.vue'),
    },
    {
        path: '/store',
        name: 'store',
        component: () => import('views/StoreView.vue'),
    },
]
