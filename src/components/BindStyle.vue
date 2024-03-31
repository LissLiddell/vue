<template>
    <p :style="{backgroundColor : '#ccc', color : c}">El mensaje se ha enviado satisfactoriamente.</p>
    <br>
    <!-- v-on o @ es lo-->
    <button @click="handleClick()">Cambiar Color</button>
</template>

<!-- CompositionAPI
<script lang="ts" setup>
    import {ref} from 'vue'
    let c = ref('#fff')
    const handleClick = () => {c.value = '#ff0000'}
</script>
-->

<!-- opctionAPI
<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        data(){
            return{
                c : '#fff'
            }
        },
        methods: {
            handleClick(){
                this.c= '#ff0000'
            }
        }
    })
</script> -->

<!-- compositionAPI sin el setup en script-->
<script lang="ts">
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        setup(){
            let c = ref('#fff')
            const handleClick = ()=> { c.value = "#ff0000"}
            return {c, handleClick}
        }
    })

</script>

<style>

</style>