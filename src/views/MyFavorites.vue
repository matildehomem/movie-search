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