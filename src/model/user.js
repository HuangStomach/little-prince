const Base = require('./driver')

module.exports = class View extends Base {
  fetch () {
    return this.remote({
      baseURL: 'https://api.bitbucket.org/2.0/teams/genee-yiqikong/members',
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
    .get('')
    .then(res => {
      return Promise.resolve(res.data)
    })
  }
}
