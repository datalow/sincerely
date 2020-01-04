const params = {
  name: 'string'
}

function handler (ctx) {
  return `Welcome, ${ctx.params.name}`
}

module.exports = {
  params,
  handler
}
