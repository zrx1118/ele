<template>
    <div class="foot">
        <footer>
            <router-link to="/takeout"><div class="outer"><span></span><p>外卖</p></div></router-link>
            <router-link to="/found"><div class="found"><span></span><p>发现</p></div></router-link>
            <router-link to="/order"><div class="list"><span></span><p>订单</p></div></router-link>
            <router-link to="/mine"><div class="mine"><span></span><p>我的</p></div></router-link>
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
}
footer span{
    display:inline-block;
    width:.2rem;
    height:.2rem;
    background:url(../assets/footer.png);
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
</style>