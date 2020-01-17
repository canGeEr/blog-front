import Vue from 'vue'

import VueCookie from 'vue-cookie'

Vue.use(VueCookie);


// actions：创建驱动方法改变mutations
const actions = {
  delUserInFo({commit}) {
    commit('delUserInFo')
  },
  saveUserInFo({commit}, payload) {
    commit('saveUserInFo', payload)
  }
}

// mutations：创建改变状态的方法
const mutations = {
  delUserInFo(state) {
    state.userInFo.username = null;
    state.userInFo.grade = null;
    state.userInFo.id = null;
    Vue.prototype.$cookie.delete('username');
    Vue.prototype.$cookie.delete('grade');
    Vue.prototype.$cookie.delete('id')
  },
  saveUserInFo(state, payload) {
    console.log(payload)
    state.userInFo.username = payload.username;
    state.userInFo.grade = payload.grade;
    state.userInFo.id = payload.id;
    Vue.prototype.$cookie.set('username', payload.username);
    Vue.prototype.$cookie.set('grade', payload.grade)
    Vue.prototype.$cookie.set('id', payload.id)
  }
}
export {
  mutations,
  actions
}
