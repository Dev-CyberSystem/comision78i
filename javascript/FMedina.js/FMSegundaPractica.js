//Tarea 
//Quiz Javascript - Introducción OK
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let numeroUno = 10;
let numeroDos = 20;
let resultados = numeroUno + numeroDos;
console.log(resultados)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let variable1 = 17;
let variable2 = 25;
let resultado = variable1 == variable2;
console.log(resultado)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let doce = 12;
let veinte = 20;
let desigualdad = doce != veinte;
console.log(desigualdad)

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let valor = 2
valor++;
console.log(valor)
valor++;
console.log(valor)
valor++;
console.log(valor)
valor++;
console.log(valor)
valor++;
console.log(valor)

// let valor = 15;
// valor +=5;
// console.log(valor);  //valor+= 5 || valor = valor + 5


// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let decremento = 5
decremento --
decremento --
decremento --
console.log(decremento)


// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let concat = "Esto es una cadena"
let text = "texto"
console.log(concat + " " + text)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let llueve = false;
let calor = true;
console.log(llueve && calor) //conjunción- es verdades sólo si ambas lo son

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let dolar = true;
let peso = false;
console.log(dolar || peso) //disyunción - simpre es verdadera cuando una de las dos lo es.

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let value = 31;
let value2 = 10;
console.log(value > value2)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let value3 = 28
console.log(value2 <= 55)

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.

function sumar (numero1, numero2){
    sumar = (numero1 + numero2);
    console.log(sumar)
}
let numero1 = 68;
let numero2 = 134;
sumar(numero1,numero2);

function sumas (a, b) {
    console.log(a + b)
}
sumas(18, 23);

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function resta (b, c) {
    console.log(25 - 4)
}
resta()

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function sumar10() {
    let valor = 5;
    valor += 10
    console.log(valor)
}
sumar10()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function concatenar() {
    let string1 = "hola a todos"
    let string2 = "el día está soleado"
    console.log(string1 + ", " + string2)
}
concatenar()
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function igualdad() {
    let a = true
    let b = false
    console.log( a == b)
}
igualdad()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function diferente() {
    let a = true
    let b = false 
    console.log( a != b)
}
diferente()

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function mayor() {
    let a = 15
    let b = 9
    console.log(a > b)
}
mayor()

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let ingreseNumero = prompt("Ingrese dni")
console.log(ingreseNumero)

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let nombre = prompt("Ingrese su nombre")
console.log("Su nombre es" + " " + nombre)

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let a = prompt("Ingrese un número")
let b = prompt("Ingrese un número")
suma = parseInt(a) + parseInt(b)  //PARSEINT parsea/convierte una cadena en un número entero.
document.write("El resultado de la suma es " + suma);

// let n1, n2, result;
// n1 = prompt("Ingrese un número")
// n2 = prompt("Ingrese un número")
// result = parseInt(n1) + parseInt(n2)
// document.write(result);

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
function usuario() {
    let añoNacimiento = parseInt(prompt("Ingrese año de nacimiento"))
    let edad = 2023 - añoNacimiento
    let esMayorDeEdad = edad => 18
    console.log("Su edad actual es " + edad + " años")
    
}
usuario()
// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function numeroDePalabras() {
    let frase = prompt("Ingrese una frase")
    let CantidadDePalabras = frase.split(" ").length  //el split divide una cadena de texto con el divisor que coloquemos dentro de las comillas "". transforma el string en un array.
    console.log("El número de palabras ingresadas es de " + CantidadDePalabras)
}
numeroDePalabras()