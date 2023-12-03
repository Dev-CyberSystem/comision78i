const carrito = []

const formularioAgregarProductos = document.getElementById("formAgregarProductos")
const inputAgregarProductos = document.getElementById("inputAgregarProducto")
const botonAgregarProductos = document.getElementById("botonAgregarProducto")
const listaProductos = document.getElementById("listaDeProductos")

const formularioBuscarProductos = document.getElementById("formBuscarProductos")
const inputBuscarProducto = document.getElementById("inputBuscarProducto")
const botonBuscarProducto = document.getElementById("botonBuscarProducto")
const resultadoBusqueda = document.getElementById("resultadoBusqueda")

const formularioFiltrarProductos = document.getElementById("formFiltrarProductos")
const inputFiltrarProducto = document.getElementById("inputFiltrarProducto")
const botonFiltrarProducto = document.getElementById("botonFiltrarProducto")
const resultadoFiltro = document.getElementById("resultadoFiltro")
const resultadosDelFiltro = document.getElementById("resultadosDelFiltro")

// AGREGAR PRODUCTOS
botonAgregarProductos.addEventListener('click', (event) => {
    event.preventDefault()

    if (inputAgregarProductos.value == "") {
        return alert("No puede agregar un producto vacío")
    }
    else {
        const producto = inputAgregarProductos.value.toLowerCase().trim()
        carrito.push(producto)
        formularioAgregarProductos.reset() // Resetea el formulario
        listarProductos()
    }
})

const listarProductos = () => {
    listaProductos.innerHTML = "" // Limpia el carrito por decirlo así

    if (carrito.length === 0) {
        listaProductos.textContent = "No hay productos en el carrito"
    } else {
        carrito.forEach((producto, index) => {
            const li = document.createElement("li")
            li.textContent = `${index + 1}) ${producto}`
            listaProductos.appendChild(li); // Recibe como parámetro un nodo HTML
        })
    }
}

// BUSCAR PRODUCTOS
botonBuscarProducto.addEventListener('click', (event) => {
    event.preventDefault()

    let productoABuscar = inputBuscarProducto.value.toLowerCase().trim()
    const indice = buscarProductoEnCarrito(productoABuscar)
    if (indice !== -1) {
        return resultadoBusqueda.textContent = `El producto ${productoABuscar} está en la posición ${indice + 1}`
    } else if (buscarProductoEnCarrito(productoABuscar) === -1) {
        return resultadoBusqueda.textContent = "Producto no encontrado"
    }
})

function buscarProductoEnCarrito(productoABuscar) {
    return carrito.indexOf(productoABuscar)
}

// FILTRAR PRODUCTOS

botonFiltrarProducto.addEventListener('click', (event) => {
    event.preventDefault()

    let productoAFiltrar = inputFiltrarProducto.value.toLowerCase().trim()
    let arrayFiltradisimo = filtroDeProductos(productoAFiltrar)
    
    if (arrayFiltradisimo.length !== 0) {
        resultadoFiltro.textContent = `Se encontraron ${arrayFiltradisimo.length} coincidencias para el filtro (${productoAFiltrar}): ${arrayFiltradisimo}`
    } else {
        return resultadoFiltro.textContent = `No se encontraron coincidencias para el filtro (${productoAFiltrar})`
    }
})

function filtroDeProductos(filtro) {
    const arrayFiltrado = carrito.filter((producto) => producto.includes(filtro) )
    return arrayFiltrado
}