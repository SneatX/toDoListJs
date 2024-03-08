import {mostrarTareas} from "./mostrarTareas.js"
import { tareas } from "./variables.js"

export function tacharTarea(value){
    tareas[value][1] ? tareas[value][1] = false : tareas[value][1] = true
    mostrarTareas()
}
