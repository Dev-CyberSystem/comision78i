/* 

Tarea:

1- Nos piden realizar una agenda telefónica de contactos.

2- Un contacto está definido por un nombre y un teléfono. Se considera que un
contacto es igual a otro cuando sus nombres son iguales.

3- Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
por defecto (10).

4- Las funciones serán:
a- aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
b- existeContacto(Conctacto): indica si el contacto pasado existe o no.
c- listarContactos(): Lista toda la agenda.
d- buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
e- eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
f- agendaLlena(): indica si la agenda está llena.
g- huecosLibres(): indica cuántos contactos más podemos ingresar.

5- Usar LocalStorage para guardar la info de la agenda y para consultar sus datos .

*/


// Función para crear un contacto
function crearContacto(nombre, telefono) {
    return { nombre, telefono };
  }
  
  // Función para crear una agenda
  function crearAgenda(tamano = 10) {
    let contactos = [];
  
    // Función para añadir un contacto a la agenda
    function aniadirContacto(contacto) {
      if (agendaLlena()) {
        console.log("La agenda está llena. No se puede añadir más contactos.");
      } else {
        contactos.push(contacto);
        actualizarLocalStorage();
        console.log("Contacto añadido correctamente.");
      }
    }
  
    // Función para verificar si un contacto existe en la agenda
    function existeContacto(contacto) {
      return contactos.some(c => c.nombre === contacto.nombre);
    }
  
    // Función para listar todos los contactos de la agenda
    function listarContactos() {
      console.log("Lista de contactos:");
      contactos.forEach(c => console.log(`${c.nombre}: ${c.telefono}`));
    }
  
    // Función para buscar un contacto por nombre y mostrar su teléfono
    function buscarContacto(nombre) {
      const contactoEncontrado = contactos.find(c => c.nombre === nombre);
      if (contactoEncontrado) {
        console.log(`${contactoEncontrado.nombre}: ${contactoEncontrado.telefono}`);
      } else {
        console.log("Contacto no encontrado.");
      }
    }
  
    // Función para eliminar un contacto de la agenda
    function eliminarContacto(contacto) {
      const indice = contactos.findIndex(c => c.nombre === contacto.nombre);
      if (indice !== -1) {
        contactos.splice(indice, 1);
        actualizarLocalStorage();
        console.log("Contacto eliminado correctamente.");
      } else {
        console.log("Contacto no encontrado. No se puede eliminar.");
      }
    }
  
    // Función para verificar si la agenda está llena
    function agendaLlena() {
      return contactos.length >= tamano;
    }
  
    // Función para mostrar cuántos huecos libres quedan en la agenda
    function huecosLibres() {
      const libres = tamano - contactos.length;
      console.log(`Quedan ${libres} huecos libres en la agenda.`);
    }
  
    // Función para actualizar la información en LocalStorage
    function actualizarLocalStorage() {
      localStorage.setItem("agendaContactos", JSON.stringify(contactos));
    }
  
    // Función para cargar la información desde LocalStorage
    function cargarDesdeLocalStorage() {
      const datosGuardados = localStorage.getItem("agendaContactos");
      if (datosGuardados) {
        contactos = JSON.parse(datosGuardados);
      }
    }
  
    // Cargar datos desde LocalStorage al crear la agenda
    cargarDesdeLocalStorage();
  
    // Devolver un objeto con las funciones necesarias
    return {
      aniadirContacto,
      existeContacto,
      listarContactos,
      buscarContacto,
      eliminarContacto,
      agendaLlena,
      huecosLibres,
    };
  }
  
  // Ejemplos
  const agenda = crearAgenda(5);
  
  const contacto1 = crearContacto("Juan", "123456789");
  const contacto2 = crearContacto("María", "987654321");
  
  agenda.aniadirContacto(contacto1);
  agenda.aniadirContacto(contacto2);
  agenda.listarContactos();
  agenda.buscarContacto("Juan");
  
  const contacto3 = crearContacto("Juan", "555555555"); // Intentar añadir un contacto duplicado
  agenda.aniadirContacto(contacto3);
  
  agenda.eliminarContacto(contacto1);
  agenda.listarContactos();
  agenda.huecosLibres();
  




