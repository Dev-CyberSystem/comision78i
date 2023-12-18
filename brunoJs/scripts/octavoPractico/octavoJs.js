//Tarea

// ○ Nos piden realizar una agenda telefónica de contactos.
// ○ Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.
// ○ Una agenda de contactos está formada por un conjunto de contactos. Se
// podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
// por defecto (10).
// ○ Las funciones serán:
//  listo ■ aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
// ■ existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listo ■ listarContactos(): Lista toda la agenda
// listo ■ buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// listo■ eliminarContacto(Contacto): elimina el contacto de la agenda, indica
// si se ha eliminado o no por pantalla
// ■ agendaLlena(): indica si la agenda está llena.
// ■ huecosLibres(): indica cuántos contactos más podemos ingresar.
// ○ Usar LocalStorage para guardar la info de la agenda y para consultar sus
// datos

const contactos = [];
const cantidadContactos = document.getElementById("catidadDeContactos");
const forminputAddContacto = document.getElementById("forminputAddContacto");
const inputinputAddContacto = document.getElementById("inputAddContacto");
const inputAddNumero = document.getElementById("inputAddNumero")
const buttoninputAddContacto = document.getElementById("buttonAddContacto");
const listaContactos = document.getElementById("listaContactos");
const formBuscarContacto = document.getElementById("formBuscarContacto");
const inputBuscarContacto = document.getElementById("inputBuscarContacto");
const buttonBuscarContacto = document.getElementById("buttonBuscarContacto");
const resultadoBusqueda = document.getElementById("mostrarResultadoBusqueda");
const filtrarProducto = document.getElementById("formFiltrarContacto");
const inputFiltrarContacto = document.getElementById("inputFiltrarContacto");
const buttonFiltrarContacto = document.getElementById("buttonFiltrarContacto");
const resultadoFiltrado = document.getElementById("mostrarContactoFiltrado");
const listaFiltrada = document.getElementById("listaFiltrada");

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

buttoninputAddContacto.addEventListener("click", (event) => {
  event.preventDefault()
  if (inputinputAddContacto.value === "" || inputAddNumero.value === "") {
    alert("No se puede agregar un contacto vacio");
    return;
  }
  const nombre = inputinputAddContacto.value.toLowerCase().trim();
  const numero = inputAddNumero.value
  contactos.push(new Contact(nombre, numero));
  cantidadContactos.textContent = contactos.length;
  forminputAddContacto.reset();
  listarContactos();
});

const listarContactos = () => {
  listaContactos.innerHTML = "";

  if (contactos.length === 0) {
    listaContactos.textContent = "No hay contactos en la lista";
  } else {
    contactos.forEach((nombre, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1} - ${nombre.getName}`;
      listaContactos.appendChild(li);
    });
  }
};

buttonBuscarContacto.addEventListener("click", (e) => {
  e.preventDefault();

  let contactoABuscar = inputBuscarContacto.value.toLowerCase().trim();
  let contactoEncontrado = buscarContactoEncontactos(contactoABuscar);

if(contactoEncontrado===undefined){
  console.log("no se encontro el contacto ingresado")
}else{
  resultadoBusqueda.textContent = `${contactoEncontrado.getName} ${contactoEncontrado.getPhone}`;
  const btnEliminar = document.createElement("button")
  btnEliminar.textContent="Eliminar"
  resultadoBusqueda.appendChild(btnEliminar)
  btnEliminar.addEventListener("click",()=>{
    eliminarContacto(contactoEncontrado)
    resultadoBusqueda.textContent=""
  })
}
formBuscarContacto.reset()
})


function eliminarContacto(contactoEncontrado) {
  
  const contactoAEliminar=contactos.indexOf(contactoEncontrado)
  if (contactoAEliminar !== -1) {
    contactos.splice(contactoAEliminar,1)
    listarContactos()
    cantidadContactos.textContent = contactos.length;
    console.log(contactos)
  } else {
    
  }
}


function buscarContactoEncontactos(contactoABuscar) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].getName === contactoABuscar) {
      return contactos[i]
    }
  }
}

function existeContacto(nombre) {
  console.log(nombre)
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].getName === nombre)
      return true
  }
}