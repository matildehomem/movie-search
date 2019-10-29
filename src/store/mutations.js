const mutations = {
  insertItems(state, payload) {
    state.items = payload;
  },
  insertMovie(state, payload) {
    state.movie = payload;
  },
  saveFavorite(state, item) {
    let itemsArray = this.getters.favorites;

    if (item.isFavorite) {
      item.isFavorite = false;
      itemsArray = itemsArray.filter(it => it.imdbID != item.imdbID);
    } else {
      itemsArray.unshift(item);
      item.isFavorite = true;
    }

    // Upd LocalStore
    localStorage.setItem("favorites", JSON.stringify(itemsArray));
    // Upd Store
    state.favorites = itemsArray;
    
  }
};

export default mutations;
