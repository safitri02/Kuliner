<template>
  <div class="home">
   <Navbar/>
    <Hero/>
    <Product/>
   
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Product,
  }
}
</script>

<style scoped>
h4{
  font-weight: 700;
}
.card{
  border:none;
}

</style>

