//Tarea 
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let primerNum = 56;
let segundoNum = 30;
let suma = primerNum + segundoNum;
console.log(suma);


// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let val1 = 24;
let val2 = 34;
let iguales = val1 == val2;
console.log(iguales);

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let num1 = 12;
let num2 = 78;
let desigual = num1 != num2;
console.log(desigual);


// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let val = 2;
val +=5;
console.log(val); 


// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let valor = 9;
valor -=3;
console.log(valor); 


// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let cadena = "esta es una cadena";
console.log(cadena + " de texto de una tarea");


// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let bol = true;
let bol2= false;
console.log(bol&&bol2);


// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let bool = true;
let bool2 = false;
console.log(bool || bool2);


// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let mayor = 22;
console.log(mayor > 12 );

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let menor = 9;
console.log(menor <= 4);

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
function sum(a,b){
    console.log(a+b);
}
sum(3,6);

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function res(a,b){
    console.log(a-b);
}
res(5,3);

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function suma10(){
    let valor = 5;
    console.log(valor + 10);
}
suma10();

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function conca(){
    let cade="esta es una funcion";
    let textocade="donde se concatenan";
    let resulcadena = cade + textocade;
    console.log(resulcadena);
}
conca();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function compararBooleanos() {
    let booleano1 = true;
    let booleano2 = false;

    let resultado = booleano1 === booleano2;
  
    console.log("¿Son iguales? " + resultado);
  }
  compararBooleanos();
  

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function compararBooleanos() {
    var booleano3 = true;
    var booleano4 = false;
  
    var resultado = booleano3 !== booleano4;
    console.log("¿Son diferentes? " + resultado);
  }
    compararBooleanos();

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function compararNumeros() {
    let numero1 = 10;
    let numero2 = 5;
  
    let resultado = numero1 > numero2;
  
    console.log("¿El primer número es mayor que el segundo? " + resultado);
  }
compararNumeros();
  

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

let userInput = prompt("Por favor, ingrese un número:");
let numeroIngresado = parseInt(userInput);

console.log("Número ingresado por el usuario: " + numeroIngresado);



// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let ingrarNombre = prompt("Ingrese su nombre");
let convertirMayusculas = ingrarNombre.toUpperCase();
console.log(convertirMayusculas);

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let userInput1 = prompt("Ingrese el primer número:");
let numero1 = parseFloat(userInput1);

let userInput2 = prompt("Ingrese el segundo número:");
let numero2 = parseFloat(userInput2);

let sumar1 = numero1 + numero2;

document.write("La suma de los dos números es: " + sumar1);


//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
let añoNacimiento = prompt("Ingrese su año de nacimiento:");
let añoNacimientoNum = parseInt(añoNacimiento);

let añoActual = new Date().getFullYear();

// Calculamos la edad
let edad = añoActual - añoNacimientoNum;

let esMayorDeEdad = edad >= 18;

let mensaje = (!isNaN(añoNacimientoNum) && añoNacimientoNum > 0) &&
  (esMayorDeEdad && "¡Felicidades! Eres mayor de edad." || "Eres menor de edad.") ||
  "¡Error! Por favor, ingrese un año de nacimiento válido.";

console.log("Tu edad es: " + edad + " años.");
console.log(mensaje);


// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
let frase = prompt("Ingrese una frase:");

let palabras = frase.split(" ");

let numeroPalabras = palabras.length;

console.log("Número de palabras en la frase: " + numeroPalabras);


