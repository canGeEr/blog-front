<template>
  <div>
    <div class="form">
      <div>
        <div>原密码</div>
        <div> <input type="password" name="oldPassWord" v-model="form.oldPassword"> </div>
      </div>
      <div>
        <div>新密码</div>
        <div> <input type="text" name="newPassword" v-model="form.newPassword" ></div>
      </div>
      <c-button value="修改" class="btn-edit" @click="edit" />
    </div>
  </div>
</template>

<script>
import Axios from '@service/index'
  import CButton from '@components/mybutton/CommonButton'
  export default {
    name: 'BloggerMsg',
    components: {
      CButton
    },
    data() {
      return {
        form: {
          oldPassword: '',
          newPassword: ''
        }
      }
    },
    methods: {
      edit() {
        Axios.post('api/user/updateUserPassword', {
          id: this.$store.state.userInFo.id,
          newPassword: this.form.newPassword,
          oldPassword:this.form.oldPassword
        })
        .then((data)=>{
          if(data && data.success) {
            this.$Notice.success({
              title: '通知',
              desc: '修改密码成功',
              duration: 1
            })
            this.$set(this.form, 'oldPassword', '')
            this.$set(this.form, 'newPassword', '')
          }else {
            this.$Notice.warning({
              title: '通知',
              desc: data.msg,
              duration: 1
            })
            this.$set(this.form, 'oldPassword', '')
          }
        })
      }
    }
  }

</script>

<style scoped>
  .form {
    max-width: 20rem;
    margin: 2rem auto;
  }

  .btn-edit {
    margin-top: 0.5rem;
    background-color: black;
    color: white;
  }

</style>
