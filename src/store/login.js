import axios from 'axios'

export default {
  namespaced: true,
  state: {
    token: null,
    user: {}
  },
  getters: {
    authenticated (state) {
      return state.token
    },
    user (state) {
      return state.user
    }
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    async login ({ dispatch }, payload) {
      let response = await axios.post('/login', payload)
      return dispatch('attempt', response.data.token)
    },
    async attempt ({ commit, state }, token) {
      if (token) {
        commit('SET_TOKEN', token)
      }
      if (!state.token) {
        return
      }
      try {
        const user = await axios.get('/authenticated')
        commit('SET_USER', user.data)
      } catch (error) {
        console.log(error)
        commit('SET_USER', null)
        commit('SET_TOKEN', null)
      }
    },
    signOut ({ commit }) {
      return axios.post('/logout').then(() => {
        commit('SET_USER', null)
        commit('SET_TOKEN', null)
      })
    }
  }
}
