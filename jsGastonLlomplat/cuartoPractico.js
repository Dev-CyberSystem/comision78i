// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

//let numeroMes = parseInt(prompt("Ingrese un número del 1 al 12"))
// switch (numeroMes) {
//     case 1:
//         console.log("Enero");
//         break;
//     case 2:
//         console.log("Febrero");
//         break;
//     case 3:
//         console.log("Marzo");
//         break;
//     case 4:
//         console.log("Abril");
//         break;
//     case 5:
//         console.log("Mayo");
//         break;
//     case 6:
//         console.log("Junio");
//         break;
//     case 7:
//         console.log("Julio");
//         break;
//     case 8:
//         console.log("Agosto");
//         break;
//     case 9:
//         console.log("Septiembre");
//         break;
//     case 10:
//         console.log("Octubre");
//         break;
//     case 11:
//         console.log("Noviembre");
//         break;
//     case 12:
//         console.log("Diciembre");
//         break;
//     default:
//         console.log("No es un número del 1 al 12");
//         break;
// }

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

// let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7"))
// switch (numeroDia) {
//     case 1:
//         console.log("Lunes")
//         break
//     case 2:
//         console.log("Martes")
//         break
//     case 3:
//         console.log("Miércoles")
//         break
//     case 4:
//         console.log("Jueves")
//         break
//     case 5:
//         console.log("Viernes")
//         break
//     case 6:
//         console.log("Sábado")
//         break
//     case 7:
//         console.log("Domingo")
//         break
//     default:
//         console.log("No es un número del 1 al 7")
//         break
// }

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

// let vocalConsonante = prompt("Ingrese un caracter").toLocaleUpperCase()
// if (vocalConsonante.length == 1) {
//     switch (vocalConsonante) {
//         case "A":
//             console.log("Vocal")
//             break
//         case "E":
//             console.log("Vocal")
//             break
//         case "I":
//             console.log("Vocal")
//             break
//         case "O":
//             console.log("Vocal")
//             break
//         case "U":
//             console.log("Vocal")
//             break
//         default:
//             console.log("Consonante")
//             break
//     }
// } else {
//     console.log("Tiene más de un caracter")
// }

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

// let numeroDiaArray = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
// let numeroDiaArrayUsuario = parseInt(prompt("Ingrese un número del 1 al 5"))
// switch (numeroDiaArrayUsuario) {
//     case 1:
//         console.log(numeroDiaArray[0])
//         break
//     case 2:
//         console.log(numeroDiaArray[1])
//         break
//     case 3:
//         console.log(numeroDiaArray[2])
//         break
//     case 4:
//         console.log(numeroDiaArray[3])
//         break
//     case 5:
//         console.log(numeroDiaArray[4])
//         break
//     default:
//         console.log("No es un número del 1 al 5")
//         break
// }

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

const letraMayusMinus = () => {
    let letrasMayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    let numeros = "0123456789"
    let letra = prompt("Ingrese una letra")
    if (numeros.includes(letra) || letra.length > 1) {
        return console.log("Es un número o tiene más de un caracter")
    } else {
        if (letrasMayusculas.includes(letra)) {
            return console.log("Mayúscula")
        } else {
            return console.log("Minúscula")
        }
    }
}
//letraMayusMinus()

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

function notaUsuario() {
    let nota = parseInt(prompt("Ingrese una nota del 0 al 10"))
    if (nota < 6) {
        return console.log("Suspenso")
    } else if (nota == 6 || nota == 7) {
        return console.log("Aprobado")
    } else if (nota == 8 || nota == 9) {
        return console.log("Notable")
    } else if (nota == 10) {
        return console.log("Sobresaliente")
    } else {
        return console.log("No es una nota")
    }
}
//notaUsuario()

// 7) Imprimir los números pares del 2 al 20 en la consola.

// for (let i = 2; i <=20; i += 2) {
//     console.log(i)
// }

// 8) Recorrer un string y mostrar en la consola cada letra en mayúsculas.

// let frase = prompt("Ingrese un string")
// for (let i = 0; i < frase.length; i++) {
//     console.log(frase[i].toUpperCase())
// }

// 9) Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

// let n = parseInt(prompt("Ingrese un número"))
// for (let i = 1; i <= n; i++) {
//     console.log(i)
// }

