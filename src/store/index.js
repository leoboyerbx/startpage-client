import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gridDisplay: true,
    gridCols: 4,
    maxCols: 4,
    minCols: 2
  },
  mutations: {
    gridDisplay (state, set = true) {
      state.gridDisplay = set
    },
    gridCols (state, set) {
      state.gridCols = set
    },
    addCol (state) {
      if (state.gridCols < state.maxCols) state.gridCols++
    },
    rmCol (state) {
      if (state.gridCols > state.minCols) state.gridCols--
    }
  },
  actions: {
  },
  modules: {
  }
})
