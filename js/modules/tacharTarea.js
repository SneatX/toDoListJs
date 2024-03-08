import {mostrarTareas} from "./mostrarTareas.js"
import { tareas } from "./variables.js"

export function tacharTarea(value){
    tareas[value][1] = true
    mostrarTareas()
}
