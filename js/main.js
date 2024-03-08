import { botonAgregar, contenedorTareas, input } from "./modules/variables.js"
import { actualizarReloj } from './modules/reloj.js';
import { agregarTarea } from './modules/agregarTarea.js'; 
import { eliminarTarea } from "./modules/eliminarTarea.js"
import { tacharTarea } from "./modules/tacharTarea.js"



botonAgregar.addEventListener("click", (event) => {
    event.stopPropagation()
    agregarTarea()
    input.value = "" //Vaciar el input
})

contenedorTareas.addEventListener("click" , (event) => {
    event.stopPropagation()
    let elementoClickeado = event.target
    let value = parseInt(elementoClickeado.getAttribute("value"))

    if (elementoClickeado.classList.contains("fa-trash")) {
        eliminarTarea(value)
    }
    else if(elementoClickeado.classList.contains("fa-circle")){
        tacharTarea(value)
    }
})

setInterval(actualizarReloj, 1000);
