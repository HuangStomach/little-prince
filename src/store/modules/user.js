import Api from '../api'

let api = new Api('user')

// initial state
const state = {
  users: {}
}

// getters
const getters = {
  filterUser (state) {

  }
}

// actions
const actions = {
  fetchUser ({ commit, state }) {
    return Object.keys(state.users).length > 0
    ? Promise.resolve(state.users)
    : api.call('fetch', {}, {
      commit,
      type: 'setUser'
    })
  }
}

// mutations
const mutations = {
  setUser (state, { result }) {
    state.users = result.values
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
