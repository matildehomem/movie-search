<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "app",
  components: {
    Nav
  }
};
</script>
<style>
html {
  font-family: "Montserrat", sans-serif;
}
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
</style>
