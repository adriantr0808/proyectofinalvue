<template>
  <div>
    <h1>Reforzando Padre-Hijo</h1>
    <div v-if="this.favorito.length != 0" class="favorito">
      <h2>Tu comic favorito es:</h2>
      <h3>{{ this.favorito.titulo }}</h3>
      <img :src="this.favorito.imagen" width="200px" />
    </div>
    <hr />
    <div style="margin: 4em">
      <div>
        <h3>Agregar Comic</h3>
        <label>Titulo: </label>
        <input type="text" v-model="titulo" />
        <label>Imagen: </label>
        <input type="text" v-model="imagen" />
        <label>Descripcion: </label>
        <input type="text" v-model="desc" />
      </div>
      <button @click="agregarComic()">Insertar Comic</button>
    </div>
    <div v-for="(comic, index) in comics" :key="index">
      <hr />
      <ComicHijo
        :comic="comic"
        v-on:seleccionarFavParent="seleccionarFavParent"
        v-on:eliminarComicParent="eliminarComicParent"
        v-on:modificarComicParent="modificarComicParent"
        :index="index"
      />
    </div>
  </div>
</template>
<script>
import ComicHijo from "./ComicHijo.vue";
export default {
  name: "ComicPadre",
  components: {
    ComicHijo,
  },
  methods: {
    agregarComic() {
      var tit = this.titulo;
      var img = this.imagen;
      var desc = this.desc;

      var comic = {
        titulo: tit,
        imagen: img,
        descripcion: desc,
      };

      this.comics.push(comic);
    },
    seleccionarFavParent(comicfav) {
      this.favorito = comicfav;
      console.log(this.favorito);
    },

    eliminarComicParent(index) {
      this.comics.splice(index, 1);
    },
    modificarComicParent(index) {
      var tit = this.titulo;
      var img = this.imagen;
      var desc = this.desc;

      var comic = this.comics[index];
      comic.titulo = tit;
      comic.imagen = img;
      comic.descripcion = desc;
    },
  },

  data() {
    return {
      comics: [
        {
          titulo: "Spiderman",
          imagen:
            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
          descripcion: "Hombre araña",
          year: 1997,
        },
        {
          titulo: "Wolverine",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
          descripcion: "Lobezno",
          year: 2005,
        },
        {
          titulo: "Guardianes de la Galaxia",
          imagen:
            "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
          descripcion: "Yo soy Groot",
          year: 1997,
        },
        {
          titulo: "Avengers",
          imagen:
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
          descripcion: "Los Vengadores",
          year: 1997,
        },
        {
          titulo: "Spawn",
          imagen:
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
          descripcion: "Al Simmons",
          year: 1997,
        },
        {
          titulo: "Batman",
          imagen:
            "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
          descripcion: "Murcielago",
          year: 1997,
        },
      ],

      titulo: "",
      imagen: "",
      desc: "",
      favorito: [],
    };
  },
};
</script>
<style scoped>
.favorito {
  background-color: #03a1fc;
  border: 1px solid black;
}

.favorito h2,
h3,
img {
  margin: 1em;
}

.favorito h2 {
  margin-top: 1em;
}
button {
  margin: 1em;
}

input {
  margin-right: 1em;
}
</style>