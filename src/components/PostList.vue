<template>
    <div class="container">
        <!-- props: Comunicacion Vertical Desc (de padre a hijo)-->
        <!-- title="" es un props -->
        <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content"/>
    </div>
    
</template>

<script lang="ts" setup>
    import PostDetail from './PostDetail.vue'
    // interface de contenido de parrafo
    interface IPost {
        title: string,
        content: string
    }

    let info:Array<IPost> = 
        [
            {
                title: "Este es el post 1", 
                content: "Texto de ejemplo 1"
            },
            {
                title: "Este es el post 2", 
                content: "Texto de ejemplo 2"
            },
            {
                title: "Este es el post 3", 
                content: "Texto de ejemplo 3"
            },
            {
                title: "Este es el post 4", 
                content: "Texto de ejemplo 4"
            },
            {
                title: "Este es el post 5", 
                content: "Texto de ejemplo 5"
            }
        ]
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>