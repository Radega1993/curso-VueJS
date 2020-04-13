<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Titulo</th>
        <th scope="col">Body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{post.id}}</td>
        <td>{{post.titulo}}</td>
        <td>{{post.body}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'EjemploPost',
  data() {
    return {
      posts:[
        {id:1, titulo:'Post1', body:'algo sin sentido'},
        {id:2, titulo:'Post2', body:'algo sin sentido'},
        {id:3, titulo:'Post3', body:'algo sin sentido'},
      ]
    }
  }
}
</script>

<style>


</style>
