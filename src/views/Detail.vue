<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/makanan" class="text-dark">Makanan</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
            <img :src=" '../img/' + makanan.gambar " class="img-fluid shadow" />
             <!-- <img src="../assets/img/nasi-rames.jpg" class="card-img-top"> -->
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ makanan.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga :
            <strong>Rp. {{makanan.harga}} </strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan"/>
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
            <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan spt : Pedes, Nasi Setengah. . .">
            </textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
name : "Detail",
components:{
    Navbar,
    Footer
},
data(){
    return{
        makanan : {},
        pesan : {},
    }
}, 

methods:{
  pemesanan(){
    if(this.pesan.jumlah_pemesanan){
      this.pesan.products = this.product;
    axios
    .get("http://localhost:3000/keranjangs", this.pesan)
    .then(()=>{
        this.$router.push({ path: "/keranjang"})
        this.$toast.success('Sukses Masuk Keranjang!', {
          type :'success',
          position : 'top-right',
          duration : 3000,
          dismissible : true
        });
    })
    .catch(err => console.log(err))
    } else{
       this.$toast.error('Harap Isi Semua Bidang!', {
          type :'error',
          position : 'top-right',
          duration : 3000,
          dismissible : true
        });
    }
      
  }
},

mounted(){
    axios
    .get("http://localhost:3000/products/" + this.$route.params.id)
    .then(res => (this.makanan = res.data))
    .catch(err => console.log(err))
}

}
</script>

<style>

</style>