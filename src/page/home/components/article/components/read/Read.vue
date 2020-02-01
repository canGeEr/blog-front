<template>
  <mavon-editor
    :transition="false" :ishljs="true"
    :toolbarsFlag="false"  :subfield="false" :defaultOpen="'preview'" 
    :codeStyle="'hybrid'"
    :value="content"/>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import CButton from "@components/mybutton/CommonButton";
import Axios from "@service/index";
export default {
  name: "Read",
  components: {
    CButton,
    mavonEditor
  },
  data() {
    return {
      content: ''
    }
  },
  created() {
    const id = this.$route.query.id
    Axios.get('api/article/getArticleById',{id})
    .then((data)=>{
      if(data && data.success) {
        this.content = data.content
      }
    })
  },
  mounted() {
  }
};
</script>

<style>
</style>