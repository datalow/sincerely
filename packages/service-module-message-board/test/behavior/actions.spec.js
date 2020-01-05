import test from 'ava'

import { ServiceBroker, Errors } from 'moleculer'

import Service from '../..'

test.beforeEach(async t => {
  const broker = new ServiceBroker({ logger: false })
  broker.createService(Service)

  await broker.start()

  t.context.broker = broker
})

test.afterEach(async t => {
  await t.context.broker.stop()
})

test('postMessage', async t => {
  const { broker } = t.context

  const messageForm = {
    receiverNumber: 17079687439,
    content: 'Hello'
  }

  await broker
    .call('MessageBoard.postMessage', messageForm)
    .then(res => {
      t.is(res.payload.content, 'Hello')
    })

  await t.throwsAsync(
    () => broker.call('MessageBoard.postMessage'),
    Errors.ValidationError,
    'missing content'
  )
})

test('viewAllMessages', async t => {
  const { broker } = t.context

  await broker
    .call('MessageBoard.viewAllMessages')
    .then(res => {
      t.deepEqual(res, [], 'initial query')
    })

  // populate

  const messageList = [
    {
      receiverNumber: 17079687439,
      content: 'Hey'
    }, {
      receiverNumber: 17079687439,
      content: 'Hey is for horses'
    }
  ]

  for (let i = 0; i < messageList.length; i++) {
    const message = messageList[i]
    await broker.call('MessageBoard.postMessage', message)
  }

  // query again

  await broker
    .call('MessageBoard.viewAllMessages')
    .then(messages => {
      t.true(Array.isArray(messages))

      messages.forEach((message, i) => {
        t.is(message.content, messageList[i].content)
        t.is(message.receiverNumber, messageList[i].receiverNumber)
      })
    })
})
