import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import menu from './module/menu'
import depart from './module/department'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    menu,
    depart
  }
})
