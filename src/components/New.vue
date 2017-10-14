<template>
    <div class="new">
        <a href="" v-for = "(item,index) in list" :key="item.id">
			<router-link :to="'/Details'+list.appItemId" class="link">
				<div class="new_top">
					<img :src="item.logo" alt="">
				</div>
				<div class="new_bottom">
					<p class="new_first">{{item.title}}</p>
					<p class="new_last">
						<span>{{item.credits}}</span>
						<span>{{item.tagText}}</span>
					</p>
				</div>
				<button>{{item.recommendText}}</button>
		  </router-link>
        </a>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        url:"./static/xinpin.json",
		list:[],
		 arr: [
            {
                "appItemId": 651910,
                "recommendText": "妮维雅清洁柔肤香皂",
                "tagText": "299积分",
                "title": "2017-09-14 至 2017-09-30",
                "type": "object",
                "logo": "https://yun.duiba.com.cn/images/201709/zu4qoxy0zg.jpg",
                "shopText":"友情提示",
                "shopOne": "l  需先把默认优惠券删除,在【平台优惠券】栏里面输入“饿了么”平台发送的【兑换码】",
                "shopTwo": "l  不是在【店铺优惠】栏输入兑换码,是在【平台优惠券】内输入兑换码;",
                "shopThird": "l  海关规定跨境商品需要实名认证,新注册用户需点击:【实名认证】填写后,才能成功下单;",
                "shopFour": "l  活动商品数量有限,售完即止!",
                "shopFive": "活动商品不退不换",
                "shopNone" : "3. 单笔订单仅限使用一张,同一账户ID,同一手机号,同一收货地址,同一IP,或其他被认为同一用户状态下,仅限用一张券,且不与其他优惠同时使用,不可兑换现金" 
            },
            {
                "appItemId": 817732,
                "recommendText": "妮维雅清洁柔肤香皂",
                "tagText": "299积分",
                "title": "2017-09-14 至 2017-09-30",
                "type": "object",
                "logo": "https://yun.duiba.com.cn/images/201708/7coa9k1tfw.jpg",
                "shopText":"友情提示",
                "shopOne": "l  需先把默认优惠券删除,在【平台优惠券】栏里面输入“饿了么”平台发送的【兑换码】",
                "shopTwo": "l  不是在【店铺优惠】栏输入兑换码,是在【平台优惠券】内输入兑换码;",
                "shopThird": "l  海关规定跨境商品需要实名认证,新注册用户需点击:【实名认证】填写后,才能成功下单;",
                "shopFour": "l  活动商品数量有限,售完即止!",
                "shopFive": "活动商品不退不换",
                "shopNone" : "3. 单笔订单仅限使用一张,同一账户ID,同一手机号,同一收货地址,同一IP,或其他被认为同一用户状态下,仅限用一张券,且不与其他优惠同时使用,不可兑换现金" 
            },
            {
                "appItemId": 863616,
                "recommendText": "妮维雅清洁柔肤香皂",
                "tagText": "299积分",
                "title": "2017-09-14 至 2017-09-30",
                "type": "object",
                "logo": "https://yun.duiba.com.cn/images/201708/7coa9k1tfw.jpg",
                "shopText":"友情提示",
                "shopOne": "l  需先把默认优惠券删除,在【平台优惠券】栏里面输入“饿了么”平台发送的【兑换码】",
                "shopTwo": "l  不是在【店铺优惠】栏输入兑换码,是在【平台优惠券】内输入兑换码;",
                "shopThird": "l  海关规定跨境商品需要实名认证,新注册用户需点击:【实名认证】填写后,才能成功下单;",
                "shopFour": "l  活动商品数量有限,售完即止!",
                "shopFive": "活动商品不退不换",
                "shopNone" : "3. 单笔订单仅限使用一张,同一账户ID,同一手机号,同一收货地址,同一IP,或其他被认为同一用户状态下,仅限用一张券,且不与其他优惠同时使用,不可兑换现金" 
            },
            {
                "appItemId": 1133773,
                "recommendText": "妮维雅清洁柔肤香皂",
                "tagText": "299积分",
                "title": "2017-09-14 至 2017-09-30",
                "type": "object",
                "logo": "https://yun.duiba.com.cn/images/201708/j9j332ju7f.jpg",
                "shopText":"友情提示",
                "shopOne": "l  需先把默认优惠券删除,在【平台优惠券】栏里面输入“饿了么”平台发送的【兑换码】",
                "shopTwo": "l  不是在【店铺优惠】栏输入兑换码,是在【平台优惠券】内输入兑换码;",
                "shopThird": "l  海关规定跨境商品需要实名认证,新注册用户需点击:【实名认证】填写后,才能成功下单;",
                "shopFour": "l  活动商品数量有限,售完即止!",
                "shopFive": "活动商品不退不换",
                "shopNone" : "3. 单笔订单仅限使用一张,同一账户ID,同一手机号,同一收货地址,同一IP,或其他被认为同一用户状态下,仅限用一张券,且不与其他优惠同时使用,不可兑换现金" 
            },
            {
                "appItemId": 929778,
                "recommendText": "妮维雅清洁柔肤香皂",
                "tagText": "299积分",
                "title": "2017-09-14 至 2017-09-30",
                "type": "object",
                "logo": "https://yun.duiba.com.cn/images/201708/lf2b093fh1.jpg",
                "shopText":"友情提示",
                "shopOne": "l  需先把默认优惠券删除,在【平台优惠券】栏里面输入“饿了么”平台发送的【兑换码】",
                "shopTwo": "l  不是在【店铺优惠】栏输入兑换码,是在【平台优惠券】内输入兑换码;",
                "shopThird": "l  海关规定跨境商品需要实名认证,新注册用户需点击:【实名认证】填写后,才能成功下单;",
                "shopFour": "l  活动商品数量有限,售完即止!",
                "shopFive": "活动商品不退不换",
                "shopNone" : "3. 单笔订单仅限使用一张,同一账户ID,同一手机号,同一收货地址,同一IP,或其他被认为同一用户状态下,仅限用一张券,且不与其他优惠同时使用,不可兑换现金" 
            },
            {
                "appItemId": 1134002,
                "recommendText": "妮维雅清洁柔肤香皂",
                "tagText": "299积分",
                "title": "2017-09-14 至 2017-09-30",
                "type": "object",
                "logo": "https://yun.duiba.com.cn/images/201708/qiakp1kqfp.jpg",
                "shopText":"友情提示",
                "shopOne": "l  需先把默认优惠券删除,在【平台优惠券】栏里面输入“饿了么”平台发送的【兑换码】",
                "shopTwo": "l  不是在【店铺优惠】栏输入兑换码,是在【平台优惠券】内输入兑换码;",
                "shopThird": "l  海关规定跨境商品需要实名认证,新注册用户需点击:【实名认证】填写后,才能成功下单;",
                "shopFour": "l  活动商品数量有限,售完即止!",
                "shopFive": "活动商品不退不换",
                "shopNone" : "3. 单笔订单仅限使用一张,同一账户ID,同一手机号,同一收货地址,同一IP,或其他被认为同一用户状态下,仅限用一张券,且不与其他优惠同时使用,不可兑换现金" 
            },
            
    ]
    };
  },
  created(){
    this.axios.get("./static/xinpin.json").then(res =>{
      console.log(res.data.data.items)
      this.list = res.data.data.items
    },err=>{
      console.log(err)
    })
  }
}
</script>
    
