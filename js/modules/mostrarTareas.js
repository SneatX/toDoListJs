import {tareas, contenedorTareas} from "./variables.js"

export function mostrarTareas(){
    let strHTML = ""
    for(let i = 0 ; i < tareas.length ; i++){
        strHTML += `
        <li>
            <i class="far fa-circle co" id="tareaCompleta${i}"></i>
            <p>${tareas[i]}</p>
            <i class="fas fa-trash de" id="tareaCompleta${i}"></i>
        </li>
        `
    }
    contenedorTareas.innerHTML = strHTML
}
