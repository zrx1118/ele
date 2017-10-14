<template>
    <div class="box">
        <header class="footer">
                <router-link to="/second.more/morelist" :class="{active:resact,spe:true }"><span @click="acts()">
                专属推荐</span></router-link>
                <router-link v-for="item in list" 
                :key="item.id" 
                :to="{path:'/second.more/secondlist/'+item.jsonid}"  
                :class="{active:item.id==resactive}"><span @click="active(item.id)">{{ item.name }}</span>
                </router-link>
        </header>
        <div class="hidden"></div>
        <router-view></router-view>
    </div>
</template>                                 
<script>
// 导入List
import ListChild from '../components/MoreList'
import SecondList from '../components/SecondList'

export default {
    name:'box',
    data () {
        return {
            n:1,
            url:'../static/found-data1.json',
            category:'more-list',
            list:[],
            index:1
        };
    },
    components: {
      ListChild,
      SecondList
    },
    created(){
        this.axios.get("../static/found-data1.json").then(res=>{
            this.list=res.data["more-footer"].tags
        },err => {
          console.log(err);
      })
    },
    methods:{
       active(item){
           this.$store.dispatch("active", item);
           this.index=2;
       } ,
       acts(){
            this.$store.dispatch("acts");
        }
    },
    computed:{
        resactive(){
            return this.$store.state.activeli;
        },
        resact(){
            return this.$store.state.activefirst;
        }
    }
}
</script>
<style scoped>
    .footer{
            width:100%;
            padding:.1rem .1rem;
            position:fixed;
            left:0;
            top:0;
            font-size:0;
            background-color:rgba(255,255,255,.7);
            z-index:99;
            white-space: nowrap;
            overflow: auto;
            overflow-y: hidden;
        }
        .footer a{
            font-size: 0.12rem;
            text-align: center;
            display:inline-block;
            width:0.68rem;
            height:0.21rem;
            line-height:0.21rem;
            color: #333;
            line-height: 0.21rem;
            border-radius:.1rem;
            border:1px solid #ddd;
            text-decoration:none;
            margin-left:10px;
        }
        .footer .spe{
            margin-left:0;
        }
        .footer .active{
            border-color: #ff5339;
            color: #ff5339;
        }
        ::-webkit-scrollbar {
            width: 0px;
            height: 1px;
        }
        .h-line{
            width:100%;
            height:0.1rem;
            background-color:#f5f5f5;
        }
        .hidden{
            height: 0.42rem;
        }
</style>



