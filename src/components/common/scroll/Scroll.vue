<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import { debounce, throttle } from 'utils/utils.js'
export default {
  name: '',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    // 配置用于做上拉加载功能
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    // 配置用于做下拉刷新功能
    pullDownRefresh: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getScrollY() {
      return this.scroll && this.scroll.y
    }
  },
  mounted() {
    console.log('---')
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 是否开启滚动区域内的元素开启点击事件
        tap: true,
        // 是否实时滚动
        probeType: this.probeType,
        // 是否开启上拉加载
        pullUpLoad: this.pullUpLoad
      })
      // 监听上拉动作
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          console.log('上拉')
          this.$emit('pullingUp')
        })
      }
      // 监听下拉动作
      if (this.pullDownRefresh) {
        this.scroll.on('pullingDown', () => {
          console.log('上拉')
          this.$emit('pullingDown')
        })
      }
      // 监听滚动事件
      // if (this.probeType === 2 || this.probeType === 3) {
      //   this.scroll.on('scroll', position => {
      //     this.$emit('scroll', position)
      //   })
      // }

      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    })
  },
  watch: {},
  created() {},
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      // 完成上拉加载
      this.scroll && this.scroll.finishPullUp()
    },
    finishPullDown() {
      // 完成下拉刷新
      this.scroll && this.scroll.finishPullDown()
    },
    refresh() {
      console.log('refresh')
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style lang="less" scoped></style>
