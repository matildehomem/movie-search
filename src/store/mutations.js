const mutations = {
  changeColor(state, payload) {
    state.color = payload
  },
  insertItems(state, payload) {
    state.items = payload
  },
  insertMovie(state, payload) {
    state.movie = payload;    
  },
  saveFavorite(state, item) {
    state.favorites.indexOf(item) === -1 ?  (state.favorites.push(item), state.favoritesCount++) : (state.favorites.splice(state.favorites.indexOf(item), 1), state.favoritesCount--);
  }
}

export default mutations;