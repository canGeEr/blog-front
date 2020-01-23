<template>
  <user-frame>
    <template #skip>
      <span style="color: black" >已有账号账号?</span>
      <router-link :to="{name: 'Login'}" tag="a">快速登入</router-link>
      <span>\</span>
      <router-link :to="{name: 'Index'}" tag="a">首页</router-link>
    </template>
    <template #form>
      <div class="form">
        <my-input type="text" name="name" v-model="name" />
        <my-input type="password" name="password" v-model="password" />
        <my-input type="text" name="email" v-model="email" />
        <div>
          <radio id="游客" name="grade" text="游客" value="0" v-model="grade"  />
          <radio id="博主" name="grade" text="博主" value="1" v-model="grade"  />
        </div>
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
import Radio from '@components/mybutton/Radio'
export default { 
  name: "Register",
  components: {
    MyInput,
    MyButton,
    UserFrame,
    Radio
  },
  data() {
    return {
      password: "",
      name: "",
      email: "",
      grade: '0',
    };
  },
  methods: {
    register() {
      Axios.post('api/user/register', {
        username: this.name,
        password: this.password,
        email: this.email,
        grade: this.grade
      }).then((data)=>{
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
        console.log('aa')
        console.log(err)
      })
    }
  },
};
</script>