import Vue from 'vue'
import Vuex from 'vuex'

import { ulid } from 'ulid'

Vue.use(Vuex)

const mutations = {
  ADD_MESSAGE (state, message) {
    state.messages.push(message)
  }
}

const actions = {
  postMessage (ctx, messageForm) {
    const id = ulid()
    const { receiverNumber, content } = messageForm

    const message = {
      id,
      receiverNumber,
      content
    }

    ctx.commit('ADD_MESSAGE', message)
  }
}

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations,
  actions,
  modules: {}
})
