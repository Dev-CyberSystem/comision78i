// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
const mes = () => {
    const mes = parseInt(prompt("Ingrese un numero del 1 al 12: "));
    switch (mes) {
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break;
        case 7:
            console.log("Julio");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Septiembre");
            break;
        case 10:
            console.log("Octubre");
            break;
        case 11:
            console.log("Noviembre");
            break;
        case 12:
            console.log("Diciembre");
            break;
        default:
            console.log("Ingrese un numero valido");
            break;
    }
}
// mes();

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
const diaSemana = () => {
    let dia = prompt("Ingrese un numero (1 - 7): ");
    dia = parseInt(dia);
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Numero Incorrecto");
            break;
    }
}

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
const esVocal = () => {
    let letra = prompt("Ingrese una letra: ");
    letra = letra.toLowerCase();
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("Es una vocal");
            break;
        default:
            console.log("Es una consonante");
            break;
    }
}

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
const dia = () => {
    const dia = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    const elegido = parseInt(prompt("Ingrese un numero del 1 al 5: "));
    console.log(dia[elegido - 1]);
}
// dia();

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const esMayuscula = () => {
    let letra = prompt("Ingrese una letra: ");
    letra = letra.charCodeAt(0);
    if (65 <= letra && letra <= 90) { // Codigo ASCII
        console.log("Es una letra mayuscula");
    } else {
        console.log("Es una letra minuscula");
    }
}

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
const calificación = () => {
    const nota = parseInt(prompt("Ingrese la nota del 0 al 10: "));
    switch (nota) {
        case 0:
        case 1:
        case 2:
        case 3:
            console.log("Suspenso");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Aprobado");
            break;
        case 7:
        case 8:
            console.log("Notable");
            break;
        case 9:
        case 10:
            console.log("Sobresaliente");
        default:
            console.log("Ingrese una nota valida");
            break;
    }
}
// calificación();

// Imprimir los números pares del 2 al 20 en la consola.
// for (let index = 2; index <= 20; index+=2) {
//     console.log(index);
// }

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// let cadena = 'Hola Mundo';
// cadena = cadena.toUpperCase();
// for (let index = 0; index < cadena.length; index++) {
//     console.log(cadena[index]);
// }

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// const numero = parseInt(prompt("Ingrese un numero: "));
// for (let index = 1; index <= numero; index++) {
//     console.log(index)
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// const numeros = prompt("Ingrese una serie de numeros separados por una coma: ").split(',');
// for (let index = 0; index < numeros.length; index++) {
//     numeros[index] = parseInt(numeros[index]);
// }
// let grande = 0;
// for (let index = 0; index < numeros.length; index++) {
//     if (grande < numeros[index]) {
//         grande = numeros[index];
//     }
// }
// console.log(grande);

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// const esPalindromo = () => {
//     cadena = prompt("Ingrese la cadena: ");
//     const cadenaNormal = cadena.toLowerCase().replace(/\s/g, '');
//     let cadenaAlReve = "";
//     for (let index = cadenaNormal.length - 1; 0 <= index; index--) {
//         cadenaAlReve += cadenaNormal[index];
//     }
//     console.log(cadenaNormal);
//     console.log(cadenaAlReve);
//     if (cadenaNormal == cadenaAlReve) {
//         console.log("Es un palíndromo");
//     } else {
//         console.log("No es un palíndromo");
//     }
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// const numeros = prompt("Ingrese una serie de numeros separados por coma: ").split(',');
// for (let index = 0; index < numeros.length; index++) {
//     numeros[index] = parseInt(numeros[index]);
// }
// let suma = 0;
// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index] % 2 === 0) {
//         suma += numeros[index];
//     }
// }
// console.log(suma);

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// const numeros = prompt("Ingrese una serie de numeros separados por coma: ").split(',');
// for (let index = 0; index < numeros.length; index++) {
//     numeros[index] = parseInt(numeros[index]);
// }
// let negativos = 0;
// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index] < 0) {
//         negativos++;
//     }
// }
// console.log(negativos);

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// const numero = parseInt(prompt("Ingrese un numero: "));
// for (let index = 1; index <= numero; index++) {
//     if (index % 2 !== 0) {
//         console.log(index)
//     }
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// const numeros = prompt("Ingrese una serie de numeros separados por coma: ").split(',');
// for (let index = 0; index < numeros.length; index++) {
//     numeros[index] = parseInt(numeros[index]);
// }
// let pequenio = Math.min(...numeros);
// console.log(pequenio);

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// let min = 1;
// let max = 100;
// let aleatorioEnRango = Math.random() * (max - min) + min;
// let num;
// let intentos = 0;
// let bandera = true;
// do {
//     num = parseInt(prompt("Ingrese un numero del 1 al 100: "));
//     if (num === aleatorioEnRango) {
//         bandera = false;
//     }
//     intentos++;
// } while (bandera && intentos < 3);
// if (bandera) {
//     console.log("No adivino")
// } else {
//     console.log("Adivino, intentos: " + intentos);
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// const numeros = prompt("Ingrese una serie de numeros separados por coma: ").split(',');
// for (let index = 0; index < numeros.length; index++) {
//     numeros[index] = parseInt(numeros[index]);
// }
// let pares = 0;
// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index] % 2 === 0) {
//         pares++;
//     }
// }
// console.log(pares);

