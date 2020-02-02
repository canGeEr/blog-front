<template>
  <div id="index">
    <div id="head-line" class="m-flex">
      <div id="popular">最新</div>
      <div class="head-bar"></div>
      <div id="new">最热</div>
      <div class="head-bar"></div>
      <div id="prose">Prose</div>
    </div>
    <div class="main">
      <Block
        v-for="(item,index) in data"
        :key="index"
        :author="item.author"
        :title="item.title"
        :time="item['create_time'] | formatDate"
        :hit="item['hit_times']"
        :tag="item.tag"
        :id="item.id"
      />
      <div id="reload-more" style="text-align:center;cursor:pointer">点击加载更多</div>
    </div>
  </div>
</template>

<script>
import Axios from '@service/index'
import Block from "./components/block/Block";
export default {
  name: "index",
  data() {
    return {
      data: [],
    };
  },
  components: {
    Block
  },
  methods: {},
  created() {
    const userInFo= this.$store.state.userInFo
    Axios.post('api/article/getArticlesInFo')
    .then((data)=>{
      if(data) {
        this.data = data.articles
      }
    })
  },
};
</script>

<style scoped>
@import url(./index.css);
</style>>