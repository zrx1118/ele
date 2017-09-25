// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由模块
import VueRouter from 'vue-router'

// 全局安装模块
Vue.use(VueRouter);

// 分别导入4个组件
import Takeout from './components/Takeout'
import Found from './components/Found'
import Order from './components/Order'
import Mine from './components/Mine'

// 配置路由规则
const routes=[
  {path:'',component:Takeout},
  {path:'/takeout',component:Takeout },
  {path:'/found',component:Found },
  {path:'/order',component:Order },
  {path:'/mine',component:Mine }
]

// 创建路由实例
const router=new VueRouter({
  // 路由规则
  routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
