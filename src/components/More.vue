<template>
    <div class="box">
        <footer class="footer">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a class="active spe" href="javascript:void(0)">专属推荐</a></div>
                    <div class="swiper-slide"><a href="javascript:void(0)">专属推荐</a></div>
                    <div class="swiper-slide"><a href="javascript:void(0)">膳食平衡</a></div>
                    <div class="swiper-slide"><a href="javascript:void(0)">风味小吃</a></div>
                    <!-- <div class="swiper-slide"><a href="javascript:void(0)">滋补养颜</a></div> -->
                    <!-- <div class="swiper-slide"><a href="javascript:void(0)">狂野食肉</a></div>
                    <div class="swiper-slide"><a href="javascript:void(0)">减肥塑形</a></div> -->
                </div>
            </div>
        </footer>
        <div class="hidden"></div>
        <list-child></list-child>
    </div>
</template>                                 
<script>
// 导入List
import ListChild from '../components/More-list'

export default {
    name:'box',
    data () {
        return {
            url:'../static/found-data.json'
        };
    },
    components: {
      ListChild
    }
}
</script>
<style scoped>
    .footer{
            width:100%;
            height: 0.42rem;
            line-height:.42rem;
            padding:.1rem .1rem;
            position:fixed;
            left:0;
            top:0;
            font-size:0;
            background-color:rgba(255,255,255,.7);
            z-index:99;
        }
        .footer a{
            font-size: 0.12rem;
            text-align: center;
            width:0.67rem;
            height:0.21rem;
            color: #333;
            line-height: 0.21rem;
            border-radius:.1rem;
            border:1px solid #ddd;
            text-decoration:none;
            float:left;
            margin-left:10px;
        }
        .footer .spe{
            margin-left:0;
        }
        .footer .active{
            border-color: #ff5339;
            color: #ff5339;
        }
        .h-line{
            width:100%;
            height:0.1rem;
            background-color:#f5f5f5;
        }
        .hidden{
            height: 0.42rem;
        }
</style>



