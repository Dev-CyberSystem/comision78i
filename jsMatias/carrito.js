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
const listaCarrito = document.createElement('ul')
carritoContendor.appendChild(listaCarrito)


const listarProductos = () => {
    const btnBorrar = document.createElement('button')
    const producto = document.createElement('li')
    btnBorrar.textContent='X'
    btnBorrar.classList.add('borrar')
    for(i=0; i<carrito.length; i++){
        producto.innerText = `${carrito[i].producto}`
        producto.appendChild(btnBorrar)
        listaCarrito.appendChild(producto)
    }
    // carrito.forEach( item => {
    //     const btnBorrar = document.createElement('button')
    //     const producto = document.createElement('li')
    //     btnBorrar.textContent='X'
    //     btnBorrar.classList.add='borrar'
    //     producto.innerText = `${item.producto}`
    //     producto.appendChild(btnBorrar)
    //     listaCarrito.appendChild(producto)
    // })
}
btnAgregar.addEventListener('click', (e) => {
    e.preventDefault()
    let producto = inputCarrito.value
    if(carrito.find(item => item.producto.toLowerCase() == producto.toLowerCase())){
        alert('el producto ya se encuentra en el carrito')
        return
    }else{
        carrito.push({producto, id:window.crypto.randomUUID()})
        inputCarrito.value=''
        listarProductos()
    }
})

const eliminarProducto = (id) =>{
    console.log(id)
    // let nuevoCarrito = carrito.filter(item => item.id !== id)
    // carrito = nuevoCarrito
    // listarProductos()
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




const filtrarProducto =(palabra)=>{
    let resultado= carrito.filter(producto => producto.toLowerCase().includes(palabra.toLowerCase()));
    return console.log(resultado)
}
