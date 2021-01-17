import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gridDisplay: true,
    gridCols: 4,
    maxCols: 4,
    minCols: 2,
    darkTheme: null,
    matchedDarkTheme: false,
    themeTransition: false
  },
  getters: {
    dark (state) {
      if (state.darkTheme === null) {
        return state.matchedDarkTheme
      } else {
        return state.darkTheme
      }
    }
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
    },
    matchedDarkTheme (state, set) {
      state.matchedDarkTheme = set
    },
    theme (state, set) {
      if (set === 'system') {
        state.darkTheme = null
      } else {
        state.darkTheme = set === 'dark'
        localStorage.setItem('theme', set)
      }
    },
    darkTemeAuto (state) {
      localStorage.setItem('theme', 'system')
      state.darkTheme = null
    }
  },
  actions: {
  },
  modules: {
  }
})

// dark theme
if (!(localStorage.getItem('theme') === null)) {
  store.commit('theme', localStorage.getItem('theme'))
}
window.addEventListener('storage', () => {
  store.commit('theme', localStorage.getItem('theme'))
})

store.commit('matchedDarkTheme', window.matchMedia('(prefers-color-scheme: dark)').matches)

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  store.commit('matchedDarkTheme', e.matches)
})

export default store
