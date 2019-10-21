const mutations = {
  insertItems(state, payload) {
    state.items = payload
  },
  saveFavorite(state, item) {
    const movie = state.items.find(el => el.imdbID === item.imdbID)
    const index = state.items.indexOf(movie)
    if (movie.isFavorite) {
      movie.isFavorite = false
      state.favoritesCount--;

    } else {
      movie.isFavorite = true
       state.favoritesCount++
    }

    //substitute card for the same but actualized
    state.items.splice(index,1);
    state.items.splice(index,0,movie)
  }
}

export default mutations;