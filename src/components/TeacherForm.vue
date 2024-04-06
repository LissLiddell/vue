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
        <button @click="handleAddTeacher">Agregar</button>
    </section>

    <section>
        <h3>Listado de profesores</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido Materno</th>
                <th>Apellido Paterno</th>
                <th>DNI</th>
                <th>Materias</th>
                <th>Documentacion entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <th> {{ elm.teacherName }}</th>
                <th> {{ elm.lastName1 }}</th>
                <th> {{ elm.lastName2 }}</th>
                <th> {{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item,index) in elm.subjects" :key="index">{{ item }}</li>
                    </ul>
                </th>
                <th v-if="elm.doc">Entregada</th>
                <th v-else>No entregada</th>
            </tr>
        </table>
    </section>
</template>

<script lang="ts" setup>
    import { RefSymbol } from '@vue/reactivity';
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
        subject.value = ""
    }

    const handleAddTeacher = () => {
        teachers.value.push({
            teacherName: teacher.value.teacherName ,
            lastName1: teacher.value.lastName1 ,
            lastName2: teacher.value.lastName2,
            dni: teacher.value.dni,
            subjects: teacher.value.subjects ,
            doc: teacher.value.doc
        })
        teacher.value.teacherName = ""
        teacher.value.lastName1 = ""
        teacher.value.lastName2 = ""
        teacher.value.dni = ""
        teacher.value.subjects = []
        teacher.value.doc = false        
    }
        
</script>

<style scoped>

</style>
