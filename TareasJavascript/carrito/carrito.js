//Quinta clase JS - 22 Noviembre
//Javascript: ejercicios en grupos de los visto hasta ahora

//Ejercicio Grupal -  Crear un carrito de compras (consola):

// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● 1-Agregar producto al carrito
// ● 2-Listar los productos del carrito
// ● 3-Buscar un producto en el carrito
// ● 5-Filtrar productos que coincidan con una palabra, parte de ella una letra PENDIENTE**
// ● 6-Eliminar producto del carrito PENDIENTE**

// Crud --> Create, Read, Update, Delete
// ABM  --> Alta, Baja, Modificacion


console.log("Bienvenido al Carrito");

//Creamos arreglo vacio que representa el carrito de compras
const carritoCompras = [];

//1-Agregar productos al carrito (FUNCION)
function agregaElementos(nombre){
    const producto = {nombre};
    carritoCompras.push(producto);
    console.log(`${nombre} agregado al carrito exitosamente`);
}

//Elementos que vamos agregar al carrito:
agregaElementos('tomate');
agregaElementos('zanahoria');
agregaElementos('agua');
agregaElementos('huevos');
agregaElementos('leche');
agregaElementos('tomate');
agregaElementos('aceite');

//2-Listamos el contenido del carrito
console.log("Carrito de compras:");
console.log(carritoCompras);

//3-Buscar un producto en el carrito
function buscarElemento(nombreElemento) {
    return nombreElemento.nombre === 'leche';

  }

console.log("Elemento encontrado:");
console.log(carritoCompras.find(buscarElemento));
