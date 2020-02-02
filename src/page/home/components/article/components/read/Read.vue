<template>
  <div class = 'read-article'>
    <h1>{{articleInFo.title}}</h1>
    <p>
      <span>作者：{{articleInFo.author}}</span>  
      <br/>
      <span>{{articleInFo['create_time'] | formatDate }}</span>
      <span>阅读 {{articleInFo['look_times']}}</span>
      <span>点赞 {{articleInFo['hit_times']}}</span> 
     </p>
    <div class="left-side"> 
      <div class="hit">
        <svg @click="hit(fillColor)" viewBox="0 0 1024 1024" fill="transparent" >
          <path
            d="M153.6 449.163636H209.454545c109.381818 0 167.563636-86.109091 
            167.563637-176.872727V174.545455c0-4.654545 0-11.636364 2.327273-16.29091 
            9.309091-51.2 58.181818-86.109091 109.381818-76.8l13.963636 2.327273c46.545455 
            6.981818 86.109091 37.236364 104.727273 79.127273 18.618182 39.563636 25.6 83.781818 
            18.618182 125.672727l-9.309091 72.145455v2.327272c0 6.981818 4.654545 11.636364 11.636363 
            11.636364h244.363637c44.218182 6.981818 74.472727 46.545455 69.818182 93.090909L861.090909 
            872.727273c-4.654545 39.563636-39.563636 69.818182-81.454545 69.818182H172.218182c-37.236364 0-67.490909-30.254545-69.818182-67.49091l-18.618182-353.745454c-2.327273-39.563636 27.927273-72.145455 67.490909-72.145455h2.327273z m160.581818 423.563637h465.454546c4.654545 0 11.636364-4.654545 11.636363-9.309091l81.454546-402.618182c0-6.981818-4.654545-11.636364-9.309091-13.963636H628.363636c-44.218182 0-81.454545-37.236364-81.454545-81.454546v-11.636363l9.309091-72.145455c4.654545-30.254545 0-60.509091-13.963637-86.109091-9.309091-23.272727-30.254545-37.236364-53.527272-41.890909l-13.963637-2.327273c-13.963636-2.327273-25.6 6.981818-27.927272 18.618182v100.072727c0 100.072727-53.527273 200.145455-158.254546 235.054546l25.6 367.709091zM200.145455 516.654545h-23.272728c-13.963636 0-23.272727 11.636364-23.272727 23.272728L162.909091 849.454545c0 11.636364 11.636364 23.272727 23.272727 23.272728h34.909091c13.963636 0 23.272727-9.309091 23.272727-23.272728v-2.327272l-20.945454-307.2c-2.327273-11.636364-11.636364-23.272727-23.272727-23.272728z"
            :fill="fillColor"></path>
        </svg>
      </div>
    </div>
    <mavon-editor
      :transition="false" :ishljs="true"
      :toolbarsFlag="false"  :subfield="false" :defaultOpen="'preview'" 
      :codeStyle="'hybrid'"
      :value="content"
      />
      
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import CButton from "@components/mybutton/CommonButton";
import Axios from "@service/index";
export default {
  name: "Read",
  components: {
    CButton,
    mavonEditor
  },
  data() {
    return {
      content: '',
      articleInFo: {},
      fillColor: '#ffffff'
    }
  },
  computed: {
    hited() {

    }
  },
  created() {
    const id = this.$route.query.id
    Axios.get('api/article/getArticleById',{id})
    .then((data)=>{
      console.log(data)
      if(data && data.success) {
        this.content = data.content;
        const articleInFo = data.articleInFo;
        this.articleInFo = articleInFo
      }
    })
  },
  methods: {
    hit(fillColor) {
      if(fillColor === '#ffffff') {
        this.$set(this.articleInFo, 'hit_times', this.articleInFo['hit_times'] + 1);
        this.fillColor = 'red'
      }else {
        this.$set(this.articleInFo, 'hit_times', this.articleInFo['hit_times'] - 1);
        this.fillColor = '#ffffff'
      }
      const id = this.articleInFo['id'];
      
      Axios.post('api/article/updateArticleInFo', {
        id,
        'hit_times': this.articleInFo['hit_times']
      })
    }
  }
};
</script>

<style scoped>
@import url('./read.css')
</style>