<template>
  <nav>
    <!-- <ul>
      <li>
        <router-link exact to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/favorites"> My Favorites <span>({{favoritesCount}})</span></router-link>
      </li>
    </ul> -->
  <Search />
  </nav>
</template>

<script>

import Search from "./Search.vue";


export default {
components: {
    Search
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    favoritesCount() {
      return this.$store.getters.favorites.length;
    },
  
  }
};
</script>
<style lang="scss">
nav{
  background: #ed4a4a;
  height: 60px;
}
nav li{
  background-color: transparent !important;
  max-width: 100px;
}
nav ul{
  display: block;
  text-align: right;
  margin: 0;
}
nav li > a{
  color: white;
  text-decoration: none;
}
</style>