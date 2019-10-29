export default {
    isFavorite(state) {
        return item => state.favorites.find(el => el.imdbID === item.imdbID)
    },
    favorites(state) {
        return state.favorites
    }
}