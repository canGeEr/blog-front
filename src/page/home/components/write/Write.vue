<template>
  <div class="write">
    <p><input type="text" placeholder="填写标题"> <button>发表文章</button> </p>
    <mavon-editor style="font-color: black" class="mavon-editor" :toolbars="toolbars" />
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import markcof from "./markcof";
export default {
  name: "Write",
  components: {
    mavonEditor,
  },
  data() {
    return {
      toolbars: {
        ...markcof
      }
    };
  },
  mounted() {}
};
</script>

<style scoped>
@import url('./write.css');
</style>