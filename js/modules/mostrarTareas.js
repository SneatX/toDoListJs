import {contenedorTareas, titleTareas} from "./variables.js"
import { tareas } from "./variables.js"

export function mostrarTareas(){
    if(tareas.length > 0){
        titleTareas.textContent = `Tareas pendientes: ${tareas.length}`
    }
    else{
        titleTareas.textContent = ""
    }

    let strHTML = ""
    for(let i = 0 ; i < tareas.length ; i++){
        if(tareas[i][1]){
            strHTML += `
            <li class="tacharContainer">
                <i class="fas fa-circle" value="${i}"></i>
                <p class="tacharTexto">${tareas[i][0]}</p>
                <i class="fas fa-trash de" value="${i}"></i>
            </li>
        `
        }
        else{
            strHTML += `
            <li>
                <i class="far fa-circle co" value="${i}"></i>
                <p>${tareas[i][0]}</p>
                <i class="fas fa-trash de" value="${i}"></i>
            </li>
            `
        }
    }
    contenedorTareas.innerHTML = strHTML
}

