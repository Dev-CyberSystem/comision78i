const carroEnzo = [];
const cantidadProductos = document.getElementById("cantidadProductos");
const agregador = document.getElementById("agregador");
const añadirProducto = document.getElementById("añadirProducto");
const botonDeAñadir = document.getElementById("botonDeAñadir"); /*aqui agarramos todos los valores del form! Los vamos a guardar enalgún lugar*/
const listaDeLosProductos = document.getElementById("listaDeLosProductos");


/*vamos a hacer un EVENTO ahora justamente para agarrar los datos*/

botonDeAñadir.addEventListener("click", (event) => {    
    event.preventDefault(); /*siempre que tengamos un formulario lo agregamos, evita que el formulario se envie más de una vez*/
    const producto = añadirProducto.value /*con el .value lo que hago es capturar el valor que ingreso en el input*. Aqui asigno a la variable producto ese valor*/
    cantidadProductos.textContent = carroEnzo.length + 1
    carroEnzo.push(producto) /*aquí le voy a pushear al carroEnzo lo que vendrá desde PRODUCTO*/
    agregador.reset()
    listaDeLosProductosConForEach();
})

/*vamos a crear una FUNCIÓN en la cual le añadiremos a una lista de HTML los productos que vamos agragando*/

const listaDeLosProductosConForEach = () => {
    listaDeLosProductos.innerHTML = ""; /*al añadir esto, me aseguro que LIMPIE lo que voy añadiendo */
    if (carroEnzo.length === 0) {
        listaDeLosProductos.textContent = "No hay productos en el carrito, pa"
    } else {
        carroEnzo.forEach((producto) => { /*aqui usaremos el forEach para iterar el ARRAY y luego ejecuta la funcion que creamos (crear LIs) */
            const liQueCreamos = document.createElement("li");
            liQueCreamos.textContent = producto;
            listaDeLosProductos.appendChild(liQueCreamos);
        });
    }
}

