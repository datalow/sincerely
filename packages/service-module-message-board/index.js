const actions = require('./src/actions')

const { created } = require('./src/hooks')

module.exports = {
  name: 'MessageBoard',
  actions,
  // lifecycle hooks
  created
}
