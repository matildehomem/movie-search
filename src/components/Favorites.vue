<template>
  <div>
    <Nav />
    <h1>Favorites</h1>

    <ul>
      <li v-for="item in favorites" :key="item.imdbID" :class="{done:item.Done}">
        <p>Nome: {{ item.Title }}</p>
        <p>Ano: {{item.Year}}</p>
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
  }
};
</script>