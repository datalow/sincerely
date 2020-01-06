import test from 'ava'

import matchdep from 'matchdep'

test('deps', t => {
  t.log(matchdep.filter('@datalow/sincerely-*'))

  t.pass()
})
