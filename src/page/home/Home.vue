<template>
  <div class="home m-flex">
    <top />
    <router-view class="home-center"></router-view>
    <foot />
  </div>
</template>

<script>
import top from "@components/top/Top";
import foot from "@components/foot/Foot";
export default {
  name: "Home",
  components: {
    top,
    foot
  },
};
</script>

<style>
.home {
  flex-direction: column;
  min-height: 100vh;
  background-attachment: fixed;
  background-image: url(./../../../static/images/bac.jpg);
  background-size: cover;
}
.home-center{
  flex-grow: 1;
}
</style>