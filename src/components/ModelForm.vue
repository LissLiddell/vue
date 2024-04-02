<template>
    <form>
        <input type="text" v-model="inputText" />
    </form>
    <!-- para verificar que lo capturado en el input lo esta refereciando la variable input text-->
    <h3>{{ inputText }}</h3>
</template>

<script lang="ts" setup>
    import { Ref,ref} from 'vue'

    let inputText:Ref<string> = ref ('')

// optionAPI 
// export default defineCompoenent({
//   data (){
//       return { inputText: ''}
//} 
//})
</script>

<style scoped>

</style>

