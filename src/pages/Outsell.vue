<template>
    <div class="sell-sell">
            <div class="sell-finish">
                <div class="sell-finish-list">
                    <div class="sell-finish-img">
                        <img src="https://fuss10.elemecdn.com/e/55/3db109a38f5d7c2fade18394576e8jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="">
                    </div>
                    <div class="sell-items">
                        <div class="sell-item-one">
                            <div  class="sell-item-one-name">
                                <div class="sell-item-bre">烤肉饭plus (小营店)  ></div>
                                <div class="sell-item-bre-finish">订单已完成</div>
                            </div>
                            <p class="sell-time">2017-09-24  13.23</p>
                        </div>
                        <div class="sell-item-two">
                            <div>孜然烤肉饭</div>
                            <div class="sell-item-two-price">¥25.00</div>
                        </div>
                        <div class="sell-item-three">
                            <span class="sell-item-three-come">再来一单</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="sell-finish">
                <div class="sell-finish-list">
                    <div class="sell-finish-img">
                        <img src="https://fuss10.elemecdn.com/e/55/3db109a38f5d7c2fade18394576e8jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="">
                    </div>
                    <div class="sell-items">
                        <div class="sell-item-one">
                            <div  class="sell-item-one-name">
                                <div class="sell-item-bre">烤肉饭plus (小营店)  ></div>
                                <div class="sell-item-bre-finish">订单已完成</div>
                            </div>
                            <p class="sell-time">2017-09-24  13.23</p>
                        </div>
                        <div class="sell-item-two">
                            <div>孜然烤肉饭</div>
                            <div class="sell-item-two-price">¥25.00</div>
                        </div>
                        <div class="sell-item-three">
                            <span class="sell-item-three-come">再来一单</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class= "sell-fond" >查看三个月前的外卖订单</div>
        </div>
       
</template>
<script>
export default {
  data () {
      return {

      }
  }
}
</script>
<style scoped>
.sell-finish{
    width: 100%;
    height: 1.3217rem;
    padding-top: .15rem; 
    border-bottom:1px solid #f6f9fb;
}
.sell-finish-list{
    width: 94%;
    height: 1.1717rem;
    margin: auto;
    display: flex;
    justify-content:space-between;
}
.sell-finish-img{
    width: .358rem;
    height: .98rem;
}
.sell-finish-img>img{
    width:.273rem;
    height: .273rem;
}
.sell-items{
    width: 100%;
    height: 1.1717rem;;
}
.sell-item-one{
    width: 100%;
    height: 33.3%;
}
.sell-item-one-name{
    display: flex;
    justify-content: space-between;
}
.sell-item-bre{
    font-size: 14px;
    color:#000;
}
.sell-item-bre-finish{
    font-size: 12px;
    color:#333;
}
.sell-time{
    font-size: 8px;
    color:#666;
}
.sell-item-two{
    width: 100%;
    height: 33.3%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    font-size:12px;
    color:#333;
}

.sell-item-two-price{
    color:#000;
    font-weight: bold;
}
.sell-item-three{
    width: 100%;
    height: 33.3%;
    padding-top: .07rem;
}
.sell-item-three-come{
    float: right;
    width: .8rem;
    height: .25rem;
    display: block;
    border: 1px solid #2395ff;
    border-radius: .03rem;
    background-color: transparent;
    outline: none;
    font-size: .12rem;
    color: #2395ff;
    margin-left: .2rem;
    text-align: center;
    line-height: .25rem;
}
.sell-fond{
    width: 100%;
    height: .3754rem;
    font-size: 12px;
    color:#999;
    text-align: center;
    line-height: .3754rem;
}


</style>


