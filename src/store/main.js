import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {actions, mutations} from './changes.js'


// 1、state：创建初始化状态,创建时就同步了
const state = {
  userInFo: {
    username: Vue.prototype.$cookie.get('username'),
    //权限
    grade: Vue.prototype.$cookie.get('grade'),
    id: Vue.prototype.$cookie.get('id'),
    legal: Vue.prototype.$cookie.get('legal'),
    fans: Vue.prototype.$cookie.get('fans')
  }
}

// 3、getters：提供外部获取state
const getters = {

}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

// 6、输出store
export default store;
