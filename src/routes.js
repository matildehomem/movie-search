
import Home from './views/Home.vue'
import About from './views/About.vue'
import Favorites from './views/Favorites.vue'
// import MovieDetail from './views/MovieDetail.vue'

export default [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/favorites', component: Favorites},
    // {path: '/movies/:id', component: MovieDetail}
]