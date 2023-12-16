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
// dato


class AgendaTelefonica {
    constructor(tamaño = 10) {
        let agendaGuardada = localStorage.getItem("agendaTelefonica");
        this.agenda = agendaGuardada ? JSON.parse(agendaGuardada) : {
            tamano: tamaño,
            contactos: []
        };
    }

    añadirContacto(nombre, telefono) {
        if (!this.agendaLlena()) {
            if (!this.existeContacto(nombre)) {
                let nuevoContacto = {
                    nombre: nombre,
                    telefono: telefono
                };
                this.agenda.contactos.push(nuevoContacto);
                this.actualizarLocalStorage();
                console.log(`Contacto "${nombre}" agregado con éxito.`);
            } else {
                console.log(`Error: El contacto "${nombre}" ya existe en la agenda.`);
            }
        } else {
            console.log("Error: La agenda está llena, no se pueden agregar más contactos.");
        }
    }

    agendaLlena() {
        return this.agenda.contactos.length >= this.agenda.tamano;
    }

    huecosLibres() {
        return this.agenda.tamano - this.agenda.contactos.length;
    }

    existeContacto(nombre) {
        return this.agenda.contactos.some(contacto => contacto.nombre === nombre);
    }

    listarContactos() {
        console.log("Lista de contactos:");
        this.agenda.contactos.forEach(contacto => {
            console.log(`${contacto.nombre}: ${contacto.telefono}`);
        });
    }

    buscarContacto(nombre) {
        let contacto = this.agenda.contactos.find(contacto => contacto.nombre === nombre);
        if (contacto) {
            console.log(`Teléfono de "${nombre}": ${contacto.telefono}`);
        } else {
            console.log(`Error: No se encontró el contacto "${nombre}".`);
        }
    }

    eliminarContacto(nombre) {
        let contactosAntes = this.agenda.contactos.length;
        this.agenda.contactos = this.agenda.contactos.filter(contacto => contacto.nombre !== nombre);
        if (this.agenda.contactos.length < contactosAntes) {
            this.actualizarLocalStorage();
            console.log(`Contacto "${nombre}" eliminado.`);
        } else {
            console.log(`Error: No se encontró el contacto "${nombre}".`);
        }
    }

    actualizarLocalStorage() {
        localStorage.setItem("agendaTelefonica", JSON.stringify(this.agenda));
    }
}

let agenda = new AgendaTelefonica();

// Funciones a usar en consola, para no olvidarme.

// Aquí agrego 5 contactos

agenda.agregarContacto("Juan", "381-225-7520");
agenda.agregarContacto("Ana", "381-654-3210");
agenda.agregarContacto("Maria", "381-444-7895")
agenda.agregarContacto("Pepe", "381-456-4424")
agenda.agregarContacto("Martin", "381-222-7890")

// console.log("Agenda actual:");
// agenda.listarContactos();

// // Buscar un contacto por nombre
// agenda.buscarContacto("Juan");

// Intento agregar un contacto con el mismo nombre (debería mostrar un error)
// agenda.agregarContacto("Juan", "111-222-3333");

// // Elimino un contacto por nombre
// agenda.eliminarContacto("Ana");

// console.log("Agenda actualizada:");
// agenda.listarContactos();

// Utilicé el operador ! para invertir un valor booleano. Es decir, si la expresión es verdadera (true), la negación la convierte en falsa (false), etc.
