<template>
  <div class="movie-wrap">
    <van-nav-bar title="喵眼电影" :z-index="2" left-arrow @click-left="goBack" />
    <div class="detail-list">
      <div
        v-if="detailMovie.img"
        class="detail-list-bg"
        :style="{ 'background-image': `url(${detailMovie.img.replace(/w\.h/, '148.208')})` }"
      ></div>
      <div class="detail-list-filter"></div>
      <div class="detail-list-content">
        <div class="detail-list-img">
          <img v-if="detailMovie.img" :src="detailMovie.img | setWH('148.208')" alt="" />
        </div>
        <div class="detail-list-info">
          <h2>{{ detailMovie.nm }}</h2>
          <p>{{ detailMovie.enm }}</p>
          <p>{{ detailMovie.sc }}</p>
          <p>{{ detailMovie.cat }}</p>
          <p>{{ detailMovie.src }} / {{ detailMovie.dur }}分钟</p>
          <p>{{ detailMovie.pubDesc }}</p>
        </div>
      </div>
    </div>
    <div class="detail-intro">
      <p>{{ detailMovie.dra }}</p>
    </div>
    <div class="detail-player swiper-container" ref="swiper_container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in detailMovie.photos" :key="index">
          <img :src="item | setWH('140.127')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from 'utils/request.js'
export default {
  name: 'MovieDetail',
  data() {
    return {
      detailMovie: {}
    }
  },
  props: {},
  components: {},
  computed: {},
  watch: {},
  created() {
    this.getDetailMovie()
  },
  activated() {},
  methods: {
    async getDetailMovie() {
      const res = await request({
        url: '/api/detailmovie?movieId=' + this.$route.query.movieId
      })
      console.log(res)
      if (res.msg === 'ok') {
        this.detailMovie = res.data.detailMovie
        this.$nextTick(() => {
          new Swiper(this.$refs.swiper_container, {
            slidesPerView: 'auto',
            freeMode: true,
            freeModeSticky: true
          })
        })
      }
    },
    goBack() {
      this.$router.go(-1)
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
.van-nav-bar .van-icon {
  color: #fff;
}
.van-nav-bar__arrow {
  font-size: 20px;
}
div.movie-wrap {
  div.detail-list {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    div.detail-list-bg {
      width: 100%;
      height: 100%;
      background: 0 40%;
      filter: blur(20px);
      background-size: cover;
      // position: absolute;
      // left: 0;
      // top: 0;
    }

    div.detail-list-filter {
      width: 100%;
      height: 100%;
      background-color: #40454d;
      opacity: 0.5;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }

    div.detail-list-content {
      display: flex;
      padding: 20px;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      div.detail-list-img {
        width: 108px;
        height: 150px;
        border: solid 1px #f0f2f3;
        img {
          width: 100%;
          height: 100%;
        }
      }

      div.detail-list-info {
        margin-left: 20px;
        h2 {
          font-style: 20px;
          color: #fff;
          font-weight: normal;
          line-height: 40px;
        }

        p {
          color: #ccc;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }

  div.detail-intro {
    padding: 10px;
    p {
    }
  }

  div.detail-player {
    padding: 20px;
    div.swiper-wrapper {
      div.swiper-slide {
        width: 70px;
        margin-right: 20px;
        text-align: center;
        font-size: 14px;
        img {
          width: 100%;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
