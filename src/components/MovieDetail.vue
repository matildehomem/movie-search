<template>
  <div class="movie">
    <p>Nome: {{ movie.Title }}</p>
    <p>Ano: {{movie.Year}}</p>
    <p>Realizador: {{movie.Director}}</p>
    <p>Sinopse: {{movie.Plot}}</p>
    <a v-bind:href="url" target="_blank">Link IMDB</a>
    <figure @click="saveFavorite(movie)">
      <img :src="movie.Poster" :alt="movie.Title" />
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.$store.dispatch("getMovie", this.id);
  },

  computed: {
    movie() {
      return this.$store.state.movie;
    },
    url(){
        return 'https://www.imdb.com/title/' + this.$store.state.movie.imdbID;
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
.movie {
  list-style: none;
  border: 1px solid darkgrey;
  padding: 20px;
  text-align: left;
}
</style>
