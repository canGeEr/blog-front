const Write = () => import('@page/home/components/article/components/write/Write')
const Read = () => import('@page/home/components/article/components/read/Read')
const Edit = () => import('@page/home/components/article/components/edit/Edit')
const Article = () => import('@page/home/components/article/Article')

const HomeArticleRouter = {
  path: 'article',
  name: 'Article',
  component: Article,
  children: [{
    path: 'write',
    name: 'Write',
    component: Write,
  }, {
    path: 'edit',
    name: 'Edit',
    component: Edit,
  }, {
    path: 'read',
    name: 'Read',
    component: Read,
  }, ]
}


export default HomeArticleRouter