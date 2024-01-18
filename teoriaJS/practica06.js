//Clase 27 noviembre

//CRUD -> Create, Read, Update, Delete
//ABM  -> Alta, Baja, Media
console.log(document);

//1-Query selector y query selector All:
//Permite buscar un elemento por su selector y modifica el primer elemento que encuentra.
document.querySelector('h1').textContent = 'Hola desde js modificando el dom';

//Invocamos todos los h1 desde una variable
let query = document.querySelectorAll('h1');
console.log(query, "query");
//No funciona querySelectorAll porque devuelve un array de elementos, no uno solo en si. (buscar infor)

//2- getElementByID busca: - 'segundoTitulo'
document.getElementById('segundoTitulo').textContent = 'Hola byID desde js'

//pendiente desde min 40