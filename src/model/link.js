const Base = require('./driver')

module.exports = class Link extends Base {
  constructor () {
    super()
    this.remote()
  }
}
