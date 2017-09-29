<template>
    <div>
        <div class="sales">
            <p><span>早餐</span></p>
            <p><span>午餐</span></p>
            <p><span>下午茶</span></p>
            <p><span>夜宵</span></p>
        </div>
        <div class="h_hidden"></div>
        <section>
            <div class="list_z">
                <div class="list_brand">
                    <p><i></i>大馅香儿水饺</p>
                    <p><span>评价4.5分</span><span>配送费约￥5</span></p>
                </div>
                <div class="list_dev">
                    <div class="list_dev_img">
                        <img src="http://fuss10.elemecdn.com/4/ee/ef1c817747d7dd017b570e3198ea8jpeg.jpeg?imageMogr/format/webp/thumbnail/!180x180r/gravity/Center/crop/180x180/">
                    </div>
                    <div class="list_dev_info">
                        <h3>大馅香儿水饺中分</h3>
                        <div class="list_dev_limit">
                            <div class="list_dev_num">
                                <span>仅剩20份</span>
                                <p><span></span></p>
                                <div>
                                    <span>￥<b>9.9</b></span> <s>￥22.00</s>
                                </div>
                            </div>
                            <div class="list_grab">马上抢</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
.sales{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    padding: .05rem .1rem;
    background: #fff;
    height: .384rem;
    width: 100%;
    overflow-y: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    -webkit-transition: all .25s ease-in-out;
    transition: all .25s ease-in-out;
    -webkit-box-shadow: 0 .053333rem .053333rem 0 rgba(0,0,0,.1);
    box-shadow: 0 0.053333rem 0.053333rem 0 rgba(0,0,0,.1);
    -webkit-overflow-scrolling: touch;
}
.sales p{
    width:24%;
    text-align: center;
    font-size: .14rem;
    margin: 0 .02rem;
    background-color: #eee;
    border-radius: .02rem;
}
.sales span{
    color: #333;
    line-height: .283333rem;
    text-align: center;
}
.h_hidden{
    width:100%;
    height: .384rem;
}
.list_z{
    display: flex;
    flex-direction: column;
    padding: .06667rem .1rem .1rem;
    background-color: #fff;
    width:100%;
    font-size: .12rem;
}
.list_brand{
    height: .3rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    border-bottom: 1px solid #eee;
    align-content:flex-start;
}
.list_brand span{
    height: .14rem;
    float: left;
    padding:0 .05rem;
}
.list_brand span:first-child{
    border-right: 2px solid #eee;
}
.list_dev{
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    padding-top: .1rem;
    justify-content: flex-start;
}
.list_dev_img{
    width:.8rem;
    height:.8rem;
    margin-right: .1rem;
}
.list_dev_img img{
    width: 100%;
    height:100%;
}
.list_dev_info{
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
}
.list_dev_limit{
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-flex: 1;
}
.list_dev_limit .list_dev_num{
    width:80%;
    margin:.1rem .15rem 0 0;
}
.list_dev_num b{
    font-size: .16rem;
}
.list_dev_num s{
    color:#aaa;
}
.list_dev_limit span{
    font-size: .12rem;
    color: #ff3618;
}
.list_dev_num>p{
    width:100%;
    height: .04rem;
    background-color: #eee;
    margin: .05rem 0;
    border-radius: .04rem;
}
.list_dev_num>p>span{
    display: block;
    width: 50%;
    height: 100%;
    border-radius: .04rem;
    background-color: #ff3618;
}
.list_grab{
    height: .333333rem;
    line-height:.333333rem;
    font-size: .14rem;
    color:#fff;
    width: .75rem;
    text-align: center;
    border-radius: .08rem;
    border-width: 0;
    background-image: -webkit-gradient(linear,left top,right bottom,from(#ff5339),to(#ff3618));
    background-image: -webkit-linear-gradient(top left,#ff5339,#ff3618);
    background-image: linear-gradient(to bottom right,#ff5339,#ff3618);
}

</style>