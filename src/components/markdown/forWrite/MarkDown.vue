<template>
  <mavon-editor ref="md" style="font-color: black" class="mavon-editor" :toolbars="toolbars" v-model="markdownValue"
    @imgAdd="$imgAdd" @imgDel="$imgDel" />
</template>

<script>
  import {
    mavonEditor
  } from "mavon-editor";
  import "mavon-editor/dist/css/index.css";
  import markcof from "./markcof";
  import Axios from "@service/index";
  export default {
    name: "MarkDownForWrite",
    components: {
      mavonEditor,
    },
    data() {
      return {
        markdownValue: "",
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
        const publish = this.$refs.publish
        publish.showPopUp();
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
            const configUrl = this.$config.api;
            this.$refs.md.$img2Url(pos, configUrl + data.path);
          })
          .catch(err => {
            console.log(err);
          });
      },
      $imgDel(file) {
        //万一上传文件失败，侧无效,现在能确认是整数，其它另外,这里的filePath就是上面替换的路径
        if (typeof file[0] !== "number") {
          const configUrl = this.$config.api;
          const path = file[0].replace(new RegExp(configUrl), "");
          const index = this.images.findIndex((item, index) => {
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
    }
  };

</script>

<style scoped>

</style>
