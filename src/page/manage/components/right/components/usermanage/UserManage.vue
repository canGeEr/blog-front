<template>
  <div class="user-manage">
    <div class="clearfix">
      <c-button class="btn-add" value=" + 添加用户" @click="addUser" />
      <!-- <c-button class="btn-add" value="全选" /> -->
    </div>
    <table cellspacing="0">
      <table-head />
      <!-- <tr><td v-for="(value,index) of titleBar" :key="index" >{{value}}</td></tr> -->
      <tr v-for="(user, index) of users" :key="user.id">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.fans}}</td>
        <td>{{user.legal}}</td>
        <td>{{user.grade}}</td>
        <td class="last-column">
          <c-button class="btn-edit" value="修改权限" @click="showPopUp(user, index)" />
          <c-button class="btn-delete" value="删除" @click="deleteUserById(user.id, index)" />
          <!-- <c-button v-if="user.grade === '1' && user.legal === 'N' " class="btn-arrow" value="认可" @click="allrowUserById(user.id, index)" />
          <c-button v-else-if="user.grade === '1' && user.legal === 'Y' "  class="btn-arrow" value="降级" @click="demotionUserById(user.id, index)" />
          <c-button v-else-if="user.grade === '0' && user.legal === 'Y' "  class="btn-arrow" value="升级" @click="allrowUserById(user.id, index)" />-->
        </td>
      </tr>
    </table>
    <edit-user-grade ref="edit-grade" @editUserGrade="editUserGrade" />
  </div>
</template>

<script>
import EditUserGrade from "./editusergrade/EditUserGrade";
import TableHead from "./tablehead/TableHead";
import CButton from "@components/mybutton/CommonButton";
import Axios from "@service/index";
export default {
  name: "UserManage",
  data() {
    return {
      users: [],
      titleBar: ["name", "legal", "grade", "operate"]
    };
  },
  components: {
    CButton,
    TableHead,
    EditUserGrade
  },
  methods: {
    //删除用户
    deleteUserById(id, index) {
      Axios.post("api/user/delUserById", {
        id
      }).then(data => {
        if (data && data.success) {
          this.$delete(this.users, index);
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
      this.$router.push({ name: "Register" });
    },
    //打开弹窗
    showPopUp(user, index) {
      this.$refs["edit-grade"].showPopUp(user, index);
    },
    editUserGrade(data) {
      const index = data.index;
      //设置提交的数据
      const newUserInFo = {};
      newUserInFo.id = this.users[index].id;
      newUserInFo.grade = data.grade;
      newUserInFo.legal = data.legal;
      //更新界面
      this.$set(this.users[index], "grade", data.grade);
      this.$set(this.users[index], "legal", data.legal);
      //提交
      Axios.post("api/user/editUserGrade", newUserInFo).then(data => {
        if (data && data.success) {
          this.$Notice.success({
            title: "通知",
            desc: "修改权限成功",
            duration: 1.5
          });
        }
      });
    },
    //获取用户信息
    getUsers() {
      Axios.post("api/user/getUsers").then(data => {
        this.users = data.usersInFo;
      });
    }
  },
  created() {
    this.getUsers()
  }
};
</script>

<style>
@import url("./usermanage");
</style>