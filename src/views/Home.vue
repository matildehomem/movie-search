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