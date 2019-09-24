<template>
<div>
 <Nav/>
  <Favorites />
</div>
</template>
<script>
import Nav from '../components/Nav'
import Favorites from '../components/Favorites'

export default {
  name: 'app',
  components: {
    Nav,
    Favorites
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