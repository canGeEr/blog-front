<template>
  <thead>
    <tr>
      <th>
        <input type="checkbox" name="userIndex" class="btn-check-all" title="all" 
          @change="$emit('checkAll', $event)" ref="checkAll"/>
      </th>
      <th v-for="(item) of thead" :key="item">{{item.capWords()}}</th>
    </tr>
  </thead>

</template>

<script>
  export default {
    name: "THead",
    props: ["thead"],
  };

</script>

<style scoped>
  th {
    letter-spacing: 0.025vw;
  }

  .btn-check-all {
    vertical-align: middle;
  }

  

</style>
