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
//------------------------------------------------------------------------------------------------------
//Method GET 
async function Datos() {
try {
    contenedorDeTareas.innerHTML=""
    const respuesta = await fetch("http://localhost:3000/api/task")
    const Datos = await respuesta.json()
      console.log(Datos);
    Datos.forEach(variable=>{
        let p = document.createElement("p")
        p.innerHTML= variable.nombre
        let div = document.createElement("div")
        div.innerHTML = variable.nombre
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        let contenedorDeTareas = document.getElementById("contenedorDeTareas")
        let botonEliminar = document.createElement("button")
        botonEliminar.innerHTML="Eliminar"

        div.appendChild(checkbox)
        div.appendChild(p)
        p.appendChild(checkbox)
        p.appendChild(botonEliminar)
        contenedorDeTareas.appendChild(p)
        

    })
} catch (error) {
    console.error(error);
 }   
}
Datos()

// Method POST
async function darDatos () {
    try {
        let obtenerTarea = {
          id: Date.now(),
          nombre: inputtareas.value,
          estado: false
        }
        const respuesta = await fetch("http://localhost:3000/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
               body: JSON.stringify(obtenerTarea)
        })
     console.log(`La tarea ${obtenerTarea.id} fue agregada`);
     let datos = await respuesta.json()
     console.log(datos);
     Datos()
    } catch (error) {
        console.error(error);
    }
}

// Method Put
async function modificadorTareas (id) {
    try {
    let modificarDatos = {
        estado: true
    }
    const respuestaDatos = await fetch(`http://localhost:3000/api/task/${id}`, {
        method: "PUT",
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(modificarDatos)
    })
    console.log(`La tarea ${modificarDatos.id} fue agregada...`)
    let ModificadorDeDatos = await respuestaDatos.json()
    console.log(ModificadorDeDatos);
    darDatos()
} catch (error) {
        console.error(error);
    }
}
// Method Delete
async function removedorTarea(id) {
    try{
    const RespuestaRemovedor = await fetch(`http://localhost:3000/api/task/${id}`, {
    method: "DELETE",
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    },
})
    let tarea = await RespuestaRemovedor.json()
    console.log(tarea);
    modificadorTareas()
   } catch (error) {
       console.error(error);
    } 
}
btnAgregarTarea.addEventListener("click",()=>{
    darDatos()
})