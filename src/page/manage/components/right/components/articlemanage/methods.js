import Axios from "@service/index";

const methods = {
  //获取用户信息
  getUsers() {
    const id = this.getPId();
    Axios.post("api/article/getArticlesByPageId",{id}).then(data => {
      if(data && data.success) {
        const articleInFo = data.articleInFo
        articleInFo.forEach((user) => {
          user.checked = false
        })
        this.tbody = articleInFo;
        this.pagesArr = data.pagesArr,
        this.pages = data.pages
      }
    });
  },

  getPId() {
    const p_id = this.$route.query.id
    return p_id ? p_id : 1
  },

  //单选
  checkAdd(target, checked, index) {
    index = index - '0'
    if (checked) {
      this.checkedIndexArr.push(index)
    } else {
      const targetIndex = this.checkedIndexArr.indexOf(index);
      this.checkedIndexArr.splice(targetIndex, 1);
    }
  },

  //全选按钮
  checkAll(target, checked) {
    const users = this.tbody;
    if (checked) {
      const newCheckedUserSign = []
      users.forEach((item, index) => {
        newCheckedUserSign.push(index)
      });
      this.checkedIndexArr = newCheckedUserSign
    } else {
      this.checkedIndexArr = []
    }
  },

  //添加用户
  addArticle() {
    this.$router.push({
      name: "Write"
    });
  },


  //打开弹窗
  showPopUp(windowName) {
    console.log(windowName)
    const index = this.checkedIndexArr[0];
    const user = this.tbody[index]
    this.$refs[windowName].showPopUp(user);
  },

  //查看
  getArticleById() {
    const index = this.checkedIndexArr[0];
    const id = this.tbody[index].id;
    this.$router.push({
      name:'Article',
      query: {
        id
      }
    })
  },


  editArticlePermission(data) {
    const index = this.checkedIndexArr[0];
    //设置提交的数据
    const newUserInFo = {
      id: this.tbody[index].id,
      status: data.status
    };
    
    //提交
    Axios.post("api/user/editArticlePermission", newUserInFo).then(data => {
      if (data && data.success) {
        this.$Notice.success({
          title: "通知",
          desc: "修改权限成功",
          duration: 1.5
        });
        //更新界面
        this.$set(this.tbody[index], "status", data.status);
        this.$set(this.tbody[index], "checked", false);
        //清空选项
        this.checkedIndexArr = []
      }
    });
  },
}

export default methods