/*

//Promesas

// Una promesa en JavaScript es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. En otras palabras, una promesa es una manera de manejar operaciones asíncronas de manera más clara y legible. Cuando se crea una promesa, se pueden definir dos funciones que se llamarán dependiendo del estado de la promesa: resolve se llamará cuando la promesa se resuelve con éxito, mientras que reject se llamará cuando la promesa se rechaza o falla.

// tres estados de las promesas:
// pending (pendiente): estado inicial, no se ha cumplido ni rechazado.
// fullfilled (cumplida): significa que la operación se completó con éxito.
// rejected (rechazada): significa que la operación falló.

//Sintaxis de promesas

// const miPromesa = new Promise( (resolve, reject) => {
//     // resolve(); // se ejecuta si la promesa se cumple
//     // reject(); // se ejecuta si la promesa no se cumple
//     //Simulamos una operación asíncrona
//     setTimeout( () => {
//         const exito = false;
//         if(exito) {
//             resolve("La operación tuvo éxito");
//         } else {
//             reject("La operación no tuvo éxito");
//         }

//     }, 1000);
// });

// miPromesa
// .then( respuesta => console.log(respuesta))
// .catch( error => console.log(error));

// const user = {
//     email: "river@elmasgrande.com",
//     password: "BocaGanoLaSeptima"
// }

// const logIn = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (user.email === "river@elmasgrande.com" && user.password === "Fluseptima") {
//             resolve("Bienvenido al sistema");
//         } else {
//             reject("jajaj Mentira no gano nada");
//         }
//     }, 2000);
// });

// logIn
//     .then(respuesta => console.log(respuesta))
//     .catch(error => console.log(error));

export let carrito = []

async function obtenerProductos() {
    try {
        const productos = await fetch("../api/fakeApi.json");
        const productosJson = await productos.json();
        carrito.push(productosJson);

    } catch (error) {
        console.log(error)
    }
}
obtenerProductos()

// BOM (Browser Object Model)

//   BOM (Browser Object Model) es un conjunto de objetos proporcionados por los navegadores web para interactuar con el navegador en sí mismo, es decir, con la ventana del navegador, los marcos y los elementos relacionados con la navegación, como la barra de direcciones y los botones de navegación.

// El BOM no es parte de la especificación de JavaScript, ya que se trata de una API (Application Programming Interface) proporcionada por el navegador. Por lo tanto, los objetos y propiedades del BOM pueden variar según el navegador que estés utilizando.

// El uso del BOM puede ser útil para realizar tareas específicas relacionadas con la navegación web, como abrir ventanas emergentes, redirigir a otras páginas web o establecer cookies. Sin embargo, es importante tener en cuenta que el uso excesivo del BOM puede afectar negativamente el rendimiento y la seguridad de una página web.

// const nuevaVentana = window.open("https://www.google.com");

// window.location.href = "https://www.google.com";

// const navegador = navigator.userAgent;
// console.log(`El navegador que usa es ${navegador}`);

// const diametrosPantalla = window.screen.width;
// const alturaPantalla = window.screen.height;

// console.log(
//   `El ancho de la pantalla es ${diametrosPantalla} altura ${alturaPantalla}`
// );

// document.cookie = "nombre=Diego";

// const idioma = navigator.language;
// console.log(idioma);

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(
//         function(position){
//             const latitud = position.coords.latitude;
//             const longitud = position.coords.longitude;
//             console.log(`Tu toxi esta en ${latitud} y ${longitud}`)
//         }
//     ),
//     function(error){
//         console.log(error)
//     }
// } else {
//     console.log("Tu navegador no soporta geolocalizacion")
// }

// LocalStorage

// El objeto localStorage permite almacenar datos de forma local en el navegador. Los datos almacenados en localStorage no tienen fecha de expiración y permanecen disponibles incluso después de cerrar el navegador o reiniciar el dispositivo.

localStorage.setItem("nombre", "Diego");

const nombre = localStorage.getItem("nombre");

console.log(nombre, "nombre desde local")

localStorage.removeItem("nombre");

 const producto = {
    nombre: "Fernet",
    precio: 10000,
    stock: 23
} 

localStorage.setItem("producto", JSON.stringify(producto));

const productoJson = localStorage.getItem("producto");

console.log(JSON.parse(productoJson), "producto desde local")

*/