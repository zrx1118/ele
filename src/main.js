// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由模块
import VueRouter from 'vue-router'

// 全局安装模块
Vue.use(VueRouter);

// 分别导入4个组件
import Takeout from './pages/Takeout'
import Found from './pages/Found'
import Order from './pages/Order'
import Mine from './pages/Mine'
import Sell from './pages/Sell'
import Outsell from './pages/Outsell'
import Break from './pages/Break'
import Collect from './pages/Collect'
import Neighbour from './pages/Neighbour'

// 配置路由规则
const routes=[
  {path:'',component:Takeout},
  {path:'/takeout',component:Takeout },
  {path:'/found',component:Found },
  {path:'/order',component:Order, children : [
    {path : '/' ,component : Neighbour},
     {path:'/neighbour',component: Neighbour},
     {path : '/collect',component : Collect}
  ]},
  {path : '/sell',component:Sell, children : [
    {path : '/' ,component : Outsell},
     {path:'/outsell',component: Outsell},
     {path : '/break',component : Break}
  ]},
  {path:'/mine',component:Mine }
  
]
// ,children:[
//   { path: '', component: Sell },
//   {path:'sell',component:Sell}
// ]
// 创建路由实例
const router=new VueRouter({
  // 路由规则
  routes
})

Vue.config.productionTip = false

//导入xaios来处理网络请求,这不是vue本身的模块,这是官方推荐使用的三方模块作为网络请求
import axios from 'axios'

//因为这块不是vue的模块,所以不能使用vue.use()来进行注册,我们使用原型链的机制来注册
Vue.prototype.axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
