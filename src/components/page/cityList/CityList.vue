<template>
  <scroll class="wrap">
    <div class="cinema-list">
      <div class="cinema-item" v-for="item in cinemaList" :key="item.id">
        <div class="title">
          <span>{{ item.nm }}</span>
          <span class="q"
            ><span class="price">{{ item.sellPrice }}</span
            >元起</span
          >
        </div>
        <div class="adress">
          <span>{{ item.addr }}</span>
          <span>{{ item.distance }}</span>
        </div>
        <div class="card">
          <div v-for="(value, key) in item.tag" :key="key" v-if="value === 1" :class="key | classCard">{{ key | formatCard }}</div>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'common/scroll/Scroll'

export default {
  name: '',
  data() {
    return {}
  },
  props: {
    cinemaList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { Scroll },
  filters: {
    formatCard(key) {
      let card = {
        allowRefund: '改签',
        endorse: '退',
        sell: '折扣卡',
        snack: '小吃'
      }
      return card[key]
    },
    classCard(key) {
      let card = {
        allowRefund: 'bl',
        endorse: 'bl',
        sell: 'or',
        snack: 'or'
      }
      return card[key]
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 95px;
  bottom: 50px;
}
div.cinema-list {
  padding: 10px 20px;
  div.cinema-item {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
    div.title {
      line-height: 25px;
      color: rgb(2, 2, 2);
      font-size: 18px;
      font-weight: 400;
      span {
      }

      span.q {
        font-size: 11px;
        color: #f03d37;
        span.price {
        }
      }
    }

    div.adress {
      display: flex;
      justify-content: space-between;
      line-height: 25px;
      font-size: 13px;
      color: #666;
      span {
      }
    }

    div.card {
      line-height: 18px;
      display: flex;
      div {
        padding: 0 3px;
        margin-right: 5px;
        border-radius: 2px;
        font-size: 14px;
        &.bl {
          color: #589daf;
          border: 1px solid #589daf;
        }
        &.or {
          color: #f90;
          border: 1px solid #f90;
        }
      }
    }
  }
}
</style>
