const graph = {
  state: {
    graphState: {
      selectedNode: null,
      selectedEdge: null,
      isDragging: false,
      toLink: false
    }
  },
  mutations: {
    CHANGE_SELECTEDNODE: (state, node) => {
      state.graphState.selectedNode = node
    },
    CHANGE_SELECTEDEDGE: (state, edge) => {
      state.graphState.selectedEdge = edge
    },
    TOGGLE_ISDRAGGING: (state, isDragging) => {
      state.graphState.isDragging = isDragging
    },
    TOGGLE_TOLINK: (state, toLink) => {
      state.graphState.toLink = toLink
    }
  },
  actions: {
    changSelectedNode ({commit}, node) {
      commit('CHANGE_SELECTEDNODE', node)
      commit('CHANGE_SELECTEDEDGE', null)
    },
    changSelectedEdge ({commit}, edge) {
      commit('CHANGE_SELECTEDEDGE', edge)
      commit('CHANGE_SELECTEDNODE', null)
    },
    toggle_isDragging ({commit}, isDragging) {
      commit('TOGGLE_ISDRAGGING', isDragging)
    },
    toggle_toLink ({commit}, toLink) {
      commit('TOGGLE_TOLINK', toLink)
    }
  }
}

export default graph
