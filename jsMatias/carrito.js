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
const carritoContendor = document.querySelector('.carrito')
const listaCarrito = document.createElement('ol')
carritoContendor.appendChild(listaCarrito)

//MOSTRAR CARRITO
const crearProducto = (newProducto) =>{
    const productoItem = document.createElement('li')
    productoItem.innerText = newProducto.producto
    productoItem.setAttribute('id', newProducto.id)
    const btnBorrar = document.createElement('button')
    btnBorrar.textContent='X'
    btnBorrar.classList.add('borrar')
    productoItem.appendChild(btnBorrar)
    listaCarrito.appendChild(productoItem)
}

//BORRAR PRODUCTO
const borrarProducto = (id) =>{
    carrito = carrito.filter(producto => producto.id !== id)
    document.getElementById(id).remove()
}
listaCarrito.addEventListener('click', (e)=>{
    if(e.target.classList.contains('borrar') || e.target.parentElement.classList.contains('borrar')){
        const productoId = e.target.closest('li').id
        borrarProducto(productoId)
    }
})

//AGREGAR AL CARRITO
btnAgregar.addEventListener('click', (e) => {
    e.preventDefault()
    let producto = inputCarrito.value
    if(producto.trim() == ''){
        alert('El ingreso no puede estar vacio')
    }else{
        let newProducto = {producto, id:window.crypto.randomUUID().slice(0,4)}
        carrito.push(newProducto)
        crearProducto(newProducto)
    }
    inputCarrito.value=''
})

// const buscarProducto = (str) => {
//     let buscar = str;
//     let encontrado = ''
//     for (let i = 0; i < carrito.length; i++){
//         if (carrito[i].toLowerCase() === buscar.toLowerCase()){
//             encontrado = carrito[i]
//             console.log(encontrado)
//         }
//     }
//     if(encontrado=='') console.log('No existe el producto')
//  }

// const filtrarProducto =(palabra)=>{
//     let resultado= carrito.filter(producto => producto.toLowerCase().includes(palabra.toLowerCase()));
//     return console.log(resultado)
// }
