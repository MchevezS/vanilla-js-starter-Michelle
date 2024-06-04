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

// si agrego algo en el input se me agregue en  la parte de abajo del input//
function deBajoDelInput(params) {
    
}

//Method Get //
async function Datos() {
try {
    const respuesta = await fetch("http://localhost:3000/api/task")
    const Datos = await respuesta.json()
      console.log(Datos);
    Datos.forEach(variable=>{
        let p = document.createElement("li")
        p.innerHTML= variable.nombre
        let div = document.createElement("div")
        div.innerHTML = variable.nombre
        let checkbox = document.createElement("checkbox")
        checkbox.innerHTML = variable.nombre
        let contenedorDeTareas = document.getElementById("contenedorDeTareas")
        p.appendChild(checkbox)
        div.appendChild(p)
        contenedorDeTareas.appendChild(p)
        

    })
} catch (error) {
    console.error(error);
 }   
}

