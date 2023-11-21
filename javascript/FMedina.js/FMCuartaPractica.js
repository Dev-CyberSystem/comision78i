// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.


// let mes = prompt("Ingrese el dia del mes en formato número: ")
// switch (mes) {
//   case "1":
//     console.log("ENERO");
//     break;
//   case "2":
//     console.log("FEBRERO");
//     break;
//   case "3":
//     console.log("MARZO");
//     break;
//   case "4":
//     console.log("ABRIL");
//     break;
//   case "5":
//     console.log("MAYO");
//     break;
//   case "6":
//     console.log("JUNIO");
//     break;
//   case "7":
//     console.log("JULIO");
//     break;
//   case "8":
//     console.log("AGOSTO");
//     break;
//   case "9":
//     console.log("SEPTIEMBRE");
//     break;
//   case "10":
//     console.log("OCTUBRE");
//     break;
//   case "11":
//     console.log("NOVIEMBRE");
//     break;
//   case "12":
//     console.log("DICIEMBRE");
//     break;
//     default:
//     console.log("El número ingresado no corresponde a un mes del año. Por favor ingrese un número del 1 al 12.");
//     break;  
// }


// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

// let numero = parseInt(prompt("Ingrese un número del 1 al 7 que corresponda a un día de la semana"))
// const programa = () => {
//     if (numero === 1) {
//         console.log("Hoy es lunes")
//     } else if (numero === 2) {
//         console.log("Hoy es martes")
//     } else if (numero === 3 ) {
//         console.log("Hoy es miercoles")
//     } else if (numero === 4 ) {
//         console.log("Hoy es jueves")
//     } else if (numero === 5 ) {
//         console.log("Hoy es viernes")
//     } else if (numero === 6 ) {
//         console.log("Hoy es sábado")
//     } else if (numero === 7 ) {
//         console.log("Hoy es domingo")
//     } else {
//         alert("El número ingresado no corresponde a un día de la semana")
//     }
// }
// programa()

// let dia = prompt("Ingrese el dia de la semana en formato numero: ")
// switch (dia) {
//   case "1":
//     console.log("Hoy es Lunes");
//     break;
//   case "2":
//     console.log("Hoy es Martes");
//     break;
//   case "3":
//     console.log("Hoy es Miercoles");
//     break;
//   case "4":
//     console.log("Hoy es Jueves");
//     break;
//   case "5":
//     console.log("Hoy es Viernes");
//     break;
//   case "6":
//     console.log("Hoy es Sábado");
//     break;
//   case "7":
//     console.log("Hoy es Domingo");
//     break;
//     default:
//     console.log("No es un día de la semana");
//     break;  
// }

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// let letra = prompt("Ingrese una letra")
// const caracter = () => {

//     letra = letra.toLocaleLowerCase()

//     if (/^[aeiou]$/.test(letra)) {
//         console.log("Es una vocal")
//     }   else {
//         console.log("Es una consonante")
//     }
// }
// caracter()
//El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.

// let letraIngresada = prompt("Ingrese una letra")
// const vocalOConsonante = () => {
//     if (letraIngresada === "a" || letraIngresada === "e" || letraIngresada === "i" || letraIngresada === "o" || letraIngresada === "u") {
//         console.log("La letra ingresada es una vocal")
//     } else {
//         console.log("Es una consonante")
//     }
// }
// vocalOConsonante()

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// let numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 5"))
// const diaDeLaSemana = () => {
//     dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
//     if (numeroIngresado >= 1 && numeroIngresado <= 5) {
//         return console.log("El número ingresado corresponde al día " + dias[numeroIngresado - 1]) 
//     } else {
//         console.log("Ingrese un numero del 1 al 5")
//     }
// }
// diaDeLaSemana()

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

// let letra = prompt("Ingrese una letra")
// const minisculaOMayuscula = () => {
//     if (letra === letra.toLocaleLowerCase()) {
//         console.log("La letra ingresada es una MINÚSCULA")
//     } else {
//         console.log("La letra ingresada es una MAYÚSCULA")
//     }
// }
// minisculaOMayuscula()

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

