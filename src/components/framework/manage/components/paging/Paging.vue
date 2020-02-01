<template>
  <ul>
    
    <router-link tag="li" class="page-last" :to="{
      name: pageName,
      query: {
        pId: lastPageId
      }
    }"> &lt; </router-link>
    <router-link v-for="(value, index) of pagesArr" :key="index" tag="li" :to="{
      name: pageName,
      query: {
        pId: value
      }
    }">{{value}}</router-link>
    <router-link class="page-next" tag="li" :to="{
      name: pageName,
      query: {
        pId: nextPageId
      }
     }">&gt;</router-link>
    <input type="text" name="pId" v-model="pId" @change.enter="reload">
    <li class="page-reload"  @click="reload">跳转</li>
    <span class="info">{{pages}}/p</span>
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
      const pId = this.$route.query.pId
      return pId ? pId : 1
    },
    reload() {
      const pId = this.pId;
      this.$router.push({
        name: this.pageName,
        query: {
          pId:pId
        }
      })
    }
  },
  computed: {
    lastPageId() {
      const thisId = this.getPId();
      return thisId > 1 ? thisId - 1 :thisId
    },
    nextPageId() {
      const thisId = this.getPId();
      return thisId < this.pages ? thisId + 1 : this.pages
    }
  },
  data() {
    return {
      pId: ''
    }
  },
}
</script>

<style scoped>

ul {
  margin-top: 5vh;
}

li {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;
  padding: 0.125rem 0.50rem;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
}

li:hover {
  color: #45788f;
}

.router-link-exact-active {
  background-color: black;
  color: white;
}


input {
  width: 1.875rem;
  vertical-align: middle;
  text-align: center;
  line-height: 1rem;
  /* padding: 0.325rem; */
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