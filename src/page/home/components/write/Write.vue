<template>
  <div class="write">
    <div class="headline">
      <input type="text" placeholder="填写标题" v-model="title" />
      <c-button class="btn-pbulish" value="发表文章" @click="showPopUp" />
    </div>
    <mavon-editor
      ref="md"
      style="font-color: black"
      class="mavon-editor"
      :toolbars="toolbars"
      v-model="markdownValue"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
    />
    <pbulish ref="publish" @publish="pbulish" />
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import markcof from "./markcof";
import pbulish from "./components/Pbulish";
import CButton from "@components/mybutton/CommonButton";
import Axios from "@service/index";
export default {
  name: "Write",
  components: {
    mavonEditor,
    pbulish,
    CButton
  },
  data() {
    return {
      markdownValue: "",
      title: "",
      images: []
    };
  },
  computed: {
    toolbars() {
      return markcof;
    }
  },
  methods: {
    showPopUp() {
      this.$refs.publish.showPopUp();
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
        }
        this.$router.push({ name: "Index" });
      });
    },
    $imgAdd(pos, $file) {
      var formdata = new FormData();
      formdata.append("image", $file);
      Axios.fileUpload("api/article/saveImage", formdata)
        .then((data) => {
          this.images.push({
            path: data.path,
            legal: true
          });
          this.$refs.md.$img2Url(pos, "http://192.168.1.105:7001/" + data.path);
        })
        .catch(err => {
          console.log(err);
        });
    },
    $imgDel(file) {
      //万一上传文件失败，侧无效,现在能确认是整数，其它另外,这里的filePath就是上面替换的路径
      if (typeof file[0] !== "number") {
        const path = file[0].replace(/http:\/\/192\.168\.1\.105\:7001\//, "");
        const index =  this.images.findIndex((item, index)=>{
            return item.path === path
        });
        this.$set(this.images[index], 'legal', false)
      } else {
        this.$Notice.warning({
          title: "警告",
          desc: "您的文件上传未成功，或者功能无效，导致删除无意义",
          duration: 2.5
        });
      }
    }
  },
  mounted() {
    
  },
  destroyed() {
    
  }
};
</script>

<style scoped>
@import url("./write.css");
</style>