// let nota = parseInt(prompt("Ingrese un número del 0 al 10"))
// const calificacion = () => {
//     switch (true) {
//         case (nota >= 0 && nota <= 3):
//             console.log("Suspenso")
//             break;
//         case (nota >= 4 && nota <= 6):
//             console.log("Aprobado")
//             break;
//         case (nota >= 7 && nota <= 8):
//             console.log("Notable")
//             break;
//         case  (nota >= 9 && nota <= 10):
//             console.log("Sobresaliente")
//         break;
//         default:
//             console.log("La nota ingresada no es válida")
//         break;
//     }
// }
// calificacion()

// 7) Imprimir los números pares del 2 al 20 en la consola.

// for (let numero = 0; numero <=20; numero +=2) {
//     console.log(numero)
// }

// 8) Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// let string = prompt("Ingrese una frase o palabra");
// for (let i = 0; i < string.length; i++) {
//     const letra = string[i].toLocaleUpperCase();
//     console.log(letra);
// }

// 9) Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// let numero = prompt("Ingrese un numero")
// for (let i = 0; i <=numero; i++) {
//     console.log(i);
// }

// 10) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

//NO ME SALEEEEEEEE

// 11) Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.

// let palabra = prompt("Ingrese una palabra").toLowerCase();
// let reverse = palabra.split("").reverse().join("").toLowerCase();
// switch (true) {
//     case (palabra === reverse) :
//         console.log("Es un Palíndromo")
//     break;
//     default:
//         console.log("No es un Palíndromo")
//     break;
// }

// 12) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

//NO ME SALEEE

// 13) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

// NO ME SALEEEEEEEEE


// 14) Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// for (inicio; condicion; incremento) { 
//     codigo a ejecutar
//  }


// for ( let i = 10 ; i <= 10; i++) {
//     console.log(i);
// }

// let numero = prompt("Ingrese un numero del 0 al 50")
// for (i = 1; i <= numero; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// 15) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.


// let numerosIngresados = prompt("Ingrese una serie de números separados por una coma").split(",")
// for (let i = 0; i < numerosIngresados.length; i++) {
//     numerosIngresados[i] = parseInt(numerosIngresados[i]);
// }
// let numeroMenor = Math.min(numerosIngresados);
// console.log(numeroMenor);
                // NO SALEEEEEEEEEEEEE

// 16) Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// const adivinaElNumero = (numero) => {
//     let numeroGeneradoAleatorio = Math.floor(Math.random() * 100) + 1
//     let intentos = 0
//     let adivino = false
//     while (!adivino) {
//         numero = parseInt(prompt("Se generó un numero al azar entre 1 y 100, cual es?"))
//         intentos++
//         if (numero !== numeroGeneradoAleatorio) {
//             alert("No acertaste el número")
//         } else {
//             loLogro = true
//             return alert("Adivinaste! Te costó " + intentos + "intentos")
//         }
//     }
// }
// adivinaElNumero()

// 17) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// let numerosIngresados = prompt("Ingrese números separados por coma")
// let numerosSinComa = numerosIngresados.split(",")
// cant = 0
// for (let i = 0; i < numerosSinComa.length; i++) {
//     if (parseInt(numerosSinComa[i]) % 2 === 0) {
//         cant++
//     }
// }
// console.log("Los números pares ingresados son: " + cant)


// 18) Dado un array de números, escribir una función que retorne el número más grande del array.
// let array = [0,2,25,74,33,15,87]
// const numeroMax = (array) => {
//     let maximo = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maximo) {
//             maximo = array[i]
//         }
//     }
//     return console.log ("El número mas grande del array es " + maximo)
// }
// numeroMax(array)

// function numeroMasGrande(array) {    
//     //encontrar el numero más grande
//     let numeroMaximo = array[0]; //asumimos q el primer elemento es el más grande
    
//     for (let i = 0; i < array.length; i ++) {
//         if (array[i] > numeroMaximo) {
//             numeroMaximo = array[i]
//         }
//     }
//     return numeroMaximo;
// }   
// let numeros = [5, 2, 9, 1, 7];
// let resultado = numeroMasGrande(numeros);
// console.log("El número más grande es: " + resultado);

// 19) Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
//const nombreFuncion = (parametros) => expresion;

// let arrayNumeros = [2,5,8,11,16,33]
// const paresDelArray = (array) => {
//     let par = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             par.push(array[i])
//         }
//     }
//     console.log("Los números pares son " + par)   
// } 
// paresDelArray(arrayNumeros)

