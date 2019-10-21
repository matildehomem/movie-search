export default {
    isFavorite(state) {
        return item => state.items.find(el => el.imdbID === item.imdbID).isFavorite
    },
    favorites(state) {
        return state.items.filter(item => item.isFavorite)
    }
}