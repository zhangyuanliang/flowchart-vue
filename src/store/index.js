import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import getters from './getters'
import flowchart from './modules/flowchart'
=======
import graph from './modules/graph'
import getters from './getters'
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
<<<<<<< HEAD
    flowchart
=======
    graph
>>>>>>> cfc8453d6b8faae303df5e1177a090a5810f3eee
  },
  getters
})

export default store
