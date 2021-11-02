<template>
  <div>
    <h1>Menu</h1>
    <ul id='menu'>
      <li>
           <router-link to="/">Home</router-link>
      </li>
       <li>
           <router-link to="/tabla">Tabla de multiplicar</router-link>
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
}
</style>