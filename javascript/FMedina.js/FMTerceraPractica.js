// Tarea

//Crear una función que tome dos números como parámetros y devuelva el número mayor.

// const esMayor = (num1, num2) => {
//     if (num1 > num2) {
//       console.log(num1, "es Mayor");
//     } else if (num1 === num2){
//       console.log("Son iguales")
//     } else {
//       console.log(num2, "Es mayor");
//     }
//   };
  
// esMayor(5, 5); //pasando los numeros por parametro

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
// const parametro = (num1) => {
//     if (num1 > 0) {
//         console.log(num1, "es Positivo")
//     } else if (num1 < 0) {
//         console.log(num1, "es Negativo")
//     } else {
//         console.log(num1, "es Cero")
//     }
// };
// parametro(5);

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
// const divisible = (number) => {
//     if (number % 2 === 0) {    //El operador resto (%) devuelve el resto de la división entre dos operandos. Siempre toma el signo del dividendo.
//         console.log(`El número ${number} es par`)
//     } else {
//         console.log(`El número ${number} es impar`)
//     }
// }
// divisible(5);

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

// let number = prompt("Ingrese un número")
// const programa = () => {
//    if (number % 2 === 0) {
//     console.log (`El número ingresado ${number} es par`)
//    } else {
//     console.log(`El número ingresado ${number} es impar`)
//    }
// }
// programa();

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

// let numero = prompt("Ingrese un número")
// const num1 = () => {
//     if (numero > 0) {
//         console.log("El número ingresado es POSITIVO")
//     } else if (numero < 0) {
//         console.log("El número ingresado es NEGATIVO")
//     } else {
//         console.log("El número ingresado es CERO")
//     }
// }
// num1();

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
// let numero1 = prompt("Ingrese un número")
// let numero2 = prompt("Ingrese un segundo número")
// const cualEsMayor = () => {
//     if (numero1 > numero2) {
//         console.log(`El número ${numero1} es mayor`)
//     } else if (numero1 < numero2){
//         console.log(`El número ${numero2} es mayor`)
//     } else {
//         console.log("Los número ingresados son iguales")
//     }
// }
// cualEsMayor()

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

// let contra = prompt("Ingrese una contraseña");
// const contraseña = () => {
//   if (contra.length >= 6 && contra.includes('@')) {
//     console.log("Contraseña correcta");
//   } else {
//     console.log(
//       "la contraseña debe contener al menos 6 letras y al menos 1 caracter especial"
//     );
//   }
// };
// contraseña();

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
// let nota = parseInt(prompt('Ingrese una calificación en números'))
// const calificación = () => {
//     if (nota >= 70) {
//     console.log(`su nota es90 ${nota}, por lo tanto está aprobado!`) 
//     } else {
//         console.log ("Está desaprobado")
//     }
// }
// calificación()

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
// function palindromo(cadena) {
//     let array = cadena.toLowerCase().replace(/ /g, ""); //convierto la cadena en un array y aplico el metodo replace.
//     let reverse = array.split("").reverse().join(""); //Divido la cadena en un arreglo de cadenas. Giramos el array por completo y sacamos los espacios con el join. 
//     if (array == reverse) {
//         console.log("Es un palíndromo")
//     } else {
//         console.log("No es un palíndromo")
//     }
//     // return cadena == reverse.join("")
// }
// palindromo("neuquen")
// palindromo("Alli ves Sevilla")
// palindromo("Anita lava la tina")
// palindromo("hola mundo")

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
// let letra = prompt("Ingrese una letra")
// const programa = () => {
//     if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
//         console.log("Es una vocal")
//     } else {
//         console.log("Es una consonante")
//     }
// }
// programa()
// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
// let dia = parseInt(prompt("Ingrese un número del 1 al 7"))
// const diaDeLaSemana = () => {
//     if (dia === 1) {
//         console.log("Hoy es el día Lunes")
//     } else if (dia === 2) {
//         console.log("Hoy es el día Martes")
//     } else if (dia === 3) {
//         console.log("Hoy es el día Miercoles")
//     } else if (dia === 4) {
//         console.log("Hoy es el día Jueves")
//     } else if (dia === 5) {
//         console.log("Hoy es el día Viernes")
//     } else if (dia === 6) {
//         console.log("Hoy es el día Sábado")
//     } else if (dia === 7) {
//         console.log("Hoy es el día Domingo")
//     } else {
//         console.log("Número no válido. Debe ingresar un número del 1 al 7!")
//     }
// }
// diaDeLaSemana()

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
// let numero = prompt("Ingrese un número")
// const esPrimoONo = () => {
//     if (numero % numero || 1 === 0) {
//         console.log("Es un número primo")
//     } else {
//         console.log("No es un número primo")
//     }
// }
// esPrimoONo()    //ESTÁ MAL

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
// let edad = prompt("Ingrese su edad")
// const esMayorOMenor = () => {
//     if (edad >= 18) {
//         console.log("Usted es mayor de edad")
//     } else {
//         console.log("Usted es menor de edad")
//     }
// }
// esMayorOMenor()
// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
// let numero = prompt("Ingrese un número")
// let numero2 = prompt("Ingrese un segundo número")
// const suma = () => {
//     if (numero + numero2 > 100) {
//         console.log("La suma de los números ingresados es mayor a 100")
//     } else if (numero + numero2 === 100) {
//         console.log("La suma de los números ingresados es igual a 100")
//     } else {
//         console.log("La suma de los números ingresados es menor a 100")
//     }
// }
// suma()

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
// let number1 = prompt("Ingrese un número")
// let number2 = prompt("Ingrese un segundo número")
// let number3 = prompt("Ingrese un tercer número")
// const mayorDeTres = () => {

//     if(number1 > number2 && number1 > number3) {
//         console.log("El Primer número ingresado es el mayor de los tres números")
//     } else if (number2 > number3 && number2 > number1) {
//         console.log("El Segundo número ingresado es el mayor de los tres números")
//     } else {
//         console.log("El Tercer número ingresado es el mayor de los tres números")
//     }
// }
// mayorDeTres()

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
// let letra = prompt("Ingrese una letra")
// const minisculaOMayuscula = () => {
//     if (letra === letra.toLocaleUpperCase() === 1) {
//         console.log("La letra ingresada es una MAYÚSCULA")
//     } else if (letra.length > 1) {
//         console.log("Ingresa una letra sola")
//     } 
//     else {
//         console.log("La letra ingresada es MINÚSCULA")
//     }
// }
// minisculaOMayuscula()

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// const divisible = (numeroIngresado) => {
//     if (numeroIngresado % 3 === 0 && numeroIngresado % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (numeroIngresado % 3 === 0) {
//         console.log("Fizz")    
//     } else if (numeroIngresado % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(numeroIngresado)
//     }
// }  
// divisible(30)

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.


// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

 
// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
let dia = parseInt(prompt("Ingrese el día en el que cumple años"))
let mes = parseInt(prompt("Ingrese en números el mes en el que cumple años"))
let año = parseInt(prompt("Ingrese el año en el que cumple años"))

const cumpleaños = () => {
    if (dia <1 || dia > 31) {
        alert("Ingrese un día válido")
    } else if (mes % 4 != 0) {
        console.log("Cumple años en un año no biciesto")
    } else if (mes % 4 === 0) {
        console.log("Cumple años en un año biciesto")
    } else if (año === 0) {
        console.log("Ingrese un año válido")
    } else {
        console.log("Tu fecha es válida")
    }
}
cumpleaños()