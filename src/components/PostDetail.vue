<template>
    <div class="post">
    <h3>{{ props.title}}</h3>
    <p>{{ props.content }}</p>  
    <!-- Comunicacion Vertical Asc conjunto de v-model con variable tipo array y emits usanedo el eve -->  
    <input type="text" v-model="message">
    <button @click="handleClick">Di Hola</button>    
    </div>
</template>

<script lang="ts">
    import { defineComponent, Ref, ref } from 'vue'
    export default defineComponent ({
        name: 'PoastDetail',
        // definición de props comunica padre al hijo
        props: {
            //sintaxis para agregar validación a la información que el padre enviara
            title: {
                type: String,
                required: true
            },
            content : {
                type: String,
                required: false,
                default: "Este post no tiene contenido"
            }
        },
        //emit comunica hijo al padre
        emits: ["sayHi"],
        setup(props, { emit }) {
            // usa evento sayHi de padre y le pasa el parametro de message
            const handleClick = () => {
               emit("sayHi", message.value) 
            }
            let message: Ref<string> = ref("")
            return { props, handleClick , message}
        }
    })
</script>

<style scoped>
.post{
    width: 300px;
    border-radius: 10px;
    height: 200px;
    background-color: antiquewhite;
    margin: 10px;
    padding: 10px;
}
</style>