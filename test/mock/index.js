const MockAdapter = require('axios-mock-adapter')
const Driver = require('../../src/model/driver')
const user = require('./model/user')

module.exports = {
  init () {
    let axios = new Driver()
    axios = axios.remote().passenger

    let mock = new MockAdapter(axios)
    user(mock)
    mock.onAny().passThrough()
  }
}
