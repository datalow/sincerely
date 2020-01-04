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

test('`hello`', async t => {
  const { broker } = t.context

  await broker
    .call('greeter.hello')
    .then(res => {
      t.is(res, 'Hello Moleculer')
    })
})

test('`welcome`', async t => {
  const { broker } = t.context

  await broker
    .call('greeter.welcome', { name: 'Adam' })
    .then(res => {
      t.is(res, 'Welcome, Adam')
    })

  await t.throwsAsync(
    () => broker.call('greeter.welcome'),
    Errors.ValidationError,
    'missing name'
  )
})
