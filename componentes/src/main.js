import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//componentes
/*
var componente1 = Vue.extend({
  template: '<h1> Hola - introducción a componentes </h1>'
})

var componente2 = Vue.extend({
  template: '<h3>{{subtitulo}}</h3>',
  data(){
    return{
      subtitulo:' listado de frameworks javascrip'
    }
  }
})

var componente3 = Vue.extend({
  template: `<div>
                <ul>
                  <componente-framework v-for="fra in frameworks" :key="fra.id">{{fra.titulo}}</componente-framework>
                </ul>
              </div>`,
  data(){
    return{
      frameworks:[
        {id:1, titulo: 'Vue'},
        {id:2, titulo: 'Angular'},
        {id:3, titulo: 'React'}
      ]
    }
  }
})

var componente4 = Vue.extend({
  template: '<li><slot></slot></li>',
})


Vue.component('componente-saludo',{
  data(){
    return{
        titulo:'Hola - Introducción a componentes'
    }
  },
  methods:{
    display(){
      console.log('hola');
    }
  }
});//componente1);
Vue.component('componente-titulo',componente2);
Vue.component('componente-lista',componente3);
Vue.component('componente-framework',componente4);
*/
new Vue({
  el: '#app',
  components:{App},
  template:'<App/>'
})
