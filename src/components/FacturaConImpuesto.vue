<template>
    <!-- usando directiva personalizada font-size-->
    <label v-font-size>SubTotal</label>
    <input type="number" v-model="subtotal"/>
    <h3>Total impuestos a pagar: {{ totalVat  }} ( {{ vat }} %)</h3>
</template>

<script lang="ts" setup>
import { ref, Ref, computed } from 'vue'
    const vat = 21
    let subtotal:Ref<number> = ref(0)
    const totalVat = computed (()=> (vat*subtotal.value) / 100)        
</script>

<style scoped>

</style>
