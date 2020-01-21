<template>
  <div class="pop-up-window">
    <div class="content"><slot/></div>
  </div>
</template>

<script>
  
  export default {
    name: 'PopupFrame',
  }
</script>

<style scoped>
  .pop-up-window {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    color: black;
  }

  .content {
    position: absolute;
    z-index: 99;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0 0 5px 0px rgb(179, 176, 176);
  }
</style>
