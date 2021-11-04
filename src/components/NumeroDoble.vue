<template>
  <div>
    <h1>Parámetros Routing</h1>
    <button @click="redirectHome()">Ir a home</button>
    <h2 v-if="mensaje">{{ mensaje }}</h2>
    <div v-else>
      <h2 style="color: darkred">El numero recibido es {{ num }}</h2>
      <h2 style="color: darkblue">El numero doble es {{ doble }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "NumeroDoble",
  mounted() {
    if (this.$route.params.numero == null) {
      this.mensaje = "No se han enviado parametros";
    } else {
      //AQUI CAMBIAMOS EL NUMERO
      this.mostrarDoble();
    }
  },
  watch: {
    "$route.params.numero"(nextVal, prevVal) {
      //SI TENEMOS VALORES DEIFERENTES QUEREMOS CAMBIAR
      console.log("hola");
      if (nextVal != prevVal) {
        this.mostrarDoble();
      }
    },
  },

  methods: {
    redirectHome() {
      this.$router.push("/");
    },

    mostrarDoble() {
      this.num = this.$route.params.numero;
      this.doble = parseInt(this.num) * 2;
    },
  },
  data() {
    return {
      mensaje: "",
      num: 0,
      doble: 0,
    };
  },
};
</script>