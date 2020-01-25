<template>
  <div class="pop-up-window" v-show="popUp">
    <div class="content">
      <div class="title">{{title}}</div>
      <!-- //表单插槽 -->
      <slot name="form"/>
      <p class="btn-box clearfix">
          <!-- 发布按钮插槽 -->
          <slot name="submit" />
          <c-button value="取消" @click="$emit('closePopUp')" class="btn-cancel" />
      </p>
      <div class="foot"></div>
    </div>
  </div>
</template>

<script>
    import CButton from '@components/mybutton/CommonButton'
  export default {
    name: 'PopupFrame',
    props: ['popUp', 'title'],
    components: {
      CButton
    }
  }
</script>

<style scoped>
@import url('./popupframe.css');
</style>
