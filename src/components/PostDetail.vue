<template>
    <div class="post">
    <h3>{{ props.title}}</h3>
    <p>{{ props.content }}</p>        
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent ({
        name: 'PoastDetail',
        // definición de prop
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
        setup(props, ctx) {
            return { props }
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