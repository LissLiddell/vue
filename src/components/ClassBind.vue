<template>
    <p :class="{'danger' : hasError}">El mensaje se a enviado satisfactoriamente.</p>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      export default defineComponent({
        name: 'ClassBind',
        data(){
            return {
                hasError: true
            }
        }
      })
</script>

<style>
    .danger{
        color: red;
    }
</style>