const Mock = require('mockjs')

module.exports = mock => {
  mock.onGet('user').reply(config => {
    let data = []
    for (let i = 1; i <= 10; i++) {
      data.push({
        'id': i,
        'name': Mock.mock('@cname()'),
        'contact': Mock.mock('@email()'),
        'date': Mock.mock('@datetime()'),
        'remark': Mock.mock('@csentence()')
      })
    }
    return [200, data]
  })
}
