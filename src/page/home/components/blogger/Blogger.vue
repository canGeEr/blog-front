<template>
    <div id="blogger" class="m-flex">
      <div>
        <div class="right-box m-flex">
          <div class="blog-use-img"></div>
          <p>
            关注 0 &nbsp;&nbsp;&nbsp; 粉丝 0
          </p>
        </div>
      </div>
      <div class="h-title">
        believe & Strive
      </div>
      <p style="text-indent:2.5vw;margin-top:5rem" >
        I love life although it blow me drasticly and frequnetly
      </p>
    </div>
</template>

<script>
export default {
  name: 'Blogger',
  mounted(){
    console.log(location.hash.slice(2))
  },
}
</script>

<style scoped>
@import url('./blogger.css');
</style>>