// 10) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

const serieComa = () => {
    let serieNumeros = prompt("Ingrese una serie de números separados por coma")
    let cadenaNumeros = serieNumeros.split(",")
    let numMax = null
    for (let i = 0; i <= cadenaNumeros.length; i++) {
        if (parseInt(cadenaNumeros[i]) > numMax) {
            numMax = parseInt(cadenaNumeros[i])
        }
    }
    console.log(numMax)
}
//serieComa()

// 11) Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.

const palindromo = () => {
    let palabra = prompt("Ingrese una palabra")
    // split() Devuelve un nuevo arreglo - reverse() Invierte el arreglo - join() Une el arreglo en una cadena
    cadenaReversa = palabra.split("").reverse().join("")
    if (cadenaReversa == palabra) {
        return console.log("Es un palíndromo")
    } else {
        return console.log("No es un palíndromo")
    }
}
//palindromo() 

// 12) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

const sumaPares = () => {
    let numerosComa = prompt("Ingrese una serie de números separados por coma")
    let arrayNumeros = numerosComa.split(",")
    let sumaPares = 0
    for (let i = 0; i <= arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 == 0) {
            suma += parseInt(arrayNumeros[i])
        }
    }
    console.log(sumaPares)
}
//sumaPares()

// 13) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

const numerosNegativos = () => {
    let numeros = prompt("Ingrese una serie de números separados por coma")
    let arrayNumeros = numeros.split(",")
    let cantNumNeg = 0
    for (let i = 0; i <= arrayNumeros.length; i++) {
        if (arrayNumeros[i] < 0) {
            cantNumNeg += 1
        }
    }
    console.log(cantNumNeg)
}
//numerosNegativos()

// 14) Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

//let numeroImpar = prompt("Ingrese un número")
const mostrarNumerosImpares = () => {
    for (let i = 0; i <= numeroImpar; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
//mostrarNumerosImpares()

// 15) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

const peqComa = () => {
    let serieNumeros = prompt("Ingrese una serie de números separados por coma")
    let cadenaNumeros = serieNumeros.split(",")
    let numMax = cadenaNumeros[0]
    for (let i = 0; i <= cadenaNumeros.length; i++) {
        if (parseInt(cadenaNumeros[i]) < numMax) {
            numMax = parseInt(cadenaNumeros[i])
        }
    }
    console.log(numMax)
}
//peqComa()


// 16) Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

const adivinarNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1
    let intentos = 1
    let suposicion = prompt("Adivine el número")
    while (suposicion != numeroAleatorio) {
        intentos++
        if (suposicion > numeroAleatorio) {
            suposicion = prompt("El número es más chico")
        } else {
            suposicion = prompt("El número es más grande")
        }
    }
    alert(`¡ADIVINASTE! Te tomó ${intentos} intentos`)
}
//adivinarNumero()



// 17) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

const cantNumPares = () => {
    let numerosComa = prompt("Ingrese una serie de números separados por coma")
    let arrayNumeros = numerosComa.split(",")
    let cantPares = 0
    for (let i = 0; i <= arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 == 0 && arrayNumeros[i] != 0) {
            cantPares += 1
        }
    }
    console.log(cantPares)
}
//cantNumPares()

// 18) Dado un array de números, escribir una función que retorne el número más grande del array.

let arrayGrande = [1, 9, 2, 8, 3, 7, 4, 6]
function buscarNumeroGrande() {
    let numMax = null
    for (let i = 0; i <= arrayGrande.length; i++) {
        if (arrayGrande[i] > numMax) {
            numMax = arrayGrande[i]
        }
    }
    console.log(numMax)
}
//buscarNumeroGrande()

// 19) Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let arrayPares = []
const arrayParesOriginal = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 == 0) {
            arrayPares.push(arrayOriginal[i])
        }
    }
    console.log(arrayPares)
}
//arrayParesOriginal()

// 20) Dado un array de números, escribir una función que retorne la suma de todos los números del array.

let array_ = [1, 2, 3, 4, 5]
const sumaArray = () => {
    let suma = 0
    for (let i = 0; i < array_.length; i++) {
        suma += array_[i]
    }
    console.log(suma)
}
//sumaArray()

