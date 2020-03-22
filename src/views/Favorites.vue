<template>
  <div class="wrapper">
    <h1>Favorites</h1>
    <ul class="movie-wrapper">
      <MovieCard v-for="movie in favorites" :key="movie.imdbID" :item="movie" />
    </ul>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
export default {
  components: {
    MovieCard
  },
  mounted() {},
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    }
  }
};
</script>
<style lang="scss">
.wrapper {
  max-width: 1024px;
  margin: 40px auto;
}

.movie-wrapper {
  display: inline-grid;
  grid-column-gap: 25px;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 60px;
}
</style>
