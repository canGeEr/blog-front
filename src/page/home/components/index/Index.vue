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
        :time="item['create_time'] | getTime"
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
  filters: {
    getTime(value) {
      value = new Date(value-0);
      let year = value.getFullYear();
      let month = value.getMonth() + 1;
      let day = value.getDate();
      return `${year}-${month}-${day}`;
    }
  },
  beforeMount() {
    const userInFo= this.$store.state.userInFo
    Axios.post('api/article/getArticlesInFo')
    .then((data)=>{
      if(data) {
        this.data = data.articles
        console.log(data)
      }
    })
  },
};
</script>

<style scoped>
@import url(./index.css);
</style>>