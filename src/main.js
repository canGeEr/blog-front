import Vue from 'vue'
import 'view-design/dist/styles/iview.css';
import App from './App'
import router from './router'
import store from '@store/index'

import {Notice} from 'view-design';
Vue.use(Notice)

Vue.prototype.$Notice = Notice;

import Loading from '@myplugin/loading'
Vue.use(Loading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})






