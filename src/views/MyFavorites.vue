<template>
<div>
  <Favorites />
</div>
</template>
<script>
import Favorites from '../components/Favorites'

export default {
  name: 'app',
  components: { 
    Favorites
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