<template>
  <div id="app">
    <foot v-show="isShow()"></foot>
    <router-view></router-view>
  </div>
</template>

<script>
import Foot from './components/Foot'

export default {
  name: 'app',
  data(){
    return{
      arr:["/takeout","/found","/order","/mine","/"]
    }
  },
  components: {
    Foot,
  },
  methods: {
    isShow() {
      var path=this.$route.path;
      return this.arr.indexOf(path) == -1 ? false : true;
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
