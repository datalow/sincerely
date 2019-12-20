import test from 'ava'

import { ServiceBroker, Errors } from 'moleculer'

import GreeterService from '../../services/greeter.service'

test.beforeEach(async t => {
  const broker = new ServiceBroker({ logger: false })
  broker.createService(GreeterService)

  await broker.start()

  t.context.broker = broker
})

test.afterEach(async t => {
  await t.context.broker.stop()
})

test('`hello` action', async t => {
  const { broker } = t.context

  await broker
    .call('greeter.hello')
    .then(res => {
      t.is(res, 'Hello Moleculer')
    })
})

test('`welcome` action', async t => {
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
