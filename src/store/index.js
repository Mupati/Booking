
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({

  state: {

    count: 0,
    showLogin: true,
    title: 'God is Greatest',
    links: [
      'http://google.com',
      'http://facebook.com',
      'http://youtube.com'
    ]
  },

  getters: {
    countLinks: state => {
      return state.links.length
    }
  },

  mutations: {

  },

  actions: {

  }

})
