//作为mixin混入

import {
  mavonEditor
} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import markcof from "./markcof";
import Axios from "@service/index";


export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      markdownValue: "",
      images: [],
      clearUploadImagesFlag: 1
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
          this.images.push(data.path);
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
        Axios.post('api/article/delImage', {
            images: [path]
          })
          .then((data) => {
            if (data && data.success) {
              console.log('删除成功')
            }
          })
        this.images.some((image, index) => {
          if (image === path) {
            this.images.splice(index, 1)
          }
        })
      } else {
        this.$Notice.warning({
          title: "警告",
          desc: "您的文件上传未成功，或者功能无效，导致删除无意义",
          duration: 2.5
        });
      }
    },
    imagesFilter(images) {
      const imagesArr = images.slice(0);
      const api = this.$config.api;
      return imagesArr.filter((image)=>{
        const result = this.markdownValue.match(new RegExp('!\\[.*\\]\\(' + api + image + '\\)' ))
        //不在就删除
        if(!result) {
          Axios.post('api/article/delImage', {images: [image]})
        }
        return !!(result)
      })
    }
  },
  destroyed() {
    //删除已经上传的图片，尚未保存
    if(this.clearUploadImagesFlag) {
      Axios.post('api/article/delImage', {images: this.images})
      .then((data)=>{
        if(data && data.success) {
          console.log(data)
        }
      })
    }
  }
};
