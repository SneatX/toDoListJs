import {tareas, contenedorTareas, titleTareas} from "./variables.js"

export function mostrarTareas(){
    if(tareas.length > 0){
        titleTareas.textContent = `Tareas pendientes: ${tareas.length}`
    }else{
        titleTareas.textContent = ""
    }

    let strHTML = ""
    for(let i = 0 ; i < tareas.length ; i++){
        strHTML += `
        <li>
            <i class="far fa-circle co" value="${i}"></i>
            <p>${tareas[i]}</p>
            <i class="fas fa-trash de" value="${i}"></i>
        </li>
        `
    }
    contenedorTareas.innerHTML = strHTML
}
