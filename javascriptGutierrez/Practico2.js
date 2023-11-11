//Tarea 
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
console.log("Primer punto")
let suma = 10 + 13
console.log(suma)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
console.log("Segundo punto")
let numero1 = 567
let numero2 = 8889
console.log(numero1 == numero2)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
console.log("Tercer punto")
let numero3 = 4
let numero4 = 56
console.log(numero3 != numero4)

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
console.log("Cuarto punto")
let numero5 = 40
numero5++
numero5++
numero5++
numero5++
numero5++
console.log(numero5)

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
console.log("Quinto punto")
let numero6 = 23
numero6--
numero6--
numero6--
console.log(numero6)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
console.log("Sexto punto")
let frase = ("Hola que tal")
console.log(frase + " ¿Quieren un té?")

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
console.log("Séptimo punto")
let verdad = true
let falso = false
console.log(verdad && falso)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
console.log("Octavo punto")
let verdad1 = true
let falso1 = false
console.log(verdad1 || falso1)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
console.log("Noveno punto")
let numero7 = 123
let numero8 = 97
console.log(numero7 > numero8)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
console.log("Décimo punto")
let numero9 = 34
let numero10 = 34
console.log(numero9 <= numero10)

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
console.log("Undécimo punto")
const sumarNumeros = (num1, num2) => num1 + num2
console.log(sumarNumeros(numero9, numero10))

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
console.log("Duodécimo punto")
const restarNumeros = (num1, num2) => num1 - num2
console.log(restarNumeros(numero9, numero10))

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
console.log("Décimo tercer punto")
const declararYSumar = () => {
    let numero = 5
    numero += 10
    return numero
}
let numero11 = declararYSumar()
console.log(numero11)

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
console.log("Décimo cuarto punto")
const concatenar = (num1, num2) => {
    let frase1 = ("Sanguche de jamón")
    let frase2 = (" y queso")
    fraseConc = frase1.concat(frase2)
    return fraseConc
}
let frase3 = concatenar()
console.log(frase3)

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
console.log("Décimo quinto punto")
const booleano = () => {
    let bool1 = true 
    let bool2 = true
    return (bool1 == bool2)
}
let resultado = booleano()
console.log(resultado)

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
console.log("Décimo sexto punto")
const otroBooleano = () => {
    let bool1 = false
    let bool2 = false
    return (bool1 != bool2)
}
let otroResultado = otroBooleano()
console.log(otroResultado)

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
console.log("Décimo séptimo punto")
const mayor = () => {
    let numero1 = 23
    let numero2 = 50
    return (numero1 > numero2)
}
let mayorcito = mayor()
console.log(mayorcito)

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
console.log("Décimo octavo punto")
let ingreso = prompt("Por favor ingrese un número")
console.log(ingreso)

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
console.log("Décimo noveno punto")
let ingreso1 = prompt("Por favor ingrese su nombre")
console.log(ingreso1)

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
console.log("Vigésimo punto")
let numerito1 = parseInt(prompt("Por favor ingrese un número"))
let numerito2 = parseInt(prompt("Por favor ingrese un segundo número"))
let sumita = numerito1 + numerito2
console.log(sumita)

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
console.log("Vigésimo primero punto")
function saberEdad()
{
    let año = prompt("Por favor ingrese su año de nacimiento")
    let edad = 2023 - año
    if(edad >= 18)
    {
        console.log("Usted es mayor de edad")
    }else{
        console.log("Usted es menor de edad")
    }
    console.log("Usted tiene " + edad + " años")
}
saberEdad()

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
console.log("Vigésimo segundo punto")
const contarPalabras = () => 
{
    let fraseIng = prompt("Por favor ingrese una frase")
    let palabras = fraseIng.split(" ")
    let cantidad = palabras.length
    console.log("Hay " + cantidad + " palabras")
}
contarPalabras()