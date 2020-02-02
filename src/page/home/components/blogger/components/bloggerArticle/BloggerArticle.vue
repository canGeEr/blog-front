<template>
  <div class="blogger-article-box">
    <manage-frame :tbody.sync="tbody" :thead="thead" @checkAll="checkAll" @checkAdd="checkAdd"
      :pagesArr="pagesArr" :pageName="$route.name" :pages="pages "
    >
      <template #top>
        <div class="clearfix" >
          <c-button class="btn-add" value=" + 添加文章" @click="addArticle" />
          <c-button class="btn-filter" value="修改文章" :disabled="onlyOneDisable" @click="getArticleById"/>
          <c-button class="btn-filter" value="筛选" />
          <c-button class="btn-delete" value="删除" :disabled="moreOneDisable" @click="delArticleById"/>
          <c-button class="btn-edit" :disabled="onlyOneDisable" value="修改权限" @click="showPopUp('edit-user-permission')" />
        </div>
      </template>
      
      <template #bottom > 
        <edit-article-permission :editForm="editForm" ref="edit-user-permission" @editArticlePermission="editArticlePermission" />
      </template>

    </manage-frame>
  </div>
</template>

<script>
import Axios from '@service'
import ArticleManage from '@page/manage/components/right/components/articlemanage/ArticleManage.vue'
export default {
  name: 'BloggerArticle',
  extends: ArticleManage,
  methods: {
    async initData() {
      const pId = this.getPId();
      const uId = this.$store.state.userInFo.id
      const data = await Axios.post("api/blogger/article",{pId, uId})
      console.log(data)
      if(data && data.success) {
        return {
          tbody: data.articleInFo,
          pagesArr: data.pagesArr,
          pages: data.pages
        }
      }
    },
    getArticleById() {
      const index = this.checkedIndexArr[0];
      const id = this.tbody[index].id;
      this.$router.push({
        name: 'Edit',
        query: {
          id
        }
      })
    }
  },
  data() {
    return {
      thead: ['id', "title", "author", 'look_times', 'hit_times', "status"],
    }
  }
}
</script>

<style scoped>
.blogger-article-box {
  margin: 1.5rem 0;
  padding: 1.5rem 0;
  color: black;
  background-color: white;
}
</style>