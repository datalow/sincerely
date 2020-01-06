import test from 'ava'

import Service from '../..'

import decamelize from 'decamelize'

const NAME_PREFIX = '@datalow/sincerely-service-module'

test('name', t => {
  const { name: pkgName } = require('../../package.json')

  t.is(pkgName.indexOf(NAME_PREFIX), 0, 'pkg name prefixed')

  t.is(`${NAME_PREFIX}-${decamelize(Service.name, '-')}`, pkgName, 'ok service')
})

test.todo('version')
