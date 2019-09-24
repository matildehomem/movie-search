<template>
  <div>
    <Nav />
    <h1>Favorites</h1>

    <ul>
      <li v-for="item in favorites" :key="item.imdbID" :class="{done:item.Done}">
        <p>Nome: {{ item.Title }}</p>
        <p>Ano: {{item.Year}}</p>
        <span
          class="heart active"
          @click="e => e.target.classList.toggle('active') + saveFavorite(item)"
        ></span>

        <figure>
          <img :src="item.Poster" :alt="item.Title" />
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  },
  methods: {
    saveFavorite(item) {
      this.$store.commit("saveFavorite", item);
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