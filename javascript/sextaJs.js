// // Objetos.

// //POO

// // Programación Orientada a Objetos.

// let persona = {} // Objeto vacío.

// let persona2 = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 30,
//     saludar: function(){
//         console.log( `Hola  ${this.apellido}`  );
//     }
// }

// persona2.saludar();

// // Función constructora.

// class Perro {
//     constructor(nombre, raza, edad){
//         this.nombre = nombre;
//         this.raza = raza;
//         this.edad = edad;
//     }
// }

// let perro1 = new Perro("Firulais", "Pitbull", 3);
// let perro2 = new Perro("Boby", "Chihuahua", 2);
// console.log(perro1.nombre, perro2)

// // const gato = {
// //     "nombre del gato": "Michi",
// //     "raza del gato": "Persa",
// // }
// // console.log(gato["nombre del gato"])

// class Animal {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar(){
//         console.log(`Hola soy ${this.nombre}`);
//     }
// }

// class Perro extends Animal {
//     constructor(nombre, edad, color){
//         super(nombre, edad);
//         this.color = color;
              
//     }

//     sonido() {
//         console.log(`El perro ${this.nombre} que tiene una edad de ${this.edad} de color ${this.color} años hace guau guau`);
//     }
// }


// const animal1 = new Animal("Odi", 1); 
// const animal2 = new Perro("Firulais", 3, "negro");


class Producto{
    constructor(nombre, precio, stock) {
        this.nombre = nombre,
        this.precio = precio,
        this.stock = stock
    }
    imprimirDatos() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} y quedan en stock ${this.stock}`)
    }
}

const producto1 = new Producto("Coca", 1500, 5)
const producto2 = new Producto("Pepsi", 1000, 6)

const almacen = [producto1, producto2]

almacen.forEach(pepito => pepito.imprimirDatos())

// Setters y Getters son funciones especiales para establecer y obtener valores

// Getters obtienen los valores.  get 

// Setters establecen los valors  set

// class Persona{
//     constructor(name, lastname, raza){
//         this._nombre = name,
//         this._apellido = lastname
//         this._raza = raza
//     }

//     get getNombre(){
//         return this._nombre
//     }

//     set setNombre(name){
//         this._nombre = name
//     }

// }


// const persona1 = new Persona("Lionel", "Messi", "GOAT")

// console.log(persona1.getNombre, " <---- getNombre") 

// console.log(persona1.setNombre = "Andres", " <---- setNombre")

// console.log(persona1.getNombre, " <---- getNombre") 