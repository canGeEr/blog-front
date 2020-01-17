<template>
  <label for ref="user-name-label">
    <input :type="type" ref="user-name-input" :name="name" v-model="value" @input="$emit('input',value)"/>
    <span ref="user-name-att" class="user-name-att">{{name}}</span>
    <svg version="1.1" viewBox="0 0 600 100 " preserveAspectRatio="none" fill="transparent">
      <path
        ref="user-name-path"
        fill="transparent"
        stroke="black"
        stroke-width="8"
        d="M 0 100,L 600 100 ,L 600 0,L 0 0 ,L 0 100 "
      />
    </svg>
  </label>
</template>

<script>
export default {
  name: "MyInput",
  props: ["type", "id", "name"],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    //动画开关
    animaInputEvent(event) {
      const eventType = event.type;
      if(event.type === 'mouseenter'){
        this.animaController('add');
      }else if(event.type === 'mouseleave'){
        if(document.activeElement !== event.target && !event.target.value){
          this.animaController('remove');
        }
      }else if(event.type === 'blur'){
        if(!event.target.value){
          this.animaController('remove');
        }
      }
    },
    //动画怎么样执行
    animaController(name) {
      var namePath = this.$refs["user-name-path"]; //path
      var nameAtt = this.$refs["user-name-att"]; //Att
      namePath.classList[name]("user-name-path-anim");
      nameAtt.classList[name]("user-name-att-anim");
    }
  },
  mounted() {
    //时间绑定
    var nameInput = this.$refs["user-name-input"]; //input
    nameInput.addEventListener("mouseleave", this.animaInputEvent);
    nameInput.addEventListener("mouseenter", this.animaInputEvent);
    nameInput.addEventListener("focus", this.animaInputEvent);
    nameInput.addEventListener("blur", this.animaInputEvent);
  }
};
</script>

<style scoped>
@import url("./myinput.css");
</style>>
