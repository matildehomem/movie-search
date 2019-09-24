<template>
<div>
 <Nav/>
  <MovieDetail />
</div>
</template>
<script>
import Nav from '../components/Nav'
import MovieDetail from '../components/MovieDetail'

export default {
  name: 'app',
  components: {
    Nav,
    MovieDetail
  }
}

</script>