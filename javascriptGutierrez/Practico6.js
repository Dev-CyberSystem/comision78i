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
// import { agenda } from "exportP6.js"

let botonAgregar = document.getElementById("btnAgregar")
let botonBuscar = document.getElementById("btnBuscar")
let nomAgregar = document.getElementById("nomAgregar")
let telAgregar = document.getElementById("telAgregar")
let nomBuscar = document.getElementById("nomBuscar")
let formAgregar = document.getElementById("formAgregar")
let formBuscar = document.getElementById("formBuscar")
let parrafo = document.getElementById("parrafo")
let lista = document.querySelector("ol")
let mensaje = document.getElementById("mensaje")

let agenda = []

let agendaJson = fetch(`../json/agenda.json`)
.then((resp=>{
    resp.json().then((data=>{
    localStorage.setItem("Contactos", JSON.stringify(data))
    }))
}))
.catch(console.warn)

agenda = JSON.parse(localStorage.getItem("Contactos"))
localStorage.clear()


const agendaLlena = () =>
{
    mensaje.textContent = "La agenda está llena"
}

const listarContactos = () =>
{
    agenda.forEach(contacto => {
        let li = document.createElement("li")
        li.textContent = contacto.nombre + ", " + contacto.telefono 
        lista.appendChild(li)
    });
}
 
listarContactos()



const aniadirContacto = () =>
{
    nom = nomAgregar.value
    tel = telAgregar.value
    class contacto{
        constructor(nombre, telefono)
        {
            this._nombre = nombre
            this._telefono = telefono
        }
    }

    let otro = new contacto(nom, tel)
    if(agenda.length < 10)
    {
      agenda.push(otro)
      localStorage.setItem("Contactos", JSON.stringify(agenda))
    }else{
        agendaLlena()
    }
    
    
}


function existeContacto(agenda)
{
    let busqueda = nomBuscar.value
    const buscando = agenda.find(item => item.nombre == busqueda)
    if(buscando)
    {
        mensaje.textContent = "Se ha encontrado el contacto" + busqueda

    }
}

botonBuscar.addEventListener("onclick", (event) =>{
    event.preventDefault
existeContacto(agenda)
})

botonAgregar.addEventListener("onclick", (event) =>{
    event.preventDefault
aniadirContacto()
})



