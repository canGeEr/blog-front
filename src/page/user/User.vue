<template>
  <div id="login" class="m-flex">
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'User',
  }

</script>

<style scoped>
#login {
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(./../../../static/images/bac.jpg);
}

.content{
  background-image: linear-gradient(45deg,#f33474,#f4aa91);
}
</style>>
