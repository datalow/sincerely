import { SET_GREETING } from './mutation-types'

export async function fetchGreeting (ctx) {
  const setGreeting = greeting => ctx.commit(SET_GREETING, greeting)

  await fetch('/api/greeter/hello')
    .then(res => res.json())
    .then(setGreeting)
}
