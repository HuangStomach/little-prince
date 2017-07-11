const Mock = require('mockjs')

module.exports = mock => {
  mock.onGet('link').reply(config => {
    let data = []
    for (let i = 1; i <= 10; i++) {
      data.push({
        'id': i,
        'title': Mock.mock('@ctitle()'),
        'redirect': Mock.mock('@url()'),
        'date': Mock.mock('@datetime()'),
        'remark': Mock.mock('@csentence()')
      })
    }
    return [200, data]
  })
}
