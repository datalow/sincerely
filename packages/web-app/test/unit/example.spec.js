import test from 'ava'

import { createLocalVue, shallowMount } from '@vue/test-utils'

import Element from 'element-ui'

import MessageList from '@/components/MessageList'
import MessageForm from '@/components/MessageForm'

test.before(t => {
  const localVue = createLocalVue()
  localVue.use(Element)

  t.context = { localVue }
})

test('MessageList should render', t => {
  const wrapper = shallowMount(MessageList, t.context)
  t.is(wrapper.constructor.name, 'VueWrapper')
})

test('MessageForm should render', t => {
  const wrapper = shallowMount(MessageForm, t.context)
  t.is(wrapper.constructor.name, 'VueWrapper')
})
