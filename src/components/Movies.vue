<template>
  <div class="wrapper">
    <h1>Movie Search</h1>
    <input type="text" v-model="movieName"  @keydown.enter.prevent="getItems"/>
    <button @click="getItems">Procurar</button>

    <p v-if="loading">A pesquisar</p>
    <ul v-else-if="!error" class="movie-wrapper">
      <MovieCard v-for="movie in items" :key="movie.imdbID" :item="movie" @mouseenter.native="getMovie(movie.imdbID)" @mouseleave.native="MovieDetailModal = false"/>
      <MovieDetail :movieInfo="movieInfo" v-if="MovieDetailModal"/>
    </ul>
    <div v-else>Não foi encontrado nenhum resultado</div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'
import MovieDetail from './MovieDetail.vue'

export default {
  components: {
    MovieCard,
    MovieDetail
  },
  data() {
    return {
      movieName: "",
      MovieDetailModal: false
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    error() {
      return this.$store.state.error;
    },
    loading() {
      return this.$store.state.loading;
    },
    movieInfo(){
      return this.$store.state.movie;
    }
  },
  methods: {
    getItems() {
      this.$store.dispatch("getItems", this.movieName);
      this.movieName = "";
    },
    saveFavorite(item) {
      this.$store.commit("saveFavorite", item);
    },
    getMovie(id){
      this.$store.dispatch('getMovie', id);
      this.MovieDetailModal = true;
    }
  }
};
</script>

<style>

.wrapper{
    max-width: 1024px;
  margin: 0 auto;
}

.movie-wrapper {
  display: inline-grid;
  grid-column-gap: 25px;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 60px;

}


</style>
