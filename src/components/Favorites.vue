<template>
  <div>
    <h1>Favorites</h1>
    <ul>
      <MovieCard v-for="movie in favorites" :key="movie.imdbID" :item="movie"/>
    </ul>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'
export default {
  components: {
    MovieCard
  },
 
  mounted() {
  },
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    }
  }
};
</script>
<style scoped>
li {
  position: relative;
}
span {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>