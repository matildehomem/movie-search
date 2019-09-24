<template>
<div>
 <Nav/>
    <h1>About </h1>
</div>
</template>
<script>
import Nav from '../components/Nav'

export default {
  name: 'app',
  components: {
    Nav
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