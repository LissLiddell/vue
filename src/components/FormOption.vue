<template>
    <form>
        <input type="text" v-model="inputText" />
        <input type="checkbox" v-model="agree"/> Acepto Términos y Condiciones
        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="France">Fance</option>
        </select>
    </form>       
</template>


<script lang="ts" setup> //compositionAPi con setup de todos las elementos del template
    import { ref} from 'vue'

    let inputText = ref ('')
    let agree = ref(true)
    let country = ref('Spain')
</script>

<style>

</style>