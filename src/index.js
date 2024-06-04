// Aqui voy a Insertar todas las variables
let btnAgregarTarea = document.getElementById("btnAgregarTarea")
let inputtareas = document.getElementById("inputtareas")



// aqui voy a validar el input de donde voy a ingresar el texto cy lo voy a guardar//
function guardarTareas() {
    //voy a obtener el valor del input
    let valorinput = document.getElementById("inputtareas").value;
    // Aqui lo voy aguardar en la variable  agregarTarea
    let GuardarTareas  = document.getElementById("btnAgregarTarea").value;
     GuardarTareas = valorinput;
    alert('se ha guardado una tarea')
    console.log("GuardarTareas");
}
   


//aqui voy a validar el boton de agregar tarea //
btnAgregarTarea.addEventListener('click', function () {
     alert('Le has dado click al btnagregartarea')
}) 
