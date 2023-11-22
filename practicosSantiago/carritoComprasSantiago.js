//  Crear un carrito de compras.
//  Crear una aplicación de carrito de compras donde se ingresen productos como elementos en un array.
//  las tareas que debe hacer son las siguientes:
//  Agregar producto al carrito
//  Listar los productos del carrito
//  Buscar un producto en el carrito
//  Filtrar productos que coincidan con una palabra, parte de ella o una letra
//  Eliminar producto del carrito

console.log("===========\nBIENVENIDO A NUESTRA TIENDA\n===========")
let carrito = []

// Función para agregar productos al array (en este caso carrito)

const agregarProductos = (producto) => {
    producto = producto.toLowerCase()
    carrito.push(producto)
}

// Función para ver los productos del array (en este caso carrito)

const listaDeProductos = () => {
    console.log("===========\nLISTA DE PRODUCTOS\n===========")
    for (let i = 0; i < carrito.length; i++) {
        console.log (carrito[i])
    }
}

// Función para buscar productos y su posicion dentro del array (en este caso carrito)

const busquedaDeProducto = (productoABuscar) => {
    productoABuscar = productoABuscar.toLowerCase()
    let encontrado = false
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].includes(productoABuscar)) {
            encontrado = true
            console.log ("El producto " + productoABuscar + " está presente en el carrito, su posición es la número " + i) 
        }
    }
    if (!encontrado) {
        console.log ("Lo sentimos! No pudimos encontrar " + productoABuscar + " en tu carrito ¿Probaste agregándolo?")
    }
}

// Función para filtrar productos

const filtroDeBusqueda = (palabra) => {
    palabra = palabra.toLowerCase()
    let productosCoincidentes = []
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].includes(palabra)) {
            productosCoincidentes.push(carrito[i])
        }
    }
    if (productosCoincidentes.length === 0) {
        return console.log("La palabra que ingresaste no coincide con ningún producto del carrito")
    } else {
        return console.log(palabra + " coincide con los siguientes productos: " + productosCoincidentes)
    }
}

// Función para borrar productos

const eliminarProducto = (palabra) => {
    palabra = palabra.toLowerCase()
    indice = carrito.indexOf(palabra)
    if (indice !== -1) {
        let productoBorrado = carrito.splice(indice, 1)
        console.log (palabra + " se ha eliminado correctamente del carrito!")
    } else {
        console.log (palabra + " no se ha podido eliminar porque no se encontraba en el carrito")
    }
}