<style lang="css" scoped>
  *{
      box-sizing:content-box !important;
    }
    .link{
      display: block;
      width: 100%;
      font-size: 0rem;
      color: #333;
      height: 0.98rem;
      /* background:red; */
      padding: 0.14rem;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #ddd;
    }
    .new_first{
      font-size: 0.18rem;
    }
    .new_last{
      font-size: 0.14rem;
    }
    .new_last span:first-of-type{
      color:#ff6000;
    }
    .new_last span:last-of-type{
      display: inline-block;
      border-radius: 0.03rem;
      background:#fe4a21;
      color: #fff;
    }
    .new_top{
      width: 1.53rem;
      height: 0.94rem;
    }
    .new_top img{
      width: 100%;
      height: 100%;
    }
    .new_bottom{
      width: 1.8rem;
      height: 0.9rem;
    }
    .new_bottom p:first-of-type{
          font-size: .18rem;
          font-weight: 400;
          overflow: hidden;
          width: 1.45rem;
          margin-top: .125rem;
          margin-bottom: .175rem;
          white-space: nowrap;
          text-overflow: ellipsis;
    }
    .new button{
          font-size: .14rem;
          color: #ff6000;
          height: .33rem;
          margin-top: .34rem;
          padding: 0 .1rem;
          text-align: center;
          border:1px solid #ff6000;
          
          border-radius: .04rem;
          background-color: #fff;
          margin-right: 0.15rem;
    }
</style>