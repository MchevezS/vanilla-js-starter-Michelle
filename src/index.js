// Aqui voy a Insertar todas las variables
let btnAgregarTarea = document.getElementById("btnAgregarTarea")
let inputtareas = document.getElementById("inputtareas")



// aqui voy a validar el input de donde voy a ingresar el texto o las tareas//
function validarInput() {
    let valorInput= document.getElementById("inputtareas").value;
    if (valorInput == "") {
       alert('porfavor agrega una tarea')
       return false;
    }
    return true;
} 

//aqui voy a validar el boton de agregar tarea //
btnAgregarTarea.addEventListener('click', function () {
    validarInput()
}) 

// lo que agregue en el input se me agregue en  la parte de abajo del input//
