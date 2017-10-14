<template>
  <div>
       <div class="sell-break">
            <div class="sell-break-img">
                <img src="https://fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt="">
            </div>
        </div>
        <div class="sell-break-no">无早餐订单记录</div>
        <div class="sell-order">
            <div class="break-bottom">立即预定早餐</div>
        </div>
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
.sell-break{
    width: 100%;
    background: #f4f4f4;
}
.sell-break-img{
    width:100%;
    height: 3rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
}
.sell-break-img img{
    width:1.6rem;
    height: 1.6rem;
}
.sell-break-no{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    font-size: 14px;
    text-align: center;
    color: #333;
}
.sell-order{
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.break-bottom{
    width: 35%;
    height: .35rem;
    background: #00d762;
    font-size: 13px;
    text-align: center;
    color: #fff;
    border-radius: 3px;
    line-height: .35rem;
}
</style>


