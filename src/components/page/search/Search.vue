<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" @clear="onClear" />
    <scroll class="wrap">
      <h3>电影/电视剧/综艺</h3>
      <div class="now-playing-wrap">
        <div class="playing-item" v-for="item in movieList" :key="item.id">
          <div class="pic-show">
            <img :src="item.img | setWH('128.180')" alt="" />
          </div>
          <div class="info-list">
            <h2>{{ item.nm }}<img v-if="item.version" src="~assets/images/maxs.png" alt="" /></h2>
            <p>{{ item.em }}</p>
            <p>{{ item.cat }}</p>
            <p>{{ item.rt }}上映</p>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { Toast } from 'vant'
import request from 'utils/request.js'
import Scroll from 'common/scroll/Scroll'
export default {
  name: '',
  data() {
    return {
      value: '',
      movieList: []
    }
  },
  props: {},
  components: {
    Scroll
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    onClear() {
      this.movieList = []
    },
    onSearch(val) {
      this.getMovieList(val)
    },
    onCancel() {
      this.movieList = []
    },
    async getMovieList(val) {
      const res = await request({
        url: `/api/searchList?cityId=10&kw=${val}`
      })
      console.log(res)
      if (res.msg === 'ok') {
        this.movieList = res.data.movies.list
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-search {
  // margin-top: 90px;
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
}
.van-loading {
  margin-top: 90px;
}
.wrap {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 140px;
  bottom: 50px;
  h3 {
    padding: 9px 16px;
    font-size: 15px;
    color: #999;
    border-bottom: 1px solid #e6e6e6;
  }
}
div.now-playing-wrap {
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
  }
}
</style>
