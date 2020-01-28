<template>
  <div>
    <manage-frame :tbody.sync="tbody" :thead="thead" @checkAll="checkAll" @checkAdd="checkAdd"
      :pagesArr="pagesArr" :pageName="$route.name" :pages="pages "
    >
      
      <template #top>
        <div class="clearfix" >
          <c-button class="btn-add" value=" + 添加用户" @click="addUser" />
          <c-button class="btn-filter" value="筛选" />
          <c-button class="btn-delete" :disabled="delDisable" value="删除" @click="deleteUserById" />
          <c-button class="btn-edit" :disabled="editDisable" value="修改权限" @click="showPopUp('edit-user-permission')" />
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
  export default {
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
        checkedIndexArr: [],
        editForm: [
          { proname: 'grade',  alias: { '0': '游客',    '1': '博主'    }},
          { proname: 'legal',  alias: { 'Y': '已认证',  'N': '未通过'  }},
          { proname: 'status', alias: { '0': '不可用',  '1': '可用'    }},
        ],
        pagesArr: null,
        pages: null
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
    //监听路由变化
    watch: {
    '$route' (to, from) {
         this.getUsers();
      }
    }
  }

</script>
<style>
  @import url("./usermanage");
</style>
