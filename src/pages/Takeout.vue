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
            搜索商家名称
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
                <p><span v-show="item.showAmount">649人</span>{{item.info}}</p>
                <div>
                    <img :src="item.imghash | dataFilter" alt=""/>
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
@import '../css/takeout.css';
</style>
