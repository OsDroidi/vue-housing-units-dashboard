import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UniteDetails from '../views/UniteDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/unite/:id',
    name: 'UniteDetails',
    component: UniteDetails,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
