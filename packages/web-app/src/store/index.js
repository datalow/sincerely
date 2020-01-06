import Vue from 'vue'
import Vuex from 'vuex'

import { ulid } from 'ulid'

import client from './client'

Vue.use(Vuex)

const mutations = {
  ADD_MESSAGE (state, message) {
    state.messages.push(message)
  },
  SET_ALL_MESSAGES (state, messages) {
    state.messages = messages
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

    return client
      .post('MessageBoard/postMessage', message)
  },
  viewAllMessages (ctx) {
    const commit = messages => ctx.commit('SET_ALL_MESSAGES', messages)

    return client
      .get('MessageBoard/viewAllMessages')
      .then(res => res.data)
      .then(commit)
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
