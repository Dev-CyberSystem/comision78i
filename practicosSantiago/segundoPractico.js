//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let num1 = 10
let num2 = 20
let resultado = num1 + num2
console.log(resultado)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

let numerin1 = 7 //apaaaa qué número?
let numerin2 = 6
console.log(numerin1 == numerin2)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

// let numerin1 = 7 
// let numerin2 = 6
console.log(numerin1 != numerin2)

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

let numero = 5 
numero++
numero++
numero++
numero++
numero++
console.log(numero)

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

let numero2 = 5 
numero2--
numero2--
numero2--
console.log(numero2)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

let texto1 = "Manuel Lanzini"
console.log(texto1 + " es un jugador del Club Atlético River Plate.")

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

let booleano1 = true
let booleano2 = false
console.log (booleano1 && booleano2)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

console.log (booleano1 || booleano2)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

// let num1 = 10
// let num2 = 20
console.log(num2 > num1)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

// let num1 = 10
// let num2 = 20
console.log(num1 <= num2)

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.

function sumaParametros(a,b) {
    return a + b
}
console.log(sumaParametros(10,10))

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function restaParametros(a,b) {
    return a - b
}
console.log(restaParametros(15,10))

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function aumentoVariable() {
    let numerito = 5
    return numerito + 10
}
console.log(aumentoVariable())

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function concatenacionStrings() {
    let string1 = "Marcelo Gallardo"
    let string2 = "era el DT del CARP"
    return string1 + " " + string2
}
console.log(concatenacionStrings())

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function comparacionBooleana() {
    let boolean1 = true
    let boolean2 = true
    return boolean1 == boolean2
}
console.log(comparacionBooleana())

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function comparacionBooleana2() {
    let boolean3 = true
    let boolean4 = true
    return boolean3 != boolean4
}
console.log(comparacionBooleana2())

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function comparacionNumerica() {
    let numero = 10
    let numero2 = 2
    return numero > numero2
}
console.log(comparacionNumerica())

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

console.log(prompt ("Ingresa un Numero"))

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.

console.log(prompt ("Ingresa tu Nombre"))

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

let promptNumero1 = parseInt(prompt("Porfavor, ingresa un numero"))
let promptNumero2 = parseInt(prompt("Porfavor, ingresa otro numero"))
let resultadoSumaPrompt = promptNumero1 + promptNumero2
document.write("El resultado de la suma de los numeros que ingresaste es " + resultadoSumaPrompt)

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

function mayorDeEdad() {
    let añoNacimiento = parseInt(prompt("Ingresa tu Año de Nacimiento"))
    let edadActual = 2023 - añoNacimiento 
    let esMayorDeEdad = edadActual >= 18
    console.log("Tu Edad actual es " + edadActual + " años")
    if (esMayorDeEdad == true) {
        console.log("Eres Mayor de Edad")
    } else {
        console.log("No eres Mayor de Edad")
    }
}
mayorDeEdad()

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

function numeroDePalabras() {
    let frase = prompt("Ingresa una frase")
    let palabrasFrase = frase.split(" ")
    console.log ("El numero de palabras en la frase es de " + palabrasFrase.length + " Palabras")
}

numeroDePalabras()
