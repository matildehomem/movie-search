<template>
<li >
    <p>{{ item.Title }}</p>
    <span class="heart" @click="saveFavorite(item)" :class="{active: isFavorite}"></span>
    <figure>
        <img :src="item.Poster" :alt="item.Title" />
    </figure>
    <router-link :to="'/movies/' + item.imdbID">
        <p>Ver Detalhes</p>
    </router-link>
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
    }
  },
  computed: {
      isFavorite() {
          return this.$store.getters.isFavorite(this.item)
      }
  }
}
</script>

<style>

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