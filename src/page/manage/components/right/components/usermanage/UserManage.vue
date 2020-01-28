<template>
  <div>
    <manage-frame :tbody.sync="tbody" :thead="thead" @checkAll="checkAll" @checkAdd="checkAdd">
      
      <template #top>
        <div class="clearfix">
          <c-button class="btn-add" value=" + 添加用户" @click="addUser" />
          <c-button class="btn-filter" value="筛选" />
          <c-button class="btn-delete" :disabled="delDisable" value="删除" @click="deleteUserById" />
          <c-button class="btn-edit" :disabled="editDisable" value="修改权限" @click="showPopUp('edit-user-permission')" />
        </div>
      </template>

      <template #bottom>
        <edit-user-permission ref="edit-user-permission" @editUserPermission="editUserPermission" />
      </template>

    </manage-frame>
  </div>
</template>

<script>
  import CButton from "@components/mybutton/CommonButton";
  import ManageFrame from '@components/framework/manage/ManageFrame'
  import methods from './methods'
  export default {
    name: 'UserManage',
    components: {
      ManageFrame,
      CButton
    },
    data() {
      return {
        tbody: null,
        thead: ["name", "grade", "legal", "status"],
        checkedIndexArr: []
      }
    },
    computed: {
      editDisable() {
        const checkedLength = this.checkedIndexArr.length;
        return checkedLength !== 1 ? 'disabled' : false;
      },
      delDisable() {
        const checkedLength = this.checkedIndexArr.length;
        return checkedLength === 0 ? 'disabled' : false;
      }
    },
    methods,
    created() {
      this.getUsers();
    },
  }

</script>
<style>
  @import url("./usermanage");

</style>
