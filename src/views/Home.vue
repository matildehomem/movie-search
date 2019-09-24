<template>
<div>
 <Nav/>
    <h1>Home </h1>
    <Movies />
</div>
</template>


<script>
import Nav from '../components/Nav'
import Movies from '../components/Movies.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Movies
  }
}

</script>
<style scoped>
div{
position: sticky;
text-align: center;
}
div h1{
  position: absolute;
    top: 0;
    left: 40px;
}
</style>