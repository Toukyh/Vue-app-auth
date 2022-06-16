import axios from 'axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async register (_, payload) {
      await axios.post('/register', payload)
    }
  }
}
