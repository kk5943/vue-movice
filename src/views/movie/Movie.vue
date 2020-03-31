<template>
  <div id="main">
    <van-nav-bar title="喵眼电影" fixed :z-index="2" />
    <div class="movie-tab">
      <van-tabs v-model="active" animated>
        <van-tab to="/movie/city" name="a">
          <template #title>{{ $store.state.city.nm }} <van-icon class-prefix="iconfont icon-lower-triangle" name="extra" /> </template
        ></van-tab>
        <van-tab title="正在热映" to="/movie/nowPlaying" name="b"></van-tab>
        <van-tab title="即将上映" to="/movie/comingSoon" name="c" ></van-tab></van-tab>

        <van-tab to="/movie/search"  name="d" >
          <template #title><i class="iconfont icon-sousuo"></i> </template>
        </van-tab>
      </van-tabs>
    </div>
    <router-link tag="div" to="/movie/search" class="search_entry"> </router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import request from 'utils/request.js'
import { Dialog } from 'vant';
export default {
  name: '',
  data() {
    return {
      active: 'b',
      oldActive: 0
    }
  },
  props: {},
  components: {},
  computed: {},
  watch: {},
  created() {
    console.log('create')

  },
  mounted() {
      this.getLocation()

  },
  activated() {
    console.log('movie-activated');
    this.active = 'b'
  },
  deactivated() {
    this.oldActive = this.active
  },
  methods: {
   async getLocation() {
      const res = await request({
        url: '/api/getLocation'
      })
      if (res.msg === 'ok') {
       let nm = res.data.nm
       let id = res.data.id
       console.log(id);
       if(this.$store.state.city.id == id) return
         Dialog.confirm({
                title: '定位',
                message: nm,
                confirmButtonText:'切换定位'
              }).then((res) => {
                // on confirm
                console.log(res);
                if(res==='confirm') {
                window.localStorage.setItem('nowNm',nm);
                window.localStorage.setItem('nowId',id);
                window.location.reload();
                }
              }).catch((res) => {
                // on cancel
                console.log(res);
              })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #e54847;
}
.van-ellipsis {
  font-size: 18px;
  color: #fff;
}
.van-tabs {
  // width: 80%;
  ::v-deep .van-tab {
    font-size: 16px;
  }
}

.movie-tab {
  width: 100%;
  background-color: #fff;
  height: 44px;
  position: fixed;
  top: 45px;
  z-index: 99;
}
#main {
  position: relative;
  height: 100vh;
  // background-color: rgb(241, 241, 241);
  .icon-sousuo {
    position: fixed;
    z-index: 100;
    right: 40px;
    top: 44px;
    font-size: 22px;
    color: #e54847;
  }
}
</style>
