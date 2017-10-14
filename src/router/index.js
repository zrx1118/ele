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
import ShopDetail from '../components/ShoDetail'
import MoreList from '../components/MoreList'
import SecondList from '../components/SecondList'
import List from '../components/List'

// 配置路由规则
const routes=[
  {path:'',component:Takeout},
<<<<<<< HEAD
  {path:'/takeout',component:Takeout},
  {path:'/found',component:Found},
  {path:'/order',component:Order},
  {path:'/mine',component:Mine},
=======
  {path:'/takeout',component:Takeout },
  {path:'/found',component:Found },
  {path:'/order',component:Order },
  {path:'/mine',component:Mine },
  {path:'/limitsale',component:LimitSale },
  {path:'/shopdetail',component:ShopDetail },
  {path:'/navlist/:id',component:NavList },
>>>>>>> dev
  {path:'/second.more',component:More ,children:[
    {path:'/', redirect: 'morelist'},
    {path:'morelist',component:MoreList },
    // 路由传参
    {path:'secondlist/:id',component:SecondList}
  ]},
  {path:'/second.shopdetail',component:ShopDetail},
  {path:'/second.list',component:List}
]

// 创建路由实例
const router=new VueRouter({
    mode:'history',
  // 路由规则
  routes
})

export default router