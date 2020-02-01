import Vue from 'vue'
import Router from 'vue-router'

import PageRouter from '@router/home/home'
import UserRouter from '@router/user'
import ManageRouter from '@router/manage'

Vue.use(Router)


//这里的所有路由都是在app下的所以app.vue是独立出来的
const AppRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: {name: 'Home'}
    },
    PageRouter,
    UserRouter,
    ManageRouter,
  ]
})

export default AppRouter;