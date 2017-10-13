<template>
    <div class="shop_detail">
       <div class="shop-container">
            <div class="shop-header">
            </div>
            <div class="delivery">
                <i></i><span></span>
            </div>
            <div class="shop_container">
                <div class="index_main">
                    <img  class="shop_brand" src="https://fuss10.elemecdn.com/c/14/48d5806f132eee1c634547e637a90jpeg.jpeg" alt="">
                    <div>
                        <h3>{{product.name}}</span></h3>
                        <p><span>商家配送/</span><span>50分钟送达/</span><span>配送费￥3</span></p>
                        <p>公告:<span>客服电话:162622626262 22222222</span></p> 
                    </div>
                </div>
                <div class="index_discount">
                    <p class="discount"><i>减</i><span>满35减8，满50减14</span></p>
                    <div class="activity">
                        <span>6个活动</span><i></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="classfy">
            <a href="">
                <span class="cblue">商品</span>
            </a>
            <a href=""> 
                <span>评价</span>
            </a>
            <a href="">
                <span>店铺</span>
            </a>
        </div>
        <main>
            <ul class="shopnav">
                <li :class="{active:index==0}" 
                v-for="(item, index) in list" 
                :key="item.id"><i v-show="index==0?true:false">
                </i>{{ item.name }}</li>
            </ul>
            <div class="shoplist">
                <div v-for="(item, index) in list" :key="item.id">
                    <div class="text">
                        <b>{{ item.name }}</b>
                        <span>{{ item.description }}</span>
                        <span class="right">...</span>
                    </div>
                    <ul>
                        <li v-for="it in item.foods" :key="it.id">
                            <img :src="it.image_path | dataFilter">
                            <h3>{{ it.name }}</h3>
                            <p><span>{{ it.tips }}</span><span>好评率100%</span></p>
                            <span class="doll">￥</span><b>{{ it.specfoods[0].price }}</b>
                            <div>
                                <span class="minus" @click="down(it)"></span>
                                <i class="count">1</i>
                                <span class="add" @click="up(it)"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <footer>
            <label><i></i></label>
            <div>
                <span>¥40</span>
                <p>配送费¥4</p>
            </div>
            <button class="btn">还差¥4结算</button>
        </footer>
   </div>
</template>
    
<script>
export default {
    name: "shop_detail",
    data () {
    return {
        url:'../static/takeout.json',
        list:[]
    };
    },
    created(){
        //用axious实现页面的本地数据ajax请求
        this.axios.get(this.url).then(res => {
            this.list = res.data.restaurants;
        }, err => {
            console.log(err);
        });
    },
    filters: {
        //图片转换格式过滤器
        dataFilter: function (dateNum) {
        var url="https://fuss10.elemecdn.com/",
        res4=dateNum.substr(dateNum.lastIndexOf("jpeg")!=-1?dateNum.length-4:dateNum.length-3);
        url+=dateNum.substr(0,1)+"/"+dateNum.substr(1,2)+"/"+dateNum.substr(3)+"."+res4;
        return url;
        }
    },
    methods:{
        //按添加按钮进行点餐
        up(item){
            this.$store.dispath("up", item)
        },
        down(item){
            this.$store.dispatch("down", item)
        }
    },
    computed:{
        product(){
            for (var item of this.list) {
                if (this.$route.params.id == item.id) {
                    return item;
                }
            }
        },
        counts(){
            return this.$store.getters.totalcount
        },
        price(){
            return this.$store.getters.totalprice
        }
    }
}

//js方法控制页面
$(window).on("scroll",function(){
    var top=$(window).scrollTop();
    if(top>=124){
        $(".classfy").css({
            "position":"fixed",
            "left":0,
            "top":0
        });
        $(".shopnav").css({
            "position":"fixed",
            "left":0,
            "top":".33rem"
        });
    }else{
        $(".classfy").css({
            "position":"relative"
        });
        $(".shopnav").css({
            "position":"relative",
            "top":"0"
        });
    }
});
//控制页面减少按钮的出现与隐藏
if($(".count").text()>0){
    $(".minus").show();
}else{
    $(".minus").hide();
}
    
