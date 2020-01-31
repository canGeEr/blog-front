<template>
  <div id="blogger">

    <div class="clearfix">
      <div class="right-box">
        <span class="blog-use-img"></span><br/>
        <span>关注 {{fans}}</span >
      </div>
    </div>
    <div class="h-title">
      
      believe & Strive
    </div>
    <p class="h-title-att">I love life although it blow me drasticly and frequnetly</p>
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
    mounted() {
      console.log()
    },
  }

</script>

<style scoped>
  @import url('./blogger.css');

</style>>
