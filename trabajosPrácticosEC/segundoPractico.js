//Tarea 
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
//Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.




//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let numeroUno = 10;
let numeroDos = 20;
let resultados = numeroUno + numeroDos;
console.log(resultados)

//Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

let numero1 = 5;
let numero2 = 8;
if (numero1 == numero2) {
  console.log("iguales");
} else {
  console.log("no iguales");
}

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

let numUno = 1;
let numDos = 2;
if (numUno != numDos) {
    console.log("Son diferentes")}
    else {
        console.log("Son iguales")
    }


// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

let numCuatro = 4
console.log(++numCuatro)

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

console.log(--numCuatro)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

let text = "Hola"
console.log(text + " mundo jeje")

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola

let booleano1 = true
let booleano2 = false
console.log (booleano1&&booleano2)

let booleano3 = 1
let booleano4 = 2
console.log (booleano3 > 0 && booleano4 > 5)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola

let booleano5 = true
let booleano6 = false
console.log (booleano5 || booleano6)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola

let numTres = 3
console.log( numTres > 1)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let numCinco = 5
console.log(numCinco <= 8)

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.

function recibeDosParametros (){
    let parametro1 = 1
    let parametro2 = 2
    let sumaParametros = parametro1 + parametro2
    console.log (sumaParametros)
} recibeDosParametros ()

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function recibeDosParametros2 (){
    let parametro1 = 1
    let parametro2 = 2
    let sumaParametros = parametro1 - parametro2
    console.log (sumaParametros)
} recibeDosParametros2 ()

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function recibeUnParametro () {
    let parametro5 = 5
    console.log(parametro5 +10)
} recibeUnParametro ()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function recibeUnString () {
    let parametroS = "Hola"
    let parametroS2 = " Mundoooooooooooooooo"
    console.log(parametroS + parametroS2)
} recibeUnString ()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function Booleanos () {
    let booleano7 = 7
    let booleano8 = 8
    console.log(booleano7 == booleano8)
} Booleanos()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function masBooleanos () {
    let booleano9 = 9
    let booleano10 = 10
    console.log(booleano10 != booleano9)
} masBooleanos()

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function numericos () {
    let variable1 = 1
    let variable2 = 2
    console.log (variable1 > variable2)
} numericos()

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

