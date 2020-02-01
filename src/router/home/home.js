const Index = ()=>import('@page/home/components/index')
const Home = ()=>import('@page/home/home.vue')

import HomeArticleRouter from './article'
import HomeBloggerRouter from './blogger'

const HomeRouter = {
  path: '/home',
  name: 'Home',
  component: Home,
  redirect: {name: 'Index'},
  children: [
    {
      path: 'index',
      name: 'Index',
      component: Index
    },
    HomeArticleRouter,
    HomeBloggerRouter
  ],
}

export default HomeRouter;