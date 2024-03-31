<template>
    <ul>
        <li v-for="country in countries" :key="country">{{ country }}</li>

        <!-- para indexear cada elemento del arreglo, v-bind es opcional con :key es suficiente -->
       <!--  <li v-for="(country,index) in countries" v-bind:key="index">{{ country }}</li>  --> 
    </ul>
</template>

<script lang="ts" setup>
    import {Ref, ref} from 'vue';
    let countries:Ref<Array<string>> = ref ([
        'Spain','France','UK','Italy','Protugal'
    ])
</script>

<style scoped>

</style>