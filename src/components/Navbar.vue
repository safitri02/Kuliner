<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light mb-3">
            <a class="navbar-brand" href="#">Kulineran</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-auto">
                <router-link class="nav-link" to="/">Beranda</router-link>
                <router-link class="nav-link" to="/makanan">Makanan</router-link>
                <div class="navbar-nav ml-auto">
                <router-link class="nav-link" to="/Keranjang">Keranjang
                 <b-icon-bag></b-icon-bag>
                  <span class="badge badge-success">{{ jumlah_pesanan.length }}</span>
                </router-link>
                </div>
                </div>
            </div>
        </nav>

    </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanan: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then(res => (this.jumlah_pesanan = res.data))
      .catch(err => console.log(err))
  },
};
</script>

<style scoped>

</style>
