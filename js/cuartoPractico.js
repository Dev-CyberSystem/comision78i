//Tarea
//1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

const meses = () => {
  const mes = parseInt(prompt("Ingrese un numero válido del 1 al 12: "));
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
          console.log("Ingrese un número válido");
          break;
  }
}

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

let caracter = prompt("Ingresa una letra:");

if (caracter.length === 1) {
    let caracterMinuscula = caracter.toLowerCase();

    switch (caracterMinuscula) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("Vocal");
            break;
        default:
            console.log("Consonante");
            break;
    }
} else {
    alert("Ingresar una sola letra.");
}

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

const diaDeSemana = () => {
       let numDia = parseInt(prompt("Ingresar numero del 1-5"))
       let dias = [NaN, "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
       switch (numDia) {
           case 1:
               console.log(dias[1])
               break;
           case 2: 
               console.log(dias[2])
               break;
           case 3:
               console.log(dias[3])
               break;
           case 4: 
  console.log(dias[4])
               break;
       case 5:
               console.log(dias[5])
               break;
           default:
               console.log("Ingrese un número válido")
               break;
       }
   }
   diaDeSemana()

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

let letra = prompt("Ingresa una letra:");
if (letra.length == 1){
  if (letra === letra.toUpperCase()){
    console.log("Mayúscula")
    } else{
      console.log("Minúscula")
      }
      } else {
        alert ("Ingresa una sola letra")
        }
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

let nota = prompt("Ingresa una nota del 0 al 10:");
nota = parseFloat(nota);

if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    let calificacion;

    if (nota < 5) {
        calificacion = "Suspenso";
    } else if (nota < 7) {
        calificacion = "Aprobado";
    } else if (nota < 9) {
        calificacion = "Notable";
    } else {
        calificacion = "Sobresaliente";
    }

    console.log ("Calificación " + nota + ": " + calificacion);
} else {
    alert("Ingresa una nota válida del 0 al 10.");
}

// Imprimir los números pares del 2 al 20 en la consola.

for (let i=2; i<=20; i+=2) {
  console.log(i);
  }

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.

let nombre = 'Facundo';
nombre = nombre.split('')
console.log(nombre);
for (let i in nombre) {
  console.log(nombre[i].toUpperCase());
  }

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

let numero = (prompt("Ingrese un numero"));
for (let i=1; i<=numero; i++) {
  console.log(i);
  }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

let entradaUsuario = prompt("Ingrese una serie de números separados por comas:");

let numerosComoCadenas = entradaUsuario.split(',');

let numeroMasGrande = null;

for (let i = 0; i < numerosComoCadenas.length; i++) {
    let numeroActual = Number(numerosComoCadenas[i]);

    if (!isNaN(numeroActual)) {
        if (numeroMasGrande === null || numeroActual > numeroMasGrande) {
            numeroMasGrande = numeroActual;
        }
    }
}

if (numeroMasGrande !== null) {
    console.log("El número más grande es: " + numeroMasGrande);
} else {
    console.log("No se ingresaron números válidos.");
}

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.

let ingresaPalabra = prompt("Ingrese una palabra:");


let palabraMinusculas = ingresaPalabra.toLowerCase();

let palabraInvertida = palabraMinusculas.split('').reverse().join('');

if (palabraMinusculas === palabraInvertida) {
    console.log(`"${ingresaPalabra}" es un palíndromo.`);
} else {
    console.log(`"${ingresaPalabra}" no es un palíndromo.`);
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

let entradaNumeros = prompt("Ingrese una serie de números separados por comas:");

let numeroString = entradaNumeros.split(',');

let sumaPares = 0;

for (let i = 0; i < numeroString.length; i++) {
    let numeroAct = Number(numeroString[i]);

    if (!isNaN(numeroAct) && numeroAct % 2 === 0) {
        sumaPares += numeroAct;
    }
}

console.log("La suma de los números pares es: " + sumaPares);

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

let entradaNum = prompt("Ingrese una serie de números separados por comas:");

let numerosString = entradaNum.split(',');

let negativos = 0;

for (let i = 0; i < numerosString.length; i++) {
    let numeroAc = Number(numerosComoCadenas[i]);

    if (!isNaN(numeroAc) && numeroAc < 0) {
        negativos++;
    }
}

console.log("La cantidad de números negativos es: " + negativos);

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

let numeroIngresado = (prompt("Ingrese un numero"));
for (let i=1; i<=numeroIngresado; i += 2) {
  console.log(i);
  }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

let entradaNumb = prompt("Ingrese una serie de números separados por comas:");

let numeros = entradaUsuario.split(',');

let numeroPeq = null;

for (let i = 0; i < numeros.length; i++) {
    let numeroA = Number(numeros[i]);

    if (!isNaN(numeroA)) {
        if (numeroPeq === null || numeroA < numeroPeq) {
            numeroPeq = numeroA;
        }
    }
}

if (numeroMasGrande !== null) {
    console.log("El número más pequeño es: " + numeroPeq);
} else {
    console.log("No se ingresaron números válidos.");
}
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// let numeroAdivinar = 0;
// let intentos = 0;

// while (numeroAdivinar !== numeroAleatorio) {
//     numeroAdivinar = parseInt(prompt("Adivina el número entre 1 y 100:"));

//     if (!isNaN(numeroAdivinar)) {
//         intentos++;

//         if (numeroAdivinar === numeroAleatorio) {
//             console.log(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
//         } else {
//             console.log("Intenta de nuevo.");
//         }
//     } else {
//         console.log("Por favor, ingrese un número válido.");
//     }
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

let entradaNumber = prompt("Ingrese una serie de números separados por comas:");

let numerosP = entradaNumber.split(',');

let cantidadPares = 0;


for (let i = 0; i < numerosP.length; i++) {
    let numeroActual1 = Number(numerosP[i]);


    if (!isNaN(numeroActual1) && numeroActual1 % 2 === 0) {
        cantidadPares++;
    }
}

console.log("La cantidad de números pares es: " + cantidadPares);

// Dado un array de números, escribir una función que retorne el número más grande del array.

// const encontrarNumeroMasGrande = (array) => {
//   if (array.length === 0) {
//     return console.log("El array está vacío");
//   }

//   let numeroMasGrande = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > numeroMasGrande) {
//       numeroMasGrande = array[i];
//     }
//   }

//   return numeroMasGrande;
// };

// const numeros = [1, 15, 1, 6, 10, 7, 5];
// const resultado = encontrarNumeroMasGrande(numeros);
// console.log("El número más grande es " + resultado);

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

const filtrarNumerosPares = (array) => {
  const numerosPares = array.filter(numero => numero % 2 === 0);
  return numerosPares;
};

const numerosI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarNumerosPares(numerosI);
console.log(numerosPares); 


// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

const sumarArray = (array) => {
  let sumaTotal = 0;
  for (let i = 0; i < array.length; i++) {
    sumaTotal += array[i];
    }
    return sumaTotal;
    }
    const numerosJ = [25, 15, 5, 10, 55];
      const resultadoSuma = sumarArray(numerosJ);
      console.log(`La suma total es ${resultadoSuma}`);

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

const convertirAMayusculas = (arrayDeStrings) => {
  const arrayEnMayusculas = [];

  for (let i = 0; i < arrayDeStrings.length; i++) {
    const stringEnMayusculas = arrayDeStrings[i].toUpperCase();
    arrayEnMayusculas.push(stringEnMayusculas);
  }

  return arrayEnMayusculas;
};

const strings = ["hola", "mundo", "javascript"];
const stringsEnMayusculas = convertirAMayusculas(strings);
console.log(stringsEnMayusculas);

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

const filtrarNumerosMayoresQueX = (array, X) => {
  const numerosMayoresQueX = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > X) {
      numerosMayoresQueX.push(array[i]);
    }
  }

  return numerosMayoresQueX;
};

