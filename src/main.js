// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import router from './router/router.js'

//引入
//import Users from './components/Users'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//全局注册组建
//Vue.component("users",Users)
/* eslint-disable no-new */

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
