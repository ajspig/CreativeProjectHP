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
    component: AboutView
  },
  {
    path: '/houses',
    name: 'houses',
    component: HousesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/map',
    name: 'map',
    component: mapView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: quizView
  }
]

const router = new VueRouter({
  routes
})

export default router
