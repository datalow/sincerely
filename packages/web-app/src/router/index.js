import Vue from 'vue'
import VueRouter from 'vue-router'

import MessageBoard from '../views/MessageBoard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/message-board',
    name: 'MessageBoard',
    component: MessageBoard
  }
]

const router = new VueRouter({
  routes
})

export default router
