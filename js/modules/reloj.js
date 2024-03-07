import * as variables from "./variables.js"

export function actualizarReloj(){
    const horarioActual = new Date()
    let hora = horarioActual.getHours()
    let minutos = horarioActual.getMinutes()
    let segundos = horarioActual.getSeconds()

    hora = hora > 12 ? hora -= 12 : hora //para que no sea hora militar

    //Formateo de la salida de la hora
    hora = hora < 10 ? "0" + hora : hora
    minutos = minutos < 10 ? "0" + minutos : minutos
    segundos = segundos < 10 ? "0" + segundos : segundos

    variables.reloj.innerText = hora + ":" + minutos + ":" + segundos;  
}