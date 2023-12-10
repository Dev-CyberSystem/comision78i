//Creamos un array vacio para almacenar el carrito:
const carritoDeCompras = [];

//1-Creamos funcion para AgregarProductosCarrito:
const agregaProductosCarrito = (carrito, producto) => {
    carrito.push(producto);
    console.log(`${producto.nombre} ha sido agregado al carrito`);
};

agregaProductosCarrito(carritoDeCompras, {nombre: "Leche", precio: 13});
agregaProductosCarrito(carritoDeCompras, {nombre: "Cereal", precio: 18});
agregaProductosCarrito(carritoDeCompras, {nombre: "Maiz", precio: 10});
agregaProductosCarrito(carritoDeCompras, {nombre: "Huevos", precio: 2});

//2-Funcion para Mostrar los elementos del carrito:
function mostrarProductosCarrito(){
    console.log("Elementos del carrito actual: ");
    for(let i=0; i<carritoDeCompras.length; i++){
        console.log(carritoDeCompras[i].nombre, "-",carritoDeCompras[i].precio);
    }
}
mostrarProductosCarrito();

//3- Funcion para Buscar los elementos en el array (por normbre)
function buscarProductosCarrito(carritoDeCompras, nombre){
    //primero recorremos el array
    for(let j = 0; j<carritoDeCompras.length; j++){
        //validamos si el nombre del producto es igual al nombre(parametro)
        if(carritoDeCompras[j].nombre === nombre){
            return console.log("Producto encontrado: "+ carritoDeCompras[j].nombre+ " y su precio es: "+ carritoDeCompras[j].precio);
        }else{
            return console.log("Producto no encontrado :(");
        }
    }
}
buscarProductosCarrito(carritoDeCompras, 'Leche');

//4-Eliminar productos del carrito:
// Función para eliminar un producto del carrito por su nombre
function eliminarProductoDelCarrito(nombre) {
    const indiceProducto = carritoDeCompras.findIndex(producto => producto.nombre === nombre);
    if (indiceProducto !== -1) {
        const productoEliminado = carritoDeCompras.splice(indiceProducto, 1);
        console.log(`"${productoEliminado[0].nombre}" eliminado del carrito.`);
    } else {
        console.log(`El producto "${nombre}" no se encontró en el carrito.`);
    }
}
// Eliminar un producto del carrito por su nombre
eliminarProductoDelCarrito('Leche');

// Mostrar el contenido actualizado del carrito después de eliminar un producto
console.log('Contenido del carrito después de eliminar un producto:');
console.log(carritoDeCompras);

// Función para filtrar productos por su nombre
function filtrarProductosPorNombre(nombreProducto) {
    const productosFiltrados = carritoDeCompras.filter(producto => {
        return producto.nombre.toLowerCase() === nombreProducto.toLowerCase();
    });

    if (productosFiltrados.length > 0) {
        console.log(`Productos con el nombre "${nombreProducto}":`);
        console.log(productosFiltrados);
    } else {
        console.log(`No hay productos con el nombre "${nombreProducto}".`);
    }
}

// Filtrar productos en el carrito por nombre
filtrarProductosPorNombre('Leche'); 