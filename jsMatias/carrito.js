// Crear un carrito de compras. 
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella una letra
// ● Eliminar producto del carrito
// ● Filtrar productos que coincidan con una palabra, parte de ellalistar
// o una letra
// ● Eliminar producto del carrito
let carrito = []
const inputCarrito = document.getElementById('inputCarrito')
const btnAgregar = document.getElementById('agregarProducto')
let carritoContendor = document.querySelector('.carrito')
let listaCarrito = document.createElement('ul')
carritoContendor.appendChild(listaCarrito)

btnAgregar.addEventListener('click', (e) => {
    e.preventDefault()
    let producto = inputCarrito.value
    if(carrito.find(item => item == producto)){
        console.log('el producto ya se encuentra en el carrito')
    }else{
        carrito.push(producto)
        console.log('Producto agregado correctamente')
        inputCarrito.value=''
        console.log(carrito)
        listarProductos()
    }
})

const listarProductos = () => {
    let producto = document.createElement('li')
    for (let i=0; i < carrito.length; i++){
        producto.innerHTML = `<li>${carrito[i]}<button>Borrar</button></li>`
        listaCarrito.appendChild(producto)
    } 
}

const buscarProducto = (str) => {
    let buscar = str;
    let encontrado = ''
    for (let i = 0; i < carrito.length; i++){
        if (carrito[i].toLowerCase() === buscar.toLowerCase()){
            encontrado = carrito[i]
            console.log(encontrado)
        }
    }
    if(encontrado=='') console.log('No existe el producto')
 }

const eliminarProducto = (str) =>{
    let producto = str
    let nuevoCarrito = carrito.filter(item => item.toLowerCase() !== producto.toLowerCase())
    carrito = nuevoCarrito
    console.log(carrito)
}



const filtrarProducto =(palabra)=>{
    let resultado= carrito.filter(producto => producto.toLowerCase().includes(palabra.toLowerCase()));
    return console.log(resultado)
}
