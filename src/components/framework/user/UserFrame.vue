<template>
  <div class="container">
    <div class="left-tab m-flex">
      <h1 style="color: black">welcome to contact me <logo style="color: white" /> </h1>
      <slot name="skip"></slot>
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