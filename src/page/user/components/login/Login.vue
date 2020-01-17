<template>
  <user-frame>
    <template #skip>
      <p style="color: black">
        还没有账号?
        <router-link :to="{name: 'Register'}" tag="a">注册账号</router-link>
      </p>
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
        .then(res => {
          const data = res.data
          console.log(data)
          if (res && data.success) {
            this.$Notice.success({
              title: "登入成功",
              desc: "跳转首页"
            });
            //变量保存信息，减少访问次数
            const userInFo = data.userInFo;
            this.$store.dispatch('saveUserInFo', {
              username: userInFo.username,
              grade: userInFo.grade,
              id: userInFo.id
            })
            this.$router.push({ name: "Index" });
          } else {
            this.$Notice.error({
              title: "错误",
              desc: data.msg
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    console.log()
  }
};
</script>
<style scoped>
</style>>

