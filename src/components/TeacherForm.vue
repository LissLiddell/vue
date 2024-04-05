<template>
    <section>
        <h3>Añadir profesor</h3>
        <div><label>Nombre:</label> <input type="text" v-model="teacher.teacherName" /></div>
        <div><label>Apellido Materno:</label> <input type="text" v-model="teacher.lastName1" /></div>
        <div><label>Apellido Paterno:</label> <input type="text" v-model="teacher.lastName2" /></div>
        <div><label>DNI / NIF:</label> <input type="text" v-model="teacher.dni" /></div>
        <div><label>Materias:</label> <input type="text" v-model="subject" /> <button @click="handleSubject">Agregar</button></div>
        <div>
            <ul>
                <li v-for="(elm,index) in teacher.subjects" :key="index"> {{ elm }}</li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc" /> Documentacion Entregada
        <button>Agregar</button>
    </section>

    <section>
        <h3>Listado de profesores</h3>

    </section>
</template>

<script lang="ts" setup>
    import { Ref, ref } from 'vue'
//Modelo de gestion de info que se escribe en el formulario
    //ts
    interface ITeacher {
    teacherName: string,
    lastName1: string,
    lastName2: string,
    dni: string,
    subjects: Array<string>,
    doc: boolean   
    }

    //js
   let teacher:Ref<ITeacher> = ref ({
        teacherName: '',
        lastName1: '',
        lastName2: '',
        dni: '',
        subjects: [], //arreglo
        doc: false
    })

// Arreglo de materias para profesores
    let teachers:Ref<Array<ITeacher>> = ref([])

    let subject:Ref<string> = ref('')

// insertar materia a arreglo materias
    const handleSubject = () => {
        teacher.value.subjects.push(subject.value)
    }
        
</script>

<style scoped>

</style>
