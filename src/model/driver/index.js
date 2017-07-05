module.exports = class Base {
  constructor (type = 'rest') {
    this.driver = require(`./${type}`)
  }
  remote (args = {}) {
    return this.driver.remote(args)
  }
  fetch (args = {}) {
    return this.driver.fetch(args)
  }
  get (args = {}) {
    return this.driver.get(args)
  }
  post (args = {}) {
    return this.driver.post(args)
  }
  put (args = {}) {
    return this.driver.put(args)
  }
  delete (args = {}) {
    return this.driver.delete(args)
  }
}
