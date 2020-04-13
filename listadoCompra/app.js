let app = new Vue({
  el:'#lista-compras',
  data:{
      header: 'Listado de útiles',
      newUtile: '',
      estado: 'default',
      utiles: [
        {
          util: '10 cuadernos',
          comprado: true
        },
        {
          util: '10 lápices',
          comprado: true
        },
        {
          util: '5 cajas de colores',
          comprado: false
        }
      ]
  },
  computed:{
    listarReversa: function() {
      return this.utiles.slice(0).reverse();
    }
  },
  methods:{
    guardarElemento: function() {
      this.utiles.push({
        util: this.newUtile,
        comprado: false
      });
      this.newUtile = '';
    },
    cambiarEstado:function(newEstado) {
      this.estado = newEstado;
      this.newUtile = '';
    },
    cambiarEstadoCompra: function(util){
      util.comprado = !util.comprado
    }
  }
});
