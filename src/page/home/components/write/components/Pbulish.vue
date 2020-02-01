<template>
  <pop-up-frame :pop-up="popUp" @closePopUp="closePopUp" title="发布文章">

    <template #form>
      <form action>
        <!-- 标签类 盒子事件移交 -->
        <div @click="selectClass($event)">
          <h4>标签类</h4>
          <span :class="['tag-class', (tagClassName === selectTagClass ? 'tag-class-select' : false) ]"
            :data-class="tagClassName" v-for="( tagArr ,tagClassName)  in tagRoot"
            :key="tagClassName">{{tagClassName}}</span>
        </div>

        <!-- 确保数据到来时才显示,正常访问数据属性 -->
        <div v-if="tagRoot" class="tag-box" @click="selectTag($event)">
          <h4>标签</h4>
          <span v-for="(tag) of tagRoot[selectTagClass]" :key="tag.id"
            :class="['tag', (selectTags.indexOf(tag.name) !== -1 ? 'tag-select' : false )]"
            :data-value="tag.name">{{tag.name}}</span>
        </div>

        <div>
          <h4>已选标签</h4>
          <span class="tag-has-select" v-for="value in selectTags" :key="value">{{value}}</span>
        </div>
      </form>
    </template>

    <template #submit>
      <c-button value="发布" @click="$emit('publish',selectTags)" class="btn-pbulish" />
    </template>

  </pop-up-frame>
</template>

<script>
  import Axios from '@service/index'
  import CButton from "@components/mybutton/CommonButton";
  import PopUpFrame from "@components/framework/popup/PopupFrame";


  const config = {
    TAG_MAX_NUB: 3
  }


  export default {
    name: "Publish",
    data() {
      return {
        tagRoot: null,
        popUp: false,
        //当前标签类
        selectTagClass: '前端',
        //当前选择标签集合
        selectTags: []
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
      },
      //初始化数据
      async initData() {
        const data = await Axios.post('api/tags', {
          type: 'front'
        });
        if (data && data.success) {
          this.tagRoot = data.tags
        }
      },
      //选择类
      selectClass($event) {
        const target = $event.target;
        if (target.nodeName === 'SPAN') {
          this.selectTagClass = target.dataset['class'];
        }
      },
      //选择标签
      selectTag($event) {
        const target = $event.target;
        if (target.nodeName === 'SPAN') {
          const toAddTag = target.dataset['value'];
          const index = this.selectTags.indexOf(toAddTag);
          //是否已有
          if (index === -1) {
            //判断是否已经满了
            if(this.selectTags.length >= config.TAG_MAX_NUB) {
              this.$Notice.error({
                title: '错误',
                desc: '最多只能选择三个标签',
                duration: 1
              })
              return
            }
            //不满添加
            this.selectTags.push(toAddTag)
          } else {
            //已有删除
            this.selectTags.splice(index, 1)
          }
        }
      }
    },
    created() {
      this.initData()
    },
    mounted() {

    }
  };

</script>

<style scoped>
  @import url("./pbulish.css");

</style>
