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


class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tama = 10) {
        this.tama = tama;
        this.contactos = this.obtenerContactosGuardados() || [];
        this.actualizarCantidadContactos();
    }

    aniadirContacto(nombre, telefono) {
        if (!this.agendaLlena()) {
            const nuevoContacto = new Contacto(nombre, telefono);
            this.contactos.push(nuevoContacto);
            this.guardarContactos();
            this.actualizarCantidadContactos();
            return true;
        } else {
            console.log("No hay más espacio en la agenda");
            return false;
        }
    }

    existeContacto(nombre, telefono) {
        return this.contactos.some(c => c.nombre === nombre && c.telefono === telefono);
    }

    listarContactos() {
        this.contactos.forEach(c => {
            console.log(`Nombre: ${c.nombre}, Teléfono: ${c.telefono}`);
        });
    }

    eliminarContacto(nombre, telefono) {
        const indice = this.contactos.findIndex(c => c.nombre === nombre && c.telefono === telefono);
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            this.guardarContactos();
            this.actualizarCantidadContactos();
            console.log(`Contacto ${nombre} eliminado de la agenda.`);
            return true;
        } else {
            console.log("No se pudo realizar la eliminación. Contacto no encontrado.");
            return false;
        }
    }

    agendaLlena() {
        return this.tama <= this.contactos.length;
    }

    huecosLibres() {
        return this.tama - this.contactos.length;
    }

    actualizarCantidadContactos() {
        const cantidadDeContactos = document.getElementById("cantidadDeContactos");
        cantidadDeContactos.textContent = this.contactos.length;
    }

    guardarContactos() {
        localStorage.setItem("contactos", JSON.stringify(this.contactos));
    }

    obtenerContactosGuardados() {
        const contactosGuardados = localStorage.getItem("contactos");
        return contactosGuardados ? JSON.parse(contactosGuardados) : null;
    }
}



const miAgenda = new Agenda();

const formAgregarContacto = document.getElementById("form-agregar-contacto");
const inputNombre = document.getElementById("inputNombre");
const inputTelefono = document.getElementById("inputTelefono");
const listaContactos = document.getElementById("listaContactos");

formAgregarContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = inputNombre.value.trim();
    const telefono = inputTelefono.value.trim();

    if (nombre !== "" && telefono !== "") {
        if (miAgenda.aniadirContacto(nombre, telefono)) {
            inputNombre.value = "";
            inputTelefono.value = "";
            actualizarListaContactos();
        }
    } else {
        alert("Por favor, ingresa nombre y teléfono del contacto.");
    }
});

function actualizarListaContactos() {
    listaContactos.innerHTML = "";

    miAgenda.listarContactos();
    miAgenda.contactos.forEach(contacto => {
        const li = document.createElement("li");
        li.textContent = `${contacto.nombre} - ${contacto.telefono}`;

        
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            miAgenda.eliminarContacto(contacto.nombre, contacto.telefono);
            actualizarListaContactos();
        });

        li.appendChild(btnEliminar);
        listaContactos.appendChild(li);
    });
}

// Llamada inicial para mostrar la lista de contactos guardados
actualizarListaContactos();
