// JSON Javascript Object Notation
// Sintaxis

// {
//     "nombre": "Juan",
//     "apellido": "Perez",
//     "edad": 35,
//     "casado": false,
//     "hijos": [
//         {
//             "nombre": "Pedro",
//             "edad": 10
//         },
//         {
//             "nombre": "Pablo",
//             "edad": 8
//         }
//     ]
// }

// JSON.stringify(objeto); // convertir un objeto a JSON
// JSON.parse(json); // convertir un JSON a objeto

// let persona = {
//   nombre: "Lionel",
//   apellido: "Messi",
// };

// console.log(persona);
// let personaJson = JSON.stringify(persona);
// console.log(personaJson, "<---- Stringify");
// let personaObjeto = JSON.parse(personaJson);
// console.log(personaObjeto, "<---- Parse")

// Sincronia

console.log("Inicio");

// Asincronia

setTimeout(() => {
    console.log("Timeout");
}, 3000);

console.log("Fin")

// Async / Await

// Async/await es una forma de trabajar con código asíncrono en JavaScript de manera más clara y legible. Async/await se basa en promesas y permite que el código asíncrono se parezca más al código sincrónico.

// Fetch en JavaScript

// Fetch es una API de JavaScript que se utiliza para hacer solicitudes HTTP a un servidor y recibir una respuesta. Fetch es compatible con todos los navegadores modernos y se puede utilizar para obtener datos de una API RESTful.

// const resultado = document.getElementById("resultado");

console.log("Inicio");

async function obtenerUsuarios() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let usuarios = await respuesta.json();
    // const li = document.createElement("li");
    // li.textContent = usuarios.name;
    // resultado.appendChild(li);

    console.log(usuarios);
  } catch (error) {
    console.log(error, "entre en el error");
  }
}
obtenerUsuarios()


// console.log("Fin");