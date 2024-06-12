

async function TareasGuardadas() {
   
  try {
    const response = await fetch("http://localhost:3000/api/task");
    const datos = await response.json();
    console.log(datos)
    return datos
  } catch (error) {
    
    alert("No se ha encontrado la tarea que deseas buscar")
  }
  
      alert("No se ha encontrado la tarea que deseas buscar")
  

}
export { TareasGuardadas }  