<template>
  <div>
    <manage-frame :tbody.sync="tbody" :thead="thead" @checkAll="checkAll" @checkAdd="checkAdd"
      :pagesArr="pagesArr" :pageName="$route.name" :pages="pages "
    >
      <template #top>
        <div class="clearfix" >
          <c-button class="btn-add" value=" + 添加用户" @click="addUser" />
          <c-button class="btn-filter" value="筛选" />
          <c-button class="btn-delete" :disabled="moreOneDisable" value="删除" @click="deleteUserById" />
          <c-button class="btn-edit" :disabled="onlyOneDisable" value="修改权限" @click="showPopUp('edit-user-permission')" />
        </div>
      </template>

      <template #bottom > 
        <edit-user-permission :editForm="editForm" ref="edit-user-permission" @editUserPermission="editUserPermission" />
      </template>

    </manage-frame>
  </div>
</template>

<script>
  import EditUserPermission from './components/edituserpermission/edituserpermission'
  import CButton from "@components/mybutton/CommonButton";
  import ManageFrame from '@components/framework/manage/ManageFrame'
  import methods from './methods'
  import mixin from '@components/framework/manage/mixin'
  export default {
    mixins:[mixin],
    name: 'UserManage',
    components: {
      ManageFrame,
      CButton,
      EditUserPermission
    },
    data() {
      return {
        tbody: null,
        thead: ['id', "name", "grade", "legal", "status"],
        editForm: [
          { proname: 'grade',  alias: { '0': '游客',    '1': '博主'    }},
          { proname: 'legal',  alias: { 'Y': '已认证',  'N': '未通过'  }},
          { proname: 'status', alias: { '0': '不可用',  '1': '可用'    }},
        ]
      }
    },
    methods,
  }

</script>
<style>
  @import url("./usermanage");
</style>
