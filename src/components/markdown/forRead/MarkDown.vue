<template>
  <mavon-editor :transition="false" :ishljs="true" :toolbarsFlag="false" :subfield="false" :defaultOpen="'preview'"
    :codeStyle="'hybrid'" :value="content" />
</template>

<script>
  import {
    mavonEditor
  } from "mavon-editor";
  import "mavon-editor/dist/css/index.css";
  export default {
    name: 'MarkDownForRead',
    components: {
      mavonEditor
    },
    data() {
      return {
        content: ''
      }
    },
  }

</script>

<style>

</style>
