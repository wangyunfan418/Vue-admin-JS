/**
 * !Vue-Router
 * !在此处放全局路由, 模块路由从modules中引入
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * !hash 模式
 * ?框架级路由, 不变化的页面, 例如: 首页, 404, 401等
 */
export const constantRouterMap = [{
  path: '/',
  name: 'Login',
  component: () => import('@/views/Login/index'),
  hidden: true
},
{
  path: '/404',
  component: () => import('@/views/ErrorPage/404'),
  hidden: true
},
{
  path: '/401',
  component: () => import('@/views/ErrorPage/401'),
  hidden: true
}
]

/**
 * ?业务级路由, 后期只需要引入即可
 */
export const asyncRouterMap = [
  // classificationRouter
  // basicsRouter,
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  /**
   * !滚动行为 (https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)
   */
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  routes: constantRouterMap
})

/**
 * !history 模式
 */
// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [{
//     path: '/',
//     name: 'Login',
//     component: () => import('@/views/Login/index'),
//     hidden: true
//   }]
// })
