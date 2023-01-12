import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//配置路由
export default new Router({
  routes:[
    {path:"/",component:HelloWorld},
    {path:"/helloworld",component:Home}
  ],
  mode:"history"
})
