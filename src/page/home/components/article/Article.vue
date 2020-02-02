<template>
  <div class="article">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Article",
};
</script>

<style>
.hljs {
  background-color: transparent !important;
}
.markdown-body pre {
  background-color: #6c6c661a !important;
}

.markdown-body {
  min-height: 100vh !important;
  z-index: 0 !important;
  font-size: 1rem !important;
}
</style>