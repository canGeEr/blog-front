const config = {
  api: 'http://192.168.1.105:7001/',
  dataBaseAlias: {
    grade: {
      '0' : '游客',
      '1' : '博主',
      '2' : '管理员'
    },
    legal: {
      'N' : '未授权',
      'Y' : '已授权'
    },
    status: {
      '0' : '不可用',
      '1' : '可用'
    }
  },
  serviceUrl: {
    //保存文章
    saveImage: 'api/article/saveImage',
    saveArticle: 'api/article/saveArticle',

    //登入注册
    login: 'api/user/login',
    regitser: 'api/user/register',

    //首页加载文章信息
    getArticlesInFo: 'api/article/getArticlesInFo',

    //加载单页文章
    getArticleById: 'api/article/getArticleById',

    //标签
    tags: 'api/tags',

    //管理 后台用户
    getUsersByPageId: 'api/user/getUsersByPageId',
    delUserById: 'api/user/delUserById',
    editUserPermission: 'api/user/editUserPermission',

    //管理 后台文章
    getArticlesByPageId: 'api/article/getArticlesByPageId',
    delArticleById: 'api/article/delArticleById',
    editArticlePermission: 'api/user/editArticlePermission'
  }
}


export default config