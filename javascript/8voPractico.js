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

const agenda = []
const formAddContacto = document.getElementById("form-add-contacto")
const inputAddContactoName = document.getElementById("addContactoName")
const inputAddContactoNumber = document.getElementById("addContactoNumber")
const buttonAddContacto = document.getElementById("buttonAddContacto")
buttonAddContacto.addEventListener("click", (event) => {
  event.preventDefault()
  //se crean estas constantes para asignarle lo que ingresa de ambos input que luego quedan guardados en la constante agenda.
  const nameContacto = inputAddContactoName.value.toLoweCase().trim()
  const numberContacto = parseInt(inputAddContactoNumber.value) 
  formAddContacto.reset()//para limpar los input.
  if (numberContacto.toString().length !== 10 ) {//toString para volverlo a convertir en cadena asi funcione el length.
    alert("El número de teléfono debe contener 10 dígitos")
  }
  if (nameContacto === ""){
    alert("Ingrese un Nombre")
  }
  agenda.push(nameContacto , numberContacto)
  console.log(agenda)
}
)