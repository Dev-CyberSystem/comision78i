// swich

// Sintaxis

// switch (expresion) {
//   case valor1:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con el valor1
//     break;
//   case valor2:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con el valor2
//     break;
//   case valorN:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con valorN
//     break;
//   default:
//     // Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//     break;
// }

// let dia = prompt("Ingrese un dia de la semana: ").toLocaleUpperCase().trim();
// switch (dia) {
//   case "LUNES":
//     console.log("Hoy es Lunes");
//     break;
//   case "MARTES":
//     console.log("Hoy es Martes");
//     break;
//   case "MIERCOLES":
//     console.log("Hoy es Miercoles");
//     break;
//   default:
//     console.log("No es ningun dia");
//     break;
// }

// let diaSemana = prompt("Ingrese un dia de la semana: ").toLocaleUpperCase().trim();

// switch (diaSemana) {
//     case "LUNES":
//     case "MARTES":
//     case "MIERCOLES":
//     case "JUEVES":
//     case "VIERNES":
//         console.log("Es un dia habil");
//         break;
//     case "SABADO":
//     case "DOMINGO":
//         console.log("Es un dia no habil");
//         break;
//     default:
//         console.log("No es un dia");
//         break;
// }

// let banda = prompt("Ingrese una banda: ").toLocaleUpperCase().trim();

// switch (banda) {
//     case "METALLICA":
//         alert("Banda de Heavy Metal");
//         break;
//     case "MEGADETH":
//         alert("Banda de Heavy Metal");
//         break;
//     case "LA RENGA":
//         alert("Banda de Rock Nacional");
//         break;
//     case "DIVIDIDOS":
//         alert("Banda de Rock Nacional");
//         break;
//     default:
//         alert("Amargo te gusta L-Gante")
//         break;
// }

// Ternario

// Sintaxis

// condicion ? true : false;

// let edad = 65;

// let resultado =
//   edad >= 18 && edad < 50
//     ? "Es mayor de edad"
//     : edad >= 50 && edad < 100
//     ? "Es adulto mayor"
//     : edad >= 100
//     ? "Es centenario"
//     : "Es menor de edad";
// console.log(resultado);


// Bucles o ciclos o loops
// for - while - do while 

// for 
// Sintaxis   
// for (inicio; condicion; incremento) { 
//     codigo a ejecutar
//  }


// for ( let i = 10 ; i <= 10; i++) {
//     console.log(i);
// }

// let j = 2

// for (j ; j <= 20; j += 3) {
//     console.log(j);
// }

let array = ["hola", "como", "estas", "hoy", "bien"];
// console.log(array[4], "posicion 4");

// let extension = array.length;
// console.log("Extension del array -->", extension )

 for (let i = 4; i < array.length; i++) {
        console.log(array[i]);
    }

// Ciclo While

// Sintaxis 
// while (condicion) {
//     codigo a ejecutar
//     iteracion
// }

// let x = 0;

// while (x <= 10) {
//     console.log(x);
//     x++;
// }

// Ciclo Do While

// Sintaxis
// do {
//     codigo a ejecutar
//     iteracion
// } while (condicion);

// let y = 5;

// do {
//     console.log(y);
//     y++;
// } while (y <= 15);

// Metodos de arrays --> Colecciones de elementos.

// crear un array vacio

let arrayVacio = [];

let arrayContenido = ["hola", 1, true, { nombre: "Juan" }, [1, 2, 3]];

// ingresar un elemento  del array

let arrayNumeros = [1, 2, 3, ];
console.log(arrayNumeros[0]) // 1
console.log(arrayNumeros[1]) // 2
console.log(arrayNumeros[2]) // 3

// agregar elementos al array al final del array

// arrayNumeros.push("hola");

// agregar elementos al array al principio del array
// arrayNumeros.unshift("chau");

// agregar elemento en una posicion especifica del array
arrayNumeros.splice(2, 0, "especifica");
console.log(arrayNumeros);

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// Imprimir los números pares del 2 al 20 en la consola.
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// Dado un array de números, escribir una función que retorne el número más grande del array.
// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.