<template>
  <div class="right-side">
    <div class="resource-path">
      <font color="grey" >PATH</font>
      <router-link v-for="(item, index) in routePathArr" tag="span" :to="{path: getRouterPathByName(item, routePathArr)}" :key="index">/{{item}}</router-link>
    </div>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'RightSide',
  computed: {
    routePathArr() {
      const router = this.$route;
      const path = router.fullPath
      const pathArr = path.split('/').slice(1)
      return pathArr
    },
    
  },
  methods: {
    getRouterPathByName(str, arr) {
      let path = '';
      arr.some( item => {
        path += '/' + item;
        return item === str
      });
      return path
    }
  }
}
</script>

<style scoped>
@import url('./rightside.css');
</style>