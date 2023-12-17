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

let parrafo = document.getElementById("parrafo")

let agenda = fetch(`../json/agenda.json`)
.then((resp=>{
    resp.json().then((data=>{
        console.log(data) 
        localStorage.setItem('Contacto', JSON.stringify(data))
    }))
}))
.catch(console.warn)



class Contacto
{
    constructor(nombre, telefono)
    {
        this._nombre = nombre
        this._telefono = telefono
    }
    get getNombre()
    {
        return this._nombre
    }
}

// const aniadirContacto = () => 
// {

// }

 function existeContacto()
{
    let busqueda = prompt("Escriba el contacto que busca(nombre)")
    fetch(`../json/agenda.json`)
    .then((resp=>{
    resp.json().then((data=>{ 
         let contactito = new Contacto(data.nombre, data.telefono)
         let nombree = JSON.stringify(contactito.getNombre)
            if(busqueda.length == nombree.length)
            {
               if(nombree.every(item => item == busqueda[0]))
               {
                parrafo.textContent = "Se encontró el contacto ${busqueda}"
               }
            }
    }))
    }))
    .catch(console.warn)
}

existeContacto()