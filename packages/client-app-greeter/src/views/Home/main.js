import { mapState, mapActions } from 'vuex'

import HelloWorld from '@/components/HelloWorld'

const computed = mapState({
  message: 'greeting'
})

const methods = mapActions({
  fetchGreeting: 'fetchGreeting'
})

function mounted () {
  this.fetchGreeting()
}

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed,
  methods,
  mounted
}
