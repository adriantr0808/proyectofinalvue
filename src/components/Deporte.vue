<template>
  <div>
    <h1 style="color: darkred">{{ deporte }}</h1>
    <button @click="seleccionarFavorito(deporte)">Seleccionar favorito</button>
  </div>
</template>
<script>
export default {
  name: "Deporte",
  //Recibo en props cada deporte que mande anteriormente en un array, e imprimo arriba en el h1 como si fuera una variable
  props: ["deporte"],
  mounted() {
    console.log(this.deporte);
  },
  methods: {
    seleccionarFavorito(depor) {
      //console.log(depor);
      //Con emit llamamos al metodo del padre
      this.$emit("seleccionarFavParent", depor);
    },
  },
  data() {
    return {
      favorito: "",
    };
  },
};
</script>