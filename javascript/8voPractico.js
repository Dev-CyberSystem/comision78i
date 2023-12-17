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

//                    ---------------------------------------------------
const agenda = []
const formAddContacto = document.getElementById("form-add-contacto")
const inputAddContactoName = document.getElementById("addContactoName")
const inputAddContactoNumber = document.getElementById("addContactoNumber")
const buttonAddContacto = document.getElementById("buttonAddContacto")
const listaContacto = document.getElementById("listaContacto") 
const existeElContacto = document.getElementById("existeElContacto")
const tamañoMaximo = 10 //el tope maximo de contactos que puede tener la agenda.

const formBuscarContacto = document.getElementById("form-buscar-contacto")
const inputBuscarNameContacto = document.getElementById("buscarNameContacto")
const buttonBuscarContacto = document.getElementById("buttonBuscarContacto")
const reusltadoEncontrado = document.getElementById("resultadoEncontrado")
//Función 1 (princial)
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
  else if(contactoExiste(nameContacto , numberContacto)) {
    existeElContacto.textContent= "El contacto ya existe en la agenda."
  } 
  else if (agenda.length === tamañoMaximo) {//se indica si la agenda ya esta llena. 
    alert("La agenda está llena. Tiene " + agenda.length + " contactos.")
    console.log("La agenda está llena.")
    return
  } 
  else{
    // si todos los datos son válidos, se agrega el contacto.
    agenda.push([nameContacto, numberContacto])
    console.log(agenda)
    listarContactos()
    //verificarTamañoAgenda()
    existeElContacto.textContent = ""// Limpiar el mensaje de error si existe.
  }
}
)
//Función 2
const listarContactos = () => {
  listaContacto.innerHTML = ""
  for (let i = 0; i < agenda.length; i++){
    const [nameContacto, numberContacto] = agenda[i];// se le asigna el valor agenda[i] tanto nameContacto como numberContacto.
    const li = document.createElement("li")
    li.textContent = `${nameContacto} , ${numberContacto}`
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.addEventListener("click" ,() => {
      eliminarContacto(agenda, [nameContacto, numberContacto])//se establece asi por que agenda contiene tanto el nombre y teléfono.
      listaContacto.removeChild(li)

    })
    li.appendChild(botonEliminar)// se agrega a cada li el boton eliminar.
    listaContacto.appendChild(li)
  }
}
//Verificar el tamaño de la agenda.
//const verificarTamañoAgenda = () => {
//}
//Función 3 
const contactoExiste = (nameContacto, numberContacto) => {
  return agenda.some(contacto => contacto[0]=== nameContacto && contacto[1] === numberContacto);
} //se estable la posición 0 que indica el primer elemento del contacto que es el nombre y la posición 1 seria el teléfono.

//                     ----------------------------------------------------

buttonBuscarContacto.addEventListener("click", (event) => {
  event.preventDefault()
  const nameAbuscar = inputBuscarNameContacto.value.toLowerCase().trim()
  console.log(nameAbuscar)
  const contactoEncontrado = encontrarContacto(nameAbuscar);
  if (contactoEncontrado) { 
   reusltadoEncontrado.textContent = `El teléfono de ${nameAbuscar} es: ${contactoEncontrado[1]}`//se indica la pisición 1 que es el teléfono.
  }else {    
   reusltadoEncontrado.textContent = `No se encontró el contacto con el nombre ${nameAbuscar}`
  }
}
)
function encontrarContacto(nameAbuscar) {
  return agenda.find(contacto => contacto[0]=== nameAbuscar);//.find busca el primer elemento de un array, en este caso es contacto que tiene como primer propiedad nombre por eso esta en la posición 0.
} 
function eliminarContacto(listaContacto , contactoAeliminar) {//contactoAeliminar hace referencia a el nombre y teléfono.
const indice = listaContacto.indexOf(contactoAeliminar)
if (indice !== -1) {
listaContacto.splice(indice, 1);
console.log(`Contacto '${contactoAeliminar[0]}' eliminado.`);
}
}
