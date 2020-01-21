<template>
  <span id="logo">
    <router-link :to="{name: 'Index'}" tag="span" class="logo" >zix</router-link>
  </span>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
#logo {
  display: inline-block;
  padding: 0.25rem;
  color: #87d0f1;
  border: 2px solid #75e4f8;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 0.5rem;
  transform: rotate(45deg);
}

.logo {
  color: #87d0f1;
  display: inline-block;
  transform: rotate(-45deg);
}
</style>