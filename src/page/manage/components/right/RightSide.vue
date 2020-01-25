<template>
  <div class="right-side">
    <h4>index / <font color="#45788f">{{$route.name}}</font></h4>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'RightSide',
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
  .right-side {
    padding: 1rem;
  }

  h4 {
    /* font-size: 0.85rem; */
    text-transform: capitalize;
    text-indent: 1rem;
    font-weight: lighter;
    color: grey;
  }

  .container {
    /* padding: 0 1rem; */
  }
</style>