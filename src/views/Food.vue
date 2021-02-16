<template>
<div>
    <Navbar/>

    <div class="container mb-5">
            <h2 class="mt-5 mb-5 text-center">Semua Menu Makanan</h2>
            
        <div class="input-group mb-3">
        <input v-model="search" input type="text" class="form-control" @keyup="carimakanan" placeholder="Cari Makanan..." aria-describedby="basic-addon1">
        </div>

        <div class="row">
            <div class="col-md-3 mt-2 produk" v-for="makanan in product"  v-bind:key="makanan.id">
                <div class="card shadow">
                 <img :src=" '../img/' + makanan.gambar " class="img-fluid shadow" />
                <div class="card-body">
                    <h5>{{ makanan.nama }} </h5>
                    <p class="card-text"> Harga : Rp. {{ makanan.harga }} </p>
                    <router-link :to="'/makanan/'+makanan.id" class="btn btn-success">Lihat</router-link>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    <Footer/>
</div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
name : "Food",
components: {
    Navbar,
    Footer
},  

data(){
    return{
        product : [],
        search : '',
    };
},

methods:{
    carimakanan(){
        axios
        .get("http://localhost:3000/products?q="+this.search)
        .then(res => (this.product = res.data))
        .catch(err => console.log(err))
    }

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