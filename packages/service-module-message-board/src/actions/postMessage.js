const { createMessage, createEvent } = require('./helpers')

const params = {
  receiverNumber: 'number',
  content: 'string'
}

// helpers

// handler

function handler (ctx) {
  const message = createMessage(ctx.params)
  const messagePosted = createEvent('MessagePosted', message)

  const { eventStore } = ctx.service
  eventStore.push(messagePosted)

  return messagePosted
}

module.exports = {
  params,
  handler
}
