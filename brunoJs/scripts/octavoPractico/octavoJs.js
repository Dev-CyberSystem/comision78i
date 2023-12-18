// Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se
// podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
// por defecto (10).
// Las funciones serán:
// ■ aniadirContacto(Contacto): Añade un contacto a la agenda, sino la
// agenda no puede almacenar mas contactos indicar por pantalla.
// ■ existeContacto(Conctacto): indica si el contacto pasado existe o no.
// ■ listarContactos(): Lista toda la agenda
// ■ buscarContacto(nombre): busca un contacto por su nombre y muestra
// su teléfono.
// ■ eliminarContacto(Contacto): elimina el contacto de la agenda, indica
//  si se ha eliminado o no por pantalla
// ■ agendaLlena(): indica si la agenda está llena.
// ■ huecosLibres(): indica cuántos contactos más podemos ingresar.
// Usar LocalStorage para guardar la info de la agenda y para consultar sus
// datos
let listaContactos = []
const formContacto = document.getElementById("formAddContact")
const inputNameContact = document.getElementById("nameContac")
const inputPhoneContact = document.getElementById("phoneContact")
const buttonAddContact = document.getElementById("addContact")
/*                 ------------                             */
const formFind = document.getElementById("formFindContact")
const inputfindName = document.getElementById("findName")
const btnSearch = document.getElementById("searchBtn")


class Contact {
    constructor(name, phone) {
        this._name = name
        this._phone = phone

    }

    get getName() {
        return this._name
    }
    set setName(name) {
        this._name = name
    }

    get getPhone() {
        return this._phone
    }
    set setPhone(phone) {
        this._phone = phone
    }

}
buttonAddContact.addEventListener("click", e => {
    e.preventDefault();
    const name = inputNameContact.value.toLowerCase().trim()
    const phone = inputPhoneContact.value.toLowerCase().trim()
    if (inputNameContact.value === "" || inputPhoneContact.value === "") {
        alert("Debes ingresar todos los campos")
    }
    else {
        listaContactos.push(
            new Contact(name, phone))
    }
    formContacto.reset()
    console.log(listaContactos)
})

function findContact() {

}


btnSearch.addEventListener("click", e => {
    e.preventDefault();
    const filter = inputfindName.value
    const contact = listaContactos.filter(contacto => contacto.getName == filter)
    formAddProduct.reset();
    console.log(contact)
})

