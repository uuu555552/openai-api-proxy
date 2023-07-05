import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    //滚动行为
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      title: '首页',
      component: () => import('@/views/firstView/index.vue')
    },
    {
      path: '/register',
      name: 'Register',
      title: '注册',
      component: () => import('@/views/firstView/Register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      title: '登录',
      component: () => import('@/views/firstView/Login.vue')
    },
    {
      path: '/rentapi',
      name: 'RentApi',
      title: '出租API',
      component: () => import('@/views/firstView/RentApi/index.vue')
    }
  ]
})

// 定义一个resetRouter 方法，在退出登录后或token过期后 需要重新登录时，调用即可
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
