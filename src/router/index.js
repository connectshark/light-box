import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/pic/:id',
    name: 'picture',
    component: () => import('../views/pic.vue')
  },
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
