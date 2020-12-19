<template>
  <div id="app">
    <Top></Top>
    <el-menu
      :default-active="activeIndex"
      router
      class="el-menu-demo"
      mode="horizontal"
      background-color="##ffffff"
      text-color="#222222"
      active-text-color="#e01109"
      style="display: flex;justify-content: center;width:70%;margin: 0 auto;"
    >
      <el-menu-item index="/">网站首页</el-menu-item>
      <el-menu-item index="/flag">随言碎语</el-menu-item>
      <el-menu-item index="/blog">博客日记</el-menu-item>
      <el-menu-item index="/picture">我的相册</el-menu-item>
      <el-menu-item index="/time">时间轴</el-menu-item>
      <el-menu-item index="/about">关于博主</el-menu-item>
      <el-menu-item index="/sysy">留言</el-menu-item>
    </el-menu>
    <div style="width: 70%;margin: 20px auto;">
      <router-view/>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Top from "./components/Top";
  import Bottom from "./components/Bottom";
export default {
  name: 'App',
  components:{
    Top,
    Bottom
  },
  data() {
    return {
      activeIndex: '',
    };
  },
  methods: {

  }
}
</script>

<style>
#app {
  background: #ebecf0;
  display: flex;
  overflow: auto;
  flex-direction: column;
  height: 100%;
}

</style>
