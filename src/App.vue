<template>
  <div id="app">
    <!-- <found></found> -->
    <!-- <list></list> -->
    <!-- <more></more> -->
    <foot v-show="isShow()"></foot>
    <router-view></router-view>
    <!-- <shop-detail> </shop-detail> -->
    <!-- <second-list></second-list> -->
    
  </div>
</template>

<script>
import Found from './pages/Found'
import List from './components/List'
import More from './components/More'
import ShopDetail from './components/ShopDetail'
import SecondList from './components/SecondList'

import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Found,
    List,
    More,
    Foot,
    ShopDetail,
    SecondList
  },
  methods: {
    isShow() {
      return this.$route.path.indexOf('second') == -1 ? true : false;
    }
  }
}

</script>

<style>
html{font-size:100px}
*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
    text-decoration: none;
    color: inherit;
}
ul,ol{
    list-style: none;
}
input{
    outline: none;
    resize: none;
}
.clear:after{
    content:"";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden; 
}
</style>
