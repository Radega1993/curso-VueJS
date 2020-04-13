<template>
<div class="container">
  <form>
    <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <h1>Formulario de Contacto</h1>
        <hr />

        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" class="form-control" v-model="datosPersona.nombre">
        </div>

        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="text" id="email" class="form-control" v-model="datosPersona.email">
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <label for="mensaje">Mensaje:</label><br />
        <textarea id="mensaje" rows="5" cols="60" v-model="mensaje"></textarea>
      </div>
    </div>

    <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <div class="form-group">
          <label for="enviaremail">
            <input type="checkbox" id="enviaremail" value="enviaremail" v-model="opcionEmail">Enviar E-mail
          </label>&nbsp;&nbsp;
          <label for="enviarcopia">
            <input type="checkbox" id="enviarcopia" value="enviarcopia" v-model="opcionEmail">Enviar una copia
          </label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <div class="form-group">
          <label for="masculino">
            <input type="radio" id="masculino" value="M" v-model="genero">Masculino
          </label>&nbsp;&nbsp;
          <label for="femenino">
            <input type="radio" id="femenino" value="F" v-model="genero">Femenino
          </label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <label for="horario"></label>
        <select class="form-control" v-model="horario">
          <option v-for="item in datosHorario" :key="item" :selected="item == 'Mañana'"> {{item}}</option>
        </select>
      </div>
    </div><br/>

    <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <button class="btn btn-primary" @click.prevent="enviar"> Enviar datos</button>
      </div>
    </div>

  </form><br/>

  <div class="row" v-if="enviado">
    <div class="col-xs12 col-sm-8 col-md-6">
      <div class="panel panel-defualt">
        <div class="panel-heading">
          <h3>Datos Ingresados</h3>
        </div>
        <div class="panel-body">
          <p>Nombre: {{datosPersona.nombre}}</p>
          <p>E-mail: {{datosPersona.email}}</p>
          <p style="white-space:pre">Mensaje: <br /> {{mensaje}}</p>
          <p>Opcion de envio:
            <ul>
              <li v-for="item in opcionEmail" :key="item"> {{item}}</li>
            </ul>
          </p>
          <p>Género: {{genero}}</p>
          <p>Horario: {{horario}}</p>
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: 'Formulario',
  data() {
    return {
      datosPersona: {
        nombre: '',
        email: ''
      },
      mensaje: 'Test mensaje',
      opcionEmail: [],
      genero: 'M',
      horario:'Mañana',
      datosHorario: ['Mañana', 'Tarde', 'Noche'],
      enviado:false
    }
  },
  methods:{
    enviar(){
      this.enviado = true;
    }
  }

}
</script>

<style>

</style>
