//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let num1 = 50
let num2 = 37
let resultado = num1 + num2
console.log(`El resultado de la suma de los dos números (${num1} y ${num2}) es ${resultado}`)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

function comparacion() {
    let igualdad = (num1 == num2)
    if (igualdad == false) {
        return console.log(`Los números ingresados son distintos según el comparador (==): ${igualdad}`)
    }
    else {
        return console.log(`Los números ingesados son iguales según el comparador (==): ${igualdad}`)
    }
}
comparacion()

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

function diferencia() {
    let igualdad2 = (num1 != num2)
    if (igualdad2 == true) {
        return console.log(`Los números ingresados son distintos según el comparador (!=): ${igualdad2}`)
    }
    else {
        return console.log(`Los números ingesados son iguales según el comparador (!=): ${igualdad2}`)
    }
}
diferencia()

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

let namber = 37;
namber += 5
console.log(namber)

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

let namber2 = 37;
namber2 -= 3
console.log(namber2)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

let oracion = "Juegue deca querido. "
let palabraFinal = oracion + "Celeste y Blanco todo Tucumán."
console.log(palabraFinal)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

let bool_uno = true
let bool_dos = false
let compBool = (bool_uno && bool_dos)
console.log(compBool)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

let compBool_dos = (bool_uno || bool_dos)
console.log(compBool_dos)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let variable1 = 10
let variable2 = 20
let menorNoma = (variable1 > variable2)
console.log(menorNoma)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let menorIgual = (variable1 <= variable2)
console.log(menorIgual)

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.

function dosParametrosSuma(a, b) {
    return console.log(a + b)
}
dosParametrosSuma(25,27)

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function dosParametrosResta(a, b) {
    return console.log(a - b)
}
dosParametrosResta(27,25)

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function sumandoDosNumeros() {
    let numerillo = 5
    let sumaDiez = 5 + 10
    console.log(sumaDiez)
}
sumandoDosNumeros()

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function concatenacion() {
    let equipo = "Atlético Tucumán"
    let jerga = "El Gigante del Norte"
    let union = equipo + " " + jerga
    console.log(union)
}
concatenacion()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function igualBool() {
    let booleano_uno = true
    let booleano_dos = false
    let comparacionBool = booleano_uno == booleano_dos
    console.log(comparacionBool)
}
igualBool()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function difBool() {
    let numer = true
    let numer2 = false
    let diferenciaBool = numer != numer2
    console.log(diferenciaBool)
}
difBool()

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function mayorMenor() {
    let numero_uno = 73
    let numero_dos = 37
    if (numero_uno > numero_dos) {
        return console.log(`El primer número ingresado (${numero_uno}) es mayor que el segundo (${numero_dos})`)
    }
    else {
        return console.log(`El primer número ingresado (${numero_uno}) es menor que el segundo (${numero_dos})`)
    }
}
mayorMenor()

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

let number = prompt("Ingrese un número para mostrarlo por consola")
console.log(`El número ingresado es ${number}`)

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.

let nombre = prompt("Ingrese su nombre")
console.log(`Su nombre es ${nombre}`)

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

let num3 = parseInt(prompt("Ingrese el primer número a sumar (se mostrará el resultado en el documento)"))
let num4 = parseInt(prompt("Ingrese el segundo número a sumar (se mostrará el resultado en el documento)"))
let resultado5 = (num3 + num4)
document.write(`El resultado de la suma de los dos números es ${resultado5}`)

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

function calculoEdad() {
    let edad = parseInt(prompt("Ingrese su año de nacimiento"))
    let edadActual = (2023-edad)
    if (edadActual > 18) {
        return console.log(`Usted es mayor de edad. Tiene ${edadActual} años`)
    }
    else {
        return console.log(`Usted es menor de edad. Tiene ${edadActual} años`)
    }
}
calculoEdad() 

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

function numPalabras() {
    let frase = prompt("Ingrese una frase")
    let palabras = frase.split(" ").length
    console.log(`El número de palabras de la frase es: ${palabras}`)
}
numPalabras()