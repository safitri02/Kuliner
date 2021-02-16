import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Food from '../views/Food.vue'
import Pesan from '../views/Pesan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/makanan',
    name: 'Food',
    component: Food
  },
  {
    path: '/makanan:id',
    name: 'Pesan',
    component: Pesan
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
