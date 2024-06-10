let btnbuscar = document.getElementById("btnbuscar")
let inputGuardadas = document.getElementById("inputGuardadas")

async function TareasGuardadas(Nombres) {
    const response = await fetch("http://localhost:3000/api/task");
    const Datos = await response.json();
    
    let Guardadas = Datos.filter(Tareas => Tareas.Nombres === Nombres);
    if (Guardadas.length === 0) {
      alert("No se ha encontrado la tarea que deseas buscar")
    } else {
        // aqui me va a imprimir las tareas que deseo buscar
      Guardadas.forEach(Guardada => {
        alert(`Tus tareas han sido encontradas "${ Guardada.Nombres }"`);
      });
    }
}

btnbuscar.addEventListener("click", () => {
    TareasGuardadas(inputGuardadas.value);
});
export {TareasGuardadas}