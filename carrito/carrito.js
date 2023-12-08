const carrito = [];

const cantidadProductos = document.getElementById("catidadDeProductos");
const formAddProduct = document.getElementById("form-add-producto");
const inputAddProduct = document.getElementById("addProduct");
const buttonAddProduct = document.getElementById("buttonAdd");
const listaProductos = document.getElementById("listaProductos");
const buscarProducto = document.getElementById("formBuscarProducto");
const inputBuscarProducto = document.getElementById("inputBuscarProducto");
const buttonBuscarProducto = document.getElementById("buttonBuscarProducto");
const resultadoBusqueda = document.getElementById("mostrarResultadoBusqueda");
const filtrarProducto = document.getElementById("formFiltrarProducto");
const inputFiltrarProducto = document.getElementById("inputFiltrarProducto");
const buttonFiltrarProducto = document.getElementById("buttonFiltrarProducto");
const resultadoFiltrado = document.getElementById("mostrarResultadoFiltrado");
// const listaFiltrada = document.getElementById("mostrarProductosFiltrados")
// const listaFiltrada = document.getElementById("listaFiltrada");

buttonAddProduct.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputAddProduct.value === "") {
    alert("No se puede agregar un producto vacio");
    return;
  }
  const producto = inputAddProduct.value.toLowerCase().trim();
  cantidadProductos.textContent = carrito.length + 1;
  carrito.push(producto);
  console.log(carrito);
  formAddProduct.reset();
  listarProductos();
});

const listarProductos = () => {
  listaProductos.innerHTML = "";

  if (carrito.length === 0) {
    listaProductos.textContent = "No hay productos en el carrito";
  } else {
    carrito.forEach((producto, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1} - ${producto}`;
      listaProductos.appendChild(li);
    });
  }
};

buttonBuscarProducto.addEventListener("click", (e) => {
  // agregamos un evento al boton de buscar producto y le pasamos por parametro el evento e
  e.preventDefault();

  let productoABuscar = inputBuscarProducto.value.toLowerCase().trim(); // trim() elimina los espacios en blanco al principio y al final de un string
  console.log(productoABuscar);

  const indice = buscarProductoEnCarrito(productoABuscar); // llamamos a la funcion buscarProductoEnCarrito y le pasamos por parametro el producto a buscar que estamos recibiendo en la funcion buscarProductoEnCarrito

  console.log(indice, "indice");

  if (indice !== -1) {
    // si el indice es distinto a -1, es porque el producto se encuentra en el carrito
    resultadoBusqueda.textContent = `El producto ${productoABuscar} se encuentra en el carrito en la posicion ${
      indice + 1
    }`;
  } else {
    resultadoBusqueda.textContent = `El producto ${productoABuscar} NO se encuentra en el carrito`;
  }
});

function buscarProductoEnCarrito(productoABuscar) {
  return carrito.indexOf(productoABuscar); // traemos por parametro el producto a buscar que estamos recibiendo en la funcion. indexOf nos devuelve el indice del elemento que estamos buscando. Si no lo encuentra devuelve -1
}

buttonFiltrarProducto.addEventListener("click", (e) => {
  e.preventDefault();

  let valorFiltro = inputFiltrarProducto.value.toLowerCase().trim();
  console.log(valorFiltro, "Estoy Filtrado");

  let valorFiltrado = buscarProductoFiltrado(valorFiltro);

  console.log(valorFiltrado, "Valor Filtrado");

  if (valorFiltrado.length === 0) {
    resultadoFiltrado.textContent = `No se encontraron resultados para ${valorFiltro}`;
  } else {
    resultadoFiltrado.textContent = `Se encontraron ${valorFiltrado.length} resultados para ${valorFiltro}`;
    listaFiltrada.innerHTML = ""
    valorFiltrado.forEach((producto, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1} - ${producto}`;
      listaFiltrada.appendChild(li);
    })


}});

function buscarProductoFiltrado(filtro) {
  const productoFiltrado = carrito.filter((producto) =>
    producto.includes(filtro)
  ); // filter() crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada. includes() determina si un array incluye un determinado elemento, devuelve true o false segun corresponda.
  return productoFiltrado;
}


function eliminarProducto(producto) {
  const indice = carrito.indexOf(producto);
  if (indice !== -1) {
    carrito.splice(indice, 1);
    listarProductos();
    console.log(carrito);
  } else {
    console.log("El producto no existe");
  }
}
