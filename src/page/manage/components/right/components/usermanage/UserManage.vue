<template>
  <div class="user-manage">
    <div class="clearfix">
      <c-button class="btn-add" value=" + 添加用户" @click="addUser" />
      <c-button class="btn-filter" value="筛选" @click="showPopUp('edit-user-filter')" />
      <c-button class="btn-delete" :disabled="delDisable" value="删除" @click="deleteUserById" />
      <c-button class="btn-edit" :disabled="editDisable" value="修改权限" @click="showPopUp('edit-user-permission')" />
    </div>
    <table cellspacing="0">
      <table-head :titleBar="titleBar" @checkAll="checkAll" />
      <tr>

      </tr>
      <tr v-for="(user, index) of users" :key="user.id">
        <td>
          <input type="checkbox" name="userIndex" v-model="user.checked" class="btn-check-all" @change="updateSign(user.checked,index)" />
        </td>
        <td>{{user.username}}</td>
        <td>{{user.grade}}</td>
        <td>{{user.legal}}</td>
        <td>{{user.status}}</td>
      </tr>
    </table>
    <edit-user-permission ref="edit-user-permission" @editUserPermission="editUserPermission" />
  </div>
</template>

<script>
  import editUserPermission from "./edituserpermission/editUserPermission";
  import TableHead from "./tablehead/TableHead";
  import CButton from "@components/mybutton/CommonButton";
  import Axios from "@service/index";
  import methods from './methods'
  export default {
    name: "UserManage",
    data() {
      return {
        users: null,
        titleBar: ["name", "grade", "legal", "status"],
        checkedUserSign: [],
      };
    },
    components: {
      CButton,
      TableHead,
      editUserPermission
    },
    computed: {
      editDisable() {
        const checkedLength = this.checkedUserSign.length;
        return checkedLength !== 1 ? 'disabled' : false;
      },
      delDisable() {
        const checkedLength = this.checkedUserSign.length;
        return checkedLength === 0 ? 'disabled' : false;
      }
    },
    methods,
    created() {
      this.getUsers();
    },
    mounted() {

    }
  };

</script>

<style>
  @import url("./usermanage");
</style>
