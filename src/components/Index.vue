<template>
  <div class="index">
    <div class="left">
      <div class="shadow">
        <div class="card-body">
            <div class="myImage">
              <img src="@/assets/littlegirl.jpg">
            </div>
            <div class="cont">
              <span @click="aaa()" style="font-size:18px;cursor:pointer;color:#551a8b">第一次写博客</span>
              <div class="mid">在没有学习前端设计，在没有自己博客之前，我的兴趣爱好很多，比如阅读，看电影，爬山等。之前，我的兴趣爱好很多，比如阅读，看电影，爬山等这些是生活当中自己排遣娱乐的一种方式。明明觉得自己很喜欢，但有时候还是会半途而废，其实，有兴趣</div>
              <div class="bot" >
                <ol style="display: flex;list-style:none;justify-content: space-around;color:#666666 ">
                  <li>2020-12-18</li>
                  <li>slim</li>
                  <li>1399</li>
                  <li>1200</li>
                </ol>
              </div>
            </div>
        </div>
      </div>

      <div class="shadow" v-for="(item) in msg" style="margin-top: 15px">
        <div class="card-body">
          <div class="myImage">
            <img :src="item.image">
          </div>
          <div class="cont">
            <a href="" style="font-size:18px;">{{item.title}}</a>
            <div class="mid">{{item.message}}</div>
            <div class="bot" >
              <ol style="display: flex;list-style:none;justify-content: space-around;color:#666666 ">
                <li>2020-12-18</li>
                <li>slim</li>
                <li>1399</li>
                <li>1200</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">right</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
        msg:[
          {
            title:"第二次",
            image:'../assets/11.jpg',
            message:'2在没有学习前端设计，在没有自己博客之前，我的兴趣爱好很多，比如阅读，看电影，爬山等。之前，我的兴趣爱好很多，比如阅读，看电影，爬山等这些是生活当中自己排遣娱乐的一种方式。明明觉得自己很喜欢，但有时候还是会半途而废，其实，有兴趣'
          },
          {
            title:"第三次",
            image:'../assets/littlegirl.jpg',
            message:'3在没有学习前端设计，在没有自己博客之前，我的兴趣爱好很多，比如阅读，看电影，爬山等。之前，我的兴趣爱好很多，比如阅读，看电影，爬山等这些是生活当中自己排遣娱乐的一种方式。明明觉得自己很喜欢，但有时候还是会半途而废，其实，有兴趣'
          }
        ]
    }
  },
  methods:{
    aaa(){
      this.$router.push('/msg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    display: flex;
  }
  .left{
    width:70%;
  }
  .right{
    margin-left: 10px;
  }
  .myImage{
    width: 22%;
    height: 120px;
  }
  img{
    width:100%;
    height:100%;
  }
  .cont{
    height: 120px;
    width: 69%;
  }
  .mid{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -moz-box;
    -moz-line-clamp: 2;
    -moz-box-orient: vertical;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    margin-top: 12px;
    font-size: 14px;
  }
  .bot{
    width: 60%;
    margin-bottom: 0px;
  }
  .card-body{
    height: 140px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-body p {
    margin: 0;
    color: #668a9a91;
  }

  .card-body a {
    text-decoration: none
  }
  .shadow {
    box-shadow: -6px -5px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);
  }
</style>
