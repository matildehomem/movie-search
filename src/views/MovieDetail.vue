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