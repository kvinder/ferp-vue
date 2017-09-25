import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import Login from './views/Login'
import Imshome from './views/ims/Imshome'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    {
      path: '/ims',
      component: Imshome
    },
    { path: '*', redirect: '/' }
  ]
})

export default router
