<template>
  <div id="app">
    <footer>
        <router-link to="/takeout"><div class="outer"><span></span><p>外卖</p></div></router-link>
        <router-link to="/found"><div class="found"><span></span><p>发现</p></div></router-link>
        <router-link to="/order"><div class="list"><span></span><p>订单</p></div></router-link>
        <router-link to="/mine"><div class="mine"><span></span><p>我的</p></div></router-link>
    </footer>
    <!-- 使用router-view组件（标签）进行组件显示 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
footer{
    width:100%;
    height: 48px;
    font-size:0;
    position:fixed;
    bottom:0px;
    left:0px;
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
}
.clear:after{
    content:"";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden; 
}
</style>
