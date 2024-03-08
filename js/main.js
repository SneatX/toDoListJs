import { actualizarReloj } from './modules/reloj.js';
import { agregarTarea } from './modules/agregarTarea.js'; 
import { botonAgregar } from "./modules/variables.js"

botonAgregar.addEventListener("click", () => {
    agregarTarea()
})

setInterval(actualizarReloj, 1000);
