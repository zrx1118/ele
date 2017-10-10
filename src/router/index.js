import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局安装模块
Vue.use(VueRouter);

// 分别导入组件
import Takeout from '../pages/Takeout'
import Found from '../pages/Found'
import Order from '../pages/Order'
import Mine from '../pages/Mine'
import LimitSale from '../components/LimitSale'
import ShopDetail from '../components/ShopDetail'
import NavList from '../components/NavList'
import More from '../components/More'
import MoreList from '../components/MoreList'
import SecondList from '../components/SecondList'

// 配置路由规则
const routes=[
  {path:'',component:Takeout},
  {path:'/takeout',component:Takeout },
  {path:'/found',component:Found },
  {path:'/order',component:Order },
  {path:'/mine',component:Mine },
  {path:'/limitsale',component:LimitSale },
  {path:'/shopdetail',component:ShopDetail },
  {path:'/navlist/:id',component:NavList },
  {path:'/second.more',component:More ,children:[
    {path:'/', redirect: '/second.more/morelist'},
    {path:'/second.more/morelist',component:MoreList },
    {path:'/second.more/secondlist/:id',component:SecondList}
  ]},
  {path:'/second.shopdetail',component:ShopDetail }
]

// 创建路由实例
const router=new VueRouter({
    mode:'history',
  // 路由规则
  routes
})

export default router