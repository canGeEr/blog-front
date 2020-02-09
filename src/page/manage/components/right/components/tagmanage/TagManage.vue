<template>
  <div>
    <input type="file" webkitdirectory @change="add($event)">
  </div>
</template>

<script>

  export default {
    name: 'TagManage',
    methods: {
      add($event) {
        const files = $event.target.files;
        console.log(files)
      }
    },

  }

</script>
