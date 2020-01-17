<template>
  <div class="box-container" v-show="showLoading">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <div class="box6"></div>
    <div class="content">loading</div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data(){
      return {
        showLoading: false
      }
    },
    methods: {
      show(){
        this.showLoading = true
      },
      hidden(){
        this.showLoading = false
      }
    },
    mounted() {
      console.log('Loading is mounted!!!')
    },
  }

</script>

<style scoped>
@import url('./load.css');
</style>
