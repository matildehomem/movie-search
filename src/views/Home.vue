<template>
  <div class="wrapper">
    <p v-if="loading">A pesquisar</p>
    <ul v-else-if="!error" class="movie-wrapper">
      <MovieCard v-for="movie in items" :key="movie.imdbID" :item="movie" />
    </ul>
    <div v-else>Não foi encontrado nenhum resultado</div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";

export default {
  components: {
    MovieCard,
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
    }
  },
  methods: {
    saveFavorite(item) {
      this.$store.commit("saveFavorite", item);
    }
  }
};
</script>

<style>
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
