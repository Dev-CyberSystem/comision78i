// swich

// Sintaxis

// switch (expresion) {
//   case valor1:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con el valor1
//     break;
//   case valor2:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con el valor2
//     break;
//   case valorN:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con valorN
//     break;
//   default:
//     // Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//     break;
// }

// let dia = prompt("Ingrese un dia de la semana: ").toLocaleUpperCase().trim();
// switch (dia) {
//   case "LUNES":
//     console.log("Hoy es Lunes");
//     break;
//   case "MARTES":
//     console.log("Hoy es Martes");
//     break;
//   case "MIERCOLES":
//     console.log("Hoy es Miercoles");
//     break;
//   default:
//     console.log("No es ningun dia");
//     break;
// }

// let diaSemana = prompt("Ingrese un dia de la semana: ").toLocaleUpperCase().trim();

// switch (diaSemana) {
//     case "LUNES":
//     case "MARTES":
//     case "MIERCOLES":
//     case "JUEVES":
//     case "VIERNES":
//         console.log("Es un dia habil");
//         break;
//     case "SABADO":
//     case "DOMINGO":
//         console.log("Es un dia no habil");
//         break;
//     default:
//         console.log("No es un dia");
//         break;
// }

// let banda = prompt("Ingrese una banda: ").toLocaleUpperCase().trim();

// switch (banda) {
//     case "METALLICA":
//         alert("Banda de Heavy Metal");
//         break;
//     case "MEGADETH":
//         alert("Banda de Heavy Metal");
//         break;
//     case "LA RENGA":
//         alert("Banda de Rock Nacional");
//         break;
//     case "DIVIDIDOS":
//         alert("Banda de Rock Nacional");
//         break;
//     default:
//         alert("Amargo te gusta L-Gante")
//         break;
// }

// Ternario

// Sintaxis

// condicion ? true : false;

// let edad = 65;

// let resultado =
//   edad >= 18 && edad < 50
//     ? "Es mayor de edad"
//     : edad >= 50 && edad < 100
//     ? "Es adulto mayor"
//     : edad >= 100
//     ? "Es centenario"
//     : "Es menor de edad";
// console.log(resultado);


// Bucles o ciclos o loops
// for - while - do while 

// for 
// Sintaxis   
// for (inicio; condicion; incremento) { 
//     codigo a ejecutar
//  }


// for ( let i = 10 ; i <= 10; i++) {
//     console.log(i);
// }

// let j = 2

// for (j ; j <= 20; j += 3) {
//     console.log(j);
// }

let array = ["hola", "como", "estas", "hoy", "bien"];
// console.log(array[4], "posicion 4");

// let extension = array.length;
// console.log("Extension del array -->", extension )

 for (let i = 4; i < array.length; i++) {
        console.log(array[i]);
    }

// Ciclo While

// Sintaxis 
// while (condicion) {
//     codigo a ejecutar
//     iteracion
// }

// let x = 0;

// while (x <= 10) {
//     console.log(x);
//     x++;
// }

// Ciclo Do While

// Sintaxis
// do {
//     codigo a ejecutar
//     iteracion
// } while (condicion);

// let y = 5;

// do {
//     console.log(y);
//     y++;
// } while (y <= 15);

// Metodos de arrays --> Colecciones de elementos.

// crear un array vacio

let arrayVacio = [];

let arrayContenido = ["hola", 1, true, { nombre: "Juan" }, [1, 2, 3]];

// ingresar un elemento  del array

let arrayNumeros = [1, 2, 3, ];
console.log(arrayNumeros[0]) // 1
console.log(arrayNumeros[1]) // 2
console.log(arrayNumeros[2]) // 3

// agregar elementos al array al final del array

// arrayNumeros.push("hola");

// agregar elementos al array al principio del array
// arrayNumeros.unshift("chau");

// agregar elemento en una posicion especifica del array
arrayNumeros.splice(2, 0, "especifica");
console.log(arrayNumeros);

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

const numeroMes = parseInt(prompt("Ingrese un número del 1 al 12:"));

const nombresMeses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

