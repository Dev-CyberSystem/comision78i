// Objeto MATH

// Valor absoluto.
let absoluto = -5.2;
let valorAbsoluto = Math.abs(absoluto);
// console.log(valorAbsoluto)

// Maximo y minimo

let numeros = [1, 2, 3, 5, 7, 10];
let numMaximo = Math.max(...numeros);
console.log(numMaximo);
let numMinimo = Math.min(...numeros);
console.log(numMinimo);

// Redondear

let redondeo = 3.2;

let resultadoRedondeo = Math.round(redondeo);
console.log(resultadoRedondeo);

// Floor, devuelve el entero mas peqeño.

let floor = 4.879;
let resultadoFloor = Math.floor(floor);
console.log(resultadoFloor);

// ceil

let ceil = 5.1;
let resultadoCeil = Math.ceil(ceil);
console.log("ceil--->", resultadoCeil);

//trunc
let trunc = 8.554646464646;
let resultadoTrunc = Math.trunc(trunc);
console.log("trunc--->", resultadoTrunc);

// random nos devuelve un numero entre 0 y .99

let random = Math.random();
console.log("random--->", random);

// random entre 0 y 10

const numerosAleatorios = () => {
  return Math.floor(Math.random() * 7) + 1;
};

const girarTragaMonedas = () => {
  const num1 = numerosAleatorios();
  const num2 = numerosAleatorios();

  // console.log(`Numeros ${num1}, ${num2}, ${num3} `)
  const resultadosTragamonedas = document.getElementById("resultados");
  resultadosTragamonedas.textContent = `Numeros ${num1}, ${num2} `;

  if (num1 === num2) {
    resultadosTragamonedas.textContent =
      num1 === 7
        ? `${num1} - ${num2}, No sos Boca, Vos si tenes la septima`
        : `${num1} - ${num2}, Ganaste`;
  } else {
    resultadosTragamonedas.textContent += ` SEGUI INTENTANDO`;
  }
};

// ------------------------------------------------------------------------------

// Estructuras de controles.

// if, else if, else

// if(){
//     //accionables
// }else if (){
//     //accionables
// }else {
//     //accionable
// }

// let edad = prompt("ingresa la edad");

// if (edad >= 18) {
//   //si esto es true
//   alert("Es mayor de edad");
// } else {
//   //si no es true osea es false
//   alert("Es menor de edad");
// }

// Tarea

//Crear una función que tome dos números como parámetros y devuelva el número mayor.



const esMayor = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1, "es Mayor");
  } else if (num1 === num2){
    console.log("Son iguales")
  } else {
    console.log(num2, "Es mayor");
  }
};

esMayor(5, 5); //pasando los numeros por parametro


//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

const determinarSigno = (numero) => {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
};

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

const determinarParidad = (numero) => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
};

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

const numeroUsuario = prompt("Ingrese un número:");

const numero = parseInt(numeroUsuario);

if (!isNaN(numero)) {
  if (numero % 2 === 0) {
    console.log(`${numero} es Par.`);
  } else {
    console.log(`${numero} es Impar.`);
  }
} 
// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

const numeroUsuario = prompt("Ingrese un número:");

const numero = parseFloat(numeroUsuario);

