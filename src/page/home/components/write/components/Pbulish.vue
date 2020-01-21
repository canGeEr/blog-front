<template>
  <pop-up-frame v-show="popUp">
    <template>
      <div class="title">发布文章</div>
      <form action="">
        <div>标签</div>
        <p v-for="(tag,index) in tags" :key="index">
          <input type="text" v-model="tags[index]">
        </p>
        <p>
          <c-button value="取消" @click="closePopUp" class="cancel" />
          <c-button value="发布" @click="$emit('publish',tags)" background-color="black" color="white" />
        </p>
      </form>
      <div class="foot"></div>
    </template>
  </pop-up-frame>
</template>

<script>
  import CButton from '@components/mybutton/CommonButton'
  import PopUpFrame from '@components/framework/popup/PopupFrame'
  export default {
    name: 'Publish',
    data() {
      return {
        tags:['','',''],
        popUp: false
      }
    },
    components: {
      PopUpFrame,
      CButton
    },
    methods: {
      closePopUp() {
        this.popUp = false
      },
      showPopUp() {
        this.popUp = true
      }
      
    }
  }

</script>

<style scoped>
  .title {
    padding: 0.75rem 1rem;
    background-color: #f33474;
    color: white;
  }

  p {
    margin: 1rem 0;
  }

  p input {
    margin-top: 0.25rem;
  }

  form {
    padding: 1rem 3rem;
  }

  .foot {
    height: 2rem;
    background-color: rgb(182, 176, 176);
  }

  .button {
    display: block;
    margin-bottom: 0;
  }

  .cancel {
    color: black;
    box-shadow: 0 0 2px 0 rgb(179, 176, 176);
  }

</style>
