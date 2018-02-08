<template>
  <div class="more-list">
    <div class="shop-list" v-for="(item, index) in list" :key="item.id">
      <div class="outer">
        <section>
          <h3>
            <img :src="item.restaurant.image_path | dataFilter" alt="">
            <span>{{ item.restaurant.name }}</span>
          </h3>
          <span>¥20起送 / 配送费¥5</span>
        </section>
        <div class="shop-list-item">
          <a href="javascript:void(0)" v-for="(it, index) in item.foods" :key="it.id">
            <img :src="it.image_hash | dataFilter" alt=""/>
            <div>
              <p>{{ it.name }}</p>
              <span>{{ "￥"+it.price }}</span>
              <label class="look" @click="fn1">去看看</label>
            </div>
          </a>
        </div>
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

<style scoped>
.more-list{
  margin-top:0.41rem;
}
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
.shop-list .outer .shop-list-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.shop-list .outer .shop-list-item a{
  width:33.3%;
  text-align: center;
  display: block;
  text-decoration:none;
}
.shop-list .outer .shop-list-item a img{
  width:.91rem;
  height:.91rem;
  margin-bottom:10px;
}
.shop-list .outer .shop-list-item a p{
  font-size:0.12rem;
  color:#333;
  margin-bottom:2px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
.shop-list .outer .shop-list-item a span{
  font-size:0.1rem;
  color: #ff5339;
  line-height:0.24rem;
}
.shop-list .outer .shop-list-item a .look{
  width: .85rem;
  height: .24rem;
  border: 1px solid #ff5339;
  border-radius: .04rem;
  color: #ff5339;
  margin: 0 auto;
  font-size: .12rem;
  line-height: .24rem;
  display:block;
}
.shop-list section{
  width:100%;
  font-size:0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.shop-list section h3{
  max-width:70%;
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.shop-list section h3 span{
  color:#333;
  width: 100%;
  display: block;
  font-size:.14rem;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
.shop-list section h3 img{
  display: block;
  width:.18rem;
  height:.18rem;
  margin:.09rem .1rem 0 .05rem;
}
.shop-list section span{
  display: block;
  max-width:30%;
  height:.36rem;
  line-height:.36rem;
  font-size:.12rem;
  color:#999;
}
</style>
