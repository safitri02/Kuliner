<template>
   <div class="container">
    <div class="produk mb-5">
      <h4 class="text-center mt-5 mb-3"> Makanan Pilihan <strong>Terbaik</strong></h4>
      <div class="row">

        <div class="col-md-4 mt-2" v-for="product in products"  v-bind:key="product.id">
          <div class="card shadow">
            <img :src=" '../img/' + product.gambar " class="img-fluid shadow" />
          <div class="card-body">
            <h5>{{ product.nama }} </h5>
            <p class="card-text"> Harga : Rp.{{ product.harga }}</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
name : "Product",
components: {

},

data(){
    return{
        products : []
    };
},
// methods : {
//     //method set product yg menyimpan data 
//     setProduct(data){
//         this.setProduct = data;
//     }
// },
mounted() {
    axios
    .get("http://localhost:3000/best-products")
    .then(res => (this.products = res.data))
    .catch(err => console.log(err));
    
    }

};
</script>

<style>

</style>