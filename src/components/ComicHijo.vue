<template>
  <div>
    <button @click='seleccionarFavorito(comic)'>Seleccionar favorito</button>
    <button @click='modificarComic(index)'>Modificar comic</button>
    <button @click='eliminarComic(index)'>Eliminar comic</button>
    <h1>{{ comic.titulo }}</h1>
    <img :src="comic.imagen" width="200px" />
    <h3>{{comic.descripcion}}</h3>
  </div>
</template>
<script>
export default {
  name: "ComicHijo",
  methods:{
    seleccionarFavorito(comicfav){
      
     this.$emit("seleccionarFavParent",comicfav);
     console.log(comicfav);
  },

  eliminarComic(index){
     this.$emit("eliminarComicParent",index);
  },

  modificarComic(index){
     this.$emit("modificarComicParent",index);
  }
  
  
 
},
 props: ["comic","index"],
}
</script>
<style scoped>
  button{
    margin:1em;
  }
</style>