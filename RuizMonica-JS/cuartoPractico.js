// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
function obtenerNombreMes(numero) {
    let nombreMes = '';
    switch (numero) {
        case 1:
            nombreMes = 'Enero';
            break;
        case 2:
            nombreMes = 'Febrero';
            break;
        case 3:
            nombreMes = 'Marzo';
            break;
        case 4:
            nombreMes = 'Abril';
            break;
        case 5:
            nombreMes = 'Mayo';
            break;
        case 6:
            nombreMes = 'Junio';
            break;
        case 7:
            nombreMes = 'Julio';
            break;
        case 8:
            nombreMes = 'Agosto';
            break;
        case 9:
            nombreMes = 'Septiembre';
            break;
        case 10:
            nombreMes = 'Octubre';
            break;
        case 11:
            nombreMes = 'Noviembre';
            break;
        case 12:
            nombreMes = 'Diciembre';
            break;
        default:
            nombreMes = 'Número de mes inválido. Por favor, ingresa un número del 1 al 12.';
            break;
    }
    return nombreMes;
}

let numeroMes = parseInt(prompt("Ingresa un número del 1 al 12 para obtener el nombre del mes:"));

let nombreMes = obtenerNombreMes(numeroMes);
console.log(nombreMes);


// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
function obtenerDiaSemana(numero) {
    let diaSemana = '';
    switch (numero) {
        case 1:
            diaSemana = 'Domingo';
            break;
        case 2:
            diaSemana = 'Lunes';
            break;
        case 3:
            diaSemana = 'Martes';
            break;
        case 4:
            diaSemana = 'Miércoles';
            break;
        case 5:
            diaSemana = 'Jueves';
            break;
        case 6:
            diaSemana = 'Viernes';
            break;
        case 7:
            diaSemana = 'Sábado';
            break;
        default:
            diaSemana = 'Número de día de semana inválido. Por favor, ingresa un número del 1 al 7.';
            break;
    }
    return diaSemana;
}

let numeroDiaSemana = parseInt(prompt("Ingresa un número del 1 al 7 para obtener el día de la semana:"));

let diaSemana = obtenerDiaSemana(numeroDiaSemana);
console.log(diaSemana);

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
function esVocalConsonante(caracter) {
    let letra = caracter.toLowerCase();
    if (letra) {
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            return "Es una vocal.";
        } else {
            return "Es una consonante.";
        }
    } else {
        return "No es ni vocal ni consonante. Por favor, ingresa una sola letra del alfabeto.";
    }
}

let letraIngresada = prompt("Ingresa una letra para verificar si es vocal o consonante:");

let resultado = esVocalConsonante(letraIngresada);
console.log(resultado);

// 4) Crea un programa que reciba un número del 1 al 7 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
function obtenerNombreDia(numero) {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    if (numero >= 1 && numero <= 7) {
        return diasSemana.slice(numero - 1, numero)[0];
    } else {
        return 'Número de día inválido. Por favor, ingresa un número del 1 al 7.';
    }
}

let numeroSemana = parseInt(prompt("Ingresa un número del 1 al 7 para obtener el día de la semana:"));
let nombreDia = obtenerNombreDia(numeroSemana);
console.log(nombreDia);

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const mayuMinu = ()=>{
    let letra = prompt("Ingresa una letra:");

    if (letra.length === 1) {
      if (letra >= 'A' && letra <= 'Z') {
          console.log("La letra ingresada es mayúscula.");
      } else if (letra >= 'a' && letra <= 'z') {
          console.log("La letra ingresada es minúscula.");
      } else {
          console.log("La entrada no es una letra.");
      }
    } else {
      console.log("Por favor, ingresa una única letra.");
    }
  }
  mayuMinu();

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
function obtenerCalificacion(nota) {
    if (nota >= 0 && nota <= 10) {
        if (nota < 5) {
            return "Suspenso";
        } else if (nota >= 5 && nota < 7) {
            return "Aprobado";
        } else if (nota >= 7 && nota < 9) {
            return "Notable";
        } else {
            return "Sobresaliente";
        }
    } else {
        return "Nota inválida. Por favor, ingresa una nota del 0 al 10.";
    }
}
let notaIngresada = parseFloat(prompt("Ingresa una nota del 0 al 10 para obtener la calificación:"));
let calificacion = obtenerCalificacion(notaIngresada);
console.log(calificacion);

