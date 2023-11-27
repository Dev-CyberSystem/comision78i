const carrito = [];

const cantidadProdutos = document.getElementById("catidadDeProductos");
const formAddProduct = document.getElementById("form-add-producto");
const inputAddProduct = document.getElementById("addProduct");
const buttonAddProduct = document.getElementById("buttonAdd");
const listaProductos = document.getElementById("listaProductos");

buttonAddProduct.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputAddProduct.value === "") {
    alert("No se puede agregar un producto vacio");
    return;
  }
  const producto = inputAddProduct.value;
  cantidadProdutos.textContent = carrito.length + 1;
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
    carrito.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = producto;
      listaProductos.appendChild(li);
    });
  }
};
