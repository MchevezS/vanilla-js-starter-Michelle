// Aqui voy a Insertar todas las variables
let btnAgregarTarea = document.getElementById("btnAgregarTarea")
let inputtareas = document.getElementById("inputtareas")
let tareascompletadas = document.getElementById("contador")
let noTieneTarea = document.querySelector('.noTieneTarea');
import { Datos } from "./src/tareas";
import { darDatos } from "./src/tareas";
import { modificadorTareas } from "./src/tareas";
import { removedorTarea } from "./src/tareas";
import {TareasGuardadas} from "./src/buscador";

// aqui voy a validar el input de donde voy a ingresar el texto o las tareas//
function validarInput() {
    if (inputtareas.value != "   ") {
        return true
    }
    return false;
} 

//aqui voy a validar el boton de agregar tarea //
btnAgregarTarea.addEventListener('click', function () {
    if (inputtareas.value!=" "=== "") {
        darDatos()
    }else{
        alert("ERROR, INGRESE SU TAREA")
    }
}) 

// click Enter
inputtareas.addEventListener("keydown",(e)=>{

    if (e.key=="Enter"  ) {
        if (inputtareas.value.trim()!="") {
            
            darDatos()
        }else{
            alert("INGRESE SU TAREA")
        }
    }
})




 