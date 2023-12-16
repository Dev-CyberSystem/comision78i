//Tarea

// ○ Nos piden realizar una agenda telefónica de contactos.
// ○ Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.
const contacto = {
    nombre: "valor 1",
    telefono: 381000000
}
// ○ Una agenda de contactos está formada por un conjunto de contactos. Se
// podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
// por defecto (10).
var tamanio = parseInt(prompt("Ingrese la cantidad de contactos que ingresara o 0 para hacerlo por defecto: "));
if (tamanio === 0) {
    tamanio = 10
}
const pos = tamanio;
// ○ Las funciones serán:
// ■ aniadirContacto(Contacto): Añade un contacto a la agenda, sino la
// agenda no puede almacenar mas contactos indicar por pantalla.
const aniadirContacto = (contacto) => {
    if (tamanio !== 0) {
        localStorage.setItem(`contacto${tamanio}`, JSON.stringify(contacto));
        tamanio--;
    } else {
        console.log("No se pueden almacenar mas contactos");
    }
}
// ■ existeContacto(Conctacto): indica si el contacto pasado existe o no.
const existeContacto = (contacto) => {
    for (let index = 1; index <= pos; index++) {
        const contactoJson = localStorage.getItem(`contacto${index}`);
        if (contactoJson) {
            const contactoAlmacenado = JSON.parse(contactoJson);
            if (contactoAlmacenado.nombre === contacto.nombre) {
                return true;
            }
        }
    }
    return false;
}
// ■ listarContactos(): Lista toda la agenda
const listarContactos = () => {
    for (let index = 1; index <= pos; index++) {
        const contactoJson = localStorage.getItem(`contacto${index}`);
        console.log(JSON.parse(contactoJson))
    }
}
// ■ buscarContacto(nombre): busca un contacto por su nombre y muestra
// su teléfono.
const buscarContacto = (nombre) => {
    for (let index = 1; index <= pos; index++) {
        const contactoJson = localStorage.getItem(`contacto${index}`);
        const contacto = JSON.parse(contactoJson);
        if (contacto.nombre === nombre) {
            console.log(`Teléfono de ${nombre}: ${contacto.telefono}`);
            return;
        }
    }
    console.log(`No se encontró un contacto con el nombre ${nombre}`);
}
// ■ eliminarContacto(Contacto): elimina el contacto de la agenda, indica
// si se ha eliminado o no por pantalla
const eliminarContacto = (contacto) => {
    for (let index = 1; index <= pos; index++) {
        const contactoJson = localStorage.getItem(`contacto${index}`);
        if (contactoJson) {
            const contactoAlmacenado = JSON.parse(contactoJson);
            if (contactoAlmacenado.nombre === contacto.nombre) {
                localStorage.removeItem(`contacto${index}`);
                console.log(`Contacto ${contacto.nombre} eliminado.`);
                tamanio++;
                return;
            }
        }
    }
    console.log(`No se encontró un contacto con el nombre ${contacto.nombre}`);
};

// ■ agendaLlena(): indica si la agenda está llena.
const agendaLlena = () => {
    return tamanio === 0;
}
// ■ huecosLibres(): indica cuántos contactos más podemos ingresar.
const huecosLibres = () => {
    return tamanio;
}
// ○ Usar LocalStorage para guardar la info de la agenda y para consultar sus
// datos