<template>
  <button @click="$emit('click')" :disabled="disabled" :class="{'btn-disabled': !!disabled}">{{value}}</button>
</template>

<script>
export default {
  name: "CommonButton",
  props: ["value", "disabled"]
};
</script>

<style scoped>
button {
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border: none;
  outline: none;
}

[class*="btn-disabled"] {
  background-color: white;
  box-shadow: 0 0 2px 0 black;
  color: grey;
}

[class*="btn-disabled"]:hover {
  background-color: white;
  box-shadow: 0 0 2px 0 black;
  color: grey;
}
</style>