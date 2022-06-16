import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import '@/axios'

import '@/store/subscriber'

store.dispatch('login/attempt', localStorage.getItem('token')).then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
})
