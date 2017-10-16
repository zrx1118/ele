<template>
<div class="second_list">
    <div class="order-f" v-for="items in list" :key="items.id">
		<div class="line"></div>
		<div class="shop_container" v-if="items.restaurant">
			<div class="shop_brand">
			<img :src="items.restaurant.image_path | dataFilter" alt="">
			</div>
			<div class="index_main">
				<div class="shopname"><h3><span>{{ items.restaurant.name }}</span></h3><ul><li>保</li></ul></div>
				<div class="shopnum"><div><p></p><span>{{ items.restaurant.rating }}</span><span>月售{{ items.restaurant.recent_order_num }}单</span></div><p>蜂鸟专送</p></div>
				<div class="shopprice"><ul><li>￥20起送</li><li>{{ items.restaurant.piecewise_agent_fee.description }}</li></ul><ul><li>{{ (items.restaurant.distance/1000).toFixed(2) }}km</li><li>{{ items.restaurant.order_lead_time }}分钟</li></ul></div>
				<div class="index_discount">
					<p class="discount" v-for="ites in items.activities" :key="ites.id"><i>{{ ites.icon_name }}</i><span>{{ ites.tips }}</span></p>
				</div>
			</div>
		</div>
		
        <div class="order-food" v-if="items.foods">
            <div class="order-food-items" v-for="its in items.foods" :key=its.id>
                <div class="discover-food">
                    <img :src="its.image_hash | dataFilter" alt="">
                </div>
                <div class="order-food-name">{{ its.name }}</div>
                <p>{{ its.restaurant_name }}</p>
                <div class="order-food-price">
                    <div class="order-food-price-one">
                        <span class="order-food-span">￥{{ its.price }}</span>
                    </div>
                </div>
            </div>
		</div>
		<div class="line"></div>
    </div>
</div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        list:[]
    };
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
  created(){
	  this.axios.get("../../static/found-data"+this.$route.params.id+".json").then(res => {
				  this.list=res.data;
	  },err => {
          console.log(err);
      })
  },
  beforeRouteUpdate(to, from, next) {
        next()
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
		// console.log('beforeRouteUpdate');
		 this.axios.get("../../static/found-data"+this.$route.params.id+".json").then(res => {
				  this.list=res.data;
				 
	  },err => {
          console.log(err);
      })
	}
}
</script>
    
<style lang="css" scoped>
    	.order-f{
		    width: 100%;
		}
		.order-food{
		    width: 100%;
		    display: flex;
		    justify-content: space-between;
		    margin-bottom: .2rem;
		}
		.discover-food{
		    width: 100%;
		    position: relative;
		    font-size: 0;
		}
		.order-food-items{
		    width: 50%;
		    padding:.08rem;
		}
		.order-food-items:nth-of-type(1){
		    border-right:1px solid #f8f8f8;
		}
		.discover-food img{
		    width: 100%;
			height:1.44rem;
		    margin-bottom:5px;
		}
		.order-food-name{
		    width: 100%;
		    height: .277rem;
		    font-size: .14rem;
		    color: #333;
		    line-height: .277rem;
		    font-weight: bold;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space:nowrap;
		}
		.order-food-price-one{
		    color:#ff6000;
		    font-size: 3px;
		}
		.order-food-em{
		    font-size: .5em;
		    font-style: normal;
		}
		.order-food-span{
		    font-size: .14rem;
		    font-weight:bold;
		}
		.order-food-i{
		    font-size: .5em;
		    color:#999;
		    font-style: normal;
		    text-decoration: line-through;
		}
		.order-food-items p{
			font-size:.12rem;
			color: #999;
			margin-bottom:8px;
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
		    padding: .1rem .1rem .1rem 0;
		    user-select: none;
		    width:2.45rem;
		}
		.shopname{
		    width:100%;
		    display: flex;
		    flex:1;
		    justify-content: space-around;
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
		    color: #6f3f15;
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
		.line{
			width:100%;
			height:4px;
			background-color:#f8f8f8;
		}
</style>