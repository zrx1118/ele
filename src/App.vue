<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello></hello> -->
    <order></order>
    <sell></sell>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Order from './components/Order'
//导入两个组件
import Sell from './components/Sell'

export default {
  name: 'app',
  components: {
    Order,
    Sell
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
