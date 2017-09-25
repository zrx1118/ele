<template>
  <div id="app">
    <footer></footer>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size: 100px;
}
@media screen and (min-width:321px) and (max-width:375px){html{font-size:110px}}
@media screen and (min-width:376px) and (max-width:414px){html{font-size:120px}}
@media screen and (min-width:415px) and (max-width:639px){html{font-size:150px}}
@media screen and (min-width:640px) and (max-width:719px){html{font-size:200px}}
@media screen and (min-width:720px) and (max-width:749px){html{font-size:225px}}
@media screen and (min-width:750px) and (max-width:799px){html{font-size:235px}}
@media screen and (min-width:800px){html{font-size:250px}}
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
