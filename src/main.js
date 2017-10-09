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

// 全局配置一下资源模块
Vue.use(resource)

// 导入axios 来处理网络请求（这不是Vue本身的模块，这是官方推荐使用的第三方模块，作为网络请求）
import axios from 'axios'

// 因为axios不是vue的模块，所以不能使用Vue.use()来进行注册，我们使用原型链的机制来注册
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  mounted(){
    var mySwiper1 = new Swiper ('nav .swiper-container', {
      slidesPerView:6.5,
      freeMode:true
    });
  }
})
