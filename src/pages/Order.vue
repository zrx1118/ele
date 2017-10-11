<template>
    <div class="order">
        <div class="order-header">
            <div class="order-header-top">
                <h1>订单</h1>
                <h1>早餐</h1>
            </div>
        </div>
        <div class="null"></div>
        <div class="my-all-order">
            <div class="my-all-order-top">
                <span class="order-item-my">我的订单</span>
                <router-link to="/sell"><span class="order-item-all">全部订单 ></span></router-link>
                <!-- <router-view></router-view> -->
            </div>
        </div>
        <div class="order-finish">
            <div class="order-finish-list">
                <div class="order-finish-img">
                    <img src="https://fuss10.elemecdn.com/e/55/3db109a38f5d7c2fade18394576e8jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="">
                </div>
                <div class="order-items">
                    <div class="order-item-one">
                        <div  class="order-item-one-name">
                            <div class="order-item-bre">烤肉饭plus (小营店)  ></div>
                            <div class="order-item-bre-finish">订单已完成</div>
                        </div>
                        <p class="order-time">2017-09-24  13.23</p>
                    </div>
                    <div class="order-item-two">
                        <div>孜然烤肉饭</div>
                        <div class="order-item-two-price">¥25.00</div>
                    </div>
                    <div class="order-item-three">
                        <span class="order-item-three-come">再来一单</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="order-finish">
            <div class="order-finish-list">
                <div class="order-finish-img">
                    <img src="https://fuss10.elemecdn.com/9/ea/df22dbff554fa2b7dbce59fe90c2bjpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="">
                </div>
                <div class="order-items">
                    <div class="order-item-one">
                        <div  class="order-item-one-name">
                            <div class="order-item-bre">烤肉饭plus (小营店)  ></div>
                            <div class="order-item-bre-finish">订单已完成</div>
                        </div>
                        <p class="order-time">2017-09-24  13.23</p>
                    </div>
                    <div class="order-item-two">
                        <div>孜然烤肉饭</div>
                        <div class="order-item-two-price">¥25.00</div>
                    </div>
                    <div class="order-item-three">
                        <span class="order-item-three-come">再来一单</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="nulls"></div>
        <div class="order-neig">
            <div class="neig-items">
                <div class="order-neig-buy"><router-link to="/neighbour">附近买过</router-link></div>
                <div class="order-neig-coll"><router-link to="/collect">附近收藏</router-link></div>
            </div>
        </div>
        <router-view></router-view>

        <div class="order-like">
            <div class="order-like-cai">猜你喜欢</div>
        </div>
        <div class="o-list">
            <ul class="o-list-ul" >
                <li class="o-list-li" v-for='item in list' :key="item.id">
                    <a class="o-list-a" href="#">
                        <img class="o-list-img" :src="item.foods[0].image_path | dataFilter" alt="">
                        <span class="o-discount">{{ item.foods[0].activities[0].description }}</span>
                        <div class="o-name"><h1>{{ item.foods[0].restaurant_name }}</h1></div>
                    </a>
                    <h3 class="o-things-name">{{item.foods[0].name}}</h3>
                    <div class="o-price">
                        <div class="commodity-price">
                            <i>￥</i>
                            <span>{{item.foods[0].price}}</span>
                            <em>￥{{item.foods[0].original_price}}</em>                                 
                        </div>
                        <div class="o-rob">抢</div>
                    </div>
                </li>
                <!-- <li class="o-list-li">
                    <a class="o-list-a" href="#">
                        <img class="o-list-img" src="https://fuss10.elemecdn.com/f/75/0fc408c8d0f20fb2b8c9118f26390jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/" alt="">
                        <span class="o-discount">4.0折</span>
                        <div class="o-name"><h1>胡同客欧式烤肉版</h1></div>
                    </a>
                    <h3 class="o-things-name">至尊披萨(12寸)</h3>
                    <div class="o-price">
                        <div class="commodity-price">
                            <i>￥</i>
                            <span>31.2</span>
                            <em>￥78</em>                                 
                        </div>
                        <div class="o-rob">抢</div>
                    </div>
                </li>
                <li class="o-list-li">
                    <a class="o-list-a" href="#">
                        <img class="o-list-img" src="https://fuss10.elemecdn.com/3/33/a6c94f55e9d619c2edd37c09370abjpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/" alt="">
                        <span class="o-discount">4.0折</span>
                        <div class="o-name"><h1>胡同客欧式烤肉版</h1></div>
                    </a>
                    <h3 class="o-things-name">至尊披萨(12寸)</h3>
                    <div class="o-price">
                        <div class="commodity-price">
                            <i>￥</i>
                            <span>31.2</span>
                            <em>￥78</em>                                 
                        </div>
                        <div class="o-rob">抢</div>
                    </div>
                </li>
                <li class="o-list-li">
                    <a class="o-list-a" href="#">
                        <img class="o-list-img" src="https://fuss10.elemecdn.com/f/75/0fc408c8d0f20fb2b8c9118f26390jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/" alt="">
                        <span class="o-discount">4.0折</span>
                        <div class="o-name"><h1>胡同客欧式烤肉版</h1></div>
                    </a>
                    <h3 class="o-things-name">至尊披萨(12寸)</h3>
                    <div class="o-price">
                        <div class="commodity-price">
                            <i>￥</i>
                            <span>31.2</span>
                            <em>￥78</em>                                 
                        </div>
                        <div class="o-rob">抢</div>
                    </div>
                </li> -->
            </ul>
        </div>
        <div class="order-footer"></div>
        

    </div>
