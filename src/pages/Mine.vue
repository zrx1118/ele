<template>
    <div class="mine">   
        <div class="header">我的<span class="icon"></span></div>
        <div class="mine-login">
            <div class="main_div">
                <span class='main_left'></span>
                <div class = "main_center">
                    <p class="main_topp">登录/注册</p>
                    <p class="main_bottomp"><span>登录后享受更多特权</span></p>
                </div>
                <span class="main_span"></span>
            </div>
        </div>
        <div class="banner">
            <a href="" class="banner_left">
                <p><img src="../assets/right.png" alt=""></p>
                <p>优惠</p>
            </a>
            <a href="">
                <p><img src="../assets/left.png" alt=""></p>
                <p>积分</p>
            </a>
        </div>
        <div class="mine-list mine-addr">
            <img class="mine-list-img" src="../assets/add.png" alt="">
            <div class="mine-list-text">我的地址<span class="last_span"></span></div>
        </div>
        <div class="mine-list mine-score" @click="fn">
            <img class="mine-list-img" src="../assets/jifen.png" alt="">
            <div class="mine-list-text">积分商城<span class="last_span"></span></div>
        </div>
        <div class="mine-list mine-ser">
            <img class="mine-list-img" src="../assets/help.png" alt="">
            <div class="mine-list-text">服务中心<span class="last_span"></span></div>
        </div>
        <div class="mine-list mine-load">
            <img class="mine-list-img" src="../assets/xiazai.png" alt="">
            <div class="mine-list-text">下载饿了么APP<span class="last_span"></span></div>
            <p class="last_p"></p>
        </div>
        <p class="last"></p>
    </div>
</template>
<script>
export default {
  methods: {
    fn() {
        this.$router.push('/Integ');
    }
  }
}
</script>

<style scoped>
@import '../css/mine.css';
</style>