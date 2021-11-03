<template>
  <div>
    <h3>
      <!-- 3º Imprimo la propiedad num -->
      Numero hijo: <span style="color: darkred">{{ num }}</span>
    </h3>
    <button @click="sumarNumeros(num)">Sumar</button>
  </div>
</template>
<script>
export default {
  name: "Numero",
  //2º Recibo por props num
  props: ["num"],
  methods: {
    //7º Recibo el metodo del padre, le paso un parametro, par aluego cuando
    //llame a la funcion, pasarle la propiedad num y asi que sume los numeros
    //he ido generando
    sumarNumeros(numero) {
      this.$emit("sumarNumParent", numero);
    },
  },
};
</script>