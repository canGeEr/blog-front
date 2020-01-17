<template>
  <nav class="m-flex">
    <div class="right-nav m-flex out-nav">
      <ul class="ul-nav m-flex">
        <router-link :to="{name: 'Index'}" tag="li">首页</router-link>
        <router-link :to="{name: 'Register'}" tag="li">注册</router-link>
        <router-link :to="{name: 'Login'}" tag="li" v-if="!logined">登入</router-link>
        <li @click="loginOut" v-else>注销</li>
      </ul>
    </div>
    <div class="m-flex" style="align-items: center">
      <hidden />
      <logo />
    </div>
  </nav>
</template>

<script>
import Hidden from './components/Hidden'
import Logo from "@components/logo/Logo";
export default {
  name: "Top",
  data() {
    return {};
  },
  components: {
    Logo,
    Hidden
  },
  computed: {
    logined() {
      return !!this.$store.state.userInFo.username
    }
  },
  methods: {
    loginOut() {
      this.$store.dispatch("delUserInFo").then(()=> {
        this.$Notice.warning({
          title: '警告',
          desc: '退出登入成功',
          duration: 1.5
        })
      })
    }
  },
};
</script>

<style scoped>
@import url(./top.css);
</style>
