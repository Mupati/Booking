// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faUser, faHome, faCalendarCheck, faSignInAlt, faUserPlus, faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faComment, faUser, faHome, faCalendarCheck, faLinkedin, faFacebook, faTwitter, faJs, faSignInAlt, faUserPlus, faEnvelope, faUnlockAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
