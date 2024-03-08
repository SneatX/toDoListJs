import { botonAgregar, contenedorTareas, input } from "./modules/variables.js"
import { actualizarReloj } from './modules/reloj.js';
import { agregarTarea } from './modules/agregarTarea.js'; 
import { eliminarTarea } from "./modules/eliminarTarea.js"


botonAgregar.addEventListener("click", (event) => {
    event.stopPropagation()
    agregarTarea()
    input.value = ""
})

contenedorTareas.addEventListener("click" , (event) => {
    event.stopPropagation()
    let elementoClickeado = event.target
    if (elementoClickeado.classList.contains("fa-trash")) {
        let value = elementoClickeado.getAttribute("value")
        eliminarTarea(value)
    }
    else if(elementoClickeado.classList.contains("fa-circle")){
        let value = elementoClickeado.getAttribute("value")
        
    }

    // eliminarTarea(value)
})

setInterval(actualizarReloj, 1000);
