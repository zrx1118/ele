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
        <a v-for="item in hot_search" :key="item.id"><span class="active">{{item.word}}</span></a>
    </nav>
    <div class="menu">
        <router-link  v-for="(item,index) in entries" :key="item.id" :to="{path:'/navlist/'+item.id}">
            <div>
                <img :src="item.image_hash | dataFilter" alt="">
            </div>
            <span>{{item.name}}</span>
        </router-link>
        <div class="pagination">
            <span></span>
            <span></span>
        </div>
    </div>
    <section class="food_menu clear">
        <div class="sale">
            <a v-for="item in top" :href="item.url" :key="item.id" @click.prevent="checksale" :class="item.class">
                <h3>{{item.title}}</h3>
                <label>{{item.content}}</label> 
                <p><span v-show=item.showAmount>649人</span>{{item.info}}</p>
                <div>
                    <img :src="item.imghash | dataFilter" alt="">
                </div>
            </a>
        </div>
    </section>
    <section class="foo_menu clear">
        <div>
            <div class="special " v-for="item in bottom" :key="item.id" :href="'https://h5.ele.me'+item.url">
                <h3>{{item.title}}</h3>
                <span>{{item.content}}</span>
                <img :src="item.imghash | dataFilter" alt="">
            </div>
        </div>
    </section>
    <h3 class="index_title">推荐商家</h3>
    <shoplist :url="url" :category="'restaurants'"></shoplist>
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
            hot_search:[],
            entries:[]
        }
    },
    methods:{
        checksale(){
            this.$router.push('/limitsale');
        },
        checkNavList(){
            this.$router.push('/navlist');
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
        this.entries=res.data.entries;
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
    width: 100%;
    height: 0.3rem;
    font-size: 0;
    white-space: nowrap;
    overflow: auto;
    overflow-y: hidden;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
nav a{
    display: inline-block;
    height: 100%;
    font-size: 0.12rem;
    text-align: center;
    line-height:.3rem;
    text-decoration: none;
    color: #fff;
    margin: 0 .07rem;
    padding: 0 .05rem;
}
::-webkit-scrollbar {
    width: 0px;
    height: 1px;
}
.menu{
    width:100%;
    height: 1.4rem;
    font-size: 0;
    white-space: nowrap;
    overflow: auto;
    overflow-y: hidden;
    margin-bottom: .15rem;
}
.menu a{
    width:25%;
    float: left;
    font-size: .12rem;
    margin-top: .14667rem;
    text-align: center;
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
.pagination span{
    width:.1rem;
    height: .1rem;
    border-radius: .05rem;
    background-color: #eee;
}
.food_menu{
    width:100%;
    font-size: 0;
    padding: 0 .1rem;
}
.food_menu .sale{
    width:100%;
}
.sale a{
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
.sale a:first-child{
    margin-right: .02rem;
}
.sale img{
    width:1.024rem;
    height:.6826rem;
    vertical-align: top;
    position: absolute;
    bottom: -.05rem;
    right: -.05rem;
}
.sale i{
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
.sales h3{
    font-size: .14rem;
    color: #e81919;
}
.sales label,.hot label{
    color:#777;
    line-height: .2rem;
}
.sales p{
    font-weight: 300;
}
.sales span{
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
</style>
