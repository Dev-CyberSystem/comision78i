//1-Creamos la lista de productos vacía para almacenar los productos
const carrito = [];

//2-Ahora debemos tomar los elementos del html y pasarlos a leer en JS:
//tomamos todos los datos del FORM:
const cantidadProdutos = document.getElementById("cantidadDeProductos"); //dentro de span muestra la cantidad de prod
const formAddProduct = document.getElementById("form-add-producto");
const inputAddProduct = document.getElementById("addProduct");
const buttonAddProduct = document.getElementById("buttonAdd");
const listaProductos = document.getElementById("listaProductos"); //valor del boton

//3-Creamos funcion que permita escuchar y agregar productos
buttonAddProduct.addEventListener("click", (event) => { //Evento
  event.preventDefault(); //siempre que tengamos un form debemos agregarlo y evita que los formularios se envien mas de una vez
  //console.log('Hicimos click en el boton'); //comprobar que escucha y hacer lo siguiente:

  //Si el input esta vacio
  if (inputAddProduct.value === "") {
    alert("No se puede agregar un producto vacio");
    return;
  }

  //tomamos el valor del input:
  const producto = inputAddProduct.value; 
  cantidadProdutos.textContent = carrito.length + 1; //muestra la posicion +1
  carrito.push(producto); //agregamos al array carrito[];
  console.log(carrito);
  formAddProduct.reset();  //limpia el form
  listarProductos(); //Se invoca despues de agregar elementos en el carrito.
});

//4-Funcion que muestra todo lo que vayamos guardando
const listarProductos = () => {
  listaProductos.innerHTML = "";

  //Primero verificamos que la lista no esté vacia
  if (carrito.length === 0) {
    listaProductos.textContent = "No hay productos en el carrito";
  } else {
    carrito.forEach((producto, index) => {
      const li = document.createElement("li"); //Creamos un elemento li para mostrar
      li.textContent = producto; //asignamos el valor de li como producto actual.
      listaProductos.appendChild(li); //agregamos el valor a listar producto
    });
  }
};