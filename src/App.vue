<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello></hello> -->
    <order></order>
    <sell></sell>
  </div>
</template>

<script>
// import Hello from './components/Hello.vue'
import order from './components/order.vue'
//导入两个组件
import sell from './components/sell.vue'
import sell from './components/break.vue'

export default {
  name: 'app',
  components: {
    // order
    sell
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html{
  font-size: 100px;
}
</style>
