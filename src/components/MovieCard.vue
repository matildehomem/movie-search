<template>
  <li
    class="movie-card"
    @mouseenter="getMovie(item.imdbID)"
    @mouseleave="MovieDetailModal = false"
  >
    <!-- <span
      class="heart"
      @click="saveFavorite(item)"
      :class="{ active: isFavorite }"
    ></span> -->
    <!-- <router-link :to="'/movies/' + item.imdbID"> -->
    <!-- </router-link> -->
    <figure>
      <img :src="item.Poster" :alt="item.Title" />
    </figure>

    <p class="movie-card__title">{{ item.Title }}</p>
    <p class="movie-card__date">{{ item.Year }}</p>

    <MovieDetail :movieInfo="movieInfo" v-if="MovieDetailModal" :item="movie"/>
  </li>
</template>
<script>
import MovieDetail from "./MovieDetail.vue";

export default {
  components: {
    MovieDetail
  },
  props: {
    item: Object,
    movie: Object
  },
  data() {
    return {
      // movieName: "",
      MovieDetailModal: false
    };
  },

  computed: {
    // isFavorite() {
    //   return this.$store.getters.isFavorite(this.item);
    // },
    movieInfo() {
      return this.$store.state.movie;
    }
  },
  methods: {
    // saveFavorite(item) {
    //   this.$store.commit("saveFavorite", item);
    // },
    getMovie(id) {
      this.$store.dispatch("getMovie", id);
      this.MovieDetailModal = true;
    }
  }
};
</script>

<style lang="scss">
.movie-card {
  position: relative;
  text-align: left;
  list-style-type: none;

  figure {
    margin: 0;

    img {
      width: 100%;
      box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.3);
    }
  }
  &__title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0;
  }
  &__date {
    font-size: 14px;
    color: #6ac5fe;
    margin-top: 5px;
  }
}
</style>
