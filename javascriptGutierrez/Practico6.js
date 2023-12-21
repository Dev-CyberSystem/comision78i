//Tarea

// ○ Nos piden realizar una agenda telefónica de contactos.
// ○ Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.
// ○ Una agenda de contactos está formada por un conjunto de contactos. Se
// podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
// por defecto (10).
// ○ Las funciones serán:
// ■ aniadirContacto(Contacto): Añade un contacto a la agenda, sino la
// agenda no puede almacenar mas contactos indicar por pantalla.
// ■ existeContacto(Conctacto): indica si el contacto pasado existe o no.
// ■ listarContactos(): Lista toda la agenda
// ■ buscarContacto(nombre): busca un contacto por su nombre y muestra
// su teléfono.
// ■ eliminarContacto(Contacto): elimina el contacto de la agenda, indica
// si se ha eliminado o no por pantalla
// ■ agendaLlena(): indica si la agenda está llena.
// ■ huecosLibres(): indica cuántos contactos más podemos ingresar.
// ○ Usar LocalStorage para guardar la info de la agenda y para consultar sus
// datos
import agenda  from "./exportP6.js"
console.log(agenda)

const botonAgregar = document.getElementById("btnAgregar")
const botonExiste = document.getElementById("btnExiste")
const botonBuscar = document.getElementById("btnBuscar")
const nomAgregar = document.getElementById("nomAgregar")
const telAgregar = document.getElementById("telAgregar")
const nomExiste = document.getElementById("nomExi")
const nomBuscar = document.getElementById("nomBuscar")
const formAgregar = document.getElementById("formAgregar")
const formBuscar = document.getElementById("formBuscar")
const formExiste = document.getElementById("formExiste")
const lista = document.querySelector("ol")
const parrafo = document.getElementById("parrafo")
const mensaje = document.getElementById("mensaje")
const mensajeEx  = document.getElementById("mensajeEx")
const otroMens = document.getElementById("otroMensaje")



if (agenda.length == 0) {
    agenda = JSON.parse(localStorage.getItem("Contactos"))
}

const agendaLlena = () =>
{
    parrafo.textContent = "La agenda está llena"
}

const listarContactos = () =>
{
    lista.innerHTML = ""
    let array = JSON.parse(localStorage.getItem("Contactos")) 
    array.forEach((contacto, index) => {
        let li = document.createElement("li")
            li.textContent = contacto.nombre + ", " + contacto.telefono 
            lista.appendChild(li)
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", () => {
               eliminarContacto(index);
            //    lista.removeChild(li);
               otroMens.textContent = `Se eliminó el contacto ${contacto.nombre}`;
            })

      li.appendChild(botonEliminar);
    })
}
   
listarContactos()

const aniadirContacto = () =>
{
    let nom = nomAgregar.value
    let tel = telAgregar.value
    let contacto =
    {
        nombre: nom,
        telefono: tel
    }
    if(agenda.length < 10)
    {
      agenda.push(contacto)
      localStorage.setItem("Contactos", JSON.stringify(agenda))
      formAgregar.reset()
      listarContactos()
      console.log(agenda)
    }else{
        agendaLlena()
        formAgregar.reset()
    }
}

const existeContacto = () =>
{
    let busqueda = nomExiste.value
    busqueda = busqueda.toLowerCase()
    const buscando = agenda.find(item => item.nombre.toLowerCase() == busqueda)
    if(buscando)
    {
        mensajeEx.textContent = "Si existe!!" 
    }else{
        mensajeEx.textContent = "No existe buuu"
    }
    formExiste.reset()
}

function buscarContacto(busqueda)
{
    busqueda = busqueda.toLowerCase()
    const buscando = agenda.find(item => item.nombre.toLowerCase() == busqueda)
    if(buscando)
    {
        mensaje.textContent = "Se ha encontrado el contacto ´" + busqueda + "´, telefono: " + buscando.telefono

    }else{
        mensaje.textContent = "No se encontró el contacto de nombre ´" + busqueda + "´"
    }
    formBuscar.reset()
}
    
 

const eliminarContacto = (indice) =>
{
    agenda.splice(indice, 1)
    localStorage.setItem("Contactos", JSON.stringify(agenda))
    listarContactos()
    console.log(agenda)
}


function huecosLibres() {
    otroMens.textContent = "Quedan " + (10 - agenda.length) + " lugares" 
}

huecosLibres()

botonAgregar.addEventListener("click", (event) =>{
    event.preventDefault()
    aniadirContacto()
    
})

botonExiste.addEventListener("click", (event) =>{
    event.preventDefault()
    existeContacto()
})

botonBuscar.addEventListener("click", (event) =>{
    event.preventDefault()
    let nombre = nomBuscar.value
    buscarContacto(nombre)
})