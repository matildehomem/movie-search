<template>
  <div>
    <h1>Movie Search</h1>
    <input type="text" v-model="movieName" />
    <button @keydown.enter.prevent="getItems" @click="getItems">Procurar</button>

    <p v-if="loading">A pesquisar</p>
    <ul v-else-if="!error">
      <li v-for="item in items" :key="item.imdbID" :class="{done:item.Done}">
        <p>{{ item.Title }}</p>
        <span class="heart" @click="e => e.target.classList.toggle('active') + saveFavorite(item)"></span>
        <figure>
          <img :src="item.Poster" :alt="item.Title" />
        </figure>
        <router-link :to="'/movies/' + item.imdbID">
          <p>Ver Detalhes</p>
        </router-link>
      </li>
    </ul>
    <div v-else>Não foi encontrado nenhum resultado</div>
  </div>
</template>

<script>
export default {
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

.heart {
  height: 20px;
  width: 20px;
  float: right;
  position: relative;
  background-image: url(/assets/heart.svg);
}
.active {
  background-image: url(/assets/heart-full.svg);
}
</style>
