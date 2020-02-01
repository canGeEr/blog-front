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
  import Axios from '@service'
  import write from './../write/Write'
  import methods from '@page//manage/components/right/components/articlemanage/methods'
  let  oldImages = null;
  export default {
    extends: write,
    name: 'Edit',
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
      pbulish(tags) {
        const id = this.$route.query.id;

        //获取默认api路径
        const configUrl = this.$config.api;

        //正则匹配 注意在new RegExp转义一次，用时转义一次
        oldImages.forEach((image)=>{
          const regexpUrl = new RegExp('\\[.*\\]\\(' + configUrl +  image + '\\)');
          const matchResult = this.markdownValue.match(regexpUrl);
          if(!matchResult) {
            this.images.push({
              path: image,
              legal: false
            });
          }else {
            this.images.push({
              path: image,
              legal: true
            });
          }
        })
        
        Axios.post("api/article/updateArticle", {
          id,
          title: this.title,
          tags,
          content: this.markdownValue,
          images: this.images
        }).then(data => {
          if (data && data.success) {
            this.$Notice.success({
              title: "通知",
              desc: "修改成功"
            });
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
