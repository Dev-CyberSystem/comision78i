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

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
