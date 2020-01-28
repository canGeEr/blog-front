<template>
  <pop-up-frame :pop-up="popUp" title="权限管理" @closePopUp="closePopUp">
    <template #form>
      <div class="select-box" v-for="(item, index) of editForm" :key="index">
        
        <select :name="item.proname" v-model="form[item.proname]" >
          <option v-for="(aliasTo,aliasFrom) in item.alias " :key="aliasFrom"  :value="aliasFrom">{{aliasTo}}</option>
        </select>
        <span class="select-att">
            <!-- {{pro}} : -->
            <!-- <font color="#45788f">{{cGrade}}</font> -->
        </span>
      </div>
    </template>

    <template #submit>
      <c-button class="btn-edit" value="修改权限" @click="editUserPermission" />
    </template>

  </pop-up-frame>
</template>

<script>
  import CButton from "@components/mybutton/CommonButton";
  import PopUpFrame from "@components/framework/popup/PopupFrame";
  export default {
    name: "editUserPermission",
    components: {
      PopUpFrame,
      CButton
    },
    props: ['editForm'],
    data() {
      return {
        form: {
          grade: null,
          legal: null,
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
          grade: userInFo.grade,
          legal: userInFo.legal,
          status: userInFo.status,
        };
        this.form = formInit;
      },
      editUserPermission() {
        this.$emit('editUserPermission', this.form);
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
