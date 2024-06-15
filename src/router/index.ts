import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            resolve({ top: 0 })
        })
    }
})

export default router