const numerosX = [19, 30, 10, 15, 20];
const X = 10;
const numerosMayoresQueX = filtrarNumerosMayoresQueX(numerosX, X);
console.log(numerosMayoresQueX, "Son mayores que X: ");


// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

const sumaYNumerosGrandes = (array) => {
  if (array.length === 0) {
    return {
      sumaTotal: 0,
      numerosG: [],
    };
  }

  let sumaTotal = 0;
  let numerosG = [];

  for (let i = 0; i < array.length; i++) {
    sumaTotal += array[i];

    if (array[i] > 10) {
      numerosG.push(array[i]);
    }
  }

  return {
    sumaTotal: sumaTotal,
    numerosG: numerosG,
  };
};

const numerosG = [2, 5, 12, 8, 15, 3];
const resultado3 = sumaYNumerosGrandes(numerosG);

console.log("La suma total es:", resultado3.sumaTotal);
console.log("Números mayores que 10:", resultado3.numerosG);

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

function filtrarStrings(array) {
  
let nuevoArray = array.filter(function(elemento) {
    return elemento.length > 5;
  });

  return nuevoArray;
}
let arrayOriginal = ["Hola", "Mundo", "JavaScript", "Funcion"];
let resultadoString = filtrarStrings(arrayOriginal);

console.log(resultadoString);

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

function filtrarStringsDos(array) {
  let arrayLetraA = array.filter(function(elemento) {
    return elemento.length > 5 && elemento.charAt(0).toLowerCase() === 'a';
  });

  return arrayLetraA;
}

let arrayOrigin = ["Hola", "Mundo", "JavaScript", "Funcion", "Algoritmo"];
let resultadoStringDos = filtrarStrings(arrayOrigin);

console.log(resultadoStringDos);

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.

const recorteMayorqueX = (array, X) => {
  const numMayoresQueX = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > X) {
      numMayoresQueX.push(array[i]);
    }
  }

  const primerosTresNumeros = numMayoresQueX.slice(0, 3);

  return primerosTresNumeros;
};

const numerosXc = [19, 30, 10, 15, 20];
const X2 = 10;
const resultado2 = recorteMayorqueX(numerosXc, X2);
console.log("Mayores que x: " + resultado2);

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.

const sumarUnoAlArray = (array) => {
  const nuevoArray = array.map(numero => numero + 1);
  return nuevoArray;
}
const arraySumado = [1, 2, 3, 4, 5];
const nuevoArray = sumarUnoAlArray(arraySumado);
console.log(nuevoArray);

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
const quitarUltimoElemento = (array) => {
  const nuevoArraySlice = array.slice(0, -1);
  return nuevoArraySlice;
}
const arraySlice = [1, 2, 3, 4, 5];
const nuevoArraySlice = quitarUltimoElemento(arraySlice);
console.log(nuevoArray);

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
const quitarPrimerYUltimoElemento = (array) => {
  const arraySlice2 = array.slice(1, -1);
  return arraySlice2;
}

const arraySlic = [1, 2, 3, 4, 5];
const arraySlice2 = quitarPrimerYUltimoElemento(arraySlic);
console.log(nuevoArray);

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.

const numbersX = () => {
  let numbers = [3, 6, 9, 12]
  let X = 3
  let arrayX = []
  for(let i = 0; i < numbers.length; i++){
      if (i == x){
          numbers.shift()
      }
      arrayX.push(numeros[i])
  }
  console.log(arrayX)
}
numbersX()
