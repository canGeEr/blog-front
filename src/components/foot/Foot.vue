<template>
  <footer>
    <span name="common-botton-content">copyRight: zix</span>
    <span name="管理员专属">
      <router-link v-if="isAdmin" :to="{name: 'Manage'}" class="enter-manage">
        后台管理
      </router-link>
    </span>


    <!-- 因为是移过来的 -->
    <!-- <div class="m-flex footer_top"> -->
        
      <!-- <div class="footer_right m-flex">
        <dl>
          <dt>涉及技术</dt>
          <dd>css</dd>
          <dd>vue</dd>
          <dd>html</dd>
          <dd>设计模式</dd>
          <dd>javascript</dd>
        </dl>
        <dl>
          <dt>联系信息</dt>
          <dd>总作人: zix(个人作品)</dd>
          <dd>电话: 13026239138</dd>
          <dd>地址: 南昌市南昌县</dd>
          <dd>工作单位: 宏奕工作室</dd>
          <dd>邮箱: 电话 + @139.com</dd>
        </dl>
        <dl>
          <dt>制作成员</dt>
          <dd>前端: zix</dd>
          <dd>设计: zix</dd>
          <dd>后端: zix</dd>
        </dl>
        <dl>
          <dt>价值预估</dt>
          <dd>前端: 10000</dd>
          <dd>设计: 7500</dd>
          <dd>后端: 7500</dd>
        </dl>
      </div> -->
      <!-- <router-link tag="div" :to="{name: 'Index'}" id="logo" class="footer_left" title="logo">
        <div class="logo-line"></div>
        <div class="logo-l-bar"></div>
        <div class="logo-i-bar"></div>
        <div class="logo-n-bar"></div>
        <div class="logo-l-font">Z</div>
        <div class="logo-i-font">I</div>
        <div class="logo-n-font">X</div>
      </router-link>-->
    <!-- </div> -->
  </footer>
</template>

<script>
export default {
  name: "Foot",
  computed: {
    isAdmin() {
      return this.$store.state.userInFo.grade === '2'
    } 
  },
  mounted() {

  }
};
</script>

<style scoped>
@import url("./foot.css");
</style>