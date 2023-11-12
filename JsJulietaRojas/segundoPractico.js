//Realiza una operacion matemática simple y almacena el resultado en una variable. Luego meustra el resultado en la consola--


let numero1 = 10;
let numero2 = 5;
let resultado = numero1 + numero2;

console.log("El resultado es: " + resultado);

//Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola. --

let nume1 = 10;
let nume2 = 5;

// Comparar las variables usando el operador de igualdad (==)
let resulta = nume1 == nume2;

// Mostrar el resultado en la consola
console.log("¿Son iguales las variables? " + resulta);


//Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola. --

let nu1 = 10;
let nu2 = 5;

// Comparar las variables usando el operador de desigualdad (!=) --
let resul = numero1 != numero2;

// Mostrar el resultado en la consola
console.log("¿Son diferentes las variables? " + resul);

//Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola --

let numero = 10;

// Aumentar el valor de la variable usando el operador de incremento (++).
numero += 5; // También se puede utilizar: numero = numero + 5;

// Mostrar el resultado en la consola
console.log("El nuevo valor de la variable es: " + numero);

//Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.--

let num = 15;

// Disminuir el valor de la variable usando el operador de decremento (--).
numero -= 3; // También se puede utilizar: numero = numero - 3;

// Mostrar el resultado en la consola
console.log("El nuevo valor de la variable es: " + num);

//Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.--

let texto = "Hola, esto es una cadena de texto. ";

// Agregar más texto al final de la cadena usando el operador de concatenación (+).
texto += "Añadiendo más información al texto.";

// Mostrar el resultado en la consola
console.log(texto);

//Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.--

let tengoParaguas = true; // Representa si tengo un paraguas
let estaLloviendo = true; // Representa si está lloviendo

// Comparar los estados usando el operador lógico AND (&&)
let res = tengoParaguas && estaLloviendo;

// Mostrar el resultado en la consola
console.log("¿Tengo un paraguas y está lloviendo? " + res);

//Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.--

let hayCafe = false; // Representa si hay café disponible
let esDeManana = true; // Representa si es por la mañana

// Comparar los estados usando el operador lógico OR (||)
let result = hayCafe || esDeManana;

// Mostrar el resultado en la consola
console.log("¿Hay café o es por la mañana? " + result);

//Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.--

let edadPersona1 = 30; // Edad de la primera persona
let edadPersona2 = 25; // Edad de la segunda persona

// Comparar las edades usando el operador de comparación mayor que (>)
let re = edadPersona1 > edadPersona2;

// Mostrar el resultado en la consola
console.log("¿La primera persona es mayor que la segunda? " + re);

//Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.--

let edadUsuario = 18; // Edad de un usuario
let edadRequerida = 21; // Edad requerida para ingresar a un evento

// Comparar las edades usando el operador de comparación menor o igual que (<=)
let resu = edadUsuario <= edadRequerida;

// Mostrar el resultado en la consola
console.log("¿El usuario cumple con la edad requerida para el evento? " + resu);

//Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.--

function sumaDosNumeros(num1, num2) {
    let resultado = num1 + num2;
    console.log("El resultado de la suma es: " + resultado);
}

// Llamando a la función con dos números
sumaDosNumeros(8, 4);

//Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.--

function restaDosNumeros(num1, num2) {
    let resultado = num1 - num2;
    console.log("El resultado de la resta es: " + resultado);
}

// Llamando a la función con dos números
restaDosNumeros(15, 7);

//Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.--

function sumaDiezAlCinco() {
    let numero = 5;
    let resultado = numero + 10;
    console.log("Al sumar 10 a 5, el resultado es: " + resultado);
}

// Llamando a la función
sumaDiezAlCinco();


//Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.--

function concatenarStrings() {
    let primerString = "Hola, ";
    let segundoString = "¿cómo estás?";
    let resultado = primerString + segundoString;
    console.log("La concatenación de los strings es: " + resultado);
}

// Llamando a la función
concatenarStrings();


//Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.--

function compararBooleanos() {
    let esDiaSoleado = true;
    let hayNubes = false;

    let resultado = esDiaSoleado === hayNubes;

    console.log("¿Es igual el estado del clima al estado de nubes? " + resultado);
}

// Llamando a la función
compararBooleanos();


//Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.--

function compararDiferenciaBooleanos() {
    let estaLloviendo = true;
    let haySol = false;

    let resultado = estaLloviendo !== haySol;

    console.log("¿El clima es diferente a la presencia de sol? " + resultado);
}

// Llamando a la función
compararDiferenciaBooleanos();


//Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.--

function compararNumeros() {
    let numero1 = 15;
    let numero2 = 10;

    let resultado = numero1 > numero2;

    console.log("¿El primer número es mayor que el segundo? " + resultado);
}

// Llamando a la función
compararNumeros();

//Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.--

// Pedir al usuario que ingrese un número a través de un prompt
let numeroIngresado = prompt("Por favor, ingresa un número:");

// Mostrar el resultado en la consola
console.log("El número ingresado por el usuario es: " + numeroIngresado);


//Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.--

// Pedir al usuario que ingrese su nombre a través de un prompt
let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Mostrar el resultado en la consola
console.log("El nombre ingresado por el usuario es: " + nombreUsuario);

//Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.--

// Pedir al usuario que ingrese dos números a través de prompts
let primerNumero = prompt("Por favor, ingresa el primer número:");
let segundoNumero = prompt("Ahora ingresa el segundo número:");

// Convertir los valores ingresados a números
primerNumero = parseFloat(primerNumero);
segundoNumero = parseFloat(segundoNumero);

// Realizar la suma de los dos números
let resultadoSuma = primerNumero + segundoNumero;

// Mostrar el resultado de la suma en el documento
document.write("El resultado de la suma es: " + resultadoSuma);

//Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.--

// Pedir al usuario que ingrese su año de nacimiento
let anioNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");

// Obtener el año actual
let anioActual = new Date().getFullYear();

// Calcular la edad restando el año actual al año de nacimiento
let edad = anioActual - parseInt(anioNacimiento);

// Verificar si es mayor de edad
let esMayorEdad = edad >= 18;

// Mostrar si es mayor de edad y la edad en una cadena de texto
if (esMayorEdad) {
    console.log("¡Eres mayor de edad!");
} else {
    console.log("Eres menor de edad.");
}

console.log("Tu edad es: " + edad + " años.");

//Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.--

// Pedir al usuario que ingrese una frase
let fraseUsuario = prompt("Por favor, ingresa una frase:");

// Dividir la frase en palabras usando el espacio en blanco como separador
let palabras = fraseUsuario.split(" ");

// Contar el número de palabras
let numeroPalabras = palabras.length;

// Mostrar el número de palabras en la frase
console.log("El número de palabras en la frase es: " + numeroPalabras);








