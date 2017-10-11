<template>

    <div class="jifen">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="items in arr1" :key=items.id><img :src="items.image" alt=""></div>
            </div> 
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="nav">
            <div class="nav_left">
                <img src="../assets/ji.png" alt="">
                <span>积分</span>
                <span>0</span>
            </div>
            <div class="nav_right">
                <img src="../assets/dui.png" alt="">
                <span>兑换记录</span>
            </div>
        </div>
        <div class="mine">
            <div class="mine_top">
                <a href="#" @click.prevent="fn1" >
                    <img src="../assets/new.jpg" alt="">
                    <p>今日新品</p>
                </a>
                <a href=""  @click.prevent="fn2">
                    <img src="../assets/liwu.jpg" alt="">
                    <p>红包专区</p>
                </a>
                <a href=""  @click.prevent="fn3">
                    <img src="../assets/aa.png" alt="">
                    <p>0元换购</p>
                </a>
                <a href=""  @click.prevent="fn4">
                    <img src="../assets/aa1.png" alt="">
                    <p>优惠礼券</p>
                </a>
            </div>
            <div class="mine_bottom">
                <a href=""  @click.prevent="fn5">
                    <img src="../assets/aa2.png" alt="">
                    <p>食品饮料</p>
                </a>
                <a href=""  @click.prevent="fn6">
                    <img src="../assets/aa3.png" alt="">
                    <p>数码家电</p>
                </a>
                <a href=""  @click.prevent="fn7">
                    <img src="../assets/aa4.png" alt="">
                    <p>日常家居</p>
                </a>
                <a href=""  @click.prevent="fn8">
                    <img src="../assets/aa5.png" alt="">
                    <p>所以商品</p>
                </a>
            </div>
        </div>
        <div class="floor">
            <div class="div_left"><img src="../assets/bb.png" alt=""></div>
            <div class="div_right">
                <img src="../assets/bb1.png" alt="">
                <img src="../assets/bb2.png" alt="">
            </div>
        </div>
        <div class="banner">
            <h3>大家都在兑</h3>
            <div class="box">
                <a href="" v-for="item in list" :key=item.id>
                    <div class="banner_top">
                        <p>{{item.title}}</p>
                        <div>
                            <span class="one">{{item.credits}}</span>
                            <span class="two">积分</span>
                            <span class="four">{{item.tagText}}</span>
                        </div>
                    </div>
                    <div class="banner_bottom">
                        <img :src="item.whiteImage" alt="">
                    </div>
                    
                </a>
               
            </div>
        </div>
    </div>
    

</template>

<script>

export default {
  data() {
      return {
          url:"./static/four.json",
          list:[],
          path:"./static/two.json",
          arr:[],
          url1:'./static/lunbo.json',
          arr1:[]

      }  
  },
  created(){
      this.axios.get(this.url).then(res =>{
          this.list = res.data.list
      },err=>{
          console.log(err)
      }),
      this.axios.get(this.path).then(res =>{
          this.arr = res.data.list
      },err=>{
          console.log(err)
      }),
      this.axios.get(this.url1).then(res =>{
          this.arr1 = res.data.list
      },err=>{
          console.log(err)
      })

  },
  mounted: function () {
setTimeout(function(){
        var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        //scrollbar: '.swiper-scrollbar',

       // effect:"cube",
        autoplay:1000
        })

    },1000)
},
  methods:{
      fn1() {
          this.$router.push('/New');
      },
      fn2() {
          this.$router.push('/Money');
      },
      fn3() {
          this.$router.push('/Duihuan');
      },
      fn4() {
          this.$router.push('/Liquan');
      },
      fn5() {
          this.$router.push('/Yinliao');
      },
      fn6() {
          this.$router.push('/Jiadian');
      },
      fn7() {
          this.$router.push('/Jiaju');
      },
      fn8() {
          this.$router.push('/All');
      },
  }
}
</script>

    <style scoped>
    .jifen{
        background: #ddd;
    }
        .swiper-container,.swiper-wrapper{
            width: 100%;
            height: 2.03rem;
            /* overflow: hidden; */
        }
        .swiper-slide img{
            width: 100%;
            height: 100%;
        }
        .nav{
            background: #fff;
            display: flex; 
            font-size: 0;
        }
        .nav img{
            width: 0.2rem;
            height: 0.2rem;
            vertical-align: top;
        }
        .nav>div{
                display: table-cell;
                padding: .015rem 0;
                text-align: center;
                width: 50%;
                height: 0.26rem;
                margin: 0.15rem 0;
        }
        .nav_left{
            border-right: 1px solid #ddd;
        }
        .nav span{
            font-size: .16rem;
            padding-left: 0.1rem;
        }
        .mine{
            padding-top:0.1px;
            font-size: 0;
            background: #fff;
            margin:0.15rem 0;
            padding-bottom:0.15rem;
        }
        .mine a{
            display: inline-block;
            width: 25%;
            text-align: center;
            color:#666;
        }
        .mine a p{
            font-size: 0.14rem;
            margin-top: 0.05rem;
        }
        .mine_top,.mine_bottom{
            margin-top:0.2rem;
        }
        .mine_bottom{
            margin-top:0.2rem;
        }
        .floor{
            display: flex;
            width:100%;
            height: 2.13rem;
            margin-bottom: 0.1rem;
        }
        .floor>div{
            width: 50%;
        }
        .div_left img{
            width: 100%;
            height: 100%;
        }
        .div_left{
            border-right:1px solid #ddd;
        }
        .div_right{
            font-size: 0;
        }
        .div_right img{
            width: 100%;
            height: 49.8%;
        }
        .div_right img:first-of-type{
            border-bottom: 1px solid #ddd;
        }
        .banner h3{
            width: 100%;
            height: 0.6rem;
            font-size:0.2rem;
            line-height: 0.6rem;
            padding-left:0.3rem;
        }
        .box{
            display: flex;
            flex-wrap: wrap;
        }
        .banner a {
            display: inline-block;
            width: 49.78%;
            border-right: 1px solid #ddd;
            border-top: 1px solid #ddd;
            font-size: 0.16rem;
            background:#fff;
        }
        .banner_top{
            margin-left: 0.2rem;
            margin-top:0.1rem;
        }
        .banner_bottom{
            width: 100%;
            height: 1.66rem;
           margin-left: 0.1rem;
           margin-top:0.1rem;
        }
        .banner_bottom img{
            width: 2rem;
            margin-top:0.15rem;
        }
       .banner_top p{
            font-size: 0.18rem;
            color:#666;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .one{
            color:#ff6000;
        }
        .two{
            color:#ccc;
        }
        .four{
            color:#fff;
            background:#ff6000;
            border-radius: 0.03rem;
        }
    </style>
    
