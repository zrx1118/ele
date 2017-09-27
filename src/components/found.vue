<template>
    <div class="found">
        <div class="header">发现<span id="icon"></span></div>
        <div class="hidden"></div>
        <div class="select">
            <a href=""><div><p class="title">积分商城</p><p class="tips">0元好物在这里</p></div><img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt=""></a>
            <a href=""><div><p class="title">积分商城</p><p class="tips">0元好物在这里</p></div><img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt=""></a>
            <a href=""><div><p class="title">积分商城</p><p class="tips">0元好物在这里</p></div><img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt=""></a>
            <a href=""><div><p class="title">积分商城</p><p class="tips">0元好物在这里</p></div><img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt=""></a>
        </div>
        <!--查看更多cut1-->
        <div class="cut">
            <div class="h-line"></div>
            <div class="banner"><img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/" alt=""></div>
            <div class="h-line"></div>
            <div class="active-header">
                <span class="line left"></span>
                <span class="svg">美食热推</span>
                <span class="line right"></span>
            </div>
            <p class="activity-sub-title">你的口味，我都懂得</p>
            <div class="food">
                <a href="javascript:void(0)"><img src="https://fuss10.elemecdn.com/8/63/95b60d16c075e960a5cd9389101b8jpeg.jpeg?imageMogr/format/webp/" alt=""><div><p>南昌小炒肉盖饭</p><span>￥15</span></div></a>
                <a href="javascript:void(0)"><img src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/" alt=""><div><p>烤牛肉拌饭</p><span>￥33</span></div></a>
                <a href="javascript:void(0)"><img src="https://fuss10.elemecdn.com/2/f5/cd9c2cdc5b4cce4816a7cfcc64121jpeg.jpeg?imageMogr/format/webp/" alt=""><div><p>安格斯肥牛饭</p><span>￥20</span></div></a>
            </div>
            <p class="more">查看更多</p>
        </div>
        <div class="s-line"></div>
        <div class="t-hidden"></div>
    </div>
</template>

<script>
export default {
    name:'list'
}
</script>

<style scoped>
    .header{
        width:100%;
        height:38px;
        line-height:0.38rem;
        text-align:center;
        color:#fff;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        font-size:0.16rem;
        font-weight:bold;
        position: fixed;
        left: 0;
        top:0;
    }
    .header #icon{
        content: " ";
        display: inline-block;
        height: 0.12rem;
        width: 0.12rem;
        border-width: 2px 2px 0 0;
        border-color: #fff;
        border-style: solid;
        -webkit-transform: rotate(225deg);
        transform:  rotate(225deg);
        position:absolute;
        left:20px;
        top:.13rem;
    }
    .hidden{
        height:0.38rem;
    }
    .t-hidden{
        height:48px;
    }
    .select{
        font-size:0;
    }
    .select a{
        text-decoration:none;
        display:inline-block;
        width:50%;
        height:0.68rem;
        padding: .12rem .15rem;
        border-bottom: 1px solid #ededed;
    }
    .select a:nth-of-type(3),.select a:nth-of-type(4){
        border-bottom:none;
    }
    .select a:nth-of-type(odd){
        border-right: 1px solid #ededed;
    }
    .select img{
        width:0.38rem;
        height:0.38rem;
        float:left;
    }
    .select .title{
        font-size:0.14rem;
        margin-bottom:.04rem;
        font-weight:bold;
    }
    .select a:nth-of-type(1){
        color: rgb(255, 151, 0);
    }
    .select a:nth-of-type(2){
        color: rgb(27, 169, 225);
    }
    .select a:nth-of-type(even){
        color: rgb(245, 120, 93);
    }
    .select .tips{
        color: #999;
        font-size:0.1rem;
    }
    .select div{
        float:left;
        margin-right:10px;
    }
    .h-line{
        width:100%;
        height:0.1rem;
        background-color:#f5f5f5;
    }
    .s-line{
        width:100%;
        height:0.2rem;
        background-color:#f5f5f5;
    }
    .banner{
        width:100%;
        line-height:0;
    }
    .banner img{
        width:100%;
    }
    .line {
        display: inline-block;
        margin: .11rem .093333rem 0;
        border: 1px solid #333;
        width: .2rem;
        height: 0;
        position: relative;
    }
    .active-header {
        padding-top: .12rem;
        text-align: center;
        font-size:0;
        color: #333;
    }
    .line.left:after {
        right: -.035rem;
    }
    .line:after {
        position: absolute;
        top: -.035rem;
        content: "";
        background: #333;
        height: .07rem;
        width: .07rem;
        border-radius: 50%;
    }
    .line.right:after {
        left: -.035rem;
    }
    .svg{
        display:inline-block;
        font-size: .16rem;
        position:relative; 
        bottom:-.035rem; 
    }
    .activity-sub-title{
        font-size: .1rem;
        color: #999;
        text-align: center;
        padding-bottom: .1rem;
    }
    .food{
        padding: .12rem .12rem .12rem .2rem;
        font-size:0;
    }
    .food a{
        width:33.3%;
        padding-right:.08rem;
        display: inline-block;
        text-decoration:none;
    }
    .food img{
        width:100%;
        margin-bottom:10px;
    }
    .food p{
        font-size:0.12rem;
        color:#333;
        margin-bottom:2px;
    }
    .food span{
        font-size:0.1rem;
        color: #ff5339;
        line-height:0.24rem;
    }
    .more{
        font-size: .1rem;
        color: #999;
        text-align: center;
        margin-bottom:15px;
    }
</style>
