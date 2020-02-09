const Blogger = ()=>import('@page/home/components/blogger/Blogger');

//儿子
const BloggerArticle = () => import('@page/home/components/blogger/components/bloggerArticle/BloggerArticle');
const BloggerMsg = () => import('@page/home/components/blogger/components/bloggermsg/BloggerMsg');

const HomeBloggerRouter = {
  path: 'blogger',
  name: 'Blogger',
  component: Blogger,
  redirect: {
    name: 'BloggerArticle'
  },
  children: [{
    path: 'article',
    name: 'BloggerArticle',
    component: BloggerArticle
  }, {
    path: 'msg',
    name: 'BloggerMsg',
    component: BloggerMsg
  }]
}







export default HomeBloggerRouter
