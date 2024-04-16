<template>
    <div class="post">
        <h3>{{ props.title}}</h3>
        <p>{{ props.content }}</p>  
        <!-- Comunicacion Vertical Asc conjunto de v-model con variable tipo array y emits usando el eve -->  
        <input type="text" v-model="message">
        <button @click="handleClick">Di Hola</button>    
    </div>
</template>

<script lang="ts" setup>
    import { defineProps, defineEmits, Ref, ref } from 'vue'
        const props = defineProps({title: String,content: String})
        const emit = defineEmits(['sayHi']) 
        // usa evento sayHi de padre y le pasa el parametro de message
        const handleClick = () => {
            emit("sayHi", message.value) 
        }
        let message: Ref<string> = ref("")
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