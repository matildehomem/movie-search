<template>
  <div>
    <!-- <h1>Home</h1> -->
    <Movies />
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";

export default {
  name: "app",
  components: {
    Movies
  }
};
</script>
<style scoped>
div {
  position: initial;
  text-align: center;
}
div h1 {
  position: absolute;
  top: 0;
  left: 40px;
}
</style>
