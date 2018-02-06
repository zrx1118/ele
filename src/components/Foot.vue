<template>
  <div class="foot">
    <footer>
      <router-link to="/takeout" class="outer"><span></span><p>外卖</p></router-link>
      <router-link to="/found" class="found"><span></span><p>发现</p></router-link>
      <router-link to="/order" class="list"><span></span><p>订单</p></router-link>
      <router-link to="/mine" class="mine"><span></span><p>我的</p></router-link>
    </footer>
  </div>  
</template>
    
<script>
export default {
  name: "foot",
  data () {
    return {
        msg:'foot'
    }
  }
}
</script>
    
<style lang="css" scoped>
footer{
    width:100%;
    height: 48px;
    font-size:0;
    position:fixed;
    bottom:0;
    left:0;
    z-index:3;
    padding-top:5px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
footer a{
    width: 25%;
    display: block;
    text-align: center;
}
footer span{
    display:inline-block;
    width:.2rem;
    height:.2rem;
    background:url(../assets/footer.png);
    background-size:2.71rem 0.21rem;
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
</style>