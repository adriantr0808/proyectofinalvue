<template>
  <div>
    <ul id="menu">
      <li>
        <router-link class="router" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="router" to="/tabla"
          >Tabla de multiplicar</router-link
        >
      </li>
      <li>
        <router-link class="router" to="/deportes">Deportes</router-link>
      </li>

      <li>
        <router-link class="router" to="/numeros">Numeros</router-link>
      </li>
      <li>
        <router-link class="router" to="/comics">Comics</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
ul#menu li {
  display: inline;
  margin: 1em;
  list-style-type: none;
  color: blue;
  text-decoration: none;
  color: cornsilk;
}

.router {
  color: cornsilk;
  text-decoration: none;
}

ul {
  background: cornflowerblue;
  padding: 1em;
}
.router:hover {
  color: black;
}
</style>