<template>
  <div class="movie-detail">
    <p>{{ movieInfo.Title }} <span>({{ movieInfo.Year }})</span></p>
    <p>{{movieInfo.Genre}}</p>
    <p>{{movieInfo.Plot}}</p>

    <div>{{movieInfo.Ratings[0].Value}}</div>
    
    <p>Director: {{movieInfo.Director}}</p>
    <p>Writers: {{movieInfo.Director}}</p>
    <p>Awards: {{movieInfo.Awards}}</p>


    <a v-bind:href="url" target="_blank">Link IMDB</a>
    <!-- <figure @click="saveFavorite(movie)"> 
      <img :src="movieInfo.Poster" :alt="movieInfo.Title" />
    </figure> -->
    {{movieInfo}}
  </div>
</template>

<script>
export default {
  props: ['movieInfo'],
  data() {
    return {
    };
  },
  
  computed: {
    // movie() {
    //   return this.$store.state.movie;
    // },
    url() {
      return "https://www.imdb.com/title/" + this.$store.state.movie.imdbID;
    }
  },

  // methods: {
  //   saveFavorite(item) {
  //     this.$store.commit("saveFavorite", item);
  //   }
  // }
};
</script>

<style>
.movie-detail {
  position: absolute;
  top: 0px;
  left: 250px;
  margin: 0 auto;
  list-style: none;
  background-color: black;
  color: white;
  max-width: 500px;
  padding: 20px;
  text-align: left;
  font-size: 14px;
}
</style>
