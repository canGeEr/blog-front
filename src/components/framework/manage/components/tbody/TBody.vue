<template>
  <tbody @click="$emit('checkAdd', $event)">
    <tr v-for="(user, uIndex) of tbody" :key="user.id">
      <td>
        <input :data-index="uIndex" type="checkbox" name="userIndex" v-model="user.checked" class="btn-check-all" />
      </td>
      <td v-for="(list) in thead" :key="list">
        {{ list === 'name' ? user['username'] : user[list] }}
      </td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    name: 'TBody',
    props: ['tbody', 'thead'],
  }

</script>

<style scoped>
  tr:hover {
    box-shadow: 0 0 2px 0 black;
  }

</style>
