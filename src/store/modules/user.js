import Vue from 'vue'
import Api from '../api'

let api = new Api('user')

// initial state
const state = {
  users: {}
}

// getters
const getters = {
  userArray: state => Object.keys(state.users).map(key => state.users[key])
}

// actions
const actions = {
  fetchUser ({ commit, state }) {
    return Object.keys(state.users).length > 0
    ? Promise.resolve(state.users)
    : api.invoke('fetch', { resource: 'user' })
    .then(users => {
      for (let user of users) {
        commit({
          type: 'setUser',
          user
        })
      }
    })
  }
}

// mutations
const mutations = {
  setUser (state, { user }) {
    Vue.set(state.users, user.id, user)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
