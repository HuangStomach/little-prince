import Vue from 'vue'
import Api from '../api'

let api = new Api('link')

// initial state
const state = {
  links: {}
}

// getters
const getters = {
  linkArray: state => Object.keys(state.links).map(key => state.links[key])
}

// actions
const actions = {
  fetchLink ({ commit, state }) {
    return Object.keys(state.links).length > 0
    ? Promise.resolve(state.links)
    : api.invoke('fetch', { resource: 'link' })
    .then(links => {
      for (let link of links) {
        commit({
          type: 'setLink',
          link
        })
      }
    })
  }
}

// mutations
const mutations = {
  setLink (state, { link }) {
    Vue.set(state.links, link.id, link)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
