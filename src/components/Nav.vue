<template>
  <nav>
    <ul>
      <li>
        <router-link exact to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/favorites"> My Favorites <span>({{favoritesCount}})</span></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {

  computed: {
    title() {
      return this.$store.state.title;
    },
    favoritesCount() {
      return this.$store.state.favoritesCount;
    },
  
  }
};
</script>
<style >
nav li{
  background-color: transparent !important;
  max-width: 100px;
}
nav ul{
  display: block;
  text-align: right;
}
nav li > a{
  color: white;
  text-decoration: none;
}
</style>