const MockAdapter = require('axios-mock-adapter')
const Driver = require('../../src/model/driver')
const link = require('./model/link')
const user = require('./model/user')

module.exports = {
  init () {
    let axios = new Driver()
    axios = axios.remote().passenger

    let mock = new MockAdapter(axios)
    link(mock)
    user(mock)
    mock.onAny().passThrough()
  }
}
