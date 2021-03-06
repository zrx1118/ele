import Vue from 'vue'
// 导入路由模块
import VueRouter from 'vue-router'
// 全局安装路由 (让任何组件都可以使用路由)
Vue.use(VueRouter);

//导入组件
import Integ from '../components/Integ'
import New from '../components/New'
import Money from '../components/Money'
import Duihuan from '../components/Duihuan'
import Liquan from '../components/Liquan'
import Yinliao from '../components/Yinliao'
import Jiadian from '../components/Jiadian'
import Jiaju from '../components/Jiaju'
import Takeout from '../pages/Takeout'
import Found from '../pages/Found'
import Order from '../pages/Order'
import Mine from '../pages/Mine'
import LimitSale from '../components/LimitSale'
import More from '../components/More'
import ShoDetail from '../components/ShoDetail'
import ShDetail from '../components/ShDetail'
import NavList from '../components/NavList'
import MoreList from '../components/MoreList'
import SecondList from '../components/SecondList'
import List from '../components/List'


Vue.config.productionTip = false

// 导入axios 来处理网络请求（这不是Vue本身的模块，这是官方推荐使用的第三方模块，作为网络请求）
import axios from 'axios'
// Vue.prototype.userName = '小黑'
// 因为axios不是vue的模块，所以不能使用Vue.use()来进行注册，我们使用原型链的机制来注册
Vue.prototype.axios = axios

//配置路由规则
const routes = [
  {path:'/',component:Takeout},
  {path:'/takeout',component:Takeout },
  {path:'/found',component:Found },
  {path:'/order',component:Order },
  {path:'/mine',component:Mine },
  {path:'/limitsale',component:LimitSale },
  {path:'/shdetail/:id',component:ShDetail },
  {path:'/navlist/:id',component:NavList },
  {path:'/second.more',component:More ,children:[
    {path:'/', redirect: 'morelist'},
    {path:'morelist',component:MoreList },
    // 路由传参
    {path:'secondlist/:id',component:SecondList},
    {path:'/second.shodetail',component:ShoDetail },
  ]},
  {path:'/list',component:List},
  {path:'/Integ',component:Integ},
  {path:'/New',component:New},
  {path:'/Money',component:Money},
  {path:'/Duihuan',component:Duihuan},
  {path:'/Liquan',component:Liquan},
  {path:'/Yinliao',component:Yinliao},
  {path:'/Jiadian',component:Jiadian},
  {path:'/Jiaju',component:Jiaju}
]

// 创建路由实例
const router=new VueRouter({
    mode:'history',
  // 路由规则
  routes
})
export default router