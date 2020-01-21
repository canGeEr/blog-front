<template>
  <div class="container">
    <div class="left-tab m-flex">
      <h3 style="color: black">welcome to contact me</h3>
      <p><slot name="skip"></slot></p>
    </div>
    <div class="right-tab">
      <slot name="form"></slot>
      <slot/>
    </div>
  </div>
</template>

<script>
import Logo from '@components/logo/Logo'
export default {
  name: "UserFrame",
  components: {
    Logo
  },
};
</script>

<style scoped>
@import url('./userframe.css');
</style>