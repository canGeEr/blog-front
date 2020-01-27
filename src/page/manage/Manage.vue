<template>
  <div class="manage m-flex">
    <left />
    <right class="right-side" />
  </div>
</template>

<script>
import Left from './components/left/LeftSide'
import Right from './components/right/RightSide'
export default {
  name: 'Manage',
  components: {
    Left,
    Right
  },
}
</script>

<style scoped>
  .manage {
    width: 100%;
    color: black;
    overflow-x: hidden;
    flex-wrap: nowrap;
  }

  .right-side {
    flex-grow: 1;
  }

</style>