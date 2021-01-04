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
    path: '/picList',
    name: 'picList',
    component: () => import('../views/picList.vue'),
    meta: {
      type: 'container'
    }
  },
  {
    path: '/pic/:pic',
    name: 'picture',
    component: () => import('../views/pic.vue'),
    meta: {
      type: 'content',
      lightBox: false
    },
    beforeEnter: (to, from, next) => {
      if (from.meta.type === 'container') {
        to.matched[0].components.lightBox = to.matched[0].components.default
        to.matched[0].components.default = from.matched[0].components.default
        to.meta.lightBox = true
      }
      next()
    }
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
