<template>
    <div class="takeout">
    <header>
        <div class="head">
            <div class="location">
                <p><i></i>{{ location }}<span></span></p>
            </div>
            <aside class="cloud">
                <div>
                    <h3>29°</h3>
                    <p>多云天</p>
                </div>
                <img src="http://fuss10.elemecdn.com/2/52/5383cfd55c8ba454449f63f54ce2apng.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/"/>
            </aside>
        </div>
    </header>
    <div class="search">
        <div>
            <p>
            <i></i>
            搜索商家爬山共名称
            </p>
        </div>
    </div>
    <nav>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in hot_search" :key="item.id"><span class="active">{{item.word}}</span></div>
            </div>
        </div>
    </nav>
    <div class="menu clear">
        <a href="">
            <div>
            <img src="http:////fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
            </div>
            <span>美食</span>
        </a>
        <a href="">
            <div>
            <img src="http:////fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
            </div>
            <span>美食</span>
        </a>
        <a href="">
            <div>
            <img src="http:////fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
            </div>
            <span>美食</span>
        </a>
        <a href="">
            <div>
            <img src="http:////fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
            </div>
            <span>美食</span>
        </a>
        <a href="">
            <div>
            <img src="http:////fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
            </div>
            <span>美食</span>
        </a>
        <a href="">
            <div>
            <img src="http:////fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
            </div>
            <span>美食</span>
        </a>
        <a href="">
            <div>
            <img src="http:////fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
            </div>
            <span>美食</span>
        </a>
        <a href="">
            <div>
            <img src="http:////fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
            </div>
            <span>美食</span>
        </a>
    </div>
    <section class="food_menu clear">
        <div class="sales">
            <a v-for="item in top" :href="item.url" :key="item.id">
                <h3>{{item.title}}</h3>
                <label>{{item.content}}</label>
                <p><span>649人</span>{{item.info}}</p>
                <div>
                    <img :src="item.imghash | dataFilter" alt="">
                </div>
            </a>
        </div>
    </section>
    <section class="foo_menu clear">
        <div>
            <div class="special " v-for="item in bottom" :key="item.id">
                <h3>{{item.title}}</h3>
                <span>{{item.content}}</span>
                <img :src="item.imghash | dataFilter" alt="">
            </div>
        </div>
    </section>
    <h3 class="index_title">推荐商家</h3>
    <shoplist :url="url" :category="'restaurants'">
    </shoplist>
    <div class="t-hidden"></div>
    
    </div>
</template>

<script>
// 导入商铺列表组件
import ShopList from '../components/ShopList'
export default {
  name: 'takeout',
  data () {
    return {
      msg: '',
      location:'东城区市政府',
    //   url:'https://crayfish.elemecdn.com/h5.ele.me/msite',
      url:'./static/takeout.json',
      top:[],
      bottom:[],
      hot_search:[]
    }
  },
  filters: {
      dataFilter: function (a) {
        var url="https://fuss10.elemecdn.com/";
        url+=a.substr(0,1)+"/"+a.substr(1,2)+"/"+a.substr(3)+"."+a.substr(a.lastIndexOf("png")!=-1?-3:-4);
        return url;
      }
  },
  components:{
      shoplist:ShopList
  },
  created(){
      this.$http.get(this.url).then(res=>{
        this.top=res.data.activityLinks.top;
        this.bottom=res.data.activityLinks.bottom;
        this.hot_search=res.data.hot_search;
      },err=>{
          console.log(err);
      })
  }
}
</script>