</template>
<script>
export default {
  data(){
      return{
            url:"./static/order.json",
            list:[]
      }
  },
  interFn:function() {
            // history.back(-1);
            this.$router.push('/buy');;
        },
  filters: {
        //图片转换格式过滤器
        dataFilter: function (a) {
        let url="https://fuss10.elemecdn.com/";
        url+=a.substr(0,1)+"/"+a.substr(1,2)+"/"+a.substr(3)+"."+a.substr(a.lastIndexOf("png")!=-1?-3:-4);
        return url;
        }
    },
  created(){
    //   使用axios
    this.axios.get(this.url).then(res =>{
        // 获取数据信息
        this.list =res.data.query_list;
        console.log(res.data.query_list);
    },err => {
        console.log(err);
    })
  }
}
</script>
<style scoped>
/* 开始 */
.o-list{
    width: 100%;
    font-size: 12px;
}
.o-list-ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 .07rem;
    justify-content: space-between;
}
.o-list-li{
    width: 49.5%;
    padding: 0 .02rem .3rem .02rem;
    /* background: pink; */
    /* display: block; */
}
.o-list-a{
    width: 100%;
    display: block;
    position: relative;
    justify-content: space-around;
}
.o-list-a img{
    width: 100%;
}
.o-list-a .o-discount{
    width: 25%;
    position: absolute;
    text-align: center;
    color:#fff;
    top: 0;
    left: 0;
    display: inline-block;
    padding: .004rem .008rem;
    background: rgba(0,0,0,.7);
    font-size: .5em;
}
.o-list-a .o-name{
    position: absolute;
    bottom: 0;
    margin: auto;
    height: .6rem;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    padding: 0 .05rem;
    width: 100%;
    display: flex;
    font-size: .1em;
    line-height: .22rem;
    background-image: linear-gradient(-180deg,transparent,rgba(0,0,0,.8));
    
}
.o-list-a .o-name h1{
    color: #fff;
    align-items: end;
}
.o-things-name{
    width: 100%;
    font-size:10px;
    color:#333;
    padding: .06rem 0 .06rem .05rem;
}
.o-price{
    width: 100%;
    height: 11%;
    /* background: hotpink; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.o-price .o-rob{
    width: 22%;
    height: 100%;
    background: #f94843;
    color:#fff;
    text-align: center;
    font-weight: bold;
}
.commodity-price i, .commodity-price span{
    color: #ff6000;
    font-size: 12px;
}
.commodity-price i{
    /* font-size:8px; */
    font-style: normal;
}
.commodity-price span{
    font-size: 14px;
    font-weight: bold;
}
.commodity-price em{
    font-style: normal;
    color: #999;
    text-decoration: line-through;
}
/* 结束 */



