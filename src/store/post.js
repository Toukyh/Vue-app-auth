import axios from 'axios'

export default {
  namespaced: true,
  state: {
    posts: {}
  },
  getters: {
    getArticles (state) {
      return state.posts
    }
  },
  mutations: {
    SET_POST (state, postdata) {
      state.posts = postdata
    }
  },
  actions: {
    async all ({ dispatch }) {
      const posts = await axios.get('/article')
      return dispatch('allPost', posts.data.data)
    },
    allPost ({ commit }, postdata) {
      commit('SET_POST', postdata)
    }
  }
}
