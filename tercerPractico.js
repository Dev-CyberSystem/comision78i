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
  
  esMayor(5, 6);

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

const comparar = (numX) => {
    if (numX > 0) {
      console.log("-125 no es Positivo");
    } 
    else if (numX < 0){
      console.log("-125 es Negativo")
    } 
    else  {
      console.log("-125 es distinto de Cero");
    }
  }
  comparar(-125);
  

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

const parImpar = (num1) => {

    if (num1 % 2 === 0) {
      console.log("42 es Par");
    } 
    else {
      console.log("42 no es Impar");
    }
  }
  parImpar(42);

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

const paroImpar = () => {
    const num1 = prompt("Ingrese un número");
    if (num1 % 2 === 0) {
      console.log(num1 +  " es Par");
    } 
    else {
      console.log(num1 +  " es Impar");
    }
  }
  paroImpar();


// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

const compNum = () => {
    const numX = prompt("Ingrese un número mayor, menor o igual a cero");
    if (numX > 0) {
      console.log(numX + " es Positivo");
    } 
    else if (numX < 0){
      console.log(numX + " es Negativo")
    } 
    else  {
      console.log(numX + " es igual a Cero");
    }
  }
  compNum();

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

const numMay = () => {
    const numA = prompt("Ingrese un número");
    const numB = prompt("Ingrese otro número");
    if (numA > numB) {
      console.log(numA + " es mayor que " + numB);
    } 
    else if (numA < numB){
      console.log(numB + " es mayor que " + numA)
    } 
    else  {
      console.log(numA +" y " + numB + " son iguales");
    }
  }
  numMay();


// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

const contraseña = () => {
    const password = prompt("Ingrese una contraseña");
    const carEsp = /[!@#$%^&*(),.?":{}|<>]/
    if (password.length < 8 + carEsp.length) {
      console.log(password + " es correcta");
    } 
    else  {
      console.log("La contraseña es incorrecta(debe tener al menos 8 caracteres y un simbolo)");
    }
  }
  contraseña();



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

const numPerf = () => {
  const numPerf = prompt("Ingrese un numero");
  if (numPerf =  numPerf/ = 0) {
    console.log(numX + " es Perfecto");
  } 
  else  {
    console.log(numPerf + " no es Perfecto");
  }
}
compNum();


// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
