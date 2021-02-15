<template>
  <div>
    <div class="container">
      <div class="row">
          <div class="col-md-6 mt-5">
              <h2><strong>Delicious Food Menu</strong> <br> In Your Gadged</h2>
              <p class="mt-3" style="width:70%">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero adipisci expedita cupiditate voluptatem placeat dolores, perferendis porro soluta magni cumque. Aliquam, excepturi blanditiis odio nemo rerum expedita perspiciatis vel atque.</p>
              <router-link to="/makanan" class="btn btn-success mt-3">Pesan Makanan</router-link>
          </div>
          <div class="col-md-6">
              <div class="img mt-5">
                <img src="../assets/img/food.svg" style="width:500px">
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name : 'Hero',
}
</script>

<style>

</style>