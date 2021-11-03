<template>
  <div>
    <h1>Tabla de multiplicar</h1>

    <label>Introduce un numero: </label>
    <input type="text" v-model="numero" />
    <button @click="tablaMultiplicar()">Mostrar tabla</button>
    <div>
      <table border="1" v-if="this.tabla.length != 0">
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(n, index) in tabla" :key="n">
            <td>{{ numero }}*{{ index }}</td>
            <td>{{ n }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      tabla: [],
    };
  },
  methods: {
    tablaMultiplicar() {
      this.tabla = []; //Vaciamos la tabla para que no se queden los valores anteriores
      var num = parseInt(this.numero);
      console.log(num);
      for (var i = 0; i < 10; i++) {
        var pr = num * i;
        this.tabla.push(pr);
      }
    },
  },
};
</script>

<style scoped>
table {
  margin: auto;
  margin-top: 1em;
  margin-bottom: 4em;
  border: 2px solid black;
}

hr {
  margin: 2em;
}

button {
  margin: 1em;
}
</style>