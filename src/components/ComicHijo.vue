<template>
  <div>
    <button @click="seleccionarFavorito(comic)">Seleccionar favorito</button>
    <button @click="modificarComic(index)">Modificar comic</button>
    <button @click="eliminarComic(index)">Eliminar comic</button>
    <h1>{{ comic.titulo }}</h1>
    <img :src="comic.imagen" width="200px" />
    <h3>{{ comic.descripcion }}</h3>
    <h3
      :class="{
        rojo: comic.year <= 2000,
        verde: comic.year > 2000,
      }"
    >
      {{ comic.year }}
    </h3>
  </div>
</template>
<script>
export default {
  name: "ComicHijo",
  methods: {
    seleccionarFavorito(comicfav) {
      this.$emit("seleccionarFavParent", comicfav);
      console.log(comicfav);
    },

    eliminarComic(index) {
      this.$emit("eliminarComicParent", index);
    },

    modificarComic(index) {
      this.$emit("modificarComicParent", index);
    },
  },
  props: ["comic", "index"],
};
</script>
<style scoped>
@import "./../assets/css/estiloscomics.css";
</style>