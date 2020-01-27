<template>
  <tr>
    <th>
      <input type="checkbox" name="userIndex" v-model="checked" class="btn-check-all" title="all" @change="$emit('checkAll', checked)" />
    </th>
    <th v-for="(item, index) of titleBar" :key="index">{{item.capWords()}}</th>
  </tr>
</template>

<script>
export default {
  name: "TableHead",
  props: ["titleBar"],
  data() {
    return {
      checked: false
    }
  }
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