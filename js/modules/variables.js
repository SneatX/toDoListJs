//Variables para el manejo del DOM
export const reloj = document.getElementById("fecha")
export const botonAgregar = document.getElementById("agregarTarea")
export const input = document.getElementById("input")
export const contenedorTareas = document.getElementById("tareasPendientes")
export const titleTareas = document.getElementById("titleTareas")



//Variables para la logica del sistema
import { mostrarTareas } from "./mostrarTareas.js"

export let tareas
let data = localStorage.getItem("tareas")
if(data){
    tareas = JSON.parse(data)
    mostrarTareas()
}
else{
    tareas = []
}