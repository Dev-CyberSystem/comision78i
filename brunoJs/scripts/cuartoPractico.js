// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// let mes=parseInt(prompt("Ingresa un numero"))
const queMes = (mes) => {
    switch (mes) {
        case 1:
            alert("Se mes es Enero");
            break;
        case 2:
            alert("Se mes es Febrero");
            break;
        case 3:
            alert("Se mes es Marzo");
            break;
        case 4:
            alert("Se mes es Abril");
            break;
        case 5:
            alert("Se mes es Mayo");
            break;
        case 6:
            alert("Se mes es Junio");
            break;
        case 7:
            alert("Se mes es Julio");
            break;
        case 8:
            alert("Se mes es Agosto");
            break;
        case 9:
            alert("Se mes es Septiembre");
            break;
        case 10:
            alert("Se mes es Octubre");
            break;
        case 11:
            alert("Se mes es Noviembre");
            break;
        case 12:
            alert("Se mes es Diciembre");
            break;
        default:
            alert("El numero es invalido");
            break;
    }
};
//queMes(mes)

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
//let dia=parseInt(prompt("Ingrese un numero del 1 al 7"))

const diaDeLaSemana = (dia) => {
    if (dia >= 1 && dia <= 7) {
        switch (dia) {
            case 1:
                alert("Tu numero corresponde al dia Lunes");
                break;
            case 2:
                alert("Tu numero corresponde al dia Martes");
                break;
            case 3:
                alert("Tu numero corresponde al dia Miercoles");
                break;
            case 4:
                alert("Tu numero corresponde al dia Jueves");
                break;
            case 5:
                alert("Tu numero corresponde al dia Viernes");
                break;
            case 6:
                alert("Tu numero corresponde al dia Sabado");
                break;
            case 7:
                alert("Tu numero corresponde al dia Domingo");
                break;

            default:
                break;
        }
    } else {
        alert("El numero ingresado es incorreto");
    }
};
//
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

// const esVocal=()=>{
//     let letra = prompt("Ingresa un caracter")
//     letra.toLocaleLowerCase().trim()
//     if (letra.length>1) {
//         alert("solo pudes ingresa un caracter")
//     } else if (letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u") {
//         alert("es una vocal")
//     } else{
//         alert("es una consonante")
//     }
// }
//esVocal()

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

//let dia=prompt("Ingresa un numero del 1 al 5")
//parseInt(dia)

const semana = (dia) => {
    let semana = ["lunes", "Martes", "miercoles", "jueves", "viernes"];

    if (dia <= 1 && dia > 5) {
        alert("el numero no pude ser menor a 1 o mayor a 5");
    } else {
        alert(semana[dia - 1]);
    }
};

//semana(dia)

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const mayMin = () => {
    let letra = prompt("Ingresa una letra");
    if (letra.length > 1) {
        alert("solo puedes ingresar una letra");
    } else if (letra >= "a" && letra <= "z") {
        alert("la letra es miniscula");
    } else if (letra >= "A" && letra <= "Z") {
        alert("la letra es mayuscula");
    } else {
        alert("los ingresado no es una letra");
    }
};
// mayMin()

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// let nota = prompt("Ingrese su nota del 1 al 10")
//parseInt(nota)

const clasificar = (nota) => {
    if (nota >= 1 && nota <= 6) {
        alert("Suspenso")
    } else if (nota >= 7 && nota <= 8) {
        alert("Aprobado")
    } else if (nota == 9) {
        alert("Notable")
    } else if (nota == 10) {
        alert("Sobresaliente")
    }


}
// clasificar(nota)

// Imprimir los números pares del 2 al 20 en la consola.
// for (let i = 0; i < 22; i+=2) {
//     console.log(i)   
// }

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// let frase = "Hola Mundo cruel"
// let nuevaf=frase.split("")
// for (let i = 0; i < nuevaf.length; i++) {
//      console.log(nuevaf[i].toLocaleUpperCase())   
// }

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// let numerU= Number(prompt("ingresa un numero")) 
// const contar=(num)=>{
// for (let i = 0; i < num; i++) {
//     console.log(i+1)

