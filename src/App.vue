<template>
  <div id="app">
    <!-- <found></found> -->
    <!-- <list></list> -->
    <more></more>
  </div>
</template>

<script>
import Found from './components/Found'
import List from './components/List'
import More from './components/More'

export default {
  name: 'app',
  components: {
    Found,
    List,
    More
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
</style>
