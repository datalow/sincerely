const ApiGateway = require('moleculer-web')

// settings

const PORT = process.env.PORT || 3000
const ASSETS_DIR = process.env.ASSETS_DIR || `${__dirname}/public`
const URL_PREFIX = process.env.URL_PREFIX || 'api'

// routes

const routes = [{
  path: `/${URL_PREFIX}`,
  whitelist: [
    // Access to any actions in all services under '/api' URL
    '**'
  ]
}]

module.exports = {
  name: 'api',
  mixins: [ApiGateway],

  // More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
  settings: {
    port: PORT,
    routes,
    assets: {
      folder: ASSETS_DIR
    }
  }
}
