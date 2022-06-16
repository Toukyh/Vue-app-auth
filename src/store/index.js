import { createStore } from 'vuex'
import login from './login'
import register from './register'
import post from './post'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    register,
    post
  }
})