// Imprimir los números pares del 2 al 20 en la consola.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
let texto = "ejemplo"; // Puedes cambiar este texto por el que desees

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i].toUpperCase());
}

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
let numeroIngresado = parseInt(prompt("Ingresa un número:"));

for (let i = 1; i <= numeroIngresado; i++) {
    console.log(i);
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
let numeros = prompt("Ingresa una serie de números separados por coma:");
let numerosArray = numeros.split(",").map(Number); // Convertimos los números a un array

let numeroMasGrande = Math.max(...numerosArray); // Encontramos el número más grande

console.log("El número más grande es:", numeroMasGrande);

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
let palabra = prompt("Ingresa una palabra:");
let palabraFormateada = palabra.toLowerCase();
let reversoPalabra = palabraFormateada.split('').reverse().join('');

if (palabraFormateada === reversoPalabra) {
    console.log(`La palabra "${palabra}" es un palíndromo.`);
} else {
    console.log(`La palabra "${palabra}" no es un palíndromo.`);
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
let numerosSuma = prompt("Ingresa una serie de números separados por coma:");
let sumaArray = numerosSuma.split(",").map(Number); // Convertimos los números a un array
let sumaNumerosPares = sumaArray.reduce((total, numero) => {
    if (numero % 2 === 0) {
        return total + numero;
    }
    return total;
}, 0);
console.log("La suma de los números pares es:", sumaNumerosPares);


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
let numNegativo = prompt("Ingresa una serie de números separados por coma:");
let negativoArray = numNegativo.split(",").map(Number); // Convertimos los números a un array
let cantidadNumerosNegativos = negativoArray.filter(numero => numero < 0).length;
console.log("La cantidad de números negativos es:", cantidadNumerosNegativos);


// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
let numeroIng = parseInt(prompt("Ingresa un número:"));

console.log("Números impares hasta", numeroIng, ":");

for (let i = 1; i <= numeroIng; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
let numMin = prompt("Ingresa una serie de números separados por coma:");
let minArray = numMin.split(",").map(Number); // Convertimos los números a un array
let numeroMasPequeno = Math.min(...minArray); // Encontramos el número más pequeño
console.log("El número más pequeño es:", numeroMasPequeno);


// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Generar un número aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
let adivinado = false;

while (!adivinado) {
    let intentoUsuario = parseInt(prompt("Adivina el número entre 1 y 100:"));
    intentos++;

    if (intentoUsuario === numeroAleatorio) {
        adivinado = true;
        console.log(`¡Felicitaciones! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
    } else if (intentoUsuario < numeroAleatorio) {
        console.log("El número es mayor. Sigue intentando.");
    } else {
        console.log("El número es menor. Sigue intentando.");
    }
}


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
let numPares = prompt("Ingresa una serie de números separados por coma:");
let paresArray = numPares.split(",").map(Number); // Convertimos los números a un array

let cantidadNumerosPares = paresArray.filter(numero => numero % 2 === 0).length;

console.log("La cantidad de números pares es:", cantidadNumerosPares);


// Dado un array de números, escribir una función que retorne el número más grande del array.
function encontrarNumeroMasGrande(array) {
    let maximo = array[0]; // Asignamos el primer número como el máximo inicial
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }

    return maximo;
}
let numMax = [10, 5, 20, 8, 15];
let numeroGrande = encontrarNumeroMasGrande(numeros);
console.log("El número más grande es:", numeroGrande);


// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
function filtrarNumerosPares(array) {
    return array.filter(numero => numero % 2 === 0);
}
let val = [3, 8, 12, 5, 6, 10, 7];
let numerosPares = filtrarNumerosPares(val);
console.log("Números pares:", numerosPares);


// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
function sumarNumeros(array) {
    return array.reduce((total, numero) => total + numero, 0);
}
let num = [3, 8, 12, 5, 6, 10, 7];
let suma = sumarNumeros(num);
console.log("La suma de los números es:", suma);


// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
function convertirAMayusculas(array) {
    return array.map(string => string.toUpperCase());
}
let palabras = ["hola", "qué", "tal", "estás"];
let palabrasMayusculas = convertirAMayusculas(palabras);
console.log("Palabras en mayúsculas:", palabrasMayusculas);


// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
function numerosMayoresQueX(array, X) {
    return array.filter(numero => numero > X);
}
let valores = [10, 20, 5, 8, 30, 15];
let X = 12;
let numerosMayores = numerosMayoresQueX(valores, X);
console.log("Números mayores que", X, ":", numerosMayores);


// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
function sumaYNumerosGrandes(array) {
    let suma = array.reduce((total, numero) => total + numero, 0);
    let numerosGrandes = array.filter(numero => numero > 10);

    return {
        sumaTotal: suma,
        numerosGrandes: numerosGrandes
    };
}
let sumarArray = [3, 8, 12, 5, 6, 10, 7, 15];
let resul = sumaYNumerosGrandes(sumarArray);
console.log("La suma de todos los números es:", resul.sumaTotal);
console.log("Números mayores que 10:", resul.numerosGrandes);


// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
function stringsMasDeCincoCaracteres(array) {
    return array.filter(string => string.length > 5);
}
let cadena = ["manzana", "casa", "computadora", "sol", "programación"];
let palabrasMasLargas = stringsMasDeCincoCaracteres(cademna);
console.log("Palabras con más de 5 caracteres:", palabrasMasLargas);


// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
function filtrarStrings(array) {
    return array.filter(string => string.length > 5 && string.charAt(0).toLowerCase() === 'a');
}

let palabrasMas = ["manzana", "azul", "casa", "automóvil", "amarillo"];
let palabrasFiltradas = filtrarStrings(palabrasMas);
console.log("Palabras con más de 5 caracteres y empiezan con 'a':", palabrasFiltradas);


// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
function filtrarNumeros(array, X) {
    let numerosMayoresQueX = array.filter(numero => numero > X);
    let primerosTresNumeros = numerosMayoresQueX.slice(0, 3);
    return primerosTresNumeros;
}

let valor = [10, 5, 20, 8, 15, 30, 7];
let y = 10;
let res = filtrarNumeros(valor, y);
console.log("Los primeros 3 números mayores que", X, "son:", res);


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
function sumarUno(array) {
    return array.map(numero => numero + 1);
}

let array = [5, 8, 12, 3, 6];
let numerosSumados = sumarUno(array);
console.log("Nuevos números sumados:", numerosSumados);


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
function quitarUltimoNumero(array) {
    return array.slice(0, -1);
}

let arrayUltimo = [5, 8, 12, 3, 6];
let numerosSinUltimo = quitarUltimoNumero(arrayUltimo);
console.log("Números sin el último elemento:", numerosSinUltimo);


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
function quitarPrimerYUltimo(array) {
    return array.slice(1, -1);
}

let arrayPrimUltimo = [5, 8, 12, 3, 6];
let numerosSinPrimerYUltimo = quitarPrimerYUltimo(arrayPrimUltimo);
console.log("Números sin el primer y último elemento:", numerosSinPrimerYUltimo);


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
function excluirNumeroEnPosicionX(array, posicion) {
    return array.filter((numero, index) => index !== posicion);
}

let arrayPos = [5, 8, 12, 3, 6];
let posicion = 2; // Suponiendo que queremos excluir el número en la posición 2 (índice 2)
let numerosExcluido = excluirNumeroEnPosicionX(arrayPos, posicion);
console.log(`Números excluyendo el número en la posición ${posicion}:`, numerosExcluido);
