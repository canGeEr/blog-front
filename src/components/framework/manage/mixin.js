import ManageFrame from './ManageFrame'


const checkedIndexArrOperate = {
  cancelByIndex(index) {
    //用some搜索到就会停止
    this.checkedIndexArr.some((item, targetIndex)=>{
      const breakFlag = index === item;
      if(breakFlag) {
        this.checkedIndexArr.splice(targetIndex, 1);
      }
      return breakFlag
    })
  },
  selectByValue(index) {
    this.checkedIndexArr.push(index)
  },
  selectAll() {
    const newArr = []
    const length = this.tbody.length;
    for(let i=0; i<length; i++) {
      newArr[i] = i
    }
    this.checkedIndexArr = newArr
  },
  cancelAll() {
    this.checkedIndexArr = []
  }

}

const mixin = {
  components: {
    ManageFrame
  },
  data() {
    return {
      tbody: null,
      thead: null,
      checkedIndexArr: [],
      pagesArr: null,
      pages: null
    }
  },
  computed: {
    onlyOneDisable() {
      return this.checkedIndexArr.length !== 1 ? 'disabled' : false;
    },
    moreOneDisable() {
      return this.checkedIndexArr.length === 0 ? 'disabled' : false;
    }
  },
  methods: {
    async init() {
      if(! this.initData) throw new Error('渲染数据需要methods的 initData 方法(async) ');
      else {
        const defaultTbody = {
          tbody: [],
          pagesArr: null,
          pages: null
        };
        const initData = await this.initData();
        const data = initData ? initData :defaultTbody;
        if(data){
          const {tbody, pagesArr, pages} = data;
          tbody.forEach((th) => {
            th.checked = false
          }),
          this.tbody = tbody;
          this.pagesArr = pagesArr,
          this.pages = pages
        }
      }
    },  
    getPId() {
      const pId = this.$route.query.pId
      return pId ? pId : 1
    },
    ...checkedIndexArrOperate,
    //单选
    checkAdd(target, checked, index) {
      index = index - '0'
      if (checked) {
        this.selectByValue(index)
      } else {
        this.cancelByIndex(index)
      }
    },
    checkAll(target, checked) {
      if (checked) {
        this.selectAll()
      } else {
        this.cancelAll()
      }
    },
    showPopUp(windowName) {
      const arrLength = this.checkedIndexArr.length;
      if(arrLength !== 1) throw error('showPopUp 单选可用!!')
      else {  
        const index = this.checkedIndexArr[0];
        const inFo = this.tbody[index]
        this.$refs[windowName].showPopUp(inFo);
      }
    },
  },
  watch: {
    '$route' (to, from) {
      this.init();
    }
  },
  created() {
    this.init();
  }
}


export default mixin