// }
// }
// contar(numerU)

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
//  let num = prompt("Ingrese una serie de numeros separados por comas")
// const mayor=()=>{
//  let sinComa=num.split(`,`).map(Number)
// console.log(sinComa)
// console.log(Math.max(...sinComa))
// }
// mayor(num)

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.

// const palindromo = (palabra) => {
//     let re = /[\W_]/g;
//     let lowRegStr = palabra.toLowerCase().replace(re, "");
//     let reverso = lowRegStr.split("").reverse().join("");
//     if (reverso === lowRegStr) {
//       alert("es un palindromo");
//     } else {
//       alert("no es un palindromo");
//     }
//   };
//palindrome(palabra);

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
const numPares = () => {
    let num = prompt("Ingrese una serie de numeros separados por coma")
    let sinComa = num.split(`,`).map(Number)
    let numPares = 0
    for (let i = 0; i < sinComa.length; i++) {
        if (sinComa[i] % 2 === 0) {
            numPares += sinComa[i]
        }

    }
    console.log("la suma de los numeros pares es: " + numPares)
}
//numPares()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
const numNegativos = () => {
    let num = prompt("Ingrese una serie de numeros separados por coma")
    let sinComa = num.split(`,`).map(Number)
    let numN = []
    for (let i = 0; i < sinComa.length; i++) {
        if (sinComa[i] < 0) {
            numN.push(sinComa[i])
        }
    }
    console.log("los numeros negativos son: " + numN)
}
//numNegativos()

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
const numImpares = () => {
    let num = Number(prompt("ingresa un numero"))
    if (num >= 1) {
        for (let i = 1; i < num; i++) {
            if (i % 2 === 1) {
                console.log(i)
            }

        }
    } else {
        alert("el numero ingresado no pude ser menor a 1")
    }
}
//numImpares()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
const menor = () => {
    let num = prompt("Ingrese una serie de numeros separados por comas")
    let sinComa = num.split(`,`).map(Number)
    console.log(Math.min(...sinComa))
}
//menor(num)

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// let intentos = 0;

// while (true) {
//     const intentoUsuario = parseInt(prompt("Adivina el número entre 1 y 100"));

//     intentos++;

//     if (intentoUsuario === numeroAleatorio) {
//         console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
//         break;
//     } else {

//         if (intentoUsuario > numeroAleatorio) {
//             console.log("Demasiado alto. Intenta de nuevo.");
//         } else {
//             console.log("Demasiado bajo. Intenta de nuevo.");
//         }
//     }
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
const numePares = () => {
    let num = prompt("Ingrese un serie de numeros separados por una coma")
    let sinComa = num.split(`,`).map(Number)
    console.log(sinComa)
    let numP = []
    for (let i = 0; i < sinComa.length; i++) {
        if (sinComa[i] % 2 === 0) {
            numP.push(sinComa[i])
        }

    }
    console.log("la cantidad de numeros pares es: " + numP.length)

}
//numePares()

// Dado un array de números, escribir una función que retorne el número más grande del array.
const numU = () => {
    alert("Vas a ingresar una serie de numeros")
    let numU = []
    for (let i = 0; i < 5; i++) {
        let num = Number(prompt("Ingresa el numero que ocupa la posicion " + (i + 1)))
        numU.push(num)
    }
    console.log(Math.max(...numU))
}
//numU()

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original. 
let arrayN = [1, 2, 100, 4, 5, 96, 7, 8, 80, 10, 11, 12, 15]

