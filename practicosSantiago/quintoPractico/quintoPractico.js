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

const database = window.localStorage
const formAgregarContactos = document.getElementById("form-add-contactos")
const inputAgregarContactosNombre = document.getElementById("addContactName") 
const inputAgregarContactosNumero = document.getElementById("addContactNumber")
const botonAgregarContacto = document.getElementById("btn-addContact") 
const listaContactos = document.getElementById("listaDeContactos")
const formBusquedaContacto = document.getElementById("form-search-contactos")
const inputBusqueda = document.getElementById("searchContactName")
const botonBusqueda = document.getElementById("btn-srchContact")
const resultadoDeBusqueda = document.getElementById("resultadoBusqueda")
const formEncuentroContacto = document.getElementById("form-encontrar-contactos")
const inputEncontrar = document.getElementById("findContactName")
const botonEncontrar = document.getElementById("btn-findContact")
const resultadoEncontrar = document.getElementById("resultadoEncontrado")
const huecosLibresAgenda = document.getElementById("huecosLibresDeAgenda")
const estadoDeAgenda = document.getElementById("agendaEstado")

let contactos = {}

const guardarContactoDB = (db, contactoAGuardar) => {
    db.setItem(contactoAGuardar.id, JSON.stringify(contactoAGuardar))
} // Creo primero una función para poder guardar los contactos como strings en el localstorage

botonAgregarContacto.addEventListener("click", (event) => {
    event.preventDefault();
    const nombreContacto = inputAgregarContactosNombre.value.toLowerCase()
    const numeroContacto = parseInt(inputAgregarContactosNumero.value)
    let contactosEnDB = Object.keys(database)
    if (contactosEnDB.length === 10 ) {
        return Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "SE ALCANZÓ EL LIMITE DE CONTACTOS DE LA AGENDA (10 contactos)",
            footer: 'Probá borrando contactos'
          });
    }

    for (let id of contactosEnDB) {
        let contacto = JSON.parse(database.getItem(id))
        if (nombreContacto === contacto.nombre) {
            return Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "NO SE PUEDEN AGREGAR CONTACTOS CON EL MISMO NOMBRE",
                footer: 'Probá con otro nombre'
              });
        }
    }

    if (inputAgregarContactosNombre.value === "" || inputAgregarContactosNumero.value === "") {
        return Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "NO SE PUEDE AGREGAR UN CONTACTO CON SU NOMBRE O NUMERO VACIO",
          });
    } else {
        contactos = {
            nombre: nombreContacto,
            numTel: numeroContacto,
            id: Math.random(1, 100)
        }
        guardarContactoDB(database, contactos)
        listarContactos()
        huecosLibres()
        agendaLlena()
    }
    console.log(contactos)
    formAgregarContactos.reset()
    // En este event listener del boton para agregar contactos, cada vez que se agregue uno se lo guarda en localstorage
    // haciendo uso de la funcion anterior, les coloco un ID Random (que no se va a ver por el usuario en la pagina) para luego
    // poder identificarlos en el local storage
})

const listarContactos = () => {
    listaContactos.innerHTML = ""
    let idsContactos = Object.keys(database)
    for (id of idsContactos) {
        let contacto = JSON.parse(database.getItem(id))
        const li = document.createElement("li")
        li.textContent = `NOMBRE: ${contacto.nombre} - NUM. TELEFONO: ${contacto.numTel}`
        listaContactos.appendChild(li)
        const botonEliminarContacto = document.createElement("button")
        botonEliminarContacto.textContent = "Borrar Contacto"
        li.appendChild(botonEliminarContacto)
        botonEliminarContacto.addEventListener ("click", () => {
            eliminarContacto(database, contacto)
            listarContactos()
            huecosLibres()
            agendaLlena()
        })
    }
}
listarContactos()

const eliminarContacto = (database, contacto) => {
    database.removeItem(contacto.id)
}

const buscarContacto = (contactoAIngresar) => {
    contactoAIngresar = contactoAIngresar.toLowerCase()
    let contactos = Object.keys(database)
    let encontrado = false
    for (let id of contactos) {
        let contacto = JSON.parse(database.getItem(id))
        if (contactoAIngresar === contacto.nombre) {
            resultadoDeBusqueda.textContent = "Se ha encontrado a " + contactoAIngresar + ", su número de telefono es " + contacto.numTel
            encontrado = true
            break
        }
    }
    if (!encontrado) {
        resultadoDeBusqueda.textContent = "No se ha podido encontrar a " + contactoAIngresar + " en la agenda."
    }
}

botonBusqueda.addEventListener ("click", (e) => {
    e.preventDefault()
    const contactoIngresado = inputBusqueda.value.toLowerCase()
    buscarContacto(contactoIngresado)
})

const encontrarContacto = (contactoAIngresar) => {
    contactoAIngresar = contactoAIngresar.toLowerCase()
    let contactos = Object.keys(database)
    let encontrado = false
    for (let id of contactos) {
        let contacto = JSON.parse(database.getItem(id))
        if (contactoAIngresar === contacto.nombre) {
            resultadoEncontrar.textContent = "El contacto " + contactoAIngresar + " SI existe en la agenda."
            encontrado = true
            break
        }
    }
    if (!encontrado) {
        resultadoEncontrar.textContent = "El contacto " + contactoAIngresar + " NO existe en la agenda."
    }
}

botonEncontrar.addEventListener ("click", (e) => {
    e.preventDefault()
    const contactoIngresado = inputEncontrar.value.toLowerCase()
    encontrarContacto(contactoIngresado)
})

const agendaLlena = () => {
    let idsContactos = Object.keys(database)
    if (idsContactos.length === 10) {
        estadoDeAgenda.textContent = "TU AGENDA ESTÁ LLENA"
    } else {
        estadoDeAgenda.textContent = "TU AGENDA AUN NO ESTÁ LLENA"
    }
}
agendaLlena()

const huecosLibres = () => {
    let contactosDB = Object.keys(database)
    let numeroHuecosLibres = 10 - contactosDB.length
    huecosLibresAgenda.textContent = "Quedan " + numeroHuecosLibres + " huecos libres en tu agenda."
}
huecosLibres()