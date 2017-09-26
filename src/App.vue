<template>
  <div id="app">
    <order></order>
    <sell></sell>
    <foot></foot>
  </div>
</template>

<script>
import Foot from './components/Foot'
// import Hello from './components/Hello'
//导入两个组件

export default {
  name: 'app',
  components: {
    // order
    Foot
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
/* footer{
    width:100%;
    height: 48px;
    font-size:0;
    position:fixed;
    bottom:0;
    left:0;
    z-index:3;
    padding-top:5px;
    background-color: #fff;
}
footer span{
    display:inline-block;
    width:.2rem;
    height:.2rem;
    background:url(./img/footer.png);
    background-size:2.71rem 0.21rem;
}
footer div{
    float:left;
    width:25%;
    text-align:center;
}
.outer span{
    background-position-x: -.04rem;
}
.found span{
    background-position-x: -.83rem;
}
.list span{
    background-position-x: -1.64rem;
}
.mine span{
    background-position-x: -2.44rem;
}
footer p{
    font-size:0.12rem;
    color:#666;
} */
.clear:after{
    content:"";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden; 
}
</style>
