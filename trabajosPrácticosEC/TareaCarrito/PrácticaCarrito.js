const carroEnzo = [];
const cantidadProductos = document.getElementById("cantidadProductos");
const agregador = document.getElementById("agregador");
const añadirProducto = document.getElementById("añadirProducto");
const botonDeAñadir = document.getElementById("botonDeAñadir"); /*aqui agarramos todos los valores del form! Los vamos a guardar enalgún lugar*/
const listaDeLosProductos = document.getElementById("listaDeLosProductos"); /*la anunciamos a la variable aquí y la dejamos constante */

/*constantes de la segunda clase*/

    const buscarProducto = document.getElementById("buscarProducto");
    const añadirProductoBuscar = document.getElementById("añadirProductoBuscar");
    const botonDeBuscar = document.getElementById("botonDeBuscar");
    /* aqui terminan las constantes de la segunda clase*/
    
/* otra constante */

const mostradorDeBusqueda = document.getElementById("mostradorDeBusqueda")

/**/ 

const filtrador = document.getElementById("filtrador");

const añadirproductofiltrar = document.getElementById("añadirProductoFiltrar");
const botondefiltrar = document.getElementById("botonDeFiltrar");

const resultadodefiltrado = document.getElementById("resultadoDeFiltrado"); /*esto es un PÁRRAFO*/

/*vamos a hacer un EVENTO ahora justamente para agarrar los datos*/

botonDeAñadir.addEventListener("click", (event) => {    
    event.preventDefault(); /*siempre que tengamos un formulario lo agregamos, evita que el formulario se envie más de una vez*/
    if (añadirProducto.value === "") {
        alert("Esto está VACIO");
        return; /*AQUÍ lo que hago es simplemente asignar un IF en el caso de que alguien ponga un producto "vacio" */
    }
    const producto = añadirProducto.value.toLowerCase().trim() /*con el .value lo que hago es capturar el valor que ingreso en el input*. Aqui asigno a la variable producto ese valor*/
    cantidadProductos.textContent = carroEnzo.length + 1
    carroEnzo.push(producto) /*aquí le voy a pushear al carroEnzo lo que vendrá desde PRODUCTO*/
    agregador.reset()
    console.log(carroEnzo)
    listaDeLosProductosConForEach(); /*esto es algo que hice despues */
})

/*vamos a crear una FUNCIÓN en la cual le añadiremos a una lista de HTML los productos que vamos agragando*/

const listaDeLosProductosConForEach = () => {
    listaDeLosProductos.innerHTML = ""; /*al añadir esto, me aseguro que LIMPIE lo que voy añadiendo */
    if (carroEnzo.length === 0) {
        listaDeLosProductos.textContent = "No hay productos en el carrito, pa"
    } else {
        carroEnzo.forEach((producto) => { /*aqui usaremos el forEach para iterar el ARRAY y luego ejecuta la funcion que creamos (crear LIs) */
            const liQueCreamos = document.createElement("li"); /*La línea const liQueCreamos = document.createElement("li") se utiliza para crear un nuevo elemento HTML de lista (<li>) */
            liQueCreamos.textContent = producto; /*aqui es donde lo mandaremos */
            listaDeLosProductos.appendChild(liQueCreamos);
        });
    }
}


/* ahora haremos un buscador*/


botonDeBuscar.addEventListener("click", (event) => {
    event.preventDefault();
    let productoBuscado = añadirProductoBuscar.value.toLowerCase().trim()
    console.log(productoBuscado)
    
    const indiceFuncionCallBack =  buscaElProductoEnElCarrito(productoBuscado);

    if (indiceFuncionCallBack !== -1) {
        mostradorDeBusqueda.textContent = "El producto " + productoBuscado + " se encuentra en el carrito gg en la posición: " + (indiceFuncionCallBack + 1) }
        else {
            mostradorDeBusqueda.textContent = "El producto " + productoBuscado + " NO LO TENGO"
        }
    });


    /* Aquí arriba haremos que se muestren los resultados en un P

    if (indiceFuncionCallBack !== -1) {
        alert("Lo tengoooo en la posición: " + (indiceFuncionCallBack + 1))
    } else {
        alert("No lo tengo, pa")
    } 
    */

/*
    carroEnzo.forEach((producto) => {
        if (productoBuscado === producto) {
            alert("Eso SI está en el carrito (esto no me anda!!");
        } else {
            alert("Esto es lo único que me consologuea");
        } 
    } ) */

/* buscar en el carrito, en un array. A esta función la puedo invocar dentro del listener que ya hicimos*/

function buscaElProductoEnElCarrito (producto) {
  return carroEnzo.indexOf(producto) /*traemos por parámetro el elemento que estamos buscando, si no lo encuentra tira un -1 */
}

botondefiltrar.addEventListener("click", (event) => {
    event.preventDefault();
    let valorDeloQueFiltro = añadirproductofiltrar.value.toLowerCase().trim();
    console.log(valorDeloQueFiltro);
    let elNuevoValorFiltrado = horaDeBuscar(valorDeloQueFiltro)

    if (elNuevoValorFiltrado.lenght === 0) {
        resultadodefiltrado.textContent = "Naranjaaa"
    } else {
        resultadodefiltrado.textContent = "se encontró algo"
    }
})

/* funciona para buscar lo que filtramos */

function horaDeBuscar(filtro) {
    const productoFiltrado = carroEnzo.filter( producto => producto.includes(filtro));
    return productoFiltrado
}