if (!isNaN(numeroMes) && numeroMes >= 1 && numeroMes <= 12) {
 
  const nombreMes = nombresMeses[numeroMes - 1];
  console.log(`El mes correspondiente al número ${numeroMes} es: ${nombreMes}`);
} else {


// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

const numeroDia = parseInt(prompt("Ingrese un número del 1 al 7:"));

const nombresDias = [
  "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
];

if (!isNaN(numeroDia) && numeroDia >= 1 && numeroDia <= 7) {
  
  const nombreDia = nombresDias[numeroDia - 1];
  console.log(`El día de la semana correspondiente al número ${numeroDia} es: ${nombreDia}`);
} else {
  console.log("Por favor, ingrese un número válido del 1 al 7.");
}

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

const caracter = prompt("Ingrese un carácter:");


if (caracter.length === 1) {
  
  const esVocal = /[aeiouAEIOU]/.test(caracter);
  const esConsonante = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(caracter);

  if (esVocal) {
    console.log(`${caracter} es una vocal.`);
  } else if (esConsonante) {
    console.log(`${caracter} es una consonante.`);
  } else {
    console.log(`${caracter} no es ni vocal ni consonante.`);
  }

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

const numeroDia = parseInt(prompt("Ingrese un número del 1 al 5:"));

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

if (!isNaN(numeroDia) && numeroDia >= 1 && numeroDia <= 5) {

  const nombreDia = diasSemana[numeroDia - 1];
  console.log(`El día de la semana correspondiente al número ${numeroDia} es: ${nombreDia}`);
} else {
  console.log("Por favor, ingrese un número válido del 1 al 5.");
}

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

const letra = prompt("Ingrese una letra:");

if (letra.length === 1 && /[a-zA-Z]/.test(letra)) {
 
  if (letra === letra.toUpperCase()) {
    console.log(`${letra} es una letra mayúscula.`);
  } else {
    console.log(`${letra} es una letra minúscula.`);
  }
} 
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

const nota = parseFloat(prompt("Ingrese una nota del 0 al 10:"));

if (!isNaN(nota) && nota >= 0 && nota <= 10) {
  
  if (nota < 5) {
    console.log("Suspenso");
  } else if (nota < 7) {
    console.log("Aprobado");
  } else if (nota < 9) {
    console.log("Notable");
  } else {
    console.log("Sobresaliente");
  }
}
// Imprimir los números pares del 2 al 20 en la consola.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
const texto = "ejemplo";

for (let i = 0; i < texto.length; i++) {
  const letraMayuscula = texto[i].toUpperCase();
  console.log(letraMayuscula);
}

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

const numeroIngresado = parseInt(prompt("Ingrese un número:"));

if (!isNaN(numeroIngresado) && numeroIngresado > 0) {

  for (let i = 1; i <= numeroIngresado; i++) {
    console.log(i);
  }
}
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

const serieNumeros = prompt("Ingrese una serie de números separados por coma:");

const numerosArray = serieNumeros.split(',').map(numero => parseFloat(numero));

if (numerosArray.every(numero => !isNaN(numero)) && numerosArray.length > 0) {

  const numeroMasGrande = Math.max(...numerosArray);

  console.log(`El número más grande de la serie es: ${numeroMasGrande}`);
} else {
  console.log("Ingrese una serie válida de números separados por coma.");
}
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

const serieNumeros = prompt("Ingrese una serie de números separados por coma:");


const numerosArray = serieNumeros.split(',').map(numero => parseInt(numero));


if (numerosArray.every(numero => !isNaN(numero)) && numerosArray.length > 0) {
  const sumaNumerosPares = numerosArray.filter(numero => numero % 2 === 0).reduce((acumulador, numero) => acumulador + numero, 0);

  console.log(`La suma de los números pares es: ${sumaNumerosPares}`);
} else {
  console.log("Ingrese una serie válida de números separados por coma.");
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

const serieNumeros = prompt("Ingrese una serie de números separados por coma:");

const numerosArray = serieNumeros.split(',').map(numero => parseFloat(numero));

if (numerosArray.every(numero => !isNaN(numero)) && numerosArray.length > 0) {
 
  const cantidadNumerosNegativos = numerosArray.filter(numero => numero < 0).length;

  console.log(`La cantidad de números negativos es: ${cantidadNumerosNegativos}`);
} 
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

const numeroIngresado = parseInt(prompt("Ingrese un número:"));


if (!isNaN(numeroIngresado) && numeroIngresado > 0) {
  
  for (let i = 1; i <= numeroIngresado; i += 2) {
    console.log(i);
  }
} else {
  console.log("Por favor, ingrese un número válido mayor que 0.");
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

const serieNumeros = prompt("Ingrese una serie de números separados por coma:");

const numerosArray = serieNumeros.split(',').map(numero => parseFloat(numero));

if (numerosArray.every(numero => !isNaN(numero)) && numerosArray.length > 0) {

  const numeroMasPequeno = Math.min(...numerosArray);

  console.log(`El número más pequeño de la serie es: ${numeroMasPequeno}`);
}

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

let intentoUsuario = parseInt(prompt("Intenta adivinar el número (entre 1 y 100):"));

while (!isNaN(intentoUsuario)) {

  intentos++;

  if (intentoUsuario === numeroAleatorio) {
    console.log(`¡Adivinaste el número ${numeroAleatorio} en ${intentos} intentos!`);
    break;
  } else {

    if (intentoUsuario < numeroAleatorio) {
      intentoUsuario = parseInt(prompt("Intenta de nuevo. El número es mayor:"));
    } else {
      intentoUsuario = parseInt(prompt("Intenta de nuevo. El número es menor:"));
    }
  }
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

const serieNumeros = prompt("Ingrese una serie de números separados por coma:");

const numerosArray = serieNumeros.split(',').map(numero => parseInt(numero));

if (numerosArray.every(numero => !isNaN(numero)) && numerosArray.length > 0) {

  const cantidadNumerosPares = numerosArray.filter(numero => numero % 2 === 0).length;

  console.log(`La cantidad de números pares es: ${cantidadNumerosPares}`);
} else {
  console.log("Ingrese una serie válida de números separados por coma.");
}

// Dado un array de números, escribir una función que retorne el número más grande del array.
function encontrarNumeroMasGrande(arrayDeNumeros) {

    if (arrayDeNumeros.length === 0) {
      return "El array está vacío.";
    }
  
    const numeroMasGrande = Math.max(...arrayDeNumeros);
    return numeroMasGrande;
  }
  
  const numeros = [12, 5, 27, 8, 15];
  const resultado = encontrarNumeroMasGrande(numeros);
  console.log(`El número más grande del array es: ${resultado}`);
  
// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
function filtrarNumerosPares(arrayDeNumeros) {
    const numerosPares = arrayDeNumeros.filter(numero => numero % 2 === 0);
    return numerosPares;
  }
  
  
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
function sumarNumeros(arrayDeNumeros) {

    const suma = arrayDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma;
  }
  
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
function convertirAMayusculas(arrayDeStrings) {
    const stringsMayusculas = arrayDeStrings.map(str => str.toUpperCase());
    return stringsMayusculas;
  }
  
  
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
function filtrarNumerosMayoresQueX(arrayDeNumeros, X) {
    const numerosMayoresQueX = arrayDeNumeros.filter(numero => numero > X);
    return numerosMayoresQueX;
  }
  
// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
function procesarNumeros(arrayDeNumeros) {
    let suma = 0;
  
    const numerosGrandes = [];
  
    
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      
      suma += arrayDeNumeros[i];
  
      if (arrayDeNumeros[i] > 10) {
        numerosGrandes.push(arrayDeNumeros[i]);
      }
    }
  
    return {
      sumaTotal: suma,
      numerosGrandes: numerosGrandes
    };
  }
  
  console.log(`Suma total: ${resultado.sumaTotal}`);
  console.log("Números grandes:", resultado.numerosGrandes);
  
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
function filtrarYLimitar(arrayDeNumeros, X) {
    
    const numerosMayoresQueX = arrayDeNumeros.filter(numero => numero > X);
  
    const numerosLimitados = numerosMayoresQueX.slice(0, 3);
  
    return numerosLimitados;
  }
  
  console.log(`Números mayores que ${X} (limitados a 3):`, resultado);
  
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
function sumarUnoAlArray(arrayDeNumeros) {
    const nuevoArray = arrayDeNumeros.map(numero => numero + 1);
    return nuevoArray;
  }
  
  console.log("Array original:", numeros);
  console.log("Nuevo array sumándoles 1:", resultado);
  
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
function quitarUltimoElemento(arrayDeNumeros) {
    const nuevoArray = arrayDeNumeros.slice(0, -1);
    return nuevoArray;
  }

  console.log("Array original:", numeros);
  console.log("Nuevo array sin el último elemento:", resultado);
  
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
function quitarPrimerYUltimoElemento(arrayDeNumeros) {
  const nuevoArray = arrayDeNumeros.slice(1, -1);
  return nuevoArray;
}

console.log("Array original:", numeros);
console.log("Nuevo array sin el primero y el último:", resultado);

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
function quitarNumeroEnPosicionX(arrayDeNumeros, X) {
    const nuevoArray = arrayDeNumeros.filter((numero, index) => index !== X);
    return nuevoArray;
  }
  
  console.log("Array original:", numeros);
  console.log(`Nuevo array sin el número en la posición ${posicionX}:`, resultado);