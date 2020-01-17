import Loading from './Load.vue'

export default {
  install(Vue, options) {
    const VueLoad = Vue.extend(Loading)
    const LoadingBox = document.createElement('div');
    LoadingBox.id = 'loading'
    document.body.appendChild(LoadingBox)
    const $vm = new VueLoad({
      el: '#loading'
    })
    //为所有的Vue实例添加一个$load属性 ,其实从这里可以看到，vuex和插件之间的关系吗，
    Vue.prototype.$load = {
      show: $vm.show,
      hidden: $vm.hidden
    }
  }
};
