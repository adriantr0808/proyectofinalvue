<template>
  <div>
    <h2>El numero seleccionado es: {{ this.num }}</h2>
    <h2>El triple del numero seleccionado es: {{ this.triple }}</h2>
  </div>
</template>
<script>
export default {
  name: "NumeroTriple",
  data() {
    return {
      num: 0,
      triple: 0,
    };
  },
  mounted() {
    this.mostrarTriple();
  },

  watch: {
    "$route.params.numero"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.mostrarTriple();
      }
    },
  },

  methods: {
    mostrarTriple() {
      this.num = this.$route.params.numero;
      this.triple = this.num * 3;
    },
  },
};
</script>
