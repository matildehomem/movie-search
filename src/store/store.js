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
    favorites: [],
    movie: {},
    favoritesCount: 0
  },
  mutations,
  getters,
  actions
});

export default store;