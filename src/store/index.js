
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({

  state: {

    loggedIn: false

  },

  mutations: {

    setloginStatus (state) {
      state.loggedIn = !state.loggedIn
    }

  },

  actions: {

    setloginStatus (context) {
      context.commit('setloginStatus')
    }

  },

  getters: {

  }

})
