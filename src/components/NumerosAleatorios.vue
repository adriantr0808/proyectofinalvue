<template>
  <div id="contenedor">
    <h1>Elige un numero</h1>
    <ul>
      <li v-for="(n, index) in numeros" :key="index">
        <router-link class="router" :to="'/numerotriple/' + n">
          {{ n }}</router-link
        >
      </li>
    </ul>
    <hr />
  </div>
</template>
<script>
export default {
  name: "NumeroAleatorios",
  data() {
    return {
      numeros: [],
    };
  },
  mounted() {
    this.generarNumeros();
  },

  methods: {
    generarNumeros() {
      for (var i = 0; i < 10; i++) {
        var num = Math.floor(Math.random() * 50);
        this.numeros.push(num);
      }
    },
  },
};
</script>
<style scoped>
ul li {
  display: inline;

  text-align: center;
}

.router {
  text-decoration: none;
  background-color: cornflowerblue;
  padding: 1em;
  margin: 1em;
  color: white;
}
.router:hover {
  color: black;
  background-color: coral;
}

ul {
  margin-bottom: 1em;
  margin-top: 1em;
}

h1 {
  margin-bottom: 1em;
  margin-top: 1em;
}

#contenedor {
  margin: 1em;
}
</style>