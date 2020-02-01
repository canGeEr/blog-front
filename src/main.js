import Vue from 'vue'
import 'view-design/dist/styles/iview.css';
import App from './App'
import router from './router/main'
import store from '@store/main'

import {Notice} from 'view-design';
Vue.use(Notice)

Vue.prototype.$Notice = Notice;

import Loading from '@myplugin/loading'
Vue.use(Loading)

//导入字符串函数
import capWords from '@myplugin/capwords'
String.prototype.capWords = capWords

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})






