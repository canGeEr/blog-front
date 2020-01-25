<template>
  <user-frame>
    <template #skip>
      <span style="color: black">还没有账号?</span>
      <router-link :to="{name: 'Register'}" tag="a">注册账号</router-link>
      <span>\</span>
      <router-link :to="{name: 'Index'}" tag="a">首页</router-link>
    </template>
    <template #form>
      <div class="form">
        <my-input type="text" name="username" v-model="username" />
        <my-input type="password" name="password" v-model="password" />
        <my-button value="login" @click="login" />
      </div>
    </template>
  </user-frame>
</template>

<script>
import Axios from "@service/index";
import UserFrame from "@components/framework/user/UserFrame";
import MyInput from "@components/myinput/MyInput";
import MyButton from "@components/mybutton/MyButton";
export default {
  name: "Login",
  components: {
    MyInput,
    MyButton,
    UserFrame
  },
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    login() {
      Axios.post("api/user/login", {
        username: this.username,
        password: this.password
      })
        .then(data => {
          console.log(data);
          if (data && data.success) {
            //发出通知
            const grade = this.getGrade(data.userInFo.grade);
            const legal = data.userInFo.legal === 'N' ? '未通过认证' : '已认证'
            this.$Notice.success({
              title: "登入成功",
              desc: "跳转首页, 您当前的用户等级为 " + grade + '。您的身份' + legal
            });
            //更新store
            this.$store.dispatch("saveUserInFo", data.userInFo);
            //跳转首页
            this.$router.push({ name: "Index" });
          } else {
            //错误警告
            this.$Notice.error({
              title: "错误",
              desc: data.msg
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getGrade(grade) {
      switch(grade) {
        case '0' : return '游客';
        case '1' : return '博主';
        case '2' : return '管理员';
        default :  return '未知'
      } 
    }
  },
  mounted() {
    console.log();
  }
};
</script>
<style scoped>
a {
  text-decoration-line: underline;
}
</style>>

