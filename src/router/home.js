const Index = ()=>import('@page/home/components/index')
const Home = ()=>import('@page/home/home.vue')
const Blogger = ()=>import('@page/home/components/blogger/Blogger')
const Write = ()=>import('@page/home/components/write/Write')
const pageRouter = {
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
    {
      path: 'blogger',
      name: 'Blogger',
      component: Blogger
    },
    ,
    {
      path: 'write',
      name: 'Write',
      component: Write
    }
  ],
}

export default pageRouter;