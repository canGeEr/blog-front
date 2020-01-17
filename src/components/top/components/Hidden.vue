<script>
export default {
  name: "Hidden",
  render(h) {
    const username = this.userInFo.username;
    if (username) {
      //确保登入状态
      if (!this.canShow) {
        return <li> {username} </li>;
      } else {
        return (
          <ul class="login-container m-flex">
            <router-link to={{name: "Write"}} tag="li">
              写博客
            </router-link>
            <router-link to={{name: "Blogger"}} tag="li">
              {this.userInFo.username}
            </router-link>
          </ul>
        );
      }
    } else return "";
  },
  computed: {
    userInFo() {
      return this.$store.state.userInFo;
    },
    canShow() {
      return this.userInFo.grade ? this.userInFo.grade > 0 : false;
    }
  },
  mounted() {
    console.log(this.canShow);
  }
};
</script>

<style scoped>
.login-container li{
  padding: 0 0.5rem;
  cursor: pointer;
}
</style>