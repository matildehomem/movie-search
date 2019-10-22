const mutations = {
  insertItems(state, payload) {
    state.items = payload;
  },
  insertMovie(state, payload) {
    state.movie = payload;
  },
  saveFavorite(state, item) {
    const movie = state.items.find(el => el.imdbID === item.imdbID);
    const index = state.items.indexOf(movie);
    if (movie.isFavorite) {
      movie.isFavorite = false;
      state.favoritesCount--;
      
    } else {
      movie.isFavorite = true;
      state.favoritesCount++;
    }
    const itemsArray = JSON.stringify(state.items.filter(item => item.isFavorite));
    localStorage.setItem("favorites", itemsArray);

    //substitute card for the same but actualized
    state.items.splice(index, 1);
    state.items.splice(index, 0, movie);

    
  }
};

export default mutations;