const arrayPares = (arrayN) => {
    let nuevoArray = []
    for (let i = 0; i < arrayN.length; i++) {
        if (arrayN[i] % 2 === 0) {
            nuevoArray.push(arrayN[i])
        }

    }
    return console.log(nuevoArray)
}
//arrayPares(arrayN)
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// const sumaArray = (arrayN) => {
//     let nArray = 0
//     for (let i = 0; i < arrayN.length; i++) {
//         nArray += arrayN[i]
//     }
//     return console.log(nArray)
//}
//sumaArray(arrayN)

//                                 <--Falta resolver-->
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
let arrayStr = [`hola`, `mundo`, `cruel`, `viva`, `La libertad carajo`, `bruno`, `amores`, "aerodromo", `a`]
const arrayM = (arrayStr) => {
    let mayus = []
    for (let i = 0; i < arrayStr.length; i++) {
        mayus.push(arrayStr[i])
    }
    console.log(mayus.toString().toLocaleUpperCase())
}
//arrayM(arrayStr)

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// let numx=Number(prompt("Ingresa un numero"))
// const mayorAX = (arrayN, numx) => {
//     let nuevoArray = []
//     for (let i = 0; i < arrayN.length; i++) {
//         if (arrayN[i] > numx) {
//             nuevoArray.push(arrayN[i])
//         }
//     }
//     console.log(nuevoArray)
// }
// mayorAX(arrayN,numx)

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

const sumaArray1 = (arrayN) => {
    let nArray = 0
    let numerosGrandes = []
    for (let i = 0; i < arrayN.length; i++) {
        nArray += arrayN[i]
        if (arrayN[i] > 10) {
            numerosGrandes.push(arrayN[i])
        }
    }
    console.log(nArray)
    console.log(numerosGrandes)
}
//sumaArray1(arrayN)

//                                             <--Falta completar-->
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// function filtrarPorLongitud(arrayStr) {
//     let result = arrayStr.filter((arrayStr) => arrayStr.length >= 5);
//     console.log(result);
//}
//filtrarPorLongitud(arrayStr)

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".  
function filtrarPorLongitudYLetra(arrayStr) {
    let result = arrayStr.filter((arrayStr) => arrayStr.charAt(0).toLocaleUpperCase() === "A" && arrayStr.length >= 5);
    console.log(result);
}
//filtrarPorLongitudYLetra(arrayStr)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
const sumarArray = (arrayN) => {
    let nuevoArray = []
    for (let i = 0; i < arrayN.length; i++) {
        nuevoArray.push(arrayN[i] + 1)

    }
    console.log(arrayN)
    console.log(nuevoArray)
}
//sumarArray(arrayN)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
const sacarUltimo = (arrayN) => {
    let nuevoArray = []
    for (let i = 0; i < arrayN.length - 1; i++) {
        nuevoArray.push(arrayN[i])
    }
    console.log(arrayN)
    console.log(nuevoArray)
}
//sacarUltimo(arrayN)

const sacarUltimo1 = (arrayN) => {
    let nuevoArray = []
    for (let i = 0; i < arrayN.length; i++) {
        nuevoArray.push(arrayN[i])
    }
    nuevoArray.pop()
    console.log(arrayN)
    console.log(nuevoArray)
}
//sacarUltimo1(arrayN)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
const primeroUltimo = (arrayN) => {
    let nuevoArray = []
    for (let i = 0; i < arrayN.length - 1; i++) {
        nuevoArray.push(arrayN[i])
    }
    nuevoArray.shift()
    console.log(arrayN)
    console.log(nuevoArray)
}
//primeroUltimo(arrayN)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.

const eliminarElemento = (arrayN) => {
    let eliminar=Number(prompt("Ingresa un numero vamos a eliminar un elemento"))
    let nuevoArray = []
    for (let i = 0; i < arrayN.length; i++) {
        nuevoArray.push(arrayN[i])
    }
    nuevoArray.splice(eliminar,1)
    console.log(arrayN)
    console.log(nuevoArray)
}
eliminarElemento(arrayN)