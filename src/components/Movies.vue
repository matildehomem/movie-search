<template>
  <div>
    <h1>Movie Search</h1>
    <input type="text" v-model="movieName"  @keydown.enter.prevent="getItems"/>
    <button @click="getItems">Procurar</button>

    <p v-if="loading">A pesquisar</p>
    <ul v-else-if="!error">
      <MovieCard v-for="movie in items" :key="movie.imdbID" :item="movie"/>
    </ul>
    <div v-else>Não foi encontrado nenhum resultado</div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'
export default {
  components: {
    MovieCard
  },
  data() {
    return {
      movieName: ""
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
    }
  },
  methods: {
    getItems() {
      this.$store.dispatch("getItems", this.movieName);
      this.movieName = "";
    },
    saveFavorite(item) {
      this.$store.commit("saveFavorite", item);
    }
  }
};
</script>

<style>
body{
  background-color: black;
  text-align: center;
  color: whitesmoke;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  color: black;
  display: inline-block;
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  width: 300px;
  text-align: center;
}
li img{
  height: 300px;
}
li > p:first-child {
  display: inline-block;
}
li > a {
  color: blue;
  text-decoration: none;
}
li > a:hover{
  text-decoration: underline;
}

</style>