.nulls{
    width: 100%;
    height: 6px;
    background: #f4f4f4;
}
.order-neig{
    width: 100%;
    /* height: .4rem; */
    padding: 0 .1rem;
}
.neig-items{
    width: 45%;
    height: .4rem;
    display: flex;
    justify-content: space-between;
}
.order-neig-buy, .order-neig-coll{
    color:#000;
    font-size: 14px;
    text-align: center;
    line-height: .4rem;
    display: inline-block;
}
.order-neig-buy{
    border-bottom: 1px solid blue;
}
.router-link-active {
    /* color:#2395ff; */
    border-bottom:1px solid blue;
}

/* 收藏 */
    


.order{
    width:100%;
    font-size: 0;
}
.order-header{
    width: 100%;
    height: .3754rem;
    background: #0085ff;
    position: fixed;
    top:0;
    left: 0;
    right:0;
    z-index: 1;
}
.order-header-top{
    width: 92%;
    margin: auto;
    display: flex;
    font-size:.075rem;
    color:#fff;
    justify-content: space-between;
    line-height: .3754rem;
}

.null{
    width: 100%;
    height: .3754rem;
}
.my-all-order{
    width: 100%;
    height: .37rem;
}
.my-all-order-top{
    width: 92%;
    margin: auto;
    display: flex;
    font-size:0;
    color:#0085ff;
    justify-content: space-between;
    margin: auto;
    line-height: .37rem;
}
.my-all-order span{
    display: block;
    font-size: .12rem;
}
.order-item-my{
    font-size: .16rem;
    color: #000;
}

.order-finish{
    width: 100%;
    /* height: 1.3217rem; */
    padding-top: .15rem; 
    border-bottom:1px solid #f6f9fb;
}
.order-finish-list{
    width: 94%;
    /* height: 1.1717rem; */
    margin: auto;
    display: flex;
    justify-content:space-between;
}
.order-finish-img{
    width: .358rem;
    /* height: .98rem;s */
}
.order-finish-img>img{
    width:.273rem;
    /* height: .273rem; */
}
.order-items{
    width: 100%;
    /* height: 1.1717rem; */
}
.order-item-one{
    width: 100%;
    height: .39rem;
}
.order-item-one-name{
    display: flex;
    justify-content: space-between;
}
.order-item-bre{
    font-size: 14px;
    color:#000;
}
.order-item-bre-finish{
    font-size: 12px;
    color:#333;
}
.order-time{
    font-size: 8px;
    color:#666;
}
.order-item-two{
    width: 100%;
    height: .39rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    font-size:12px;
    color:#333;
}

.order-item-two-price{
    color:#000;
    font-weight: bold;
}
.order-item-three{
    width: 100%;
    height: .39rem;
    padding-top: .07rem;
}
.order-item-three-come{
    float: right;
    width: .8rem;
    height: .25rem;
    display: block;
    border: 1px solid #2395ff;
    border-radius: .03rem;
    background-color: transparent;
    outline: none;
    font-size: .12rem;
    color: #2395ff;
    margin-left: .2rem;
    text-align: center;
    line-height: .25rem;
}
.order-like{
    width: 100%;
    height: .38rem;
}
.order-like-cai{
    width: 94%;
    margin: auto;
    height: .38rem;
    line-height: .38rem;
    font-size: 14px;
    color:#000;
    font-weight: bold;
}


.order-footer{
    width: 100%;
    height: .488rem;
    background: red;
}
</style>






