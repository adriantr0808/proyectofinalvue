<template>
  <div id="app">
    <Menu />
    <NumerosAleatorios />

    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
import Menu from "./components/navegacion/Menu.vue";
import NumerosAleatorios from "./components/NumerosAleatorios.vue";

export default {
  name: "App",
  components: {
    Menu,
    NumerosAleatorios,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: beige;
}
</style>
