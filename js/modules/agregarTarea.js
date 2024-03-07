import {tareas, input} from "./variables.js"

export function agregarTarea(){
    let data = input.value
    if(data.length > 0){
        tareas.push(data)
    }
    
    console.log(tareas)
}