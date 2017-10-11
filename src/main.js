// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// 导入路由模块
// import VueRouter from 'vue-router'
// 导入路由配置模块index.js
import router from './router'
// 导入网络资源
import resource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 导入懒加载模块
import VueLazyload from 'vue-lazyload'
import logoSrc from './assets/logo.png'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload,{
  error:logoSrc,//这个是请求失败后显示的图片
  loading:logoSrc,//这个是加载的loading过度效果
  try:2//这个是加载图片数量
})

// 全局配置一下资源模块
Vue.use(resource)
// 导入axios 来处理网络请求（这不是Vue本身的模块，这是官方推荐使用的第三方模块，作为网络请求）
import axios from 'axios'
// 因为axios不是vue的模块，所以不能使用Vue.use()来进行注册，我们使用原型链的机制来注册
Vue.prototype.axios = axios
import store from './store'

import Vuex from 'vuex'

//修改头
Vue.use(Vuex)
const store =new Vuex.Store({
  // 这个就是状态（数据），统一用vue来管理的数据放在这里
  state:{
    money:0
  },
  // 我们要修改vuex仓库中的state的状态（数据）的话，必须要通过mutations中的方法操作
  mutations:{
    // 我们习惯吧mutations里的方法，写成大写
    ADD(state,price){
      // 在mutations里的所有方法的第一个参数就是我们仓库中的state，这里不要使用this.state
      // price是自己传过来的参数，这里表示单价
      // 在内部进行价格的增加
      state.money+=price
    },
    REDUCE(state,price){
      state.money-=price
    }
  },
  // 如果涉及到异步操作，我们就要把方法写在action里
  actions:{
    add(context,price){
      setTimeout(()=>{
        context.commit('ADD',price)
      },1000)
    },
    reduce(context,price){
      setTimeout(()=>{
        context.commit('REDUCE',price)
      },1000)
    }
  },
  getters:{
    getMoneyStr(state){
      return "总价钱："+state.money+"元"
    }
  }
})
//修改尾

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
<<<<<<< HEAD
  components: {
    App
  },
  router
  // mounted(){
  //   var mySwiper1 = new Swiper ('nav .swiper-container', {
  //     slidesPerView:6,
  //     freeMode:true
  //   });
  // }
=======
  components: { App },
  router
>>>>>>> syl/mine
})
