const { ulid } = require('ulid')

const createEvent = (type, payload) => {
  const id = Date.now()

  return {
    id,
    type,
    payload
  }
}

const createMessage = messageForm => {
  const { receiverNumber, content } = messageForm

  const id = ulid()

  return {
    id,
    content,
    receiverNumber
  }
}

module.exports = {
  createEvent,
  createMessage
}
