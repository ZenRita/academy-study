import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/project',
    name: 'project',
    component: function () {
      return import('../views/ProjectView.vue')
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: function () {
      return import('../views/PortfolioView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history', // #이라는 기호 유무를 제어
  base: process.env.BASE_URL,
  routes
})

export default router
