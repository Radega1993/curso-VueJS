<template>
<div id="app">
  <center>
    <img alt="Vue logo" src="./assets/logo.png"> <br />
    <contador />
    <contador />
    <contador />
    <contador />
    <contador />
    <br />

    <h2>Listado de planes de cursos de programación</h2>
    <div class="planes">
      <planes/>
    </div>

  </center>
</div>
</template>

<script>
import Contador from './components/Contador.vue'
import Planes from './components/Planes.vue'

export default {
  name: 'App',
  components: {
    Contador, Planes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}


</style>
