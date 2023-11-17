// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

const numeroMes = (numero) => {
    numero = parseInt(numero)
    switch (numero){
        case 1:
            console.log("Enero")
            break
        case 2:
            console.log("Febrero")
            break
        case 3:
            console.log("Marzo")
            break
        case 4:
            console.log("Abril")
            break
        case 5:
            console.log("Mayo")
            break
        case 6:
            console.log("Junio")
            break
        case 7:
            console.log("Julio")
            break
        case 8:
            console.log("Agosto")
            break
        case 9:
            console.log("Septiembre")
            break
        case 10:
            console.log("Octubre")
            break
        case 11:
            console.log("Noviembre")
            break
        case 12:
            console.log("Diciembre")
            break
        default:
            console.log("El número que ingresaste no es válido (comprueba que sea un número del 1 al 12")
            break
    }
}
numeroMes(5)

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

const numeroDia = (numero) => {
    numero = parseInt(numero)
    switch (numero){
        case 1:
            console.log("Lunes")
            break
        case 2:
            console.log("Martes")
            break
        case 3:
            console.log("Miércoles")
            break
        case 4:
            console.log("Jueves")
            break
        case 5:
            console.log("Viernes")
            break
        case 6:
            console.log("Sábado")
            break
        case 7:
            console.log("Domingo")
            break
        default:
            console.log("El número que ingresaste no es válido (comprueba que sea un número del 1 al 7")
            break
    }
}
numeroDia(6)

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

const vocalOConsonante = (letra) => {
    letra = letra.toLowerCase()
    if (/^[aeiou]$/.test(letra)) {
        console.log("Es una vocal")
    } else {
        console.log("Es una consonante")
    }
  }
vocalOConsonante("r") //En el punto pedia que reciba un carácter, no sé si se refiere a poner un prompt o simplemente el carácter

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

const numeroDiaDeLaSemanaArreglo = (numero) => {
    numero = parseInt(numero)
    diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
    if (numero >= 1 && numero <= 5) {
        return console.log("El numero que ingresaste corresponde al día " + diasSemana[numero - 1])
    } else {
        return console.log("Error, el número ingresado no es válido (comprueba que sea un número del 1 al 5)")
    }
}
numeroDiaDeLaSemanaArreglo(5)

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

const esMayuscula = (letra) => {
    if (letra === letra.toLowerCase()) {
      console.log("La letra ingresada es minúscula")
    } else {
      console.log("La letra ingresada es mayúscula")
    }
  }
  esMayuscula("H")

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

const estaAprobado = (nota) => {
    nota = parseInt(nota)
    switch (true) {
        case (nota >= 0 && nota <= 3):
            console.log("Suspenso")
            break
        case (nota >= 4 && nota <= 6):
            console.log("Aprobado")
            break
        case (nota >= 7 && nota <= 9):
            console.log("Notable")
            break
        case (nota >= 9 && nota <= 10):
            console.log("Sobresaliente")
            break
        default:
            console.log("La nota ingresada no es válida")
            break
    }
}
estaAprobado(2)

// Imprimir los números pares del 2 al 20 en la consola.

let numerillo = 0
while(numerillo < 20) {
    console.log(numerillo += 2)
}

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.

let stringSample = "River Plate"
let mayusculasString = ""
for (let i = 0; i < stringSample.length; i++) {
    mayusculasString += stringSample[i].toUpperCase()
}
console.log(mayusculasString.split(""))

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

const numerosHastaElIngresado = (numero) => {
    numero = parseInt(numero)
    let conteo = 1
    while (conteo <= numero) {
        console.log(conteo++)
    }
}
numerosHastaElIngresado(prompt("Ingresa un número para contar"))

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

const masGrandeDeSerie = (serieNumeros) => {
    serieNumeros = prompt("Ingresa una serie de números, separados por comas")
    let arrayNumeros = serieNumeros.split(",").map(Number)
    let maximo = Math.max(...arrayNumeros)
    console.log("El número mayor de la serie de números que ingresaste es " + maximo)
}
masGrandeDeSerie()

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.

const esPalindromo = (palabra) => {
    let palabraMinuscula = palabra.toLowerCase()
    let palabraInvertida = palabraMinuscula.split("").reverse().join("")
    if (palabraMinuscula === palabraInvertida) {
        console.log ("Es un palindromo")
    } else {
        console.log ("No es un palindromo")
    }
  }
  esPalindromo (prompt("Ingresa una palabra para comprobar si es palindromo o no"))

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

const parDeLaSerie = (serieNumeros) => {
    serieNumeros = prompt("Ingresa una serie de números, separados por comas")
    let arrayNumeros = serieNumeros.split(",").map(Number)
    let sumaDePares = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            sumaDePares+= arrayNumeros[i]
        }
    }
    console.log("La suma de los pares de la serie de numeros ingresada es de " + sumaDePares)
 }
 parDeLaSerie()


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

const cantidadNegativos = (serieNumeros) => {
    serieNumeros = prompt("Ingresa una serie de números, separados por comas")
    let arrayNumeros = serieNumeros.split(",").map(Number)
    let totalNegativos = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] < 0) {
            totalNegativos++
        }
    }
    console.log("Hay un total de " + totalNegativos + " numeros negativos en tu serie de números ingresada")
 }
 cantidadNegativos()

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

