//Tarea 
//Quiz Javascript - Introducción



//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let numero1 = 5;
let numero2 = 7;
let resultado = numero1 + numero2;

console.log("El resultado de la suma es: " + resultado);

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

let numero3 = 10;
let numero4 = 20;

let resultadoDos = numero3 == numero4;
console.log (resultadoDos)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

let numero5 = 10;
let numero6 = 20;

let resultadoTres = numero5 != numero6;
console.log (resultadoTres)

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

let numero7 = 10;

numero7 += 5
console.log (numero7)

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

let numero8 = 10;

numero8 -= 3
console.log (numero8)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

let texto = "Hola, esto es una línea de texto";
texto = texto + " y esta es otra línea de texto";
console.log(texto);

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

let booleano1 = true;
let booleano2 = false;

let resultadoBool = booleano1 && booleano2;
console.log (resultadoBool)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

let booleano3 = true;
let booleano4 = false;

let resultadoBool2 = booleano3 || booleano4;
console.log (resultadoBool2)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let numero9 = 35
let numero10 = 25

let resultadoMay = numero9 < numero10
console.log (resultadoMay)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let numero11 = 50
let numero12 = 70

let resultadoMen = numero11 <= numero12
console.log (resultadoMen)

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.

function suma(a, b){
    let resultado = 10 + 15;
    console.log(resultado);
}
suma()

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function resta(a, b){
    let resultadoResta = 50 - 20;
    console.log(resultadoResta);
}
resta()

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function suma() {
    let num5 = 5
    num5 += 10
    console.log("El resultado es: " + num5)
}
suma()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function concatena() {
    let texto1 = "Línea 1 "
    let texto2 = " Línea 2"
    let resultadoText = texto1 + texto2
    console.log(resultadoText)
}

concatena()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function igual() {
    let booleanoUno = true
    let booleanoDos = false
    let resultadoBoolean = booleanoUno == booleanoDos
    console.log(resultadoBoolean)
}

igual()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function diferente() {
    let booleanoTres = true
    let booleanoCuatro = false
    let resultadoBooleano = booleanoTres!= booleanoCuatro
    console.log(resultadoBooleano)
}

diferente()

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function mayor() {
    let num1 = 10
    let num2 = 20
    let resultado = num1 > num2
    console.log(resultado)
}

mayor()

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

function numero() {
    let numeroPrompt = prompt("Ingrese un número")
    console.log(numeroPrompt)
}

numero()

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.

function nombre() {
    let nombrePrompt = prompt("Ingrese su nombre")
    console.log(nombrePrompt)
}

nombre()

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

function numeroParse() {
    let num4 = prompt("Ingrese un número")
    let num3 = prompt("Ingrese otro número")
    let resultado = parseInt(num4) + parseInt(num3)
    console.log(resultado)
}

numeroParse()

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

function año() {
    let año = prompt("Ingrese su año de nacimiento")
    let edadActual = 2023 - parseInt(año)
    console.log(edadActual)
}
año()

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

function palabras() {
    let frase = prompt("Ingrese una frase")
    let palabras = frase.split(" ")
    console.log(palabras.length)
}

palabras()









