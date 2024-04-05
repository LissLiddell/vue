<template>
    <form>
        <input type="text" v-model="inputText" />
        <input type="checkbox" v-model="agree"/> Acepto Términos y Condiciones
    </form>
    <!-- para verificar que lo capturado en el input lo esta referenciando la variable input text-->
    <h3>{{ inputText }}</h3>
</template>

<script lang="ts"> 
    import { Ref,defineComponent} from 'vue'

    //let inputText:Ref<string> = ref ('')

// optionAPI 
 export default defineComponent({
  data (){
      return { 
        inputText: '',
        agree: true
    }
  } 
})
</script>

<style scoped>

</style>

