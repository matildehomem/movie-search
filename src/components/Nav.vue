<template>
  <nav>
    <div class="nav-wrapper">
      <Search />
      <router-link to="/favorites">
        Favorites: <span>{{ favoritesCount }}</span></router-link
      >
    </div>
  </nav>
</template>

<script>
import Search from "./Search.vue";

export default {
  components: {
    Search
  },
  computed: {
    
    favoritesCount() {
      return this.$store.getters.favorites.length;
    }
  }
};
</script>
<style lang="scss">
nav {
  background: #ed4a4a;
  height: 60px;

  .nav-wrapper {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      position: relative;
      color: white;
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50px;
      padding: 8px 20px;

      span {
        font-weight: 600;
      }

      &:hover {
        top: -2px;
        box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, .1);
      }
    }
  }
}
</style>
