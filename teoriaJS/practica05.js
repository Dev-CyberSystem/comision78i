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

//1- querySelector
//2- querySelectorAll
document.querySelector('h1').textContent = 'Hola desde JS modificando el dom'; //Busca el primer elemento h1 y lo selecciona

//Modificar todo: no funciona porque querySelectorAll devuelve un array de elementos, no un elemento en si mismo.
let query = document.querySelectorAll('h1')
console.log(query, "query")

//3- getElementByID
//document.getElementById('segundoTitulo').textContent = 'Reemplazo desde getElementById'; no funciona
//Por Class name
document.getElementsByClassName('tercerTitulo'.textContent = 'Titulo desde byClassName');
let tercero = document.getElementsByClassName('tercerTitulo')[0].textContent = 'Tercer titulo desde byClassName';
console.log(tercero);

//4-getElementByTagName: devuelve un array y reemplaza todos los elementos p que haya
document.getElementsByTagName('p')[0].textContent = 'Hola desde Js con getElementByTagName';

//MANEJO DE ESTILOS usando invocación de propiedades
//5-Cambio de color: changeColor
let cambioColor = document.getElementById('changeColor');
cambioColor.style.color = 'blue';

//Cambiar color a un div
let divCambio = document.getElementById('div');
let cambioColorDiv = document.getElementById('divCambio');
//Invocamos para cambiar las propiedades del div:
cambioColorDiv.style.color = 'red';
cambioColorDiv.style.fontSize = '45px';
cambioColorDiv.style.backgroundColor = 'green';

//6-Agregar un class (propiedad) a un elemento
const h1 = document.querySelector('h1');
h1.classList.add('titulo');
h1.classList.remove('titulo'); //permite remover el nombre a esa clase.

//7-Buscamos todo lo que contenga ul y lo guardamos.
// Crear un elemento 1
const ul = document.querySelector('ul')
const li = document.createElement('li')
li.textContent = 'Nuevo elemento Clonado';
ul.appendChild(li); //inserta el elemento creado en la ultima posición

//8-Crear elemento 2:
const arrayFrutas = ['pina', 'manzana', 'naranja']; //Crear array

//Mostrar cada elemento en una lista:
arrayFrutas.forEach(fruta => { //Se sale del foreach cuando el valor es null o false.
    const li = document.createElement('li'); //crea la lista con los elementos que se le pasaron en el array
    li.textContent = fruta; //Le pasamos el valor de fruta actual
    ul.appendChild(li); //lo agrega al final 
});

//alternativa:
arrayFrutas.forEach(fruta => ul.innerHTML += `<li>${fruta}</li>`);
// innerHTML es una propiedad que devuelve el contenido html de un elemento

//9-Clonar Nodos --> Clonar Elementos
const liClonado = li.cloneNode(true); //Toma un elemento y lo clona
ul.appendChild(liClonado);
// Eliminar un elemento
ul.removeChild(liClonado)