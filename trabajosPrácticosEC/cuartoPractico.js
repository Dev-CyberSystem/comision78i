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

const pares = () => {
    for(let i = 2 ; i <= 20 ; i+=2){
    console.log(i)
}}}; pares();

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

/*
const numeroGrande = () => {
    let nums = prompt("Ingresa números separados por coma");
    let numsss = nums.split(",").map(Number);
    let superNumero = Math.max(...numsss);
    console.log(superNumero)
}; numeroGrande ();
*/


// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
/*
let text = prompt("Ingresar un texto :) ")

function palindro(text) {
    let separarCadena = text.split(""); 
    let invertirArreglo = separarCadena.reverse(); 
    let unirArreglo = invertirArreglo.join("");    
    if( text == unirArreglo){
        console.log("Es un palíndromo gg")
    }
    else {
        console.log("No es un palíndromo :( ")
    }
}
palindro(text)
*/

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

/*
const sumaPares = () => {
    let numeros = prompt("Ingresar numeros separados por comas")
    let array = numeros.split(",")
    let suma = 0
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 == 0){
            suma += parseInt(array[i])
        }
    }
    console.log(suma)
}
sumaPares()
*/

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

/*
const numNegativos = () => {
    let numeros = prompt("Ingresar numeros separados por comasss")
    let array = numeros.split(",")
    for(let i = 0; i <= array.length; i++){
        if(parseInt(array[i]) < 0) {
            console.log(array[i])
        }
    }
}; numNegativos();
*/

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.


/*
const impares = () => {
    let numeros = parseInt(prompt("Ingresar un numero"))
    for(let i = 1; i <= numeros; i+=2){
        console.log(i)
    }
}; impares();
*/



// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

/*
const numeroMasPequeño = () => {
    let numeros = prompt("Ingresar una cadena de numeros separados por comasss")
    let array = numeros.split(",")
    let numMinimo = Math.min(...array)
    console.log(numMinimo)
}; numeroMasPequeño();
*/

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

/*
const adivinar = () => {
    let numRandom = (Math.floor(Math.random() * 100) + 1)
    let numero = parseInt(prompt("Ingresar numero random del 1-100"))
    let aux = 0
    while(numero != numRandom){
        aux++
        numero = parseInt(prompt("Ingresar numero random del 1-100. Intento anterior fallido"))
    }
    console.log("Usted fallo " + aux + " veces antes de acertar")
} ; adivinar()
*/

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.


/*

const numImpares = () => {
    let numeros = prompt("Ingresar numeros separados por ,")
    let array = numeros.split(",")
    let cantidad = 0
    for(let i = 0; i <= array.length; i++){
        if(parseInt(array[i]) % 2 != 0){
            cantidad++
        }
    }
    console.log(cantidad-1)
};numImpares();

*/


// Dado un array de números, escribir una función que retorne el número más grande del array.

/*
const arrayGrande = () => {
    let array = [2, 22, 5, 6, 7, 10]
    let grande = Math.max(...array)
    console.log(grande)
}; arrayGrande()
*/

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

/*
const arrayPares = () => {
    let array = [8, 4, 5, 6, 8, 9, 4, 2, 6, 2, 13, 8, 3, 7, 10, 13, 20, 12]
    let arrayNuevo = []
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 == 0){
            arrayNuevo.push(array[i])
        }
    }
    console.log(arrayNuevo)
}; arrayPares();
*/


// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

/*
const arraySuma = () => {
    let array = [2, 2, 2]
    let suma = 0
    for(let i = 0; i < array.length; i++){
        suma = suma + array[i]
    } console.log(suma)
} ;arraySuma();
*/

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

/*
let array = ["Enzo", "Matías", "Castro"]
let arrayNuevo = []
for(let i = 0; i < array.length; i++){
    arrayNuevo.push(array[i].toUpperCase())
 console.log(arrayNuevo) }
arrayString()
*/


// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

/*
const arrayMayor = () => {
    let numeros = [7, 6, 25, 2, 10]
    let x = 2
    let array = []
    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] > x){
            array.push(numeros[i])
        }
    }
    console.log(array)
}; arrayMayor()
*/


// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

/*
const arraySumaMayor = () => {
    let numeros = [2, 6, 2, 10, 12, 14]
    let suma = 0
    let array = []
    for(let i = 0; i < numeros.length; i++){
        suma = suma + numeros[i]
        if (numeros[i] > 10){
            array.push(numeros[i])
        }
    }
    console.log(suma)
    console.log(array)
}; arraySumaMayor();
*/



// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

/*
const cadenaString = () => {
    let string = ["hola", "Holanda", "Argentina", "chau", "celu", "control", "Mundial", "Fulbol"]
    let array = []
    for(let i = 0; i < string.length; i++){
        if(string[i].length > 5){
            array.push(string[i])
        }
    }
    console.log[string]
    console.log(array)
}; cadenaString()
*/


// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

/*
const cadenaStringA = () => {
    let string = ["Boca" , "Sin" , "Copa" , "Libertadores" , "MurieronEnMadrid" , "Amigo" , "ACasaNomas" ,"avion"]
    let array = []
     for(let i = 0; i < string.length; i++){
        if(string[i].length > 5 && string[i][0] == "a"){
            array.push(string[i])
        }
    }
    console.log[string]
    console.log(array)
 }; cadenaStringA()
*/

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.

/*
const arrayMayorCortado = () => {
    let numeros = [4, 6, 8, 2, 10, 50, 40, 54]
     let x = 6
      let array = []
       let contador = 0
        for(let i = 0; i < numeros.length; i++){
             if (numeros[i] > x){
                 array.push(numeros[i])
                  contador++
                 }
                  if (contador == 3){
                     break
                     }
                     }
                      console.log(array)
                     }; arrayMayorCortado()
*/


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.

/*
const originalMasUno = () => {
    let numeros = [2, 5, 5, 1, 4]
    let array = []
    for(let i = 0; i < numeros.length; i++){
        array.push((numeros[i] + 1))
    }
    console.log(numeros)
    console.log(array)
 }; originalMasUno()
*/


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.

/*
const originalUltimo = () => {
    let numeros = [2, 5, 5, 1, 4]
    let array = []
    let contador = 0
    for(let i = 0; i < numeros.length; i++){
        array.push(numeros[i])
        contador++
         if (contador == (numeros.length - 1)){
             break
             }
             }
              console.log(numeros)
               console.log(array)
             }; originalUltimo()
*/

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.

/*
const originalPrimeroUltimo = () => {
    let numeros = [2, 5, 5, 1, 4]
    let array = []
    let contador = 0
     for(let i = 0; i < numeros.length; i++){
        if( i == 0){
            numeros.shift()
         }
         array.push(numeros[i])
          contador++
          if (contador == (numeros.length - 1)){
             break
             }
            }
             console.log(array)
             }; originalPrimeroUltimo()
*/

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.


/*
const numeroMenosX = () => {
    let numeros = [2, 4, 5, 6]
    let x = 2
    let array = []
    for(let i = 0; i < numeros.length; i++){
        if (i == x){
            numeros.shift()
        }
        array.push(numeros[i])
    }
    console.log(array)
}
numeroMenosX()
*/