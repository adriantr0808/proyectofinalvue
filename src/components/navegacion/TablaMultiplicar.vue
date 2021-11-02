<template>

<div>
    <h1>Tabla</h1>
    <label>Introduce un numero: </label>
    <input type='text' v-model='numero'/>
    <button @click='tablaMultiplicar()'>Mostrar tabla </button>
    <div>
        <table border='1'>
            <thead>
                <tr>
                     <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(n, index) in tabla'  :key='n'> 
                    <td>{{numero}}*{{index}}</td>
                    <td>{{n}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'TablaMultiplicar',
    data(){
        return{
            numero:0,
            tabla:[],
            indices:[]
        }
    },
    methods: {
        tablaMultiplicar(){
        var num = this.numero;   
        console.log(num); 
        for(var i = 0; i <10; i++){
            var pr = num*i;
            this.indices.push(i);
           this.tabla.push(pr);
        }
    },
    
}
}
</script>

<style scoped>
table{
    margin: auto;
    margin-top: 1em;
}
</style>