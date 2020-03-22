import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [],
    error: false,
    loading: false,
    movie: {},
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  mutations,
  getters,
  actions
});

export default store;