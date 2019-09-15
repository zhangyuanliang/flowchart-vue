import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import flowchart from './modules/flowchart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    flowchart
  },
  getters
})

export default store
