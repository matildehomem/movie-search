
import Home from './views/Home.vue'
import About from './views/About.vue'
import MyFavorites from './views/MyFavorites.vue'
import MovieDetail from './views/MovieDetail.vue'

export default [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/favorites', component: MyFavorites},
    {path: '/movies/:id', component: MovieDetail}
]