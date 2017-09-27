import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局安装模块
Vue.use(VueRouter);

// 分别导入4个组件
import Takeout from './pages/Takeout'
import Found from './pages/Found'
import Order from './pages/Order'
import Mine from './pages/Mine'
import Delivery from './pages/Delivery'

// 配置路由规则
const routes=[
  {path:'',component:Takeout},
  {path:'/takeout',component:Takeout },
  {path:'/found',component:Found },
  {path:'/order',component:Order },
  {path:'/mine',component:Mine },
  {path:'/delivery:a',component:Delivery}
]

// 创建路由实例
const router=new VueRouter({
    mode:'history',
  // 路由规则
  routes
})

export default router