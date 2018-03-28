'use strict'

const beecloudPay = require('./lib/beecloud.js')

module.exports = app => {
  beecloudPay(app)
}
