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
const listaProductosFiltrado = document.getElementById("listaProductosFiltrado"); // Agregado un ID para la lista de productos filtrados

buttonAddProduct.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputAddProduct.value === "") {
    alert("No se puede agregar un producto vacío");
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
      li.textContent = `- ${producto}`;
      listaProductos.appendChild(li);
    });
  }
};

buttonBuscarProducto.addEventListener("click", (e) => {
  e.preventDefault();

  let productoABuscar = inputBuscarProducto.value.toLowerCase().trim();
  console.log(productoABuscar);

  const indice = buscarProductoEnCarrito(productoABuscar);

  console.log(indice, "indice");

  if (indice !== -1) {
    resultadoBusqueda.textContent = `El producto ${productoABuscar} se encuentra en el carrito en la posición ${indice}`;
  } else {
    resultadoBusqueda.textContent = `El producto ${productoABuscar} NO se encuentra en el carrito`;
  }
});

function buscarProductoEnCarrito(productoABuscar) {
  return carrito.indexOf(productoABuscar);
}

buttonFiltrarProducto.addEventListener("click", (e) => {
  e.preventDefault();

  let valorFiltro = inputFiltrarProducto.value.toLowerCase().trim();
  console.log(valorFiltro, "Estoy Filtrado")

  let valorFiltrado = buscarProductoFiltrado(valorFiltro);

  console.log(valorFiltrado, "Valor Filtrado")

  // Limpiar resultados anteriores
  resultadoFiltrado.textContent = "";
  listaProductosFiltrado.innerHTML = "";

  if(valorFiltrado.length === 0){
    resultadoFiltrado.textContent = `No se encontraron resultados para ${valorFiltro}`;
  } else {
    resultadoFiltrado.textContent = `Se encontraron ${valorFiltrado.length} resultados para ${valorFiltro}`
    valorFiltrado.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = `- ${producto}`;

      // Agregar un botón de eliminar
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
        // Llamar a la función eliminarProducto con el nombre del producto
        eliminarProducto(producto);
        // Volver a ejecutar la búsqueda y mostrar resultados actualizados
        buttonFiltrarProducto.click();
      });

      // Agregar el botón al elemento de la lista
      li.appendChild(btnEliminar);

      // Agregar el elemento de la lista al contenedor
      listaProductosFiltrado.appendChild(li);
    });
  }
});

function buscarProductoFiltrado(filtro){
  const productoFiltrado = carrito.filter( producto => producto.includes(filtro));
  return productoFiltrado;
}

function eliminarProducto(producto) {
  const indice = carrito.indexOf(producto);

  if (indice !== -1) {
    carrito.splice(indice, 1);
    cantidadProductos.textContent = carrito.length;
    listarProductos();
  }
}
