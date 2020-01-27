<template>
  <div class="left-side"> 
    <img v-once :src="headback" alt="" class="portrait">
    <nav>
      <li>
        <router-link :to="{name: 'Index'}">前台</router-link> 
      </li>
      <router-link :to="{name: 'UserManage'}" tag="li">用户管理</router-link>
      <li>文章管理</li>
      <li>标签管理</li>
    </nav>
  </div>
</template>

<script>
import headback from '@static/images/girl.jpg'
export default {
  name: 'LeftSide',
  data() {
    return {
      headback
    }
  },
  methods: {
  },
  mounted() {
    console.log()
  }
}
</script>

<style scoped>
@import url('./leftside');
</style>