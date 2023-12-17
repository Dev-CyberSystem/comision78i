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

const formAniadirContacto = document.getElementById('formAniadirContacto')
const formBuscarContacto = document.getElementById('formBuscarContacto')
const inputNombre = document.getElementById('inputNombre')
const inputNumero = document.getElementById('inputNumero')
const inputEliminarContacto = document.getElementById('inputEliminarContacto')
const inputBuscarContacto = document.getElementById('inputBuscarContacto')

const aniadirContacto = document.getElementById('aniadirContacto')
const listarContactos = document.getElementById('listarContactos')
const huecosLibres = document.getElementById('huecosLibres')
const eliminarContacto = document.getElementById('eliminarContacto')
const buscarContacto = document.getElementById('buscarContacto')

const contactos = []

aniadirContacto.addEventListener('click', (event) => {
  event.preventDefault()

  if (inputNombre.value == "" || inputNumero.value == "") {
    return alert('No se puede agregar un contacto vacío')
  } else if (inputNumero.value == localStorage.getItem(`${inputNombre.value}`)) {
    return alert('El contacto ya existe')
  } else if (localStorage.length < 10) {
    const nombre = inputNombre.value.toLowerCase().trim()
    const numero = inputNumero.value
    localStorage.setItem(nombre, numero)
    console.log('Contacto añadido');
    formAniadirContacto.reset()
  } else {
    return alert('La agenda de contactos está llena')
  }
})

listarContactos.addEventListener('click', listaDeContactos)
huecosLibres.addEventListener('click', huecosLibresAniadir)
eliminarContacto.addEventListener('click', eliminarContactoXD)
buscarContacto.addEventListener('click', buscarContactos)

function buscarContactos() {
  const busqueda = inputBuscarContacto.value
  if (localStorage.getItem(inputBuscarContacto.value) == null) {
    alert('El contacto no existe')
  } else {
    return alert(`${busqueda}: ${localStorage.getItem(inputBuscarContacto.value)}`)
  }
}

function eliminarContactoXD() {
  if (inputEliminarContacto.value == "") {
    return alert('Debe seleccionar un contacto a eliminar')
  } else if (localStorage.getItem(inputEliminarContacto.value) == null) {
    return alert('Contacto no encontrado')
  } else {
    localStorage.removeItem(inputEliminarContacto.value)
    alert('Contacto eliminado correctamente')
  }
}

function listaDeContactos() {
  if (localStorage.length == 0) {
    return alert('No existen contactos')
  } else {
    return alert(JSON.stringify(localStorage))
  }
}

function huecosLibresAniadir() {
  let numeroDeContactos = localStorage.length
  if (localStorage.length < 10) {
    alert(`Podés agregar ${10 - numeroDeContactos} contactos más`)
  } else {
    alert('La agenda de contactos está llena');
  }
}