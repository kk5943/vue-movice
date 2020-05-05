<template>
  <div id="app">
    <transition :name="transName" mode="out-in">
      <keep-alive exclude="MovieDetail">
        <router-view />
      </keep-alive>
    </transition>

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
      active: 0,
      transName: ''
    }
  },
  watch: {
    $route(to, from) {
      if (to.path.includes('detail')) {
        this.transName = 'slide-right'
        return
      }
      this.transName = 'slide-left'
    }
  },
  methods: {}
}
</script>
<style>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-right-enter-to {
  opacity: 1;
}
.slide-right-leave {
}
.slide-right-leave-to {
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter {
  transform: translateX(-100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}
.slide-left-leave {
  opacity: 1;
}
.slide-left-leave-to {
  opacity: 1;
}

@import 'assets/css/base.css';
@import 'assets/css/iconfont/iconfont.css';
</style>
