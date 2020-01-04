import test from 'ava'

import { identity } from '..'

test('type', t => {
  t.is(typeof identity, 'function')
})

test('behavior', t => {
  t.is(identity(), undefined)
  t.is(identity(1), 1)
})
