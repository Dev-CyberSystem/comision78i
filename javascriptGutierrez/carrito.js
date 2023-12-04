let carrito = []
const botonAgregar = document.getElementById('botonDeAgregar')
const botonBuscar = document.getElementById('botonDeBuscar')
const botonFiltrar = document.getElementById('botonDeFiltrar')
const botonEliminar = document.getElementById('botonDeEliminar')
let lista = document.querySelector('ol')
let divBusqueda = document.querySelector('div')
let divFiltrados = document.getElementById('listaFiltrados')
let mensajito = document.getElementById('mensajito')
let divEliminar = document.getElementById('divEliminar')
let mensajote = document.getElementById('mensajote')
const formAgregar = document.getElementById('form-agregar')
const formBuscar = document.getElementById('form-buscar')
const formFiltrar = document.getElementById('form-filtrar')
const formEliminar = document.getElementById('form-eliminar')
let productoIng = document.getElementById('agregar')
let productoBus = document.getElementById('buscar')
let filtro = document.getElementById('filtrar')
let eliminar = document.getElementById('eliminar')




// const agregarProducto = (event) =>
// {
//     event.preventDefault()
//     const producto = productoIng.value
//     alert(producto)   
// }
botonAgregar.addEventListener("click", (event) => {
    event.preventDefault()
    const producto = productoIng.value.trim()
    if(producto == "")
    {
        alert("No ingrese un producto vacío plis")
        formAgregar.reset()
    }else{
        carrito.push(producto)
        console.log(carrito)
        let li = document.createElement('li')
        li.textContent = producto
        lista.appendChild(li)
        formAgregar.reset()
    }
})

botonBuscar.addEventListener("click", (event) => {
    event.preventDefault()
    let buscado = productoBus.value.toLowerCase().trim()
    if(carrito.length == 0)
    {
        let h5 = document.createElement('h5')
        h5.textContent = "No hay productos para buscar"
        divBusqueda.appendChild(h5)
        formBuscar.reset()
    }else{
        let resultado = carrito.indexOf(buscado)
        let mensaje = document.createElement('h5')
        console.log(resultado)
        if(resultado != -1)
        {
            divBusqueda.innerHTML = "";
            mensaje.textContent = `Se encontró el producto ${buscado}`
            divBusqueda.appendChild(mensaje)
        }else{
            divBusqueda.innerHTML = "";
            mensaje.textContent = `No se encontró el producto`
            divBusqueda.appendChild(mensaje)
        }
        formBuscar.reset()
    }
})

botonFiltrar.addEventListener('click', (event) => {
    let filtrado = carrito.filter(producto => producto.includes(filtro.value))
    if(filtrado.length == 0)
    {
        mensajito.textContent = "No se encontraron productos con el filtro"
    }else{
         mensajito.textContent = `Se encontraron los siguientes productos que incluyan ${filtro.value}`
        let ul = document.createElement('ul')
        divFiltrados.appendChild(ul)

        for(let i = 0; i < filtrado.length; i++)
        {
            let li = document.createElement('li')
            li.textContent = filtrado[i]
            ul.appendChild(li)
        }
    }
    formFiltrar.reset()
})

botonEliminar.addEventListener('click', (event) => {
    let indice = carrito.indexOf(eliminar.value)
    if (indice == -1)
    {
        mensajote.textContent = "No existe tal producto"
    }else{
        carrito.splice(indice, 1)
        if(carrito.indexOf(eliminar.value) == -1)
        {
            mensajote.textContent = `El Producto ${eliminar.value} fue eliminado correctamente`
        }else{
            mensajote.textContent = "Ocurrió un error"
        }
    }
    console.log(carrito)
    formEliminar.reset()
})
