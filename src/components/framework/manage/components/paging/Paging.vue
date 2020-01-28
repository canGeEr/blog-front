<template>
  <ul>
    
    <router-link tag="li" class="page-last" :to="{
      name: pageName,
      query: {
        id: getPId() - 1
      }
    }">上一页</router-link>
    <router-link v-for="(value, index) of pagesArr" :key="index" tag="li" :to="{
      name: pageName,
      query: {
        id: value
      }
    }">{{value}}</router-link>
    <router-link class="page-next" tag="li" :to="{
      name: pageName,
      query: {
        id: getPId() + 1
      }
     }">下一页</router-link>
    <input type="text" name="p_id" v-model="p_id">
    <li class="page-reload"  @click="reload">跳转</li>
    <span class="info">{{pages}} pages</span>
  </ul>
</template>

<script>
import CButton from "@components/mybutton/CommonButton";
export default {
  name: 'Pageing',
  props:['pagesArr', 'pageName', 'pages'],
  components: {
    CButton
  },
  methods: {
    getPId() {
      const p_id = this.$route.query.id
      return p_id ? p_id : 1
    },
    reload() {
      const p_id = this['p_id'];
      this.$router.push({
        name: this.pageName,
        query: {
          id:p_id
        }
      })
    }
  },
  data() {
    return {
      'p_id': ''
    }
  },
  mounted() {
    console.log(this.getPId())
  }
}
</script>

<style scoped>

ul {
  margin-top: 5vh;
  /* text-align: center; */
}

[class^="page"] {

  background-color: black;
  color: white;
  padding: 0.375rem ;
  font-size: 0.85rem;
}

li {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;
  padding: 0.25rem 0.625rem;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
}

.router-link-exact-active {
  background-color: black;
  color: white;
}


input {
  width: 2rem;
  vertical-align: middle;
  text-align: center;
  line-height: 1rem;
  padding: 0.325rem;
}


.reload {
  background-color: black;
  color: white;
}

.info {
  color: grey;
  font-size: 0.75rem;
}
</style>