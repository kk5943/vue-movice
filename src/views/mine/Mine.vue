<template>
  <div>
    <van-nav-bar title="喵眼电影" />
    <van-form @submit="onSubmit" class="login">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" color="#e54847">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  props: {},
  components: {},
  computed: {},
  watch: {},
  created() {},
  methods: {
    onSubmit(values) {
      console.log('submit', values)
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
</style>
