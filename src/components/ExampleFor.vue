<template>
    <ul>
       <!-- indexear cada elemento del arreglo, v-bind es opcional con :key es suficiente -->
       <!--  <li v-for="(country,index) in countries" v-bind:key="index">{{ country }}</li>  --> 
       
        <li v-for="country in countries" :key="country">{{ country }}</li>
        <br>   
        <li v-for="pais in paises" :key="pais.code">{{ pais.name }}</li>

    </ul>
</template>

<script lang="ts" setup>
    import {Ref, ref} from 'vue';
    // definiendo una interfaz
    interface ICountry {
        code: string,
        name: string
    }

    let countries:Ref<Array<string>> = ref ([
        'Spain','France','UK','Italy','Protugal'
    ])

    //con consunmo Api donde se referencia el elemento con un objeto .json
    // paises como valor de referencias de un array de interfaces de ICountry
    let paises:Ref<Array<ICountry>>= ref([
        {
                code: 'es',
                name: 'Spain'
        },
        {
                code: 'en',
                name: 'UK'
        },
        {
                code: 'fr',
                name: 'France'
        },
        {
                code: 'it',
                name: 'Italy'
        },
        {
                code: 'pt',
                name: 'Portugal'
        }
    ])
</script>

<style scoped>

</style>