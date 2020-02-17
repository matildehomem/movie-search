<template>
  <div>
    <span class="icon__search" >hh</span>
    <input
      v-focus
      type="text"
      placeholder="Search movies"
      v-model="movieName"
      @keydown.enter.prevent="getItems"
    />
    <button @click="getItems">Procurar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieName: ""
    };
  },
  methods: {
    getItems() {
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
.icon__search {
  position: relative;
  display: block;
  height: 20px;
  width: 20px;
  background-image: url(/assets/search.svg);
}
button {
  display: none;
}
input {
  width: 90%;
  float: right;
  height: 60px;
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
</style>
