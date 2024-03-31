<template>

    <!--v-if:Pintar o no pintar nodo en virtual dom VS v-show:Pintando todos los nodos en virtual dom pero con css lo oculta-->
    <h1 v-if="age < 18"> Eres menor de edad</h1>
    <h1 v-else> Eres mayor de edad</h1>

    <h2 v-show="age < 18"> Eres menor de edad</h2>
    <h2 v-show="age > 18"> Eres mayor de edad</h2>

    <!-- v-if cuando el pintado se pinte pocos veces-->
    <!-- v-show cuando el render sea muy frecuente-->

</template>

<script lang="ts" setup>
    let age = 15
</script>

<style scoped>
</style>