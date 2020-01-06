import test from 'ava'

import Path from 'path'

import { ServiceBroker } from 'moleculer'

import services from '../../services'

// settings

const SERVICEDIR = Path.join(__dirname, '../../services')

// macros

async function assertServiceMacro (t, name) {
  const servicePath = `${SERVICEDIR}/${name}.service`
  const service = require(servicePath) // not throws

  const broker = new ServiceBroker({ logger: false })
  broker.createService(service) // not throws

  // succesfully start and stop
  await broker.start()
  await broker.stop()

  t.pass()
}

assertServiceMacro.title = (_, name) => name

// tests

for (const name in services) {
  test(assertServiceMacro, name)
}
