const User = ()=>import('@page/user/User')
const Login = ()=>import('@page/user/components/login/Login')
const Register = ()=>import('@page/user/components/register/Register')
const UserRouetr = {
  path: '/user',
  name: 'User',
  component: User,
  children: [
    {
      path: 'login',
      name: 'Login',
      component: Login
    },
    {
      path: 'register',
      name: 'Register',
      component: Register
    },
  ]
}

export default UserRouetr;