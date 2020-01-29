<template>
  <div>
    <manage-frame :tbody.sync="tbody" :thead="thead" @checkAll="checkAll" @checkAdd="checkAdd"
      :pagesArr="pagesArr" :pageName="$route.name" :pages="pages "
    >
      
      <template #top>
        <div class="clearfix" >
          <c-button class="btn-add" value=" + 添加文章" @click="addArticle" />
          <c-button class="btn-filter" value="筛选" />
          <c-button class="btn-filter" value="查看" :disabled="delDisable" @click="getArticleById"/>
          <c-button class="btn-edit" :disabled="editDisable" value="修改权限" @click="showPopUp('edit-user-permission')" />
        </div>
      </template>
      <template #bottom > 
        <edit-article-permission :editForm="editForm" ref="edit-user-permission" @editArticlePermission="editArticlePermission" />
      </template>

    </manage-frame>
  </div>
</template>

<script>
  import EditArticlePermission from './components/editarticlepermission/EditArticlePermission'
  import CButton from "@components/mybutton/CommonButton";
  import ManageFrame from '@components/framework/manage/ManageFrame'
  import methods from './methods'
  export default {
    name: 'ArticleManage',
    components: {
      ManageFrame,
      CButton,
      EditArticlePermission
    },
    data() {
      return {
        tbody: null,
        thead: ['id', "title", "author", "status"],
        checkedIndexArr: [],
        editForm: [
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
  @import url("./articlemanage");
</style>
