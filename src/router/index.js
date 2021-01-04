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

router.beforeEach((to, from, next) => {
  if (from.matched.length) {
    const fromMatch = from.matched[0]
    const toMatch = to.matched[0]
    let defaultComponent = null
    if (fromMatch.meta.type === 'container' && to.meta.type === 'content') {
      defaultComponent = fromMatch.components.default
    } else if (fromMatch.components.lightBox) {
      defaultComponent = fromMatch.components.default
      fromMatch.components.default = fromMatch.components.lightBox
      fromMatch.components.lightBox = null
      fromMatch.meta.lightBox = false
    }
    if (defaultComponent && to.meta.type === 'content') {
      toMatch.components.lightBox = toMatch.components.default
      toMatch.components.default = defaultComponent
      to.meta.lightBox = true
    }
  }
  next()
})
