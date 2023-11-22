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

function estaAprobado(nota){
    if (nota > 70){
        return "Usted aprobo el examen"
    }
    else {
        return "La nota es insuficiente para aprobar"
    }
}

let notaIngresada = prompt("Ingresa una calificacion");
let resultadoValidacion = estaAprobado(notaIngresada);

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

function verificarLetra(letra) {
    letra = letra.toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      return "La letra ingresada es una vocal.";
    } else if (letra >= "a" && letra <= "z") {
      return "La letra ingresada es una consonante.";
    } else {
      return "El valor ingresado no es una letra válida.";
    }
  }
let letraIngresada = prompt("Ingresa una letra:");
let resultado = verificarLetra(letraIngresada);
console.log(resultado);

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

function obtenerDiaSemana(numero) {
    if (numero >= 1 && numero <= 7) {
      let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      let diaSemana = diasSemana[numero - 1];
      return "El número " + numero + " corresponde al día de la semana: " + diaSemana;
    } else {
      return "El número ingresado no es válido. Por favor ingresa un número del 1 al 7.";
    }
  }
  
  let numeroIngresado = prompt("Ingresa un número del 1 al 7:");
  let resultado = obtenerDiaSemana(numeroIngresado);
  console.log(resultado);

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

function esMayor(edad){
    if (edad >= 18){
        return "Usted es mayor de edad"
    }
    else {
        return "Usted es menor de edad"
    }
}

let edadIngresada = prompt("Ingresa una edad");
let resultadoValidacion = esMayor(edadIngresada);

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

function mayorCien(numero1, numero2){
    if (numero1 + numero2 >= 100){
        return "La suma es mayor que 100"
    } else if (numero1 + numero2 <= 100){
        return "La suma es menor que 100"
    } else {
        return "Es 100"
    }
}

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

function masAlto (numero1, numero2, numero3){
    if (numero1 > numero2 && numero1 > numero3){
        return numero1
    } else if (numero2 > numero1 && numero2 > numero3){
        return numero2
    } else {
        return numero3
    }
}

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

function verificarLetra(letra) {
    // Verificar si la letra ingresada es mayúscula
    if (letra === letra.toUpperCase()) {
      return "La letra ingresada es mayúscula.";
    } else if (letra === letra.toLowerCase()) {
      return "La letra ingresada es minúscula.";
    } else {
    return "El valor ingresado no es una letra válida.";
  }
}
  let letraIngresada = prompt("Ingresa una letra:");
  let resultado = verificarLetra(letraIngresada);
  console.log(resultado);


//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

function queEs(numero){
    if (numero % 3 === 0 ) {
        return "Fizz"
    } else if (numero % 5 === 0){
        return "Buzz"
    } else if (numero % 3 === 0 && numero % 5 === 0){
        return "FizzBuzz"
    } else {
        return "El numero no es divisible por 3 o por 5"
    }
}

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
