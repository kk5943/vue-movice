<template>
  <div id="app">
    <keep-alive exclude="MovieDetail">
      <router-view />
    </keep-alive>
    <van-tabbar v-model="active" route active-color="#f03d37" inactive-color="#000">
      <van-tabbar-item replace to="/movie">
        <span>电影</span>
        <template #icon=""> <van-icon class-prefix="iconfont icon-dianying" name="extra" /> </template
      ></van-tabbar-item>
      <van-tabbar-item replace to="/cinema">
        <span>影院</span>
        <template #icon=""> <van-icon class-prefix="iconfont icon-yingyuan" name="extra" /> </template
      ></van-tabbar-item>
      <van-tabbar-item replace to="/mine">
        <span>我的</span>
        <template #icon=""> <van-icon class-prefix="iconfont icon-wode" name="extra" /> </template
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style>
@import 'assets/css/base.css';
@import 'assets/css/iconfont/iconfont.css';
</style>
