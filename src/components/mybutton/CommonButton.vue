<template>
  <button @click="$emit('click')">{{value}}</button>
</template>

<script>
export default {
  name: 'CommonButton',
  props: ['value']
}
</script>

<style scoped>
  button{
    border-radius: 5px;
    padding: 0.5rem 0.750rem;
    cursor: pointer;
    border: none;
    outline: none;
  }
</style>