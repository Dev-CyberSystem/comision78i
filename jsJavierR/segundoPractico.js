//Tarea 
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let al = 3
let ac = 3
let resulltado = al + ac 
console.log(resulltado)
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let num1 = 20
let num2 = 10
let resultado = num1 == num2 
console.log("Es: " + resultado)
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let num3 = 19
let num4 = 20
let resultado1 = num3 != num4
console.log("Es: " + resultado1) 
// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let num5 = 5
num5++
num5++
num5++
num5++
num5++  
console.log(num5)
// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let num6 = 10
num6--
num6--
num6--
console.log(num6)
// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let cadena = "Javier"
cadena += " Rodriguez"
console.log(cadena)
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let hola = false
let chau = true
let comparacion = hola && chau
console.log(comparacion)
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let hola1 = false
let chau1 = true
let comparacion1 = hola1 || chau1
console.log(comparacion1)
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
num7 = 3
num8 = 2
let resultado3 = 3 > 2
console.log(resultado3)
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let resultado4 = 3 <= 2
console.log(resultado4)
// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
function sumar(a, b){
    let suma = a + b
    return suma
}
let a = 2
let b = 3
console.log(sumar(a, b))
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function restar(a, b){
    let resta = a - b;
    return resta
}
console.log(restar(a, b))
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function sumar1(){
    let a = 5
    a = a + 10
    console.log(a)
}
sumar1()
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function conca(){
    let nombre = "Javier "
    let apellido = "Rodriguez"
    let completo = nombre + apellido
    console.log(completo)
}
conca()
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function bool(){
    let a = false
    let b = false
    let compa = a == b
    console.log(compa)
}
bool()
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function bool1(){
    let a = false
    let b = false
    let compa = a != b
    console.log(compa)
}
bool1()
// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function compa1(){
    let a = 5
    let b = 5
    let resu = a > b
    console.log(resu)
}
compa1()
// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let valor1 = prompt("Ingrese un numero")
valor1 = parseInt(valor1)
console.log(valor1)
// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let valor2 = prompt("Ingrese su nombre")
console.log(valor2)
// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let valor3 = prompt("Ingrese num1 para la suma")
valor3 = parseInt(valor3)
let valor4 = prompt("Ingrese num2 para la suma")
valor4 = parseInt(valor4)
let laSuma = valor3 + valor4
console.log(laSuma)
//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
function cumple(){
        let ano = prompt("Ingrese año de nacimiento")
        ano = parseInt(ano)
        let edad = 2023 - ano
        let edad1 = edad.toString()
        console.log(edad1)
}
cumple()
// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function cantidad(){
    let frase = prompt("Ingresar una frase con espacios")
    palabras = frase.split(" ").length
    console.log(palabras)
}
cantidad()
