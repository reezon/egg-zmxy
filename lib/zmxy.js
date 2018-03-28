'use strict'

const assert = require('assert')
const ZmxyClient = require('zmxy').default
const fs = require('fs')

module.exports = app => {
  const { appId, appPrivateKeyPath, zmxyPublicKeyPath } = app.config.zmxy || {}

  assert(appId && appPrivateKeyPath && zmxyPublicKeyPath,
    '[egg-zmxy] Must set `appId`, `appPrivateKeyPath`, `zmxyPublicKeyPath` in zmxy\'s config')

  app.coreLogger.info('[egg-zmxy] setup')

  const api = new ZmxyClient({
    appId,
    appPrivateKey: fs.readFileSync(appPrivateKeyPath),
    zmxyPublicKey: fs.readFileSync(zmxyPublicKeyPath)
  })

  app.zmxy = api
}
