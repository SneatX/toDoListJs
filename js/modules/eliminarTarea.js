import { tareas } from "./variables.js"
import {mostrarTareas} from "./mostrarTareas.js"

export function eliminarTarea(value){
    tareas.splice(value, 1)
    localStorage.setItem("tareas" ,JSON.stringify(tareas))
    mostrarTareas()
}

