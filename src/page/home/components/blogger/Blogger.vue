<template>
  <div id="blogger">
    <div class="clearfix blogger-top">
      <div class="right-box">
        <div class="blog-use-img-box"><span class="blog-use-img"></span></div>
        <p>关注 {{fans}}</p>
      </div>
      <div>
        <div class="h-title">believe & strive</div>
        <p>I love life although it blow me drasticly and frequnetly</p>
      </div>
    </div>
    
    <div class="container">
      <nav>
      <ul class="clearfix">
        <router-link tag="span" :to="{ name: 'BloggerArticle'}" > 文章管理 </router-link>
        <router-link tag="span" :to="{name: 'BloggerMsg'}"> 用户信息 </router-link>
      </ul>
    </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Blogger',
    computed: {
      fans() {
        return this.$store.state.userInFo.fans
      }
    },
  }

</script>

<style scoped>
  @import url('./blogger.css');
</style>>
