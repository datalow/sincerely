const props = {
  messages: Array
}

const computed = {
  referenceOf () {
    return phoneNumber => `tel:${phoneNumber}`
  }
}

export default {
  name: 'MessageList',
  props,
  computed
}
