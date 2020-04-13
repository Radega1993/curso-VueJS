<template>
  <div class="container">
    <h1>Información de Usuario</h1>

    <router-link :to="{ name:'Usuarios', params:{id : item} }"
    v-for="(item, index) in ArregloUsuarios" :key="index">
      <button> {{item}} </button>
    </router-link>

    <usuario />
  </div>
</template>

<script>
  import Usuario from '@/components/Usuario.vue';
  export default {
    components:{
      Usuario
    },
    data(){
      return{
        ArregloUsuarios:['Raül', 'Carlos', 'Carlota', 'Sonia']
      }
    }
  }
</script>
