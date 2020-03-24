<template>
  <li
    class="movie-card"
    @mouseenter="getMovie(item.imdbID)"
    @mouseout="MovieDetailModal = false"
  >
    <!-- <router-link :to="'/movies/' + item.imdbID"> -->
    <!-- </router-link> -->
    <figure @click="saveFavorite(item)" :class="{ active: isFavorite }">
      <img :src="item.Poster" :alt="item.Title" />
    </figure>

    <p class="movie-card__title">{{ item.Title }}</p>
    <p class="movie-card__date">{{ item.Year }}</p>

    <MovieDetail :movieInfo="movieInfo" v-if="MovieDetailModal" :item="movie" />
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
    isFavorite() {
      return this.$store.getters.isFavorite(this.item);
    },
    movieInfo() {
      return this.$store.state.movie;
    }
  },
  methods: {
    saveFavorite(item) {
      this.$store.commit("saveFavorite", item);
    },
    getMovie(id) {
      this.MovieDetailModal = false;
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
    cursor: pointer;

    &:active {
      animation: heartbeat 1s infinite;
      background-image: url("/assets/heart-full.svg");
      background-repeat: no-repeat;
      background-position: center;

      img {
        opacity: 0.1;
      }
    }

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

  &:nth-of-type(5n),
  &:nth-of-type(5n-1) {
    .movie-detail {
      left: -260%;

      &:before {
        left: unset;
        right: -15px;
        border-left: 15px solid black;
        border-right: unset;
      }
    }
  }

  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(0.75);
    }
  }
}
</style>
