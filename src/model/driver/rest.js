const Axios = require('axios')

module.exports = {
  passenger: null,
  remote ({ baseURL = '/api/', headers = {} }) {
    this.passenger = Axios.create({
      baseURL,
      timeout: 5000,
      headers
    })
    return this.passenger
  },
  fetch ({ resource = '', params = {} }) {
    return this.passenger
    .get(resource, { params })
    .then(r => Promise.resolve(r.data))
  },
  get ({ resource = '', params = {} }) {
    return this.passenger
    .get(resource, { params })
    .then(r => Promise.resolve(r.data))
  },
  post ({ resource = '', params = {} }) {
    return this.passenger
    .post(resource, params)
    .then(r => Promise.resolve(r.data))
  },
  put ({ resource = '', params = {} }) {
    return this.passenger
    .put(resource, params)
    .then(r => Promise.resolve(r.data))
  },
  delete ({ resource = '', params = {} }) {
    return this.passenger
    .delete(resource, params)
    .then(r => Promise.resolve(r.data))
  }
}
