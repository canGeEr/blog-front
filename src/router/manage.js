import Manage from '@page/manage/Manage';
import UserManage from '@page/manage/components/right/components/usermanage/UserManage'

const ManageRouter = {
  name: 'Manage',
  path: '/manage',
  component: Manage,
  children: [{
    path: 'usermanage',
    name: 'UserManage',
    component: UserManage
  }],
}

export default ManageRouter;