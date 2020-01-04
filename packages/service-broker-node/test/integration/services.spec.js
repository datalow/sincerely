import test from 'ava'

import Path from 'path'

import { ServiceBroker } from 'moleculer'

// settings

const SERVICEDIR = Path.join(__dirname, '../../services')

const SERVICES = [
  'greeter'
]

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

SERVICES.forEach(name => test(assertServiceMacro, name))
