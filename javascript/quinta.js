// Crear un carrito de compras. 
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella
// o una letra
// ● Eliminar producto del carrito

// Crud --> Create, Read, Update, Delete
// ABM  --> Alta, Baja, Modificacion
console.log(document)

// QuerySelector
// querySelectorAll
// va a buscar un elemento por su selector, modifica el primer elemento que encuentra.
// document.querySelector('h1').textContent = 'Hola desde JS modificando el DOM'

 let query = document.querySelectorAll('h1')
 console.log(query, "query")
//  no funciona porque querySelectorAll devuelve un array de elementos, no un elemento en si mismo.

// getElementById

document.getElementById('segundoTitulo').textContent = 'Hola desde JS con getElementById'

// getElementByClassName
let tercero = document.getElementsByClassName('tercerTitulo')[0].textContent = 'Hola desde JS con getElementByClassName'


// getElementByTagName
document.getElementsByTagName('p')[0].textContent = 'Hola desde JS con getElementByTagName'

// estilos 
let divChange = document.getElementById('div')
let cambioColor = document.getElementById('changeColor')

cambioColor.style.color = 'red'
cambioColor.style.fontSize = '50px'
div.style.backgroundColor = 'blue'

// Agregar un class a un elemento

const h1 = document.querySelector('h1')
h1.classList.add('titulo')
h1.classList.remove('titulo')

// Crear un elemento

const ul = document.querySelector('ul')
const li = document.createElement('li')
li.textContent = 'Nuevo elemento Clonado'
ul.appendChild(li)

// Crear un elemento ejemplo 2
const arrayFrutas =  ['Mango', 'Kiwi', 'uva']
// arrayFrutas.forEach(fruta => {
//     const li = document.createElement('li')
//     li.textContent = fruta
//     ul.appendChild(li)
// })

arrayFrutas.forEach(fruta => ul.innerHTML += `<li>${fruta}</li>`)
// innerHTML es una propiedad que devuelve el contenido html de un elemento

// CloneNode --> clona un elemento
const liClonado = li.cloneNode(true)
ul.appendChild(liClonado)

// Eliminar un elemento
ul.removeChild(liClonado)