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
        <router-link to="/contacts">Contacts</router-link>
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