</script>
    
<style lang="css" scoped>
.shop-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    left: 0;
    top: 0;
    z-index: 2;
    background-color: rgba(119,103,137,.43);
}
.shop-header{
    background-image: url(https://fuss10.elemecdn.com/c/14/48d5806f132eee1c634547e637a90jpeg.jpeg);
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    -webkit-filter: blur(.5rem);
    -moz-filter: blur(.5rem);
    -ms-filter: blur(.5rem);
    -o-filter: blur(.5rem);
    filter: blur(.5rem);
    -webkit-transform: scale(.5);
    transform: scale(.5);
}
.delivery{
    height: .303rem;
    width:100%;
    position: relative;
    padding: .06667rem .1rem;
}
.delivery i{
    content: "";
    float: left;
    margin: .056667rem 0 0 0;
    display: inline-block;
    border: .02rem solid #fff;
    border-width: .02rem 0 0 .02rem;
    width: .12rem;
    height: .12rem;
    box-sizing: border-box;
    transform-origin: 33.3% 33.3%;
    transform: rotate(-45deg);
    -webkit-box-sizing: border-box;
    -webkit-transform-origin: 33.3% 33.3%;
    -webkit-transform: rotate(-45deg);
}
.shop_container{
    width: 100%;
    color: #fff;
    font-size: .12rem;
    padding: .1rem .1rem 0;
    position: relative;
    display: flex;
    z-index: 3;
    justify-content:flex-start;
    flex-direction: column;
    user-select: none;
    flex: 1;
}
.index_main{
    width:100%;
    font-size: 0;
    display: flex;
    justify-content:flex-start;
    flex-direction: row;
    user-select: none;
    flex: 1;
    font-size: .12rem;
}
.index_main .shop_brand{
    width:.565rem;
    height: .565rem;
    border: 1px solid #fff;
    border-radius: .053333rem;
    margin: 0 .1rem 0 0;
}
img{
    max-width:100%;
}
.index_main h3{
    margin: 0;
    font-size: .14rem;
    line-height: 1.2em;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.index_main p{
    white-space: nowrap;
    height: .213rem;
    line-height: .213rem;
}
p{
    font-weight: 400;
    margin: 0;
}
.index_discount{
    margin-top: .05rem;
    position: relative;
}
.index_discount p{
    line-height: .2rem;
}
.index_discount p i{
    font-style: normal;
    text-align: center;
    padding:.01rem;
    margin-right: .06rem;
    border-radius: .02rem;
}
.discount i{
    background-color: rgb(240, 115, 115);
    color: rgb(255, 255, 255);
}
.first i{
    background-color: rgb(112, 188, 70);
    color: rgb(255, 255, 255);
}
.special i{
    background-color: rgb(241, 136, 79);
    color: rgb(255, 255, 255);
}
.gift i{
    background-color: rgb(60, 199, 145);
    color: rgb(255, 255, 255);
}
.activity{
    position: absolute;
    top:.05rem;
    right: 0;
    height: 100%;
    text-align: right;
    line-height: 1;
}
.activity i{
    width: .04rem;
    height:.04rem;
    margin-left: .04rem;
    display: inline-block;
    border-top: .04rem solid transparent;
    border-bottom: .04rem solid transparent;
    border-left: .04rem solid #fff;
    border-right: .04rem solid transparent;
}
.classfy{
    width:100%;
    height:.3334rem;
    line-height:.3334rem;
    font-size: .12rem;
    color:#777;
    border-bottom: 1px solid #eee;
    z-index:4;
    background-color:#fff;
}
.classfy a{
    width:33%;
    float: left;
    text-align: center;
}
.classfy .cblue{
    color:#00f;
    font-weight: bold;
    display: inline-block;
    border-bottom: 1px solid #00f;
}
main{
    width:100%;
    position:relative;
}
.shopnav{
    margin-top:2px;
    font-size:.12rem;
    width:23%;
    top:1.58rem;
}
.shopnav i{
    background:url(https://fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg?imageMogr/format/webp/thumbnail/18x/) no-repeat;
    display:inline-block;
    width:.08rem;
    height:.08rem;
    background-size:cover;
    margin-right:5px;
}
.shopnav li{
    width:100%;
    height:.43rem;
    line-height:.43rem;
    text-indent:10px;
    background-color:;
    color:#666;
    border-bottom: 1px solid #ededed;
    background-color: #f8f8f8;
}
.shopnav .active{
     background-color: #fff;
}
.shoplist{
    width:77%;
    position:absolute;
    left:23%;
    top:0;
}
.shoplist .text{
    width:100%;
    background-color: #f1f1f1;
    color:#666;
    padding: .1rem .2rem .1rem .13rem;
    font-size:0;
}
.shoplist b{
    font-size:.14rem;
    margin-right:5px;
}
.shoplist .text span{
     font-size:.12rem;
}
.shoplist .right{
     float:right;
}
.shoplist li{
    width:100%;
    height:.98rem;
    padding:.15rem .1rem;
    font-size:0;
    position:relative;
}
.shoplist li img{
    width:.65rem;
    height:.65rem;
    float:left;
    margin-right:10px;
}
.shoplist h3{
    font-size:.14rem;
    color: #333;
    margin-bottom:3px;
}
.shoplist p{
    font-size:.12rem;
    color: #666;
    margin-bottom:8px;
}
.shoplist ul b{
    font-size:.14rem;
    color: #f60;
}
.shoplist .doll{
    font-size:.12rem;
    color: #f60;
}
footer{
    width:100%;
    height: 0.48rem;
    position:fixed;
    bottom:0;
    background-color: rgba(61,61,63,.9);
    color:#fff;
    font-size:0.14rem;
}
.btn{
    width:0.9rem;
    font-size:0.14rem;
    height: 0.48rem;
    outline:none;
    border:none;
    color:#fff;
    text-align:center;
    position:absolute;
    right: 0;
    bottom:0;
    background-color: #535356;
}
.btn_active{
    background-color: #00d762;
}
footer label{
    width:.45rem;
    height:.45rem;
    border-radius:50%;
    border:5px solid #444;
    display:inline-block;
    background:url(../assets/cart.png) no-repeat center center;
    background-size:.2rem .2rem;
    position:absolute;
    left:.15rem;
    top:-.1rem;
    background-color:#333;
}
footer i{
    width:13px;
    height:13px;
    display:inline-block;
    border-radius:50%;
    background-color: #ff461d;
    position:absolute;
    left:.27rem;
    top:-.05rem;
    color:#fff;
    display:none;
}
footer div{
    color:#fff;
    width:2rem;
    font-size:0;
    position:absolute;
    left:.8rem;
    top:.05rem;
}
footer span{
    font-size:.14rem;
}
footer p{
    font-size:.12rem;
}
footer .act{
    background:url(../assets/cart2.png) no-repeat center center;
    background-size:.2rem .2rem;
    background-color:#3190e8;
}
.shoplist li div{
    position:absolute;
    right:.1rem;
    bottom:.15rem;
    height:.24rem;
    line-height:.24rem;
}
.shoplist li div i{
    font-size:.12rem;
    padding:0 .1rem;
    font-style:normal;
    display:inline-block;
    vertical-align:middle;
    display:none;
}
.shoplist .minus{
    display:inline-block;
    width:.18rem;
    height:.18rem;
    background:url(../assets/minus.png) no-repeat center center;
    background-size:cover;
    vertical-align:middle;
    display:none;
}
.shoplist .add{
    display:inline-block;
    width:.2rem;
    height:.2rem;
    background:url(../assets/add.png) no-repeat center center;
    background-size:cover;
    vertical-align:middle;
}
</style>