<style scoped>
header{
    width:100%;
    height: .3642rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    font-size: 0;
    padding: .06667rem .093334rem 0;
}
.head{
    width:100%;
}
.location{
    margin: 0 .06667rem;
    font-size: .17rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
}
.location i{
    width: .1108rem;
    height: .133rem;
    display: inline-block;
    background: url(../assets/tubiao_03.png) no-repeat left center;
    background-size: 100% 100%;
    margin-right: .05rem;
}
.location span{
    width: .08rem;
    height:.08rem;
    display: inline-block;
    border-top: .04rem solid #fff;
    border-bottom: .04rem solid transparent;
    border-left: .04rem solid transparent;
    border-right: .04rem solid transparent;
    margin-left: .05rem;
}
.cloud{
    width:.66rem;
    height:.24rem;
    float:right;
    font-size: .1rem;
    line-height: .12rem;
}
.cloud div{
    width:60%;
    text-align: center;
    float: left;
}
.cloud div p{
    width: 100%;
    font-size: .1rem;
    line-height: .1rem;
}
.cloud img{
    float: left;
    width:40%;
    width: .2345rem;
    height: .2345rem;
}
.search{
    width:100%;
    font-size: 0;
    height: .4353rem;
    padding: .09rem .16667rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.search div{
    width:100%;
    height:100%;
    background-color: #fff;
}
.search div p{
    font-size: .12rem;
    line-height: .2552rem;
    text-align: center;
}
.search div p i{
    width: .1024rem;
    height: .1024rem;
    display: inline-block;
    background: url(../assets/tubiao_04.png) no-repeat;
    background-size: 100% 100%;
}
nav{
    width:100%;
    display: flex;
    overflow: hidden;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
nav .swiper-container {
    width: 100%;
    height: .3rem;
}
nav .swiper-slide{
    display: block;
    flex:1;
    height:.3rem;
    line-height:.3rem;
    font-size: .12rem;
    margin-right: .2rem;
    white-space: nowrap;
    color:#fff;
}
.menu{
    width:100%;
    font-size: 0;
    margin-bottom: .15rem;
    clear: both;
}
.menu a{
    width:25%;
    position: relative;
    float: left;
    font-size: .12rem;
    margin-top: .14667rem;
    text-align: center;
    color:
}
.menu a div{
    width:.384rem;
    height:.384rem;
    margin:0 auto;
}
.menu a div img{
    width:100%;
    height:100%;
}
.menu a span{
    display: block;
    margin-top: .01rem;
    color: #666;
    font-size: .12rem;
}
.food_menu{
    width:100%;
    font-size: 0;
    padding: 0 .1rem;
}
.food_menu .sales{
    width:100%;
}
.sales a{
    width:49%;
    font-size: .12rem;
    float: left;
    position: relative;
    height:1.11946rem;
    padding: .1rem 0 0 .1rem;
    margin-bottom: .04rem;
    background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
}
.sales a:first-child{
    margin-right: .02rem;
}
.sales img{
    width:1.024rem;
    height:.6826rem;
    vertical-align: top;
    position: absolute;
    bottom: -.05rem;
    right: -.05rem;
}
.sales i{
    content: "";
    display: inline-block;
    border: .01rem solid gray;
    border-width: .01rem 0 0 .01rem;
    width: .06rem;
    height: .06rem;
    box-sizing: border-box;
    transform-origin: 33.3% 33.3%;
    transform: rotate(135deg);
    -webkit-box-sizing: border-box;
    -webkit-transform-origin: 33.3% 33.3%;
    -webkit-transform: rotate(135deg);
}
.limit h3{
    font-size: .14rem;
    color: #e81919;
}
.limit label,.hot label{
    color:#777;
    line-height: .2rem;
}
.limit p{
    font-weight: 300;
}
.limit span{
    color: #e81919;
    font-size: .1rem;
}
.hot p{
    font-size: .12rem;
    color: #af8260;
    font-weight: 300;
}
.hot i{
    border-color:#af8260;
}
.foo_menu{
    width:100%;
    font-size: 0;
    padding:0 .1rem .1rem;
}
.foo_menu .special{
    width:32.5%;
    float: left;
    font-size: .12rem;
    position: relative;
    height:1.11946rem;
    background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
    margin-right: .02rem;
    text-align: center;
}
.foo_menu span{
    padding: 0 .02555rem;
    font-size: .1rem;
    color: #777;
    border-radius: .01rem;
    border: 1px solid #bbb;
}
.foo_menu h3{
    font-size: .14rem;
    font-weight: 600;
    color: #333;
    margin: .16rem 0 .0666rem;
}
.special img{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
.line{
    width: 100%;
    height: .1rem;
}
.index_title{
    font-weight: 600;
    background-color: #fff;
    border-top: .1rem solid #eee;
    font-size: .14rem;
    padding: .1rem .13334rem 0;
    display: block;
    font-size: .14em;
    font-weight: bold;
}
/* .shop{
    width:100%;
    font-size: 0;
}
.shop_container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: #666;
    font-size: .12rem;
}
.shop_container .shop_brand{
    width:.8rem;
    position: relative;
    padding: .1rem .122223rem;
    flex: none;
}
.shop_brand img{
    width:100%;
}
.shop_container .index_main{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-direction: column;
    padding: .1rem .122223rem .1rem 0;
    user-select: none;
    width: 3.733333rem;
}
.shopname h3{
    float: left;
}
.shopname h3:before{
    margin-right: .06667rem;
    padding: 0 .033334;
    height: .12rem;
    line-height: .12rem;
    border-radius: .023333rem;
    background-image: -webkit-linear-gradient(229deg,#fff100,#ffe339);
    background-image: linear-gradient(-139deg,#fff100,#ffe339);
    color: #6f3f15;
    content: "\54C1\724C";
    text-align: center;
    white-space: nowrap;
    font-weight: 400;
    font-size: .12rem;
    flex: none;
}
.shopname h3 span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.shopname ul{
    float: right;
    border: 1px solid #eee;
}
.shopnum{
    line-height: .2rem;
}
.shopnum>div{
    float: left;
}
.shopnum>p{
    float:right;
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
    border-top: 1px solid #eee;
    padding:.05rem 0 0 0;
    margin-top: .05rem;
}
.index_discount p{
    line-height: .2rem;
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
} */

/* 底部菜单 */
</style>
