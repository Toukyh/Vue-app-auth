import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import About from '../views/AboutView.vue'
import Article from '../views/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.getters['login/authenticated']) {
        next({
          name: 'about'
        })
      }
      next()
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (store.getters['login/authenticated']) {
        next({
          name: 'about'
        })
      }
      next()
    }
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    beforeEnter: (to, from, next) => {
      if (!store.getters['login/authenticated']) {
        next({
          name: 'login'
        })
      }
      next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
