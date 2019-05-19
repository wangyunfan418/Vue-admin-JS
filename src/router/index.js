/**
 * !Vue-Router
 * !在此处放全局路由, 模块路由从modules中引入
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL
})
