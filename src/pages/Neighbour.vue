<template>
    <div class="buy-yets">
        <div class="buy-yet">
            <div class="order-finish">
                <div class="order-finish-list">
                    <div class="order-finish-img">
                        <img src="https://fuss10.elemecdn.com/e/55/3db109a38f5d7c2fade18394576e8jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="">
                    </div>
                    <div class="order-items">
                        <div class="order-item-one">
                            <div  class="order-item-one-name">
                                <div class="order-item-bre">烤肉饭plus (小营店)  ></div>
                                <div class="order-item-bre-finish">买过一次</div>
                            </div>
                            <p class="order-time">2017-09-24  13.23</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="no-more">没有更多了</div>
        <div class="no"></div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
.buy-yets{
    width: 100%;
}
.buy-yet{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.no-more{
    width: 100%;
    font-size: 2px;
    text-align: center;
    color:#666;
    height: .25rem;
}
.no{
    width:100%;
    height: 6px;
    background: #f4f4f4;
}
.order-finish{
    width: 100%;
    /* height: 1.3217rem; */
    padding-top: .15rem; 
    border-bottom:1px solid #f6f9fb;
}
.order-finish-list{
    width: 94%;
    /* height: 1.1717rem; */
    margin: auto;
    display: flex;
    justify-content:space-between;
}
.order-finish-img{
    width: .358rem;
    /* height: .98rem;s */
}
.order-finish-img>img{
    width:.273rem;
    /* height: .273rem; */
}
.order-items{
    width: 100%;
    /* height: 1.1717rem; */
}
.order-item-one{
    width: 100%;
    height: .39rem;
}
.order-item-one-name{
    display: flex;
    justify-content: space-between;
}
.order-item-bre{
    font-size: 14px;
    color:#000;
}
.order-item-bre-finish{
    font-size: 12px;
    color:#333;
}
.order-time{
    font-size: 8px;
    color:#666;
}

</style>


