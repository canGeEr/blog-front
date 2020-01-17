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
        :time="item.time | getTime"
        :prise="item.prise"
        :tag="item.tag"
      />
      <div id="reload-more" style="text-align:center;cursor:pointer">点击加载更多</div>
    </div>
  </div>
</template>

<script>
import Block from "./components/block/Block";
export default {
  name: "index",
  data() {
    return {
      data: [
        {
          author: "zix",
          title: "怎么成为好的程序员",
          time: new Date(),
          prise: 30,
          tag: ["前端", "vue", "nust"]
        },
        {
          author: "hxuan",
          title: "蛇皮鸡",
          time: new Date(),
          prise: 60,
          tag: ["后端", "node", "egg"]
        },
        {
          author: "hxuan",
          title: "蛇皮鸡",
          time: new Date(),
          prise: 60,
          tag: ["后端", "node", "egg"]
        },
        {
          author: "罗明",
          title: "蛇皮鸡",
          time: new Date(),
          prise: 60,
          tag: ["后端", "node", "egg"]
        },
        {
          author: "黄",
          title: "蛇皮鸡",
          time: new Date(),
          prise: 60,
          tag: ["后端", "node", "egg"]
        }
      ]
    };
  },
  components: {
    Block
  },
  methods: {},
  filters: {
    getTime(value) {
      value = new Date(value);
      let year = value.getFullYear();
      let month = value.getMonth() + 1;
      let day = value.getDate();
      return `${year}-${month}-${day}`;
    }
  },
  mounted() {}
};
</script>

<style scoped>
@import url(./index.css);
</style>>