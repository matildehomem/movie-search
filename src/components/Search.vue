<template>
  <div class="search">
    <div class="search__icon"></div>
    <input
      v-focus
      type="text"
      placeholder="Search movies"
      v-model="movieName"
      @keydown.enter.prevent="getItems"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieName: ""
    };
  },
 created(){
      this.$store.dispatch("getItems", "harry");
      this.movieName = "";
  },
  methods: {
    getItems() {
      this.$router.push("/");
      this.$store.dispatch("getItems", this.movieName);
      this.movieName = "";
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
<style lang="scss">
.search {
  display: inline-flex;
  float: right;
  height: 60px;

  &__icon {
    height: 120px;
    width: 20px;
    background-image: url(/assets/search.svg);
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    margin-top: 22px;
    margin-right: 6px;
  }

  button {
    display: none;
  }
  input {
    border: none;
    background: none;
    color: white;
    font-size: 16px;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
