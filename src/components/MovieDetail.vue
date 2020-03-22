<template>
  <div class="movie-detail">
    <p class="movie-detail__title">
      {{ movieInfo.Title }} <span>({{ movieInfo.Year }})</span>
    </p>
    <p class="movie-detail__genre">{{ movieInfo.Genre }}</p>
    <a
      class="heart"
      @click="saveFavorite(movie)"
      :class="{ active: isFavorite }"
    >
    </a>
    <p class="movie-detail__plot">{{ movieInfo.Plot }}</p>

    <div class="movie-detail__rating" v-if="movieInfo.Ratings">
      {{ movieInfo.Ratings[0].Value.substring(0, 3) }}
    </div>

    <p class="movie-detail__subText">
      <span>Director: </span>{{ movieInfo.Director }}
    </p>
    <p class="movie-detail__subText">
      <span>Actors:</span> {{ movieInfo.Actors }}
    </p>
    <p class="movie-detail__subText">
      <span>Awards:</span> {{ movieInfo.Awards }}
    </p>

    <hr />

    <a class="movie-detail__link" v-bind:href="url" target="_blank"
      >Link IMDB</a
    >

    <!-- <figure @click="saveFavorite(movie)"> 
      <img :src="movieInfo.Poster" :alt="movieInfo.Title" />
    </figure> -->
    <!-- {{movieInfo.Ratings}} -->
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: Object
  },

  computed: {
    movie() {
      return this.$store.state.movie;
    },
    isFavorite() {
      return this.$store.getters.isFavorite(this.movie);
    },
    url() {
      return "https://www.imdb.com/title/" + this.$store.state.movie.imdbID;
    }
  },

  methods: {
    saveFavorite(movie) {
      this.$store.commit("saveFavorite", movie);
    }
  }
};
</script>

<style lang="scss">
.movie-detail {
  position: absolute;
  z-index: 2;
  top: -50px;
  left: 100%;
  margin: 0 auto;
  margin-left: 24px;
  list-style: none;
  background-color: black;
  color: white;
  box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 200%;
  min-height: 100%;
  padding: 20px 30px;
  text-align: left;
  font-size: 14px;
  font-weight: 100;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 0px;
    height: 0px;
    left: -15px;
    top: 75px;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid black;
  }

  .heart {
    position: relative;
    display: block;
    height: 20px;
    width: 20px;
    background-image: url(/assets/heart.svg);
  }
  .active {
    background-image: url(/assets/heart-full.svg);
  }

  hr {
    color: whitesmoke;
    opacity: 0.2;
    margin-top: 40px;
  }

  &__plot {
    margin-bottom: 30px;
  }

  &__rating {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #ed4a4a;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50px;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    max-width: 80%;

    span {
      font-size: 14px;
      font-weight: 100;
    }
  }

  &__genre {
    color: lightblue;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  &__subText {
    color: white;
    margin-bottom: 0px;
    margin-top: 5px;

    span {
      color: lightblue;
      margin-bottom: 0px;
    }
  }

  &__link {
    display: block;
    float: right;
    background: #ed4a4a;
    color: white;
    text-decoration: none;
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50px;
    margin-top: 20px;
  }
}
</style>
