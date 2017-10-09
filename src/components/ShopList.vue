<template>
    <div class="shop">
       <div class="shop_container" v-for="(items,index) in shoplist" :key="items.id">
            <div class="shop_brand">
                <img :src="items.image_path | dataFilter" :alt="items.name">
            </div>
            <div class="index_main">
                <div class="shopname"><h3><span>{{items.name }} </span></h3><ul><li v-for="icon in items.supports" :key="icon.id">{{icon.icon_name}}</li></ul></div>
                <div class="shopnum"><div><p></p><span>{{items.rating}}</span><span>月售{{items.recent_order_num}}单</span></div><p>蜂鸟专送</p></div>
                <div class="shopprice"><ul><li>￥{{items.piecewise_agent_fee.extra_fee}}元起送</li><li>{{items.piecewise_agent_fee.tips}}</li></ul><ul><li>1.06km</li><li>27分钟</li></ul></div>
                <div class="index_discount">
                    <p v-for="item in items.activities" :key="item.id"><i>{{item.icon_name}}</i><span>{{item.description}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
  name: "shop",
  data () {
    return {
        shoplist:[]
    };
  },
  props: ['url', 'category'],
  filters: {
      dataFilter: function (a) {
        var url="https://fuss10.elemecdn.com/";
        url+=a.substr(0,1)+"/"+a.substr(1,2)+"/"+a.substr(3)+"."+a.substr(a.lastIndexOf("png")!=-1?-3:-4);
        return url;
      }
  },
  created() {
      this.axios.get(this.url).then(res => {
          console.log(res.data.restaurants[0].delivery_mode.text);
          this.shoplist = res.data.restaurants;
      }, err => {
          console.log(err);
      });
  }
}
</script>
    
<style lang="css" scoped>
.shop{
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
}
.shopname ul li{
    border: 1px solid #eee;
    margin-left: .01rem;
    float: left;
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
    right: 0;
    padding: .04rem 0 .1rem;
    height: 100%;
    color: #999;
    text-align: right;
    line-height: 1;
}
.activity i{
    width: .04rem;
    height:.04rem;
    display: inline-block;
    border-top: .04rem solid #aaa;
    border-bottom: .04rem solid transparent;
    border-left: .04rem solid transparent;
    border-right: .04rem solid transparent;
}
</style>