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

   // Method post
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
btnAgregarTarea.addEventListener("click",() =>{ 
    darDatos()
})

      // Method Put
      
