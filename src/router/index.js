import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Professionals from '@/views/Professionals'
import SingleProfessional from '@/views/SingleProfessional'
import About from '@/views/About'
import Appointments from '@/views/Appointments'
import Account from '@/views/Account'
import Dashboard from '@/views/Dashboard'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(Vuex)
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/appointments',
      component: Appointments
    },
    {
      path: '/professionals',
      component: Professionals
    },
    {
      path: '/professionals/:slug',
      component: SingleProfessional
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/dashboard',
      component: Dashboard
    }
  ],
  mode: 'history'
})
