import { mapState, mapActions } from 'vuex'

import MessageList from '@/components/MessageList'
import MessageForm from '@/components/MessageForm'

const computed = mapState([
  'messages'
])

const methods = mapActions([
  'postMessage',
  'viewAllMessages'
])

export default {
  name: 'MessageBoard',
  components: {
    MessageList,
    MessageForm
  },
  computed,
  methods
}
