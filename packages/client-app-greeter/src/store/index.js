import Vue from 'vue'
import Vuex from 'vuex'

import { SET_GREETING } from './mutation-types'

import * as actions from './actions'

Vue.use(Vuex)

const mutations = {
  [SET_GREETING] (state, greeting) {
    state.greeting = greeting
  }
}

export default new Vuex.Store({
  state: {
    greeting: null
  },
  mutations,
  actions,
  modules: {
  }
})
