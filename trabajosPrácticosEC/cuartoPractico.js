// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

let elMes = 11;
let nombreMes;

switch (elMes) {
    case 1:
        nombreMes = "Enero";
        break;
    case 2:
        nombreMes = "Febrero";
        break;
    case 3:
        nombreMes = "Marzo";
        break;
    case 4:
        nombreMes = "Abril";
        break;
    case 5:
        nombreMes = "Mayo";
        break;
    case 6:
        nombreMes = "Junio";
        break;
    case 7:
        nombreMes = "Julio";
        break;
    case 8:
        nombreMes = "Agosto";
        break;
    case 9:
        nombreMes = "Septiembre";
        break;
    case 10:
        nombreMes = "Octubre";
        break;
    case 11:
        nombreMes = "Noviembre";
        break;
    case 12:
        nombreMes = "Diciembre";
        break;
    default:
        nombreMes = "No hay mes con ese número, bro";
}
console.log(nombreMes);

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

let elDia = 9
let nombreDia;

switch (elDia) {
    case 1: nombreDia = "Lunes";
    break;
    case 2: nombreDia = "Martes";
    break;
    case 3: nombreDia = "Miercoles";
    break;
    case 4: nombreDia = "Jueves";
    break;
    case 5: nombreDia = "Viernes";
    break;
    case 6: nombreDia = "Sábado";
    break;
    case 7: nombreDia = "Domingo";
    break;
    default: nombreDia = "No creo que haya más de 7 días, bro"
} console.log(nombreDia)

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

let laLetra = "z"
switch (laLetra) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    console.log("Es una VOCAL");
    break;
    default: console.log("Es una CONSONANTEEEE")
}

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.


let arraySemana = ["Lunes" , "Martes" , "Miercoles" , "Jueves" , "Viernes"]
console.log(arraySemana[4])

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

let letra = "b"

if (letra >= "A" && letra <= "Z") {
    console.log("Es MAYÚSCULA");
} else if (letra >= "a" && letra <= "z") {
    console.log("es MINÚSCULA");
} else {
    console.log("Esto no es una letra");
}

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

let nota = 10
if (nota >= 0 && nota <= 10) {
    if (nota < 6) {
        console.log("Suspenso");
    } else if (nota <= 7) {
        console.log("Aprobado");
    } else if (nota <= 9) {
        console.log("Notable");
    } else {
        console.log("Sobresaliente, gg");
    }
} else {
    console.log("No está dentro del rango el número que pusiste mepa");
}

// Imprimir los números pares del 2 al 20 en la consola.

let arrayNumbers = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20];
console.log(arrayNumbers)

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.

let myString = "Hola, Mundito";
for (let i = 0; i < myString.length; i++) {
    let letrasEnMayusculas = myString[i].toUpperCase();
    console.log(letrasEnMayusculas);
}

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
/*
let numeroIngresado = prompt("Ingrese un número");
numeroIngresado = parseInt(numeroIngresado);
for (let i = 0; i <= numeroIngresado; i++) {
        console.log(i);
    }
*/

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

let serieDeNumeros = prompt("Ingresa números separados por COMA");
let numeros = serieDeNumeros.split(",");
if (numeros.length > 0) {
    let numeroMasGrande = Math.max(...numeros);
    console.log("El número más grande essss " + numeros);}
    else {
        console.log("Algo ingresaste mal")
    }

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// Dado un array de números, escribir una función que retorne el número más grande del array.
// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
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