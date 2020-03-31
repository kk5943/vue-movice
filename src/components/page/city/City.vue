<template>
  <div class="city">
    <van-index-bar :sticky="false">
      <van-index-anchor index="热门城市" />
      <van-row>
        <van-col span="21">
          <van-grid :gutter="10">
            <van-grid-item v-for="value in hotCityList" :key="value.id" :text="value.nm" @click="handleToCity(value.nm, value.id)" />
          </van-grid>
        </van-col>
      </van-row>
      <template v-for="item in cityList">
        <van-index-anchor :index="item.index" />
        <van-cell :title="item2.nm" v-for="item2 in item.list" :key="item2.id" @click="handleToCity(item2.nm, item2.id)" />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
// import Scroll from 'common/scroll/Scroll'
import request from 'utils/request.js'

export default {
  name: '',
  data() {
    return {
      hotCityList: [],
      cityList: []
    }
  },
  props: {},
  components: {},
  computed: {},
  watch: {},
  created() {
    this.getCityList()
  },
  methods: {
    handleToCity(nm, id) {
      console.log(nm, id)
      this.$store.commit('city/CITY_INFO', { nm, id })
      window.localStorage.setItem('nowNm', nm)
      window.localStorage.setItem('nowId', id)
      console.log(window.localStorage.getItem('nowNm'))
      this.$router.push('/movie')
    },
    async getCityList() {
      let hotCityList = window.localStorage.getItem('hotCityList')
      let cityList = window.localStorage.getItem('cityList')
      if (hotCityList && cityList) {
        this.hotCityList = JSON.parse(hotCityList)
        this.cityList = JSON.parse(cityList)
      } else {
        const res = await request({
          url: 'api/cityList'
        })
        console.log(res)
        if (res.msg === 'ok') {
          this.formatCityList(res.data.cities)
          this.cityList = this.handleCity(res.data.cities)
          window.localStorage.setItem('hotCityList', JSON.stringify(this.hotCityList))
          window.localStorage.setItem('cityList', JSON.stringify(this.cityList))
        }
      }
    },
    handleCity(datalist) {
      console.log(datalist)
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      // console.log(letterArr)

      let newlist = []
      for (let j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(item => item.py.substring(0, 1) === letterArr[j].toLowerCase())
        // console.log(arr)
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      console.log(newlist)
      return newlist
    },
    formatCityList(cities) {
      for (let value of cities) {
        if (value.isHot === 1) {
          this.hotCityList.push(value)
        }
        // let firstLetter = value.py.substring(0, 1).toUpperCase()
        // if (!this.cityList.length) {
        //   this.cityList.push({ index: firstLetter, list: [{ nm: value.nm, id: value.id }] })
        //   continue
        // }
        // for (let item of this.cityList) {
        //   console.log('---------------')
        //   if (item.index === firstLetter) {
        //     item.list.push({ nm: value.nm, id: value.id })
        //   } else {
        //     this.cityList.push({ index: firstLetter, list: [{ nm: value.nm, id: value.id }] })
        //     break
        //   }
        // }
      }
      // console.log(this.hotCityList)
      console.log(this.cityList)
      // this.cityList.sort((n1, n2) => {
      //   if (n1.index > n2.index) {
      //     return 1
      //   } else if (n1.index < n2.index) {
      //     return -1
      //   } else {
      //     return 0
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.van-row {
  background-color: #fff;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper1 {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 90px;
  bottom: 49px;
}
.van-index-bar {
  margin-top: 90px;
  background-color: rgb(235, 235, 235);
}
</style>
