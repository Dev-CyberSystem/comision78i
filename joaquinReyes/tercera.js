//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

function verificarNumero(numero) {
    if (numero > 0) {
      return "Positivo";
    } else if (numero < 0) {
      return "Negativo";
    } else {
      return "Cero";
    }
  }


//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

function esPar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

function esPar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

function esPositivo(numero) {
    if (numero > 0) {
      return "Es positivo";
    } else if (numero < 0) {
      return "Es Negativo";
    } else {
        return "Es cero"
    }
  }

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

function esMayor(numero1, numero2) {
    if (numero1 > numero2) {
      return numero1;
    } else {
        return numero2
    }
    }

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

let especiales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
function validarPass(pass) {
    if (pass.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres.";
    } else if (!especiales.test(pass)){
        return "La contraseña debe contener al menos un carácter especial.";
    } else {
        return ("Password valida")
    }

    let passIngresada = prompt("Ingresa una contraseña:");
    let resultadoValidacion = validarPass(passIngresada);


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
