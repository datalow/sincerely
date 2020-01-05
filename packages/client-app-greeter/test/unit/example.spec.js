import test from 'ava'

import { shallowMount } from '@vue/test-utils'

import HelloWorld from '@/components/HelloWorld'

test('HelloWorld should render', t => {
  const wrapper = shallowMount(HelloWorld)
  t.is(wrapper.constructor.name, 'VueWrapper')
})
