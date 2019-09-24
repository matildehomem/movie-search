const actions = {
  getItems(store, payload) {
    store.commit('insertItems', [])
    store.state.error = false;
    store.state.loading = true;
    fetch(`http://www.omdbapi.com/?apikey=e62e1d19&s=${payload}`)
      .then(json => json.json())
      .then(response => {
        store.state.loading = false;
        if (response.Response === "True") store.commit('insertItems', response.Search)
        else store.state.error = true;
      })
  },
  getMovie(store, payload){
    store.commit('insertMovie', {})
    fetch(`http://www.omdbapi.com/?apikey=e62e1d19&i=${payload}`)
      .then(json => json.json())
      .then(response => {
        if (response.Response === "True") store.commit('insertMovie', response)
        else store.state.error = true;
      })
  }
}

export default actions;