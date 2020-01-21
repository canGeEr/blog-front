import Vue from 'vue'

import VueCookie from 'vue-cookie'

Vue.use(VueCookie);

const VueProtoType = Vue.prototype;


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
    const userInFo = state.userInFo;
    for(let pro in userInFo) {
      userInFo[pro] = null;
      VueProtoType.$cookie.delete(pro)
    }
  },
  saveUserInFo(state, payload) {
    const userInFo = state.userInFo;
    for(let pro in userInFo) {
      userInFo[pro] = payload[pro];
      VueProtoType.$cookie.set(pro, payload[pro]);
    }
  }
}
export {
  mutations,
  actions
}
