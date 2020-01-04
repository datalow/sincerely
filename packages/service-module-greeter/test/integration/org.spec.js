import test from 'ava'

import Service from '../..'

const NAME_PREFIX = '@datalow/sincerely-service-module'

test('name', t => {
  const { name } = require('../../package.json')

  t.is(`${NAME_PREFIX}-${Service.name}`, name)
})

test.todo('version')
