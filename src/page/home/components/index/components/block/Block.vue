<template>
  <router-link :to=" {name: 'Read', query: {id} } " tag="a" class="block">
    <div>
      <div class="header">{{author}}</div>
      <p>{{title}}</p>
      <div class="bottom">
        <span class="bottom_att">
          <img class="att_svg" src="@assets/time.svg" alt="">
          <span>{{time}}</span>
        </span>
        <span class="bottom_att">
          <img class="att_svg" src="@assets/like.svg" >
          <span>{{hit}}</span>
        </span>
      </div>
    </div>
  </router-link>
</template>
fsbba
<script>
export default {
  name: "block",
  props: ["author", "title", "time", "hit", "tag", 'id'],
  data() {
    return {};
  },
  computed: {
    tags() {
      return this.tag;
    }
  }
};
</script>

<style scoped>
.block {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin: 1rem auto;
  border-left: 1px solid white;
}
p {
  text-indent: 2rem;
}

.bottom_att{
  margin: 0.75rem 0.25rem;
}

.bottom .att_svg {
  display: inline-block;
  height: 1rem;
  width: 1rem;
  background-size: contain;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.bottom_att span{
  font-size: 0.85rem;
  color: white;
}

.bottom_att span:nth-child(2) {
  vertical-align: middle;
}

</style>
