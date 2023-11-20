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
    cadenaReversa =palabra.split("").reverse().join("")
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
// 20) Dado un array de números, escribir una función que retorne la suma de todos los números del array.

let array_ = [1,2,3,4,5]
const sumaArray = () => {
    let suma = 0
    for (let i = 0; i < array_.length; i++) {
        suma += array_[i]
    }
    console.log(suma)
}
//sumaArray()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.