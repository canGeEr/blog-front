<template>
  <label :for="id">
    <span class="button">
      <input ref="input" :id="id" type="radio" :name="name" :value="value" @change="$emit('change', value)">
      <span class="button-center"></span>
    </span>
    <span class="font">{{text}}</span>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: ['name', 'id', 'text', 'value', 'checked'],
  methods: {
    
  },
  beforeMount() {

  },
  mounted() {
    const input = this.$refs.input;
    if(this.value === this.checked) {
      input.checked = 'checked'
    }else {
      console.log(input)
    }
  }
}
</script>

<style scoped>

  input {
    position: absolute;
    opacity: 0;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }

  .button {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 1.5px -1px black inset;
  }

  .button-center {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
  }

  input:checked+.button-center {
    background-color: #f33474;
  }

  .font {
    color: black
  }
</style>