// 21) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

let arrayStrings = ["hola", "todo", "bien"]
let arrayStringsMayus = []

const convertirMayus = () => {
    for (let i = 0; i < arrayStrings.length; i++) {
        arrayStringsMayus.push(arrayStrings[i].toLocaleUpperCase())
    }
    console.log(arrayStringsMayus)
}
//convertirMayus()

// 22) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

let arrayOrishinal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayMayoresX = []

const arrayMayoresQueX = () => {
    for (let i = 0; i < arrayOrishinal.length; i++) {
        if (arrayOrishinal[i] > 5) {
            arrayMayoresX.push(arrayOrishinal[i])
        }
    }
    console.log(arrayMayoresX)
}
//arrayMayoresQueX()

// 23) Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

let arrayDado = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let arrayMayoresDiez = []
let suma = 0

const mayoresDiez = () => {
    for (let i = 0; i < arrayDado.length; i++) {
        suma += arrayDado[i]
        if (arrayDado[i] > 10) {

            arrayMayoresDiez.push(arrayDado[i])
        }
    }
    console.log(suma)
    console.log(arrayMayoresDiez)
}
//mayoresDiez()

// 24) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

let arrayBase = ["Manzana", "Pera", "Uva", "Sandía", "Zanahoria"]
let arrayCinco = []

const arrayMasCinco = () => {
    for (let i = 0; i < arrayBase.length; i++) {
        if (arrayBase[i].length > 5) {
            arrayCinco.push(arrayBase[i])
        }
    }
    console.log(arrayCinco)
}
//arrayMasCinco()

// 25) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

let arrayBaseUno = ["Manzana", "Pera", "Uva", "Arándano", , "Zanahoria", "Ananá", "Acelga",]
let arrayCincoUno = []

const arrayMasCincoA = () => {
    for (let i = 0; i < arrayBaseUno.length; i++) {
        if (arrayBaseUno[i].length > 5 && arrayBaseUno[i].startsWith("A")) {
            arrayCincoUno.push(arrayBaseUno[i])
        }
    }
    console.log(arrayCincoUno)
}
//arrayMasCincoA()

// 26) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.

let arrayX = [5, 10, 15, 20, 25, 30, 35, 40]
let arrayXNuevo = []
let contador = 0

const arrayMayores = () => {
    for (let i = 0; i < arrayX.length; i++) {
        if (arrayX[i] > 10) {
            arrayXNuevo.push(arrayX[i])
            contador++
        }
        if (contador == 3) {
            break
        }

    }
    console.log(arrayXNuevo)
}
//arrayMayores()

// 27) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.

let arrayDeNumeros = [5, 10, 15, 20, 25, 30, 35, 40]
let arrayDeNumerosNuevo = []

const arrayMasUno = () => {
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        arrayDeNumerosNuevo.push(arrayDeNumeros[i] + 1)
    }
    console.log(arrayDeNumerosNuevo)
}
//arrayMasUno()

// 28) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.

let arrayNumber = [1, 2, 3, 4, 5]
let arrayNumberNuevo = []

const arrayMenosUltimo = () => {
    for (let i = 0; i < arrayNumber.length; i++) {
        arrayNumberNuevo.push(arrayNumber[i])
    }
    arrayNumberNuevo.pop()
    console.log(arrayNumberNuevo)
}
//arrayMenosUltimo()

// 29) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.

let arrayY = [10, 20, 30, 40, 50]
let arrayNuevoY = []

const arrayMenosUltimoPrimero = () => {
    for (let i = 0; i < arrayY.length; i++) {
        arrayNuevoY.push(arrayY[i])
    }
    arrayNuevoY.pop()
    arrayNuevoY.shift()
    console.log(arrayNuevoY)
}
//arrayMenosUltimoPrimero()

// 30) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.

let arrayEspecifico = [2, 4, 6, 8, 10]
let arrayEspecificoNuevo = []
let x = 2

const arrayMenosX = () => {
    for (let i = 0; i < arrayEspecifico.length; i++) {
        arrayEspecificoNuevo.push(arrayEspecifico[i])
    }
    arrayEspecificoNuevo.splice(x, 1)
    console.log(arrayEspecificoNuevo)
}
//arrayMenosX()