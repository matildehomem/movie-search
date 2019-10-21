<template>
<div>
  <MovieDetail />
</div>
</template>
<script>
import MovieDetail from '../components/MovieDetail'

export default {
  name: 'app',
  components: {
    MovieDetail
  }
}

</script>
<style scoped>
div{
position: initial;
text-align: center;
}
div h1{
  position: absolute;
    top: 0;
    left: 40px;
}
</style>