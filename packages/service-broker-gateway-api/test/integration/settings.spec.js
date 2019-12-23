import test from 'ava'

import { readFileSync } from 'fs'
// import Path from 'path'

import delay from 'delay'
import getPort from 'get-port'
import execa from 'execa'

import fetch from 'node-fetch'

// tests

test('static assets delivery', async t => {
  const PORT = await getPort()
  const ASSETS_DIR = `${__dirname}/assets`

  const env = Object.assign({ PORT, ASSETS_DIR }, process.env)

  const cmd = 'npm start'
  const subprocess = execa.command(cmd, { env })

  await delay(2000)

  await fetch(`http://localhost:${PORT}/`)
    .then(res => res.text())
    .then(body => {
      const expectedContent = readFileSync(`${ASSETS_DIR}/index.html`, 'utf8')
      t.is(body, expectedContent)
    })

  await subprocess.cancel()
  t.pass()
})

test.todo('url prefix')
