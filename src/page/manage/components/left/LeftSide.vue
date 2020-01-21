<template>
  <div class="left-side">
    <div class="left-top m-flex"> 
      <img v-once :src="headback" alt="" class="portrait">
      <div class="info-att"> 用户名 : admin <br> 权限 : 管理员 </div>  
    </div>
    <nav>
      <li>首页 \ 前台</li>
      <li>用户管理</li>
      <li>标签管理</li>
      <li>文章管理</li>
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