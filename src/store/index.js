import Vue from 'vue'
import Vuex from 'vuex'
import graph from './modules/graph'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    graph
  },
  getters
})

export default store
