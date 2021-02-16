<template>
<div>
    <Navbar/>

    <div class="container mb-5">
            <h2 class="mt-5 mb-5 text-center">Semua Menu Makanan</h2>
        <div class="row">
            <div class="col-md-3 mt-2 produk" v-for="makanan in product"  v-bind:key="makanan.id">
                <div class="card shadow">
                <img src="../assets/img/nasi-rames.jpg" class="card-img-top">
                <div class="card-body">
                    <h5>{{ makanan.nama }} </h5>
                    <p class="card-text"> Harga : Rp. {{ makanan.harga }} </p>
                </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue'
export default {
name : "Food",
components: {
    Navbar
},  

data(){
    return{
        product : []
    };
},

mounted(){
    axios
    .get("http://localhost:3000/products")
    .then(res => (this.product = res.data))
    .catch(err => console.log(err))
}

}
</script>

<style>
.produk{
    margin:15px 0px;
}
</style>