import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/lottery'
    },
    {
      path: '/lottery',
      component: () => import('@/views/lottery')
    },
    {
      path: '/game',
      component: () => import('@/views/game')
    }
  ]
})

export { router }
