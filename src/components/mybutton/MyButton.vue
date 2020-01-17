<template>
  <button @click="$emit('click')">{{value}}</button>
</template>

<script>
export default {
  name: "MyButton",
  props: ['value']
};
</script>

<style scoped>
button:focus {
  /* 点击之后其实发生了focus */
  outline: none;
}

button {
  position: relative;
  /* 层叠上下文环境 模板二需要 */
  z-index: 0;
  /* 层叠上下文环境 */
  width: 100%;
  line-height: 2rem;
  padding: 0.5rem;
  border: none;
  margin: 1.5rem auto;
  border-radius: 0.25rem;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-size: 1rem;
}

button:hover {
  cursor: pointer;
}

button {
  /* display: block; */
  width: 15rem;
  overflow: hidden;
  background-color: black;
  color: white;
}

button::before,
button::after {
  display: block;
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 2rem;
  height: 2rem;
  color: white;
  border-radius: 50%;
  border-width: 0.2rem;
  border-style: dotted;
  opacity: 1;
  transform: scale(0);
}

button:hover::before {
  animation: btn-ripple-anmi 1.5s ease-in infinite;
}

button:hover::after {
  animation: btn-ripple-anmi 1.5s ease-in 0.5s infinite;
}

@keyframes btn-ripple-anmi {
  50% {
    opacity: 1;
  }

  to {
    border-width: 0.05rem;
    transform: scale(3);
    opacity: 0;
  }
}
</style>