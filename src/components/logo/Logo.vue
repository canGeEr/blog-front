<template>
  <router-link :to="{name: 'Index'}" tag="span" id="logo">js</router-link>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
#logo {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  text-transform: uppercase;
  font-family: "ITCBLKAD";
  cursor: pointer;
  margin-left: 0.5rem;
}
</style>