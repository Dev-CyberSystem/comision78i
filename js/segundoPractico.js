//Tarea 
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let resultado = 10 + 20
console.log(resultado)
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let numero1 = 23
let numero2 = 19
console.log("Comparacion: " + numero1 == numero2)
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let numero3 = 60
let numero4 = 13
console.log("Comparacion: " + numero3 != numero4)
// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let numero5 = 5
for (let i = 0; i < 5; i++) {
    numero5++
}
console.log("Numero 5: " + numero5)
// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let numero6 = 63
for (let i = 0; i < 3; i++) {
    numero6--
}
console.log("Numero 6: " + numero6)
// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let cadena = "Hola"
cadena += " Mundo"
console.log(cadena)
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let bandera1 = true
let bandera2 = false
console.log(bandera1 && bandera2)
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let bandera3 = true
let bandera4 = false
console.log(bandera3 || bandera4)
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let numero7 = 55
console.log(numero7 > numero6)
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let numero8 = 123
console.log(numero8 <= numero7)
// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
const sumar = (num1, num2) => num1+num2
console.log(sumar(numero1, numero2))
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
const restar = (num1, num2) => num1-num2
console.log(restar(numero1, numero2))
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
const func1 = () => {
    let num1 = 5
    num1 += 10
    console.log(num1)
}
func1()
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
const concatenarDosString = () => {
    let cad1 = "Hola"
    let cad2 = "Mundo"
    console.log(cad1 + " " + cad2)
}
concatenarDosString()
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
const comparoBool = () => {
    let band1 = true
    let band2 = true
    console.log(band1 == band2)
}
comparoBool()
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
const comparoBoolDif = () => {
    let band3 = true
    let band4 = false
    console.log(band3 != band4)
}
comparoBoolDif()
// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
const comparoNumeros = () => {
    let num1 = 69
    let num2 = 33
    console.log(num1 > num2)
}
comparoNumeros()
// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let numero9 = prompt("Ingrese un numero: ")
numero9 = parseFloat(numero9)
console.log(numero9)
// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let nombre = prompt("Ingrese su nombre: ");
console.log(nombre);
// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let numeros = prompt("Ingrese dos numeros separados por una coma: ");
numeros = numeros.split(',');
let num3 = parseFloat(numeros[0]);
let num4 = parseFloat(numeros[1]);
let suma = num3 + num4;
document.write("La suma es: " + suma);
//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
let anioNacimiento = new Date(prompt("Ingrese su anio de nacimiento (aa-mm-dd): "));
let fechaActual = new Date();
let edad = (fechaActual.getFullYear() - anioNacimiento.getFullYear()-1);
if (edad >= 18) {
    console.log("Es mayor de edad: " + edad);
} else {
    console.log("No es mayor de edad: " + edad);
}
// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
let frase = prompt("Ingrese una frase: ");
frase = frase.trim();
let palabras = frase.split(" ");
let cantidadPalabras = palabras.length;
console.log("Numero de palabras en la frase: " + cantidadPalabras);