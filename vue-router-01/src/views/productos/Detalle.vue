<template>
<div class="container">
  <div class="cover">
    <div class="col-md-12">
      <h3 class="text-center">Detalle de Producto</h3>
    </div>

    <div class="row">
      <div class="col-md-2">
      </div>
      <div class="col-md-8">
        <div class="col-md-12 img-section">
          <img src="https://placehold.it/200x100/000">
        </div>
        <div class="col-md-12">
          <h4>Titulo producto {{ id }}</h4>
          <p>Descripción del producto</p>
          <a href="#" class="btn btn-success btn-sm"> Agregar al carrito</a>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  export default {
    data(){
      return{
        id: this.$route.params.id
      }
    }
  }
</script>

<style>
  .cover {
    padding: 20px;
    margin: 40px 2px;
    border: 1px solid #D2E0E6;
  }

  .img-section img {
    width: 100%;
  }
</style>