const numerosImparesHastaElIngresado = (numero) => {
    numero = parseInt(numero)
    for (let i = 0; i <= numero; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
numerosImparesHastaElIngresado(prompt("Ingresa un número para contar"))

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

const masPequeDeSerie = (serieNumeros) => {
    serieNumeros = prompt("Ingresa una serie de números, separados por comas")
    let arrayNumeros = serieNumeros.split(",").map(Number)
    let minimo = Math.min(...arrayNumeros)
    console.log("El número menor de la serie de números que ingresaste es " + minimo)
}
masPequeDeSerie()

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

const adivinaElRandom = (numero) => {
    let numeroRandomGenerado = Math.floor(Math.random() * 100) + 1
    let intentos = 0
    let loLogro = false
    while (!loLogro) {
        numero = parseInt(prompt("Se ha generado un número al azar entre 1 y 100, puedes adivinarlo?"))
        intentos++
        if (numero !== numeroRandomGenerado) {
            alert("Le pifiaste! Ese no era el Número")
        } else {
            loLogro = true
            return alert("Adivinaste! Solo te tomó " + intentos + " intentos")
        }
    }
}
// adivinaElRandom()
// Comenté la ejecución del programa este porque sino se puede volver muy molesto jajajsjaj, pero si funciona 

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

const cantidadDeParesEnLaSerie = (serieNumeros) => {
    serieNumeros = prompt("Ingresa una serie de números, separados por comas")
    let arrayNumeros = serieNumeros.split(",").map(Number)
    let totalDePares = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            totalDePares++
        }
    }
    console.log("El total de numeros pares en la serie de numeros ingresada es de " + totalDePares)
 }
 cantidadDeParesEnLaSerie()

// Dado un array de números, escribir una función que retorne el número más grande del array.

let arrayDeNumeros = [9, 12, 18, 3, 1]

const maximoDelArray = (array) => {
    let maximo = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i]
        }
    }
    return console.log ("El número mas grande del array es " + maximo)
}
maximoDelArray(arrayDeNumeros)

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

const parDelArray = (array) => {
    let pares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i])
        }
    }
    return console.log("Los números pares del array que ingresaste son " + pares)
}
parDelArray(arrayDeNumeros)

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

const sumaDelArray = (array) => {
    let totalDeSuma = 0
    for (let i = 0; i < array.length; i++) {
        totalDeSuma += array[i]
    }
    return console.log ("La suma de los números del array da un total de " + totalDeSuma)
}
sumaDelArray(arrayDeNumeros)

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

let arrayDeStrings = ["Hola", "Como", "Andas"]

const convertirArrayMayuscula = (array) => {
    let arrayEnMayus = []
    for (let i = 0; i < array.length; i++) {
        let stringsEnMayus = array[i].toUpperCase()
        arrayEnMayus.push(stringsEnMayus)
    } 
    return console.log(arrayEnMayus)
}
convertirArrayMayuscula(arrayDeStrings)

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

// let arrayDeNumeros = [9, 12, 18, 3, 1]
let numeroX = 15

const numerosMayoresANumX = (array, numerox) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numerox) {
            nuevoArray.push(array[i])
        }
    }
    return console.log("Los numeros mayores a " + numerox + " son " + nuevoArray)
}
numerosMayoresANumX(arrayDeNumeros, numeroX)

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

// let arrayDeNumeros = [9, 12, 18, 3, 1]
const sumaDelArrayConNumerosGrandes = (array) => {
    let totalDeSuma = 0
    let numerosGrandes = []
    for (let i = 0; i < array.length; i++) {
        totalDeSuma += array[i]
        if (array[i] > 10) {
            numerosGrandes.push(array[i])
        }
    }
    return console.log ("La suma de los números del array da un total de " + totalDeSuma + "Además, los numeros grandes (mayores a 10) son " + numerosGrandes)
}
sumaDelArrayConNumerosGrandes(arrayDeNumeros)

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

let arrayDeStrings2 = ["Cyberpunk", "CallOfDuty", "GrandTheftAuto", "Noita", "RE4"]

const arrayStringsLargos = (array) => {
    let stringsExtensos = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > 5) {
            stringsExtensos.push(array [i])
        }
    }
    console.log(stringsExtensos)
}
arrayStringsLargos(arrayDeStrings2)

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

const arrayStringsLargosConA = (array) => {
    let stringsExtensosConA = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > 5 && array[i].toLowerCase().startsWith("a")) {
            stringsExtensosConA.push(array [i])
        }
    }
    console.log(stringsExtensosConA)
}
arrayStringsLargosConA(["Arboleda", "Auto", "Camioneta", "Rojo", "Aldosivi"])

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.

const primerosTresMayoresANumX = (array, numerox) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numerox) {
            nuevoArray.push(array[i])
        }
    }
    let tresPrimeros = nuevoArray.slice(0, 3)
    return console.log("Los tres primeros numeros mayores a " + numerox + " son " + tresPrimeros)
}
primerosTresMayoresANumX([5, 10, 15, 20, 25, 40, 50], 10)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.

// let arrayDeNumeros = [9, 12, 18, 3, 1]
const numerosDelArrayMasUno = (array) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i] + 1)
    }
    return console.log(nuevoArray)
}
numerosDelArrayMasUno(arrayDeNumeros)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.

// let arrayDeNumeros = [9, 12, 18, 3, 1]
const ultimoNumeroArray = (array) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i])
    }
    nuevoArray.pop()
    return console.log(nuevoArray)
}
ultimoNumeroArray(arrayDeNumeros)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.

// let arrayDeNumeros = [9, 12, 18, 3, 1]
const menosPrimeroYUltimoNumeroArray = (array) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i])
    }
    nuevoArray.shift()
    nuevoArray.pop()
    return console.log(nuevoArray)
}
menosPrimeroYUltimoNumeroArray(arrayDeNumeros)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.

const menosNumeroXArray = (array, numX) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== numX) {
            nuevoArray.push(array[i])
        }
    }
    return console.log(nuevoArray)
}
menosNumeroXArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)
