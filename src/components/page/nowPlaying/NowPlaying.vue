<template>
  <scroll class="wrap">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="now-playing-wrap">
        <div class="playing-item" v-for="item in movieList" :key="item.id" @tap="itemClick(item.id)">
          <div class="pic-show">
            <img :src="item.img | setWH('128.180')" alt="" />
          </div>
          <div class="info-list">
            <h2>{{ item.nm }}<img v-if="item.version" src="~assets/images/maxs.png" alt="" /></h2>
            <p>
              观众评:<span class="grade">{{ item.sc }}</span>
            </p>
            <p>主演:{{ item.star }}</p>
            <p></p>
          </div>
          <div class="buy-btn">
            购票
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </scroll>
</template>

<script>
import request from 'utils/request.js'
import Scroll from 'common/scroll/Scroll'
export default {
  name: '',
  data() {
    return {
      movieList: [],
      isLoading: false,
      prevCityId: -1,
      cityId: 0
    }
  },
  props: {},
  components: {
    Scroll
  },
  computed: {},
  watch: {},
  activated() {
    this.cityId = this.$store.state.city.id
    console.log(this.cityId)
    if (this.prevCityId == this.cityId) return
    this.getMovieList()
  },
  methods: {
    async getMovieList() {
      const res = await request({
        url: '/api/movieOnInfoList?cityId=' + this.cityId
      })
      console.log(res)
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      if (res.msg === 'ok') {
        this.movieList = res.data.movieList
        this.isLoading = false
        this.prevCityId = this.cityId
        this.$toast.success('加载完成')
      }
    },
    onRefresh() {
      this.getMovieList()
    },
    itemClick(movieId) {
      this.$router.push({
        path: '/detail',
        query: {
          movieId
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 90px;
  bottom: 50px;
}
div.now-playing-wrap {
  // margin-top: 90px;
  margin: 0 12px;

  div.playing-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 0;
    div.pic-show {
      width: 64px;
      height: 90px;
      img {
        width: 100%;
        display: block;
      }
    }

    div.info-list {
      margin-left: 10px;
      flex: 1;
      position: relative;
      h2 {
        font-size: 20px;
        line-height: 24px;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        img {
          width: 50px;
          position: absolute;
          right: 10px;
          top: 5px;
        }
      }

      p {
        font-size: 13px;
        color: #666;
        line-height: 22px;
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        span.grade {
          font-weight: 700;
          color: #faaf00;
          font-size: 15px;
        }
      }
    }

    div.buy-btn {
      width: 47px;
      height: 27px;
      line-height: 27px;
      margin-left: 10px;
      text-align: center;
      background-color: #f03d37;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      // cursor: pointer;
    }
  }
}
</style>
