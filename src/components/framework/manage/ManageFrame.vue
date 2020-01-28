<template>
  <div class="user-manage">
    <slot name="top" />
    <table cellspacing="0">
      <t-head :thead="thead" @checkAll="checkAll" ref="thead" />
      <t-body :tbody="tbody" :thead="thead" @checkAdd="checkAdd" />
    </table>
    <paging :pagesArr="pagesArr" :pageName="pageName" :pages="pages"/>
    <slot name="bottom" />
  </div>
</template>

<script>
  import Paging from './components/paging/Paging'
  import THead from "./components/thead/THead";
  import TBody from "./components/tbody/TBody";
  import Axios from "@service/index";
  export default {
    name: "ManageFrame",
    props: ['tbody', 'thead', 'pagesArr', 'pageName', 'pages'],
    components: {
      THead,
      TBody,
      Paging
    },
    methods: {
      checkAll(event) {
        const target = event.target
        const checked = target.checked
        const users = this.tbody;
        if (checked) {
          users.forEach((item, index) => {
            item.checked = true
          });
        } else {
          users.forEach((item) => {
            item.checked = false
          });
        }
        this.$emit('checkAll', target, checked)
      },
      checkAdd(event) {
        const target = event.target
        if (target.nodeName.toLowerCase() === 'input') {
          //如果已经全选，直接删除全选，改为多选
          const checkedAllBtn = this.$refs['thead'].$refs['checkAll']
          if(checkedAllBtn.checked)  checkedAllBtn.checked = false
          
          const checked = target.checked
          const index = target.dataset['index']
          this.$emit('checkAdd', target, checked, index)
        }
      },
    },
  };

</script>
<style>
  @import url("./manageframe");

</style>
