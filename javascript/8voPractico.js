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
const listaContacto = document.getElementById("listaContacto") 
const existeElContacto = document.getElementById("existeElContacto")
//Función 1
buttonAddContacto.addEventListener("click", (event) => {
  event.preventDefault()
  //se crean estas constantes para asignarle lo que ingresa de ambos input que luego quedan guardados en la constante agenda.
  const nameContacto = inputAddContactoName.value.toLowerCase().trim()
  const numberContacto = parseInt(inputAddContactoNumber.value) 
  formAddContacto.reset()//para limpar los input.
  //para verificar si estan bien los datos ingresados.
  if (numberContacto.toString().length !== 10 ) {//toString para volverlo a convertir en cadena asi funcione el length.
    alert("El número de teléfono debe contener 10 dígitos")
  }
  else if(nameContacto === ""){
    alert("Ingrese un Nombre")
  }
  agenda.push([nameContacto, numberContacto])//se establece por array el nombre y número xq un contacto tiene ambos elementos, ya que sin ser array se entiende que un contacto tendra solo nombre y otro solo número.
  console.log(agenda)
  listarContactos()
  contactoExistente(nameContacto, numberContacto)
}
)
//Función 2
const listarContactos = () => {
  listaContacto.innerHTML = ""
  for (let i = 0; i < agenda.length; i++){
    const [nameContacto, numberContacto] = agenda[i];// se le asigna el valor agenda[i] tanto nameContacto como numberContacto.
    const li = document.createElement("li")
    li.textContent = `${nameContacto} , ${numberContacto}`
    listaContacto.appendChild(li)
  }
}