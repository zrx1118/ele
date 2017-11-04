<template>
  <div class="more-list">
      <div class="shop-list" v-for="(item, index) in list" :key="item.id">
            <div class="outer">
                <section>
                    <img :src="item.restaurant.image_path | dataFilter" alt="">
                    <h3>{{ item.restaurant.name }}</h3>
                    <span>¥20起送 / 配送费¥5</span>
                    <div class="clear"></div>
                </section>
                <a href="javascript:void(0)" v-for="(it, index) in item.foods" :key="it.id">
                    <img :src="it.image_hash | dataFilter" alt="">
                    <div>
                        <p>{{ it.name }}</p>
                        <span>{{ "￥"+it.price }}</span>
                        <label class="look" @click="fn1">去看看</label>
                    </div>
                </a>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      list:[]
    }
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
  props: ['url', 'category'],
  created() {
      this.axios.get("../static/found-data1.json").then(res => {
          this.list = res.data["more-list"];
      }, err => {
          console.log(err);
      });
  },
  methods:{
      fn1(){
          this.$router.push("/second.shodetail");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .shop-list{
            padding:7px 5px 0 5px;
            background-color:#f5f5f5;
        }
       .shop-list .outer{
            width:100%;
            height: 2.18rem;
            background-color:#fff;
            border-radius:3px;
            font-size:0;
            padding:0 5px;
       }
       .shop-list section{
           width:100%;
           height:.36rem;
           line-height:.36rem;
           font-size:0;
       }
       .shop-list section img{
            width:.18rem;
            height:.18rem;
            margin:.09rem .1rem 0 .05rem;
            float:left;
       }
       .shop-list section h3{
           width:1.5rem;
           color:#333;
           float:left;
           font-size:.14rem;
           overflow:hidden;
           white-space:nowrap;
           text-overflow: ellipsis;
       }
       .shop-list section span{
           float:right;
           height:.36rem;
           line-height:.36rem;
           color:#999;
       }
       .shop-list a{
            width:33.3%;
            padding-right:.08rem;
            display: inline-block;
            text-decoration:none;
        }
        .shop-list img{
            width:.91rem;
            height:.91rem;
            margin-bottom:10px;
        }
        .shop-list p{
            font-size:0.12rem;
            color:#333;
            margin-bottom:2px;
            overflow:hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
        }
        .shop-list span{
            font-size:0.1rem;
            color: #ff5339;
            line-height:0.24rem;
        }
       .shop-list .look{
        width: .85rem;
        height: .24rem;
        border: 1px solid #ff5339;
        border-radius: .04rem;
        color: #ff5339;
        text-align: center;
        font-size: .12rem;
        line-height: .2rem;
        display:block;
        margin-top: 3px;
        }
</style>
