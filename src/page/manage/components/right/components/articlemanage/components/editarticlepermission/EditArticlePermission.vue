<template>
  <pop-up-frame :pop-up="popUp" title="权限管理" @closePopUp="closePopUp">
    <template #form>
      <div class="select-box" v-for="(item, index) of editForm" :key="index">
        <span class="select-att">
          <font color="#45788f">{{item.proname.capWords()}}</font>
        </span>
        <select :name="item.proname" v-model="form[item.proname]">
          <option v-for="(aliasTo,aliasFrom) in item.alias " :key="aliasFrom" :value="aliasFrom">{{aliasTo}}</option>
        </select>
      </div>
    </template>

    <template #submit>
      <c-button class="btn-edit" value="修改权限" @click="editArticlePermission" />
    </template>

  </pop-up-frame>
</template>

<script>
  import CButton from "@components/mybutton/CommonButton";
  import PopUpFrame from "@components/framework/popup/PopupFrame";
  export default {
    name: "EditArticlePermission",
    components: {
      PopUpFrame,
      CButton
    },
    props: ['editForm'],
    data() {
      return {
        form: {
          status: null,
        },
        popUp: false
      };
    },
    methods: {
      closePopUp() {
        this.popUp = false;
      },
      showPopUp(userInFo) {
        this.popUp = true;
        const formInit = {
          status: userInFo.status,
        };
        this.form = formInit;
      },
      editArticlePermission() {
        this.$emit('editArticlePermission', this.form);
        this.closePopUp()
      }
    },
  };

</script>

<style scoped>
  .title {
    padding: 0.75rem 1rem;
    background-color: black;
    color: white;
  }

  .select-box {
    margin: 1rem;
  }

  select {
    width: 10rem;
    height: 2rem;
    line-height: 2rem;
    vertical-align: middle;
  }

  .select-att {
    padding: 0 1rem;
  }

  option {
    min-width: 45vw;
  }

  .foot {
    height: 2rem;
    background-color: black;
  }

</style>
