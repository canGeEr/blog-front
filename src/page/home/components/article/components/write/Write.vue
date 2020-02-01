<template>
  <div class="write">
    <div class="headline">
      <input type="text" placeholder="填写标题" v-model="title" />
      <c-button class="btn-pbulish" value="发表文章" @click="showPopUp" />
    </div>
    <mavon-editor
      style="font-color: black"
      class="mavon-editor"
      v-model="markdownValue"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
      ref="md"
    />
    <pbulish ref="publish" @publish="pbulish" />
  </div>
</template>

<script>
import pbulish from "./components/Pbulish";
import CButton from "@components/mybutton/CommonButton";
import Axios from "@service/index";
import markDownForWrite from '@components/markdown/forWrite/MarkDown.js'
export default {
  mixins: [markDownForWrite],
  name: "Write",
  components: {
    pbulish,
    CButton
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    showPopUp() {
      const publish = this.$refs.publish
      publish.showPopUp();
    },
    //发布
    pbulish(tags) {
      Axios.post("api/article/saveArticle", {
        title: this.title,
        tags,
        content: this.markdownValue,
        username: this.$store.state.userInFo.username,
        images: this.images
      }).then(data => {
        if (data && data.success) {
          this.$Notice.success({
            title: "通知",
            desc: "发表成功"
          });
          if(this.$store.state.userInFo.username) {
            //后台添加用户
            this.$router.go(-1)
          }else {
            this.$router.push({ name: "Index" });
          }
        }
      });
    },
  }
};
</script>

<style scoped>
@import url("./write.css");
</style>
