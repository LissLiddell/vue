import { createApp } from 'vue'
import App from './App.vue'

 const app = createApp(App)

// vue ya agrega el v- antes de nombre de la directiva personalizada
 app.directive('font-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = "70px"
    }
 })

 app.mount('#app')
