import Manage from '@page/manage/Manage';
import UserManage from '@page/manage/components/right/components/usermanage/UserManage'
import ArticleManage from '@page/manage/components/right/components/articlemanage/ArticleManage'
import TagManage from '@page/manage/components/right/components/tagmanage/TagManage'
const ManageRouter = {
  name: 'Manage',
  path: '/manage',
  component: Manage,
  redirect: {name: 'UserManage'},
  children: [{
    path: 'usermanage',
    name: 'UserManage',
    component: UserManage
  }, {
    path: 'articlemanage',
    name: 'ArticleManage',
    component: ArticleManage
  }, {
    path: 'tagmanage',
    name: 'TagManage',
    component: TagManage
  }],
}

export default ManageRouter;