// Dado un array de números, escribir una función que retorne el número más grande del array.
const masGrande = (numeros) => {
    return Math.max(...numeros);
}
const numeros = [3,5,22,10,60,53];
console.log(masGrande(numeros));

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
const pares = (numeros) => {
    let pares = [];
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] % 2 === 0) {
            pares.push(numeros[index]);
        }
    }
    return pares;
}
console.log(pares(numeros));

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
const suma = (numeros) => {
    let suma = 0;
    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index];
    }
    return suma;
}
console.log(suma(numeros));

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
let cadenas = ['Hola', 'Mundo', 'Como', 'Estas'];
const mayus = (cadenas) => {
    for (let index = 0; index < cadenas.length; index++) {
        cadenas[index] = cadenas[index].toUpperCase();
    }
    return cadenas;
}
console.log(mayus(cadenas));

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
const mayores = (numeros, x) => {
    let mayores = [];
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > x) {
            mayores.push(numeros[index]);
        }
    }
    return mayores;
}
// console.log(mayores(numeros, 22));

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
const sumaGrandes = (numeros) => {
    let suma = 0;
    let numerosGrandes = [];
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > 10) {
            numerosGrandes.push(numeros[index]);
        }
        suma += numeros[index];
    }
    console.log(numerosGrandes);
    return suma;
}
// console.log(sumaGrandes(numeros));

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
const masCinco = (cadenas) => {
    let masCaracteres = [];
    for (let index = 0; index < cadenas.length; index++) {
        if (cadenas[index].length > 5) {
            masCaracteres.push(cadenas[index]);
        }
    }
    return masCaracteres;
}
const arrayDeStrings = ["Hola", "Adiós", "JavaScript", "Programación", "Cadena", "Corta"];
// console.log(masCinco(arrayDeStrings));

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
const masCincoA = (cadenas) => {
    let masCaracteres = [];
    for (let index = 0; index < cadenas.length; index++) {
        cadenas[index] = cadenas[index].toLowerCase();
        if (cadenas[index].length > 5 && cadenas[index].startsWith("a")) {
            masCaracteres.push(cadenas[index]);
        }
    }
    return masCaracteres;
}
let arrayDeStrings2 = ["Hola", "Adióss", "JavaScript", "Programación", "Cadena", "Corta", "anamaria"];
// console.log(masCincoA(arrayDeStrings2));

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
const mayoresTres = (numeros, x) => {
    let mayores = [];
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > x) {
            mayores.push(numeros[index]);
        }
    }
    return mayores.slice(0, 3);
}
// console.log(mayoresTres(numeros, 2));

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// console.log(numeros);
const masUno = (numeros) => {
    for (let index = 0; index < numeros.length; index++) {
        numeros[index] = numeros[index] + 1;
    }
    return numeros;
}
// console.log(masUno(numeros));

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
const menosUltimo = (numeros) => {
    return numeros.slice(0, -1);
}
//console.log(menosUltimo(numeros));

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
const menosPrimeroUltimo = (numeros) => {
    return numeros.slice(1, -1);
}
// console.log(menosPrimeroUltimo(numeros));

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
const prueba = [1, 4, 6, 9, 30];
const menosX = (numeros, x) => {
    return numeros.filter((_, index) => index !== x);
}
console.log(menosPrimeroUltimo(prueba, 1));