const carrito = [];

const cantidadProdutos = document.getElementById("catidadDeProductos");
const formAddProduct = document.getElementById("form-add-producto");
const inputAddProduct = document.getElementById("addProduct");
const buttonAddProduct = document.getElementById("buttonAdd");
const listaProductos = document.getElementById("listaProductos");

const formSerch = document.getElementById("formSerchProduct")
const inputSerch = document.getElementById("inputSerchProduct")
const buttonSerch = document.getElementById("buttonSerch")
const p=document.getElementById("serchResults")


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

buttonSerch.addEventListener("click", (e) => {
  e.preventDefault()
  const busqueda = inputSerch.value.trim()
  console.log(busqueda)
  carrito.forEach((producto)=>{
    if (producto===busqueda) {
      p.textContent=producto
    }
    formSerch.reset()
  })

}
)

// const buscarProducto = (str) => {
//   let buscar = str;
//   let encontrado = ''
//   for (let i = 0; i < carrito.length; i++){
//       if (carrito[i].toLowerCase() === buscar.toLowerCase()){
//           encontrado = carrito[i]
//           console.log(encontrado)
//       }
//   }
//   if(encontrado=='') console.log('No existe el producto')
// }