<template>
    <div>
       
   </div>
</template>
    
<script>
export default {
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
  *{
      box-sizing:content-box !important;
    }
    .new>a{
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