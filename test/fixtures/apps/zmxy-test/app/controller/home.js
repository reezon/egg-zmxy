'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    await this.app.zmxy.verifyIvs({
      name: '张三',
      cert_no: '532926200804058748'
    }).then(({ result }) => {
      console.log(result)
    }).catch((err) => {
      console.error(err)
    })
    this.ctx.body = 'hi, ' + this.app.plugins.zmxy.name
  }
}

module.exports = HomeController
