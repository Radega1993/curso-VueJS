<template lang="html">

    <button @click='contar'>{{ contador }}</button>

</template>

<script>
export default {
  name: 'Contador',
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    contar: function() {
      this.contador++;
    }
  }

}
</script>

<style lang="css" scoped>
</style>
