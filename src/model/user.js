const Base = require('./driver')

module.exports = class User extends Base {
  constructor () {
    super()
    this.remote()
  }
}
