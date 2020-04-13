let vm = new Vue({
  el:'#app',
  data:{
      esActivo: 'no activo'
  },
  watch:{
    esActivo:function(){
      console.log('Cambio el valor de estado');
    }
  }
});
