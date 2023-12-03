//Tarea 
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
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

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let numeroUno = 10;
let numeroDos = 5;
let sonIguales = numeroUno == numeroDos;
console.log("¿Los números son iguales?", sonIguales)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let numeroUno = 10;
let numeroDos = 5;
let noSonIguales = numeroA != numeroB;
console.log("¿Los números no son iguales?", noSonIguales);

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let numero = 10;
numero += 5;
console.log("El nuevo valor de la variable es:", numero);

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let numero = 15;
numero -= 3;
console.log("El nuevo valor de la variable es:", numero);

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let cadenaTexto = "Hola";
cadenaTexto += " mundo";
console.log("La nueva cadena de texto es:", cadenaTexto);

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let booleano1 = true;
let booleano2 = false;
let resultadoAND = booleano1 && booleano2;
console.log("¿Ambos booleanos son verdaderos?", resultadoAND);

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let booleano1 = true;
let booleano2 = false;
let resultadoOR = booleano1 || booleano2;
console.log("¿Al menos uno de los booleanos es verdadero?", resultadoOR);

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let valor1 = 15;
let valor2 = 10;
let resultadoComparacion = valor1 > valor2;
console.log("¿valor1 es mayor que valor2?", resultadoComparacion);

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let valor1 = 8;
let valor2 = 10;
let resultadoComparacion = valor1 <= valor2;
console.log("¿valor1 es menor o igual que valor2?", resultadoComparacion);

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
function sumar(parametro1, parametro2) {
    let resultado = parametro1 + parametro2;
    console.log("El resultado de la suma es:", resultado);
}
sumar(5, 8);

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function restar(parametro1, parametro2) {
    let resultado = parametro1 - parametro2;
    console.log("El resultado de la resta es:", resultado);
}
restar(10, 4);

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function sumarDiez() {
    let valor = 5;
    valor += 10;
    console.log("El resultado de sumar 10 al valor es:", valor);
}
sumarDiez();

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function concatenarStrings() {
    let cadena1 = "Hola";
    let cadena2 = " mundo";

    let resultado = cadena1 + cadena2;
    console.log("El resultado de la concatenación es:", resultado);
}
concatenarStrings();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function compararBooleanos() {
    let booleano1 = true;
    let booleano2 = false;

    let resultado = booleano1 === booleano2;

    console.log("¿Las variables booleanas son iguales?", resultado);
}
compararBooleanos();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function compararBooleanos() {
    let booleano1 = true;
    let booleano2 = false;

    let resultado = booleano1 !== booleano2;

    console.log("¿Las variables booleanas son diferentes?", resultado);
}
compararBooleanos();

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function compararNumeros() {
    let numero1 = 15;
    let numero2 = 10;

    let resultado = numero1 > numero2;

    console.log("¿El primer número es mayor que el segundo?", resultado);
}
compararNumeros();

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let userInput = prompt("Por favor, ingrese un número:");

let numeroIngresado = parseFloat(userInput);

console.log("El número ingresado por el usuario es:", numeroIngresado)

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

console.log("Hola, " + nombreUsuario)

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let numero1 = prompt("Ingresa el primer número:");

let numero1Convertido = parseFloat(numero1);

let numero2 = prompt("Ingresa el segundo número:");

let numero2Convertido = parseFloat(numero2);

let resultadoSuma = numero1Convertido + numero2Convertido;

console.log("La suma de los dos números es:", resultadoSuma);

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
let añoNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");

let añoNacimientoConvertido = parseInt(añoNacimiento);

let edad = 2023 - añoNacimientoConvertido;
console.log("Tu edad es:", edad);

if (edad >= 18) {
    console.log("¡Felicidades! Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
let frase = prompt("Por favor, ingresa una frase:");

let palabras = frase.split(" ");
let numeroPalabras = palabras.length;

console.log("El número de palabras en la frase es:", numeroPalabras);