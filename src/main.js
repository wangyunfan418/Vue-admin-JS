import Vue from 'vue'
// !引入axios
import './plugins/axios'
import App from './App.vue'
// !引入路由全局路径
import router from '@/router'
// !引入vuex
import store from '@/store'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
