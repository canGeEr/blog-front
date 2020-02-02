<template>
  <div class="write">
    <div class="headline">
      <input type="text" placeholder="填写标题" v-model="title" />
      <c-button class="btn-pbulish" value="修改文章" @click="showPopUp" />
    </div>
    <mavon-editor style="font-color: black" class="mavon-editor" v-model="markdownValue" @imgAdd="$imgAdd"
      @imgDel="$imgDel" ref="md" />
    <pbulish ref="publish" @publish="pbulish" />
  </div>
</template>

<script>
  import pbulish from "./../write/components/Pbulish";
  import CButton from "@components/mybutton/CommonButton";
  import Axios from "@service/index";
  import markDownForWrite from '@components/markdown/forWrite/MarkDown.js'
  let oldImages = null;
  export default {
    mixins: [markDownForWrite],
    name: 'Edit',
    components: {
      pbulish,
      CButton
    },
    data() {
      return {
        title: '',
        markdownValue: '',
      }
    },
    created() {
      const id = this.$route.query.id;
      Axios.get('api/article/getArticleById', {
          id
        })
        .then((data) => {
          if (data && data.success) {
            this.markdownValue = data.content;
            const articleInFo = data.articleInFo
            this.title = articleInFo.title,
              oldImages = articleInFo.images
            this.$refs.publish.initSelectTags(JSON.parse(articleInFo.tags))
          }
        })
    },
    methods: {
      showPopUp() {
        const publish = this.$refs.publish
        publish.showPopUp();
      },
      pbulish(tags) {
        const id = this.$route.query.id;
        const images = this.imagesFilter(this.images.concat(oldImages))
        Axios.post("api/article/updateArticle", {
          id,
          title: this.title,
          tags,
          content: this.markdownValue,
          images: images
        }).then(data => {
          if (data && data.success) {
            this.$Notice.success({
              title: "通知",
              desc: "修改成功"
            });
            //是否在销毁组件时清除,确认发布状态
            this.clearUploadImagesFlag = 0;
            if (this.$store.state.userInFo.username) {
              //后台添加用户
              this.$router.go(-1)
            } else {
              this.$router.push({
                name: "Index"
              });
            }
          }
        });
      },
    }
  }

</script>

<style scoped>
@import url('./edit.css');
</style>
