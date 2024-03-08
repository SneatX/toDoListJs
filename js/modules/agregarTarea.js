import {input} from "./variables.js"
import { mostrarTareas } from "./mostrarTareas.js"
import { tareas } from "./variables.js"

export function agregarTarea(){
    let data = input.value
    if(data.length > 0){
        tareas.push([data , false])
        localStorage.setItem("tareas" ,JSON.stringify(tareas))
        mostrarTareas()
    }
}