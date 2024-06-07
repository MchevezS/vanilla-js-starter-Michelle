let noTieneTarea = document.querySelector('.noTieneTarea');
let tareascompletadas = document.getElementById("contador")


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
        p.classList.add("cuadrito")
        let div = document.createElement("div")
        div.innerHTML = variable.nombre
        
        const checkbox = document.createElement("input")
        inputtareas.value = "";
        
        noTieneTarea.style.display = "none";   // desaperece el texto no tienes tareas
        checkbox.type = "checkbox"
        
        let botonEliminar = document.createElement("button")
        botonEliminar.classList.add("espacio")
        botonEliminar.innerHTML=  "🗑️"

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
export {Datos, darDatos, modificadorTareas, removedorTarea }