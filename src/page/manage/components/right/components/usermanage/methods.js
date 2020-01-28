import Axios from "@service/index";

const methods = {
  //获取用户信息
  getUsers() {
    Axios.post("api/user/getUsers").then(data => {
      const usersInFo = data.usersInFo
      usersInFo.forEach((user) => {
        user.checked = false
      })
      this.tbody = usersInFo
    });
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
    const users = this.users;
    const ids = []
    this.users = this.users.filter((user) => {
      const checked = user.checked;
      if (checked) {
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
    const index = this.checkedUserSign[0];
    const user = this.users[index]
    this.$refs[windowName].showPopUp(user);
  },


  editUserPermission(data) {
    const index = this.checkedUserSign[0];
    //设置提交的数据
    const newUserInFo = {
      id: this.users[index].id,
      grade: data.grade,
      legal: data.legal,
      status: data.status
    };
    //更新界面
    this.$set(this.users[index], "grade", data.grade);
    this.$set(this.users[index], "legal", data.legal);
    this.$set(this.users[index], "status", data.status);
    //提交
    Axios.post("api/user/editUserPermission", newUserInFo).then(data => {
      if (data && data.success) {
        this.$Notice.success({
          title: "通知",
          desc: "修改权限成功",
          duration: 1.5
        });
        //清空选项
        this.checkedUserSign = []
      }
    });
  },
}

export default methods
