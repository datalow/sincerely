function handler (ctx) {
  const { eventStore } = ctx.service

  return eventStore
    .map(event => event.payload)
}

module.exports = handler
