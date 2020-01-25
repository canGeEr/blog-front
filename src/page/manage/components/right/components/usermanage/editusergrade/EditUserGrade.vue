<template>
  <pop-up-frame :pop-up="popUp" title="权限管理" @closePopUp="closePopUp">
    <template #form>
      <div class="select-box">
        <select v-model="form.grade" name="grade">
          <!-- <option disabled value>请选择</option> -->
          <option value="0">游客</option>
          <option value="1">博主</option>
        </select>
        <span class="select-att">
          等级选择 :
          <font color="#45788f">{{cGrade}}</font>
        </span>
      </div>
      <div class="select-box">
        <select v-model="form.legal" name="legal">
          <option value="N">未通过</option>
          <option value="Y">已认证</option>
        </select>
        <span class="select-att">
          等级选择 :
          <font color="#45788f">{{cLegal}}</font>
        </span>
      </div>
    </template>

    <template #submit>
      <c-button class="btn-edit" value="修改权限" @click="editUserGrade" />
    </template>
  </pop-up-frame>
</template>

<script>
import CButton from "@components/mybutton/CommonButton";
import PopUpFrame from "@components/framework/popup/PopupFrame";
export default {
  name: "editUserGrade",
  components: {
    PopUpFrame,
    CButton
  },
  data() {
    return {
      form: {
        grade: null,
        legal: null,
        index: null
      },
      popUp: false
    };
  },
  computed: {
    cGrade() {
      return this.form.grade === "0" ? "游客" : "博主";
    },
    cLegal() {
      return this.form.legal === "N" ? "未通过" : "已认证";
    }
  },
  methods: {
    closePopUp() {
      this.popUp = false;
    },
    showPopUp(editInFO, index) {
      this.popUp = true;
      this.$set(this.form, 'grade', editInFO.grade);
      this.$set(this.form, 'legal', editInFO.legal);
      this.$set(this.form, 'index', index);
    },
    editUserGrade() {
      this.$emit('editUserGrade', this.form);
      this.closePopUp()
    }
  },
  mounted() {}
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