<template>
<div id="app">
  <div class="container">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="/" class="nav-link active">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/productos" class="nav-link">Productos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/usuarios" class="nav-link"> Usuario </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>
