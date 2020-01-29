import Axios from "@service/index";

const methods = {
  //获取用户信息
  getUsers() {
    const id = this.getPId();
    Axios.post("api/user/getUsersByPageId",{id}).then(data => {
      if(data && data.success) {
        const usersInFo = data.usersInFo
        usersInFo.forEach((user) => {
          user.checked = false
        })
        this.tbody = usersInFo;
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

  //删除用户
  deleteUserById() {
    const ids = []
    this.tbody = this.tbody.filter((user, index) => {
      const checked = user.checked;
      if (checked) {
        const targetIndex = this.checkedIndexArr.indexOf(index);
        this.checkedIndexArr.splice(targetIndex, 1);
        ids.push(user.id)
      }
      return !checked
    })
    Axios.post("api/user/delUserById", {
      ids
    }).then(data => {
      if (data && data.success) {
        this.$Notice.success({
          title: "通知",
          desc: "删除成功"
        });
      } else {
        this.$Notice.error({
          title: "报错",
          desc: "删除失败"
        });
      }
    });
  },


  //添加用户
  addUser() {
    this.$router.push({
      name: "Register"
    });
  },


  //打开弹窗
  showPopUp(windowName) {
    console.log(windowName)
    const index = this.checkedIndexArr[0];
    const user = this.tbody[index]
    this.$refs[windowName].showPopUp(user);
  },


  //修改权限 'id', "username", "grade", "legal", "status"
  editUserPermission(data) {
    const index = this.checkedIndexArr[0];
    //设置提交的数据
    const newUserInFo = {
      id: this.tbody[index].id,
      grade: data.grade,
      legal: data.legal,
      status: data.status
    };
    //提交
    Axios.post("api/user/editUserPermission", newUserInFo).then(data => {
      if (data && data.success) {
        this.$Notice.success({
          title: "通知",
          desc: "修改权限成功",
          duration: 1.5
        });
        //更新界面
        const newUser = {
          ...newUserInFo,
          checked: false,
          username: this.tbody[index].username
        }
        //清空选项
        this.$set(this.tbody, index, newUser);
        this.checkedIndexArr = []
      }
    });
  },
}

export default methods
