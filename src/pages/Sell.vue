<template>
    <div class="sell">
        <div class="sell-header">
            <div class="sell-header-top">
                <img @click="backFn" src="../assets/left-1.png" alt="">
                <h1>全部订单</h1>
            </div>
        </div>
        <div class="null"></div>
        <div class="sell-other">
            <div class="sell-other-one active"><router-link to="/outsell">外卖</router-link></div>
            <div class="sell-other-two "><router-link to="/break">早餐</router-link></div>
            
        </div>
        <router-view></router-view>
    </div>
    
</template>
<script>

export default {
  
    data () {
        return {
            haha: '我是订单'
        }
    },
    methods: {
        backFn:function() {
            // history.back(-1);
            this.$router.push('/order');;
        }
    }
}
</script>
<style scoped>
.sell{
    width:100%;
    font-size: 0;
}
.sell-header{
    width: 100%;
    height: .3754rem;
    background: #00a8ff;
    position: fixed;
    top:0;
    left: 0;
    right:0;
    z-index: 1;
}
.sell-header-top{
    width: 92%;
    margin: auto;
    display: flex;
    font-size:.075rem;
    color:#fff;
    line-height: .3754rem;
}
.sell-header-top h1{
    margin-left: .2rem;
}
.null{
    width: 100%;
    height: .3754rem;
}
.sell-other{
    width:100%;
    height: .375rem;
    font-size:12px;
    display: flex;
    justify-content: space-around;
    
}
.sell-other div{
    width:50%;
    height: .375rem;
    text-align: center;
    line-height: .375rem;
}
.sell-other-one{
    color:#2395ff;
    border-bottom:2px solid #2395ff;
}
.sell-other-two{
    width:50%;
    height: .375rem;
}
/* .router-link-active {
    color:#2395ff;
    border-bottom:2px solid #2395ff;
} */
.active{
    color:#2395ff;
    border-bottom:2px solid #2395ff;
}
</style>

