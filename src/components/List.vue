<template>
    <div class="cost-list">
        <div class="header">确认订单<span id="iconS" @click="goprev()"></span></div>
        <div class="hidden"></div>
        <section class="address">
            <div>请添加一个收货地址</div>
            <span></span>
        </section>
        <div class="hr"><img src="../assets/hr.png" alt=""></div>
        <div class="h-line"></div>
        <section class="time">
            <span>送达时间</span>
            <label> 尽快送达|预计21:40</label>
        </section>
        <div class="h-line"></div>
        <section class="pay">
            <span>支付方式</span>
            <label> 在线支付</label>
            <span id="iconR"></span>
        </section>
        <section class="redbag">
            <span>红包</span>
            <label>选择地址后使用红包</label>
            <span id="iconR"></span>
        </section>
        <div class="h-line"></div>
        <section class="shop">
            <img src="https://fuss10.elemecdn.com/2/81/c3b380dd521e6235b1d4a8911f1e6png.png?imageMogr/format/webp/thumbnail/38x/" alt="">
            <span>荷花泰菜（王府井店</span>
        </section>
        <section class="list" v-for="item in list" :key="item.id">
            <span>{{ item.name }}</span>
            <span class="math">x {{ item.count }}</span>
            <label class="price">￥{{ item.count*item.price }}</label>
        </section>
        <section class="cost">
            <p><span class="text">配送费</span><label class="pri">￥5</label></p>
            <p><span class="text">餐盒</span><label class="pri">￥{{ 2*counts }}</label></p>
            <div class="clear"></div>
        </section>
        <div class="h-line"></div>
        <section class="pay">
            <span>订单备注</span>
            <label> 口味、偏好等</label>
            <span id="iconR"></span>
        </section>
        <section class="pay">
            <span>发票信息</span>
            <label>不需要开发票</label>
            <span id="iconR"></span>
        </section>
        <div class="h-line"></div>
        <footer>
            <span>待支付 ¥{{ prices+2*counts+5 }}</span>
            <button class="btn">确认下单</button>
        </footer>
    </div>
</template>

<script>
export default {
    name:'found',
    computed:{
        list(){
            return this.$store.state.cartProductList
        },
        counts(){
          return this.$store.getters.totalcount
        },
        prices(){
          return this.$store.getters.totalprice
       }
    },
    methods:{
        goprev(){
            // 通过路由回退
            this.$router.go(-1);
        }
    }

}
</script>
<style scoped>
        .header{
            width:100%;
            height:0.38rem;
            line-height:0.38rem;
            text-align:center;
            color:#fff;
            background-image: linear-gradient(90deg,#0af,#0085ff);
            font-size:0.16rem;
            font-weight:bold;
            position:fixed;
            left: 0;
            top:0;
        }
        .hidden{
            height:0.38rem;
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
            top:.13rem;
        }
        .address{
            width:100%;
            height:0.61rem;
            line-height:0.64rem;
            background:url(../assets/map.png) no-repeat .1rem center;
            background-size: .2rem;
            font-size:0.14rem;
            text-indent:.35rem;
            color:#333;
        }
        .hr{
            width:100%;
            line-height:0;

        }
        .hr img{
            width:100%;
            display:block
        }
        .h-line{
            width:100%;
            height:0.1rem;
            background-color:#f5f5f5;
            clear:both;
        }
        .time{
            width:100%;
            height:0.36rem;
            line-height:0.36rem;
            background:url(../assets/time.png) no-repeat .1rem center;
            background-size: .2rem;
            font-size:0.14rem;
            text-indent:.35rem;
        }
        .time span{
            font-weight:bold;
        }
        .time label{
            float:right;
            color: #3190e8;
            margin-right:.1rem;
            font-weight:500;
        }
        .pay,.redbag,.list{
            width:100%;
            height: 0.39rem;
            line-height:0.39rem;
            text-indent:.15rem;
            font-size:0;
            position:relative;
            border-bottom:1px solid #f1f1f1;
        }
        .list{
            height: .44rem;
            line-height:.44rem;
        }
        .redbag{
            border-bottom:none;
        }
        .pay span, .redbag span, .list span{
            font-size:0.14rem;
            font-weight:bold;
        }
        .list span{
            font-weight:normal;
        }
        .redbag span{
            color:#bbb;
        }
        .pay label,.redbag label.list label{
            font-size:0.12rem;
            float:right;
            margin-right:.2rem;
            color: #999;
        }
        .redbag label{
            color:#bbb;
        }
        .pay #iconR,.redbag  #iconR{
            content: " ";
            display: inline-block;
            height: .06rem;
            width: .06rem;
            border-width: 1px 1px 0 0;
            border-color: #999;
            border-style: solid;
            -webkit-transform: rotate(45deg);
            transform:  rotate(45deg);
            position:absolute;
            right:.1rem;
            top:.16rem;
        }
        .list .price{
            font-size:.12rem;
            position:absolute;
            right:.1rem;
        }
        .shop{
            width:100%;
            height: 0.375rem;
            line-height:0.375rem;
            font-size:0;
            border-bottom:1px solid #f1f1f1;
        }
        .shop span{
            display:inline-block;
            color:#333;
            margin-left:15px;
            font-size:.12rem;
        }
        .shop img{
            width:0.16rem;
            height: 0.16rem;
            margin-left:.15rem;
        }
        .math{
            padding-left:.3rem;
        }
        .cost{
            width:100%;
            height:.33rem;
            line-height:.33rem;
            font-size:.12rem;
        }
        .cost p:nth-of-type(2){
            border-bottom:1px solid #f1f1f1;
        }
        .cost .text{
            display:inline-block;
            margin-left:.15rem;
        }
        .cost .pri{
            float:right;
            margin-right:.1rem;
        }
        footer{
            width:100%;
            height: 0.38rem;
            line-height:.38rem;
            position:fixed;
            bottom:0;
            background-color: #3c3c3c;
            color:#fff;
            font-size:0.14rem;
        }
        footer span{
            margin-left:.15rem; 
        }
        .btn{
            width:0.9rem;
            font-size:0.14rem;
            height: 0.38rem;
            outline:none;
            border:none;
            color:#fff;
            text-align:center;
            background-color: #00d762;
            position:absolute;
            right: 0;
            bottom:0;
        }
</style>
