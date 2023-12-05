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

class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, edad, color){
        super(nombre, edad);
        this.color = color;
        
       
    }

    sonido() {
        console.log(`El perro ${this.nombre} que tiene una edad de ${this.edad} de color ${this.color} años hace guau guau`);
    }
}


const animal1 = new Animal("Odi", 1); 
const animal2 = new Perro("Firulais", 3, "negro");


console.log(animal1)




    