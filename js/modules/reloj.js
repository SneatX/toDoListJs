import * as variables from "./variables.js";

export function actualizarReloj() {
    const horarioActual = new Date();
    let hora = horarioActual.getHours();
    let minutos = horarioActual.getMinutes();
    let segundos = horarioActual.getSeconds();
    let fecha = obtenerFechaEnPalabras(horarioActual);

    hora = hora > 12 ? hora - 12 : hora; //para que no sea hora militar

    //Formateo de la salida de la hora
    hora = formatearParteHora(hora);
    minutos = formatearParteHora(minutos);
    segundos = formatearParteHora(segundos);

    variables.reloj.innerText = `${hora}:${minutos}:${segundos}`;
    variables.calendario.innerText = `${fecha}`;

}

function formatearParteHora(parteHora) {
    return parteHora < 10 ? "0" + parteHora : parteHora;
}

function obtenerFechaEnPalabras(fecha) {
    const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
    const formatoFecha = new Intl.DateTimeFormat('es-ES', opciones);
    return formatoFecha.format(fecha);
}