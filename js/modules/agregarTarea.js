import {tareas, input} from "./variables.js"
import { mostrarTareas } from "./mostrarTareas.js"

export function agregarTarea(){
    let data = input.value
    if(data.length > 0){
        tareas.push([data , false])
        mostrarTareas()
    }
}