function data () {
  return {
    form: {
      receiverNumber: '',
      content: ''
    }
  }
}

const methods = {
  onSubmit () {
    this.$emit('MessageForm', this.form)
  }
}

export default {
  name: 'MessageForm',
  data,
  methods
}
