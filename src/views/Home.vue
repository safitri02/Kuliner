<template>
  <div class="home">
   <Navbar/>
    <Hero/>
    <Product/>
   <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Product from '@/components/Product.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Product,
    Footer,
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