if (!isNaN(numero)) {
  if (numero > 0) {
    console.log(numero + " es Positivo.");
  } else if (numero < 0) {
    console.log(numero + " es Negativo.");
  } else {
    console.log(numero + " es Cero.");
  }
} 

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
 
  if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}.`);
  } else if (numero1 < numero2) {
    console.log(`${numero2} es mayor que ${numero1}.`);
  }

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

const contraseña = prompt("Ingrese una contraseña:");

const longitudMinima = 8;
const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contraseña);

if (contraseña.length >= longitudMinima && tieneCaracterEspecial) {
  console.log("La contraseña es válida.");
} else {
  console.log("La contraseña no cumple con los requisitos.");
  console.log("Asegúrese de que tenga al menos 8 caracteres y contenga al menos un carácter especial.");
}

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

const calificacion = parseFloat(prompt("Ingrese su calificación:"));

const notaMinimaAprobacion = 70;

if (!isNaN(calificacion)) {
  if (calificacion >= notaMinimaAprobacion) {
    console.log("Aprobado.");
  } else {
    console.log("Desaprobado.");
  }

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

const letra = prompt("Ingrese una letra:").toLowerCase();

if (letra.length === 1 && /[a-z]/.test(letra)) {

  if (/[aeiou]/.test(letra)) {
    console.log(`${letra} es una vocal.`);
  } else {
    console.log(`${letra} es una consonante.`);
  }
}

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

const numeroDia = parseInt(prompt("Ingrese un número del 1 al 7:"));

if (!isNaN(numeroDia) && numeroDia >= 1 && numeroDia <= 7) {
  
  let diaSemana;
  switch (numeroDia) {
    case 1:
      diaSemana = "Domingo";
      break;
    case 2:
      diaSemana = "Lunes";
      break;
    case 3:
      diaSemana = "Martes";
      break;
    case 4:
      diaSemana = "Miércoles";
      break;
    case 5:
      diaSemana = "Jueves";
      break;
    case 6:
      diaSemana = "Viernes";
      break;
    case 7:
      diaSemana = "Sábado";
      break;
  }

  console.log(`El número ${numeroDia} corresponde al día: ${diaSemana}`);
} else {
  console.log("Por favor, ingrese un número del 1 al 7.");
}

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

const numero = parseInt(prompt("Ingrese un número:"));

if (!isNaN(numero) && numero > 1) {
  let esPrimo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    console.log(`${numero} es un número primo.`);
  } else {
    console.log(`${numero} no es un número primo.`);
  }

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

const edad = parseInt(prompt("Ingrese su edad:"));

if (!isNaN(edad)) {
  if (edad >= 18) {
    console.log("Eres mayor de edad.");
  } else {
    console.log("Eres menor de edad.");
  }
} 
// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  
  const suma = numero1 + numero2;

  if (suma > 100) {
    console.log(`La suma de ${numero1} y ${numero2} es mayor a 100.`);
  } else if (suma < 100) {
    console.log(`La suma de ${numero1} y ${numero2} es menor a 100.`);
  } else {
    console.log(`La suma de ${numero1} y ${numero2} es igual a 100.`);
  }
} 

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
const numero3 = parseFloat(prompt("Ingrese el tercer número:"));


if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
  let mayor = numero1;

  if (numero2 > mayor) {
    mayor = numero2;
  }

  if (numero3 > mayor) {
    mayor = numero3;
  }

  console.log(`El número mayor es: ${mayor}`);
} 

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

const letra = prompt("Ingrese una letra:");

if (letra.length === 1 && /[a-zA-Z]/.test(letra)) {
  if (letra === letra.toUpperCase()) {
    console.log(`${letra} es una letra mayúscula.`);
  } else {
    console.log(`${letra} es una letra minúscula.`);
  }
} 
//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

const fizzBuzz = (numero) => {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return numero;
  }
}
// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

const sumaDivisores = (numero) => {
  let suma = 1;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      suma += i;

      if (i !== numero / i) {
        suma += numero / i;
      }
    }
  }

  return suma;
}

const numero = parseInt(prompt("Ingrese un número:"));

if (!isNaN(numero) && numero > 1 && sumaDivisores(numero) === numero) {
  console.log(`${numero} es un número perfecto.`);
} else {
  console.log(`${numero} no es un número perfecto.`);
}

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

const esBisiesto = (anio) => {
  return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
};

const esFechaValida = (dia, mes, anio) => {
  const diasEnMes = [31, esBisiesto(anio) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    anio > 0 &&
    mes >= 1 &&
    mes <= 12 &&
    dia >= 1 &&
    dia <= diasEnMes[mes - 1]
  );
};

const dia = parseInt(prompt("Ingrese el día:"));
const mes = parseInt(prompt("Ingrese el mes:"));
const anio = parseInt(prompt("Ingrese el año:"));
a
if (!isNaN(dia) && !isNaN(mes) && !isNaN(anio) && esFechaValida(dia, mes, anio)) {
  console.log("La fecha es válida.");
} else {
  console.log("La fecha no es válida. Por favor, ingrese una fecha válida.");
}