// 20) Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// let arrayDeNumeros = [2,9,24,33,48]
// let total = 0
// const sumaDeNumeros = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         total += arrayDeNumeros[i]
//     } 
//     console.log("La suma de los números es " + total)
// }
// sumaDeNumeros(arrayDeNumeros)

// 21) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// let arrayDeString = ["hola", "como", "estás?"]

// const arrayNuevoEnMayuscula = (array) => {
//     let arrayMayuscula = []
//     for (let i = 0; i < array.length; i++) {
//         let stringMayuscula = array[i].toUpperCase()
//         arrayMayuscula.push(stringMayuscula)
//     }
//     return console.log(arrayMayuscula)
// }
// arrayNuevoEnMayuscula(arrayDeString)

// 22) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

// let array = [2,6,9,15,33]
// let numeroX = 8

// const numeroMayorX = (array) => {
//     let nuevoArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > numeroX) {
//             nuevoArray.push(array[i])
//         }
//     }
//     return console.log("Los números del array mayores a " + numeroX + " son " + nuevoArray )
// }
// numeroMayorX(array, numeroX)

// 23) Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

// let array = [3,6,15,28,33]
// const sumaDelArray = (array) => {
//     let suma = 0
//     let numerosGrandes = []
//     for (let i = 0; i < array.length; i++) {
//         suma += array[i]
//         if ( array[i] > 10) {
//         numerosGrandes.push(array[i])
//         }
//     }
//     return console.log("La suma de los números del array es " + suma + " y los numeros grandes mayores a 10 son " + numerosGrandes)
// }
// sumaDelArray(array)


// 24) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

// let arrayDeString = ["gato", "perros", "hormiga", "pajaros", "sapo"]
// const nuevoArray = (array) => {
//     let arrayDe5Caracteres = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > 5) {
//             arrayDe5Caracteres.push(array[i])
//         }
//     }
//     console.log(arrayDe5Caracteres)
// }
// nuevoArray(arrayDeString)


// 25) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

// let arrayDeString = ["aconquija", "presidente", "rolling code", "ambulancia", "arar"]
// const nuevoArray = (array) => {
//     let arrayConA = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > 5 && array[i].toLowerCase().startsWith("a") ) {
//             arrayConA.push(array[i])
//         }
//     }
//     console.log("Las palabras con mas de 5 letras y que empiezan con la letra a son: " + arrayConA )
// }
// nuevoArray(arrayDeString)

// 26) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.

// let arrayDeNumeros = [1, 5, 33, 65, 88, 93, 74]
// let numeroX = 60
// const arrayOriginal = (array) => {
//     let arrayNuevo = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > numeroX) {
//             arrayNuevo.push(array[i])
//         }
//     }
//     let primerosTresNumeros = arrayNuevo.slice(0, 3)
//     return console.log("Los tres primeros números mayores a " + numeroX + " son " + primerosTresNumeros)
// }
// arrayOriginal(arrayDeNumeros)

// 27) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.

// let arrayNumeros = [1,5,9,26,38]
// const funcionArray = (array) => {
//     let nuevoArray = []
//     for (let i = 0; i < array.length; i++) {
//         nuevoArray.push(array[i] + 1)
//     }   
//     return console.log(nuevoArray)
// }
// funcionArray(arrayNumeros)

// 28) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.

// let arrayDeNumeros = [1,5,9,26,38]
// const functionReturn = (array) => {
//     let nuevoArray = []
//     for (let i = 0; i < array.length; i++) {
//         nuevoArray.push(array[i])
//     }
//     nuevoArray.pop()
//     return console.log(nuevoArray)
// }   
// functionReturn(arrayDeNumeros)

// 29) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.

// let arrayDeNumeros = [1,5,9,26,38]
// const funcionArray = (array) => {
//     let nuevoArray = []
//     for (let i = 0; i < array.length; i++) {
//         nuevoArray.push(array[i])
//     }
//     nuevoArray.shift()
//     nuevoArray.pop()
//     return console.log(nuevoArray)
// }
// funcionArray(arrayDeNumeros)

// 30) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.

// let arrayDeNumeros = [1,5,9,26,38]
// const funcionArray = (array) => {
//     let nuevoArray = []
//     for (let i = 0; i < array.length; i++) {
//         nuevoArray.push(array[i])
//     }
//     nuevoArray.splice(2,1)
//     return console.log(nuevoArray)
// }
// funcionArray(arrayDeNumeros)