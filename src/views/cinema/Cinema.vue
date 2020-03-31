<template>
  <div class="cinema-wrap">
    <van-nav-bar title="喵眼电影" />
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="value1" :options="option1" title="全城" />
      <van-dropdown-item v-model="value2" :options="option2" title="品牌" />
      <van-dropdown-item v-model="value3" :options="option3" title="特色" />
    </van-dropdown-menu>
    <city-list :cinema-list="cinemaList"></city-list>
  </div>
</template>

<script>
import request from 'utils/request.js'
import Scroll from 'common/scroll/Scroll'
import CityList from 'page/cityList/CityList'
export default {
  name: '',
  data() {
    return {
      cinemaList: [],
      value1: 0,
      value2: 'a',
      value3: 'd',
      option1: [
        { text: '天河区', value: 0 },
        { text: '白云区', value: 1 },
        { text: '越秀区', value: 2 }
      ],
      option2: [
        { text: '万达影城', value: 'a' },
        { text: 'UA影城', value: 'b' },
        { text: '横店影城', value: 'c' }
      ],
      option3: [
        { text: '默认排序', value: 'd' },
        { text: '好评排序', value: 'e' },
        { text: '销量排序', value: 'f' }
      ],
      prevCityId: -1,
      cityId: 0
    }
  },
  props: {},
  components: {
    Scroll,
    CityList
  },
  computed: {},
  watch: {},
  activated() {
    this.cityId = this.$store.state.city.id
    console.log(this.cityId)
    if (this.prevCityId == this.cityId) return
    this.getCinemaList()
  },
  methods: {
    async getCinemaList() {
      const res = await request({
        url: '/api/cinemaList?cityId=' + this.cityId
      })
      if (res.msg === 'ok') {
        this.cinemaList = res.data.cinemas
        this.prevCityId = this.cityId
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
.van-dropdown-menu {
  border-bottom: 1px solid #e6e6e6;
}
</style>
