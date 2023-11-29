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


//BUSCAR Y FILTRRAR
const inputBuscar = document.getElementById('buscarCarrito')
const buscarResultados = document.getElementById('buscar')
const btnFiltrar = document.getElementById('filtrar')
const listaResultado = document.createElement('ul')

const buscarProducto = () => {
    listaResultado.innerHTML=''
    buscarResultados.appendChild(listaResultado)
    resultado = carrito.filter(producto => producto.producto.toLowerCase().includes(inputBuscar.value.toLowerCase()));
    if(resultado.length>0){
        for(i=0; i<resultado.length; i++){
            let resultadoItem = document.createElement('li')
            resultadoItem.textContent=`${resultado[i].producto}`
            listaResultado.appendChild(resultadoItem)
        }
    }else{
        let resultadoItem = document.createElement('li')
        resultadoItem.textContent='No hay productos con ese nombre'
        listaResultado.appendChild(resultadoItem)
    }
}

inputBuscar.addEventListener('input', (e) => {
    e.preventDefault()
    buscarProducto()
})

