import Axios from "@service/index";

const methods = {
  /**
   * checkedIndexArr 选择项对应的 index 数组 为了方便的拿到数据而存在
   * cancelByIndex , selectByValue, selectAll, cancelAll 方法操作
   */
  //获取用户信息
  async initData() {
    const id = this.getPId();
    const data = await Axios.post("api/user/getUsersByPageId", {id});
    if (data && data.success) {
      return {
        tbody: data.usersInFo,
        pagesArr: data.pagesArr,
        pages: data.pages
      }
    }
  },

  //删除用户
  deleteUserById() {
    const ids = []
    this.tbody = this.tbody.filter((user, index) => {
      const checked = user.checked;
      if (checked) {
        //解除 选项绑定
        this.cancelByIndex(index)
        ids.push(user.id)
      }
      return !checked
    })
    Axios.post("api/user/delUserById", {ids}).then(data => {
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
        this.$set(this.tbody, index, newUser);
        //清空选项
        this.cancelByIndex(index)
      }
    });
  },
}

export default methods
