<template>
  <li class="movie-card" @click = "showDetails">
    <!-- <span
      class="heart"
      @click="saveFavorite(item)"
      :class="{ active: isFavorite }"
    ></span> -->
    <!-- <router-link :to="'/movies/' + item.imdbID"> -->
    <!-- </router-link> -->
      <figure >
        <img :src="item.Poster" :alt="item.Title" />
      </figure>

    <p class="movie-card__title">{{ item.Title }}</p>
    <p class="movie-card__date">{{ item.Year }}</p>



  </li>
</template>
<script>
export default {
  
  props: {
    item: Object
  },
  methods: {
    saveFavorite(item) {
      this.$store.commit("saveFavorite", item);
    },
    showDetails(){

    }
  },
  computed: {
    isFavorite() {
      return this.$store.getters.isFavorite(this.item);
    }
  }
};
</script>

<style lang="scss">
.movie-card {
  position: relative;
  text-align: left;
  list-style-type: none;

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

  figure {
    margin: 0;

    img {
      width: 100%;
      min-height: 260px;
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
