import Axios from "@service/index";

const methods = {
  /**
   * checkedIndexArr 选择项对应的 index 数组 为了方便的拿到数据而存在
   * cancelByIndex , selectByValue, selectAll, cancelAll 方法操作
   */
  //获取文章信息
  async initData() {
    const pId = this.getPId();
    const data = await Axios.post("api/article/getArticlesByPageId", {
      pId
    })
    if (data && data.success) {
      return {
        tbody: data.articleInFo,
        pagesArr: data.pagesArr,
        pages: data.pages
      }
    }
  },


  //添加文章
  addArticle() {
    this.$router.push({
      name: "Write"
    });
  },

  //删除文章
  delArticleById() {
    const ids = []
    this.tbody = this.tbody.filter((article, index) => {
      const checked = article.checked;
      if (checked) {
        //解除 选项绑定
        this.cancelByIndex(index)
        ids.push(article.id)
      }
      return !checked
    })
    Axios.post("api/article/delArticleById", {
      ids
    }).then(data => {
      console.log(data)
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


  //查看
  getArticleById() {
    const index = this.checkedIndexArr[0];
    const id = this.tbody[index].id;
    this.$router.push({
      name: 'Article',
      query: {
        id
      }
    })
  },


  editArticlePermission(form) {
    const index = this.checkedIndexArr[0];
    //设置提交的数据
    const newUserInFo = {
      id: this.tbody[index].id,
      status: form.status
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
        this.$set(this.tbody[index], "status", form.status);
        this.$set(this.tbody[index], "checked", false);
        //清空选项
        this.cancelByIndex(index)
      }
    });
  },
}

export default methods
