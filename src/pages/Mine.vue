
<template>
    <div class="main">   
        <div class="header">我的<span id="iconS"></span></div>
        <div class="main">
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
        <div class="div">
            <img src="../assets/add.png" alt="">
            <div>我的地址<span class="last_span"></span></div>
        </div>
       
            
            <!-- <router-link to="/Integ"> -->
             <div class="div" @click="fn">
                <img src="../assets/jifen.png" alt="">
                <div>积分商城<span class="last_span"></span></div>
            </div>
            <!-- </router-link> -->
            <!-- <router-view></router-view> -->
        
        <div class="div">
            <img src="../assets/help.png" alt="">
            <div>服务中心<span class="last_span"></span></div>
        </div>
        <div class="div">
            <img src="../assets/xiazai.png" alt="">
            <div>下载饿了么APP<span class="last_span"></span></div>
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
        .main{
            background: rgba(204, 204, 204, 0.5);
        }
        .header{
            width:100%;
            height:0.6rem;
            line-height:0.6rem;
            text-align:center;
            color:#fff;
            background-image: linear-gradient(90deg,#0af,#0085ff);
            font-size:0.28rem;
            font-weight:bold;
            position:fixed;
            left: 0;
            top:0;
            z-index: 8888;
            border-bottom: 1px solid rgba(204, 204, 204, 0.5);
        }
        .hidden{
            height:0.6rem;
        }
        .header #iconS{
            content: " ";
            display: inline-block;
            height: 0.12rem;
            width: 0.12rem;
            border-width: 2px 2px 0 0;
            border-color: #fff;
            border-style: solid;
            -webkit-transform: rotate(225deg);
            transform:  rotate(225deg);
            position:absolute;
            left:20px;
            top:.23rem;
        }
        .main{
            width: 100%;
            margin-top: .6rem;
        }
        .main_div{
            position: relative;
            display: flex;
            background-image: linear-gradient(90deg,#0af,#0085ff);
            padding: .33rem .2rem;
            color: #fff;
            align-items: center;
        }
        .main_topp{
            font-size: .28rem;
        }
        .main_bottomp{
            font-size: .16rem;
        }
        .main_left{
            width: 0.8rem;
            height: 0.8rem;
            background: url(../assets/person1.png) no-repeat;
            background-size:100% 100%;
        }
        .main_center{
            margin-left:0.24rem;
        }
        .main_span{
            content: " ";
            display: inline-block;
            height: 0.12rem;
            width: 0.12rem;
            border-width: 2px 2px 0 0;
            border-color: #fff;
            border-style: solid;
            -webkit-transform: rotate(225deg);
            transform: rotate(405deg);
            position: absolute;
            right: 20px;
            top: 50%;
        }
        .banner{
            display: table;
            width: 100%;
            height: 1.12rem;
            border-bottom: 1px solid #ddd;
            background-color: #fff;
            font-size:0;
        }
        .banner a{
           
            display: table-cell;
        
            width: 49.3333%;
            vertical-align: middle;
            text-align: center;
        }
        .banner_left{
            border-right: 1px solid #ddd;
        }
        /* .banner a p:first-of-type{
            height: 0.49rem;
        } */
        .banner a p:last-of-type{
            margin-top: .06rem;
            font-size: .16rem;
            line-height: .18rem;
            color: #666;
            font-weight: 700;
        }
        .div{
            display: flex;
            margin-top: .13rem;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            font-size: .21rem;
            line-height: .225rem;
            background: #fff;
        }
        .div:last-of-type{
            margin-top:0;
            border-top:none;
        }
        .div img{
            width:0.23rem;
            height: 0.24rem;
            margin: .18rem .18rem
        }
        .div div{
            font-size:0.21rem;
            justify-content: space-between;
            display: flex;
            width: 100%;
            padding: .18rem .13rem .18rem 0;
        }
        .div:last-of-type{
            position: relative;
        }
        .last_p{
            width:0.5rem;
            height: 0.2rem;
            position: absolute;
            left: 0;
            top:-0.09rem;
            background: #fff;
        }
        .last{
            width:100%;
            height: 0.8rem;
            background: rgba(204, 204, 204, 0.5);
        }
    </style>