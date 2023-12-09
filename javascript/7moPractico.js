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

//setTimeout(() => {
   // console.log("Timeout");
//}, 3000);

console.log("Fin")

// Async / Await

// Async/await es una forma de trabajar con código asíncrono en JavaScript de manera más clara y legible. Async/await se basa en promesas y permite que el código asíncrono se parezca más al código sincrónico.

// Fetch en JavaScript

// Fetch es una API de JavaScript que se utiliza para hacer solicitudes HTTP a un servidor y recibir una respuesta. Fetch es compatible con todos los navegadores modernos y se puede utilizar para obtener datos de una API RESTful.

const resultado = document.getElementById("resultado");
const datosGenerales = ["name", "username", "address", "email", "id", "phone", "website","company"];
console.log("Inicio");
async function obtenerUsuarios() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users/7");
    let usuarios = await respuesta.json();
    resultado.innerHTML = ""
    for (let i = 0; i < datosGenerales.length; i++ ){//se crea el bucle for para recorrer el array de los datos del usuario.
    const li = document.createElement("li")
    li.textContent = `${datosGenerales[i]} - ${usuarios[datosGenerales[i]]}`//no son objetos, solo valores primitivos o simple. 
    resultado.appendChild(li)
    }
    console.log(usuarios);
  } catch (error) {
    console.log(error, "entre en el error");
  }
}
obtenerUsuarios()
console.log("Fin");




//resultado.innerHTML= ""
    //datosGeneral.forEach ((usuarios , datos) =>{
    //const li = document.createElement("li")
    //li.textContent = `${usuarios} - ${datos}`
    //resultado.appendChild(li)
    //}
    //)

    //const li = document.createElement("li");
    //li.textContent = usuarios.name;
    // resultado.appendChild(li);



    //if (typeof datosGenerales[i] === "object"){
      //  if (datosGenerales[i] === "address"){
        //    li.textContent = `${datosGenerales[i]} - ${usuarios[datosGenerales[i]].street}, ${usuarios[datosGenerales[i]].suite}, ${usuarios[datosGenerales[i]].city}, ${usuarios[datosGenerales[i]].zipcode}`;
        //} 
        //else if (datosGenerales[i] === "company"){
        //    li.textContent = `${datosGenerales[i]} - ${usuarios[datosGenerales[i]].name}, ${usuarios[datosGenerales[i]].catchPhrase}, ${usuarios[datosGenerales[i]].bs}`;
        //}
        //else {
         //   li.textContent = `${datosGenerales[i]} - ${usuarios[datosGenerales[i]]}`//no son objetos, solo valores primitivos o simple. 
        //}