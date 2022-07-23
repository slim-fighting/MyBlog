<template>
  <div class="top">
  
    <div class="left">
      <span class="name">slim</span>
      <span class="tell">一个人爱前端的菜鸡</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped>
  .top{
    width: 70%;
    margin: 0 auto;
    display: flex;
  }
  .left{
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .top img{
    width:100px;
    height: 100px;
    border-radius:50% ;
    /*border-radius: 138px;*/
    /*background: #ffffff;*/
    /*box-shadow:  10px 10px 20px #b5b5b5,*/
    /*-10px -10px 20px #ffffff;*/
  }
  .name{
    font-size: 25px;
  }
  .tell{
    margin-top: 10px;
    font-size: 14px;
    color: #666666;
  }
</style>
