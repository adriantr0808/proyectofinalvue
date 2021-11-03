<template>
  <div>
    <h1>Componente Padre hijo</h1>
    <h2 v-if="favorito">
      Su deporte favorito es:
      <span style="color: darkblue">{{ this.favorito }}</span>
    </h2>
    <ul>
      <!-- Recorremos el array deportes y cargamos en props cada uno de los deportes y los mandamos a Deporte -->
      <li v-for="d in deportes" :key="d">
        <Deporte
          :deporte="d"
          v-on:seleccionarFavParent="seleccionarFavParent"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import Deporte from "./Deporte.vue";

export default {
  name: "Deportes",
  methods: {
    seleccionarFavParent(deporte) {
      this.favorito = deporte;
    },
  },
  components: {
    Deporte,
  },
  data() {
    return {
      favorito: "",
      deportes: ["Canicas", "Curling", "Surf", "Padel", "Futbol"],
    };
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>