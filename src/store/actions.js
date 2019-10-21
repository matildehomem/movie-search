const actions = {
  getItems(store, payload) {
    store.commit('insertItems', [])
    store.state.error = false;
    store.state.loading = true;
    fetch(`https://www.omdbapi.com/?apikey=e62e1d19&s=${payload}`)
      .then(json => json.json())
      .then(response => {
        store.state.loading = false;
        if (response.Response === "True") store.commit('insertItems', response.Search)
        else store.state.error = true;
      })
  },
}

export default actions;