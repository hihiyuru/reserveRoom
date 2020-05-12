import Vue from 'vue'
import Router from 'vue-router'
// import { Notification } from 'element-ui';
Vue.use(Router)

const routes = [
  {
    // 首頁
    path: '/',
    name: 'lobby',
    component: () => import('@/views/lobby')
  }, {
    // 單一房型細節
    path: '/roomDetail',
    name: 'roomDetail',
    component: () => import('@/views/roomDetail')
  },
]
var router = new Router({
  routes: routes,
  /**
     只要router.push就把滾輪滾到最頂
  **/
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
export default router
