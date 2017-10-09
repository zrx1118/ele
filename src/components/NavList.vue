<template>
    <div class="navlist">
        <div class="delivery">
            <i @click="backFn"></i><span>{{product.name}}</span>
        </div>
        <div class="classfy">
            <a href="">
                <span>分类</span><i></i>
            </a>
            <a href=""> 
                <span>排序</span><i></i>
            </a>
            <a href="">
                <span>筛选</span><i></i>
            </a>
        </div>
        <section class="shop">
            <div class="shop_container"  v-for="items in product.detail" :key="items.id">
                <div class="shop_brand">
                    <img :src="items.image_path | dataFilter" alt="">
                </div>
                <div class="index_main">
                    <div class="shopname"><h3><span>{{items.name}}</span></h3><ul><li v-for="item in items.supports" :key="item.id">{{item.icon_name}}</li></ul></div>
                    <div class="shopnum"><div><p></p><span>{{items.rating}}</span><span>月售{{items.recent_order_num}}单</span></div><p>蜂鸟专送</p></div>
                    <div class="shopprice"><ul><li>￥{{items.float_minimum_order_amount}}起送</li><li>{{items.piecewise_agent_fee.description}}</li></ul><ul><li>1.06km</li><li>27分钟</li></ul></div>
                    <div class="index_discount">
                        <p class="discount" v-for="item in items.activities" :key="item.id"><i>{{item.icon_name}}</i><span>{{item.tips}}</span></p>
                        <div class="activity">
                            <span>{{items.activities.length}}个活动</span><i></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
    
<script>
export default {
    name: "navlist",
    data () {
        return {
            url:'../static/takeout.json',
            list:[]
        };
    },
    methods: {
        backFn() {
            // BOM的history 回退上一个
        //   history.back();
        // 通过路由回退
        this.$router.go(-1);
        }
    },
    created(){
        this.axios.get(this.url).then(res => {
                console.log(res);
            this.list = res.data.entries;
        }, err => {
                console.log(err);
        });
        // this.$http.get(this.url).then(res => {
        //     console.log(res);
        //     // console.log(JSON.parse(res.data))
        //     // this.list = JSON.parse(res.data).data;
        // }, err => {
        //     console.log(err);
        // });
    },
    computed:{
        product(){
            console.log(this.$route.params.id);
            for (var item of this.list) {
                if (this.$route.params.id == item.id) {
                    return item;
                }
            }
        }
    },
    filters: {
        //图片转换格式过滤器
        dataFilter: function (a) {
        let url="https://fuss10.elemecdn.com/";
        url+=a.substr(0,1)+"/"+a.substr(1,2)+"/"+a.substr(3)+"."+a.substr(a.lastIndexOf("png")!=-1?-3:-4);
        return url;
        }
    }
}
</script>
    
<style lang="css" scoped>
.delivery{
    font-size: .22rem;
    height: .4353rem;
    line-height: .4353rem;
    width:100%;
    text-align: center;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
}
.delivery i{
    content: "";
    float: left;
    margin: .17rem 0 0 .1rem;
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
.classfy{
    width:100%;
    height:.3334rem;
    line-height:.3334rem;
    font-size: .12rem;
    color:#777;
    border-bottom: 1px solid #eee;
}
.classfy a{
    width:33%;
    float: left;
    text-align: center;
}
.classfy i{
    width: .08rem;
    height:.08rem;
    display: inline-block;
    border-top: .04rem solid #999;
    border-bottom: .04rem solid transparent;
    border-left: .04rem solid transparent;
    border-right: .04rem solid transparent;
}
.shop{
    width:100%;
    font-size: 0;
}
.shop_container{
    width: 100%;
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: flex-start;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: #666;
    font-size: .12rem;
    padding-right: .1rem;
}
.shop_container .shop_brand{
    width:.7rem;
    padding: .1rem;
    flex:none;
}
.shop_brand img{
    width:100%;
}
.shop_container .index_main{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-direction: column;
    padding: .1rem 0 .1rem 0;
    user-select: none;
    width:2.45rem;
}
.shopname{
    width:100%;
    display: flex;
    flex:1;
    justify-content: space-around;
    /* justify-content: space-between; */
}
.shopname h3{
    width:55%;
    display: flex;
    align-items:flex-start;
    justify-content: flex-start;
}
.shopname h3:before{
    margin-right: .05rem;
    padding: 0 .033334;
    border-radius: .023333rem;
    background-image: -webkit-linear-gradient(229deg,#fff100,#ffe339);
    background-image: linear-gradient(-139deg,#fff100,#ffe339);
    color: #6f3f15;
    content: "\54C1\724C";
    text-align: center;
    white-space: nowrap;
    font-weight: 400;
    font-size: .12rem;
}
.shopname h3 span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.shopname ul{
    width:35%;
    display: flex;
    flex: 1;
    justify-content: flex-end;
}
.shopname ul li{
    border: 1px solid #eee;
    margin-left: .01rem;
    float: left;
}
.shopnum{
    line-height: .2rem;
    display: flex;
    flex: 1;
    justify-content:space-between;
}
.shopnum>p{
    padding: 0 .025333rem;
    border: 1px solid #44a5ff;
    border-radius: .025333rem;
    background-color: #fff;
    color: #2395ff;
    font-size: .12rem;
    height: .17rem;
    line-height: .17rem;
    background-image: -webkit-linear-gradient(45deg,#0085ff,#0af);
    background-image: linear-gradient(45deg,#0085ff,#0af);
    color: #fff;
}
.shopprice ul:first-child{
    float: left;
}
.shopprice ul:last-child{
    float: right;
}
.shopprice ul li{
    padding:0 .05rem;
    border-left: 1px solid #eee;
    float: left;
}
.shopprice ul li:first-child{
    padding-left:0;
    border: none;
}
.index_discount{
    position: relative;
    border-top: 1px solid #eee;
    padding:.02rem 0 0 0;
    margin-top: .05rem;
}
.index_discount p{
    width:50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.index_discount i{
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
    top:0;
    right: -.02rem;
    color: #999;
    height: 100%;
}
.activity i{
    width: .05rem;
    height:.05rem;
    content: "";
    margin-left: .02rem;
    display: inline-block;
    border: .01rem solid #aaa;
    border-width: .02rem 0 0 .02rem;
    box-sizing: border-box;
    transform-origin: 33.3% 33.3%;
    transform: rotate(225deg);
    -webkit-box-sizing: border-box;
    -webkit-transform-origin: 33.3% 33.3%;
    -webkit-transform: rotate(225deg);
}
</style>