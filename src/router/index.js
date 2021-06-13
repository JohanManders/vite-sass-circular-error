import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    alias: '/',
    name: 'Homepage',
    component: () => import('@/views/Homepage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  return next()
})

export default router
