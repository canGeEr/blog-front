<template>
  <pop-up-frame :pop-up="popUp" @closePopUp="closePopUp" title="发布文章" >

    <template #form>
      <form action>
        <div>标签</div>
        <p v-for="(tag,index) in tags" :key="index">
          <input type="text" v-model="tags[index]" />
        </p>
      </form>
    </template>

    <template #submit>
      <c-button value="发布" @click="$emit('publish',tags)" class="btn-pbulish" />
    </template>

  </pop-up-frame>
</template>

<script>
import CButton from "@components/mybutton/CommonButton";
import PopUpFrame from "@components/framework/popup/PopupFrame";
export default {
  name: "Publish",
  data() {
    return {
      tags: ["", "", ""],
      popUp: false
    };
  },
  components: {
    PopUpFrame,
    CButton
  },
  methods: {
    closePopUp() {
      this.popUp = false;
    },
    showPopUp() {
      this.popUp = true;
    }
  }
};
</script>

<style scoped>
@import url("./pbulish.css");
</style>
