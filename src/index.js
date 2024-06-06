// Aqui voy a Insertar todas las variables
let btnAgregarTarea = document.getElementById("btnAgregarTarea")
let inputtareas = document.getElementById("inputtareas")
let tareascompletadas = document.getElementById("contador")


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
    let contenedorDeTareas = document.getElementById("contenedorDeTareas")
    console.log("contenedorDeTareas")
    contenedorDeTareas.innerHTML=""
    const respuesta = await fetch("http://localhost:3000/api/task")
    const Datos = await respuesta.json()
      console.log(Datos);
    Datos.forEach(variable=>{
        let p = document.createElement("p")
        p.innerHTML= variable.nombre
        let div = document.createElement("div")
        div.innerHTML = variable.nombre
        const checkbox = document.createElement("input")
        inputtareas.value = "";
        checkbox.type = "checkbox"
        let botonEliminar = document.createElement("button")
        botonEliminar.innerHTML="Eliminar"

        botonEliminar.addEventListener("click",()=>{
            removedorTarea(variable.id)
        })  

        checkbox.checked = variable.estado
                if(checkbox.checked){
                    contador.value++
                }
        div.appendChild(checkbox)
        div.appendChild(p)
        p.appendChild(checkbox)
        p.appendChild(botonEliminar)
        contenedorDeTareas.appendChild(p)
        
        checkbox.addEventListener("click", () => {
            if (checkbox.checked==true) {
                modificadorTareas(variable.id)
                  contador.value++
            }else{
                contador.value--
            }
        })
        
    })
} catch (error) {
    console.error(error);
 }   
}
Datos() 
// para no tener problemas con el contador lo que tengo que hacer es una funcion, dentro de esa funcion voy a crear un for each y despues voy a recorrer el api para que me salga lo que se marca y lo que se desmarca //

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
     location.reload()
    } catch (error) {
        console.error(error);
    }
}

// Method Put
async function modificadorTareas (id) {
    try {
        console.log(id);
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
    //darDatos()
} catch (error) {
        console.error(error);
    }
}

//Method Delete
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
     //modificadorTareas()
    // location.reload()
    location.reload()
    Datos()
     } catch (error) {
         console.error(error);
         } 
         }
         btnAgregarTarea.addEventListener("click",()=>{
             darDatos()
})
             





