<template>
  <user-frame>
    <template #skip>
      <p style="color: black">已有账号账号? <router-link :to="{name: 'Login'}" tag="a">快速登入</router-link></p>
    </template>
    <template #form>
      <div class="form">
        <my-input type="text" name="name" v-model="name" />
        <my-input type="password" name="password" v-model="password" />
        <my-input type="text" name="email" v-model="email" />
        <my-button value="Register" @click="register" />
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
  name: "Register",
  components: {
    MyInput,
    MyButton,
    UserFrame
  },
  data() {
    return {
      password: "",
      name: "",
      email: ""
    };
  },
  methods: {
    register() {
      Axios.post('api/user/register', {
        username: this.name,
        password: this.password,
        email: this.email
      }).then(({data})=>{
        if(data && data.success) {
            this.$Notice.success({
              title: '注册成功',
            })
            //跳转登入
            this.$router.push({name: 'Login'})
        }else {
          this.$Notice.error({
              title: '注册失败',
              desc: data.msg
          })
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    
  }
};
</script>
<style scoped>
</style>>
