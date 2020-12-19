import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('../views/Friends')
  },
  {
    path: '/beers',
    name: 'Beers',
    component: () => import('../views/Beers')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/textandcoloursexample',
    name: 'TextAndColoursExample',
    component: () => import('../views/Examples/TextAndColoursExample')
  },
  {
    path: '/buttonsandicons',
    name: 'ButtonsAndIcons',
    component: () => import('../views/Examples/ButtonsAndIcons')
  },
  {
    path: '/breakpointsandvisibility',
    name: 'BreakpointsAndVisibility',
    component: () => import('../views/Examples/BreakpointsAndVisibility')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
