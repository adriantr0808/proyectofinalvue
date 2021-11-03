<template>
  <div>
    <button>Seleccionar favorito</button>
    <button>Modificar comic</button>
    <button>Eliminar comic</button>
    <h1>{{ title }}</h1>
    <img :src="image" width="200px" />
    <h3>{{ desc }}</h3>
  </div>
</template>
<script>
export default {
  name: "ComicHijo",
  props: ["title", "image", "desc"],
};
</script>