<template>
  <div>
    <h1>Practicando Componente Padre-hijo</h1>
    <!-- 8º Imprimimos la variable resultado -->
    <h2>
      La suma es: <span style="color: #e901fc">{{ this.resultado }}</span>
    </h2>
    <!-- 5º Cuando haga click en el boton se ejecuta el metodo de generar numeros -->
    <button @click="generarNumero">Agregar numero</button>
    <!-- 1º recorro el array que tengo abajo y recorro los numeros pasando por props al hijo -->
    <h3 v-for="(n, index) in numeros" :key="index">
      <Numero :num="n" v-on:sumarNumParent="sumarNumParent" />
    </h3>
  </div>
</template>
<script>
import Numero from "./Numero.vue";
export default {
  name: "Numeros",
  methods: {
    //4º Genero numeros aleatorios y los meto en el array numeros para cuando pulse el boton de agregar
    generarNumero() {
      var numero = Math.floor(Math.random() * 50);
      this.numeros.push(numero);
    },
    // 6º Metodo para sumar los numeros, con un parametor y una variable resultado
    sumarNumParent(num) {
      
      this.resultado = this.resultado + num;
    },
  },
  components: {
    Numero,
  },
  data() {
    return {
      numeros: [12, 6, 8],
      resultado: 0,
    };
  },
};
</script>