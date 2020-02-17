<template>
  <div>
    <input
      v-focus
      type="